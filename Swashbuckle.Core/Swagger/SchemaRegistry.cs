using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Dynamic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Reflection;
using System.Text;
using System.Web.Http;

namespace Swashbuckle.Swagger
{
    public class SchemaRegistry
    {
        private readonly JsonSerializerSettings _jsonSerializerSettings;
        private readonly IDictionary<Type, Func<Schema>> _customSchemaMappings;
        private readonly IEnumerable<ISchemaFilter> _schemaFilters;
        private readonly IEnumerable<IModelFilter> _modelFilters;
        private readonly bool _ignoreObsoleteProperties;
        private readonly Func<Type, string> _schemaIdSelector;
        private readonly bool _describeAllEnumsAsStrings;
        private readonly bool _describeStringEnumsInCamelCase;

        private readonly IContractResolver _contractResolver;

        private IDictionary<Type, SchemaInfo> _referencedTypes;

        private class SchemaInfo
        {
            public string SchemaId;
            public Schema Schema;
        }

        public SchemaRegistry(
            JsonSerializerSettings jsonSerializerSettings,
            IDictionary<Type, Func<Schema>> customSchemaMappings,
            IEnumerable<ISchemaFilter> schemaFilters,
            IEnumerable<IModelFilter> modelFilters,
            bool ignoreObsoleteProperties,
            Func<Type, string> schemaIdSelector,
            bool describeAllEnumsAsStrings,
            bool describeStringEnumsInCamelCase)
        {
            _jsonSerializerSettings = jsonSerializerSettings;
            _customSchemaMappings = customSchemaMappings;
            _schemaFilters = schemaFilters;
            _modelFilters = modelFilters;
            _ignoreObsoleteProperties = ignoreObsoleteProperties;
            _schemaIdSelector = schemaIdSelector;
            _describeAllEnumsAsStrings = describeAllEnumsAsStrings;
            _describeStringEnumsInCamelCase = describeStringEnumsInCamelCase;

            _contractResolver = jsonSerializerSettings.ContractResolver ?? new DefaultContractResolver();
            _referencedTypes = new Dictionary<Type, SchemaInfo>();
            Definitions = new Dictionary<string, Schema>();
        }

        public Schema GetOrRegister(Type type)
        {
            var schema = CreateInlineSchema(type);

            // Ensure Schema's have been fully generated for all referenced types
            while (_referencedTypes.Any(entry => entry.Value.Schema == null))
            {
                var typeMapping = _referencedTypes.First(entry => entry.Value.Schema == null);
                var schemaInfo = typeMapping.Value;

                schemaInfo.Schema = CreateDefinitionSchema(typeMapping.Key);

                //foreach (var prop in schemaInfo.Schema.properties)
                //{
                //    prop = new KeyValuePair<string, Schema>(prop.Key, SchemaExtensions.GetAttributeDetails(schema, type.GetProperty(prop.Key)));
                //}

                Definitions.Add(schemaInfo.SchemaId, schemaInfo.Schema);
            }

            return schema;
        }

        public IDictionary<string, Schema> Definitions { get; private set; }

        private Schema CreateInlineSchema(Type type)
        {
            if (_customSchemaMappings.ContainsKey(type))
                return _customSchemaMappings[type]();

            var jsonContract = _contractResolver.ResolveContract(type);

            if (jsonContract is JsonPrimitiveContract)
            {
                var schema = CreatePrimitiveSchema((JsonPrimitiveContract)jsonContract);
                // SchemaExtensions.GetAttributeDetails(schema, type.GetProperty(jsonContract));
                return schema;
            }

            var dictionaryContract = jsonContract as JsonDictionaryContract;
            if (dictionaryContract != null)
                return dictionaryContract.IsSelfReferencing()
                    ? CreateRefSchema(type)
                    : CreateDictionarySchema(dictionaryContract);

            var arrayContract = jsonContract as JsonArrayContract;
            if (arrayContract != null)
                return arrayContract.IsSelfReferencing()
                    ? CreateRefSchema(type)
                    : CreateArraySchema(arrayContract);

            var objectContract = jsonContract as JsonObjectContract;
            if (objectContract != null && objectContract.IsInferrable())
                return CreateRefSchema(type);

            // Fallback to abstract "object"
            return CreateRefSchema(typeof(object));
        }

        private Schema CreateDefinitionSchema(Type type)
        {
            Schema schema;
            var jsonContract = _contractResolver.ResolveContract(type);

            if (jsonContract is JsonDictionaryContract)
            {
                schema = CreateDictionarySchema((JsonDictionaryContract)jsonContract);
                schema = SchemaExtensions.GetAttributeDetails(schema, type.GetProperty(jsonContract.UnderlyingType.Name));

                //schema.example = type.GetProperty(jsonContract.UnderlyingType.Name).GetCustomAttributesData();
                return schema;
            }

            if (jsonContract is JsonArrayContract)
            {
                schema = CreateArraySchema((JsonArrayContract)jsonContract);
                schema = SchemaExtensions.GetAttributeDetails(schema, type.GetProperty(jsonContract.UnderlyingType.Name));
                return schema;
            }

            if (jsonContract is JsonObjectContract)
            {
                schema = CreateObjectSchema((JsonObjectContract)jsonContract);
                schema = SchemaExtensions.GetAttributeDetails(schema, type.GetProperty(jsonContract.UnderlyingType.Name));
                return schema;
            }

            throw new InvalidOperationException(
                String.Format("Unsupported type - {0} for Defintitions. Must be Dictionary, Array or Object", type));
        }

        private Schema CreatePrimitiveSchema(JsonPrimitiveContract primitiveContract)
        {
            Schema schema;
            var type = Nullable.GetUnderlyingType(primitiveContract.UnderlyingType) ?? primitiveContract.UnderlyingType;

            if (type.IsEnum)
                return CreateEnumSchema(primitiveContract, type);

            switch (type.FullName)
            {
                case "System.Int16":
                case "System.UInt16":
                case "System.Int32":
                case "System.UInt32":
                    schema = new Schema { type = "integer", format = "int32" };
                    break;

                case "System.Int64":
                case "System.UInt64":
                    schema = new Schema { type = "integer", format = "int64" };
                    break;

                case "System.Single":
                    schema = new Schema { type = "number", format = "float" };
                    break;

                case "System.Double":
                case "System.Decimal":
                    schema = new Schema { type = "number", format = "double" };
                    break;

                case "System.Byte":
                case "System.SByte":
                    schema = new Schema { type = "string", format = "byte" };
                    break;

                case "System.Boolean":
                    schema = new Schema { type = "boolean" };
                    break;

                case "System.DateTime":
                case "System.DateTimeOffset":
                    schema = new Schema { type = "string", format = "date-time" };
                    break;

                default:
                    schema = new Schema { type = "string" };
                    break;
            }

            return schema;
        }

        private Schema CreateEnumSchema(JsonPrimitiveContract primitiveContract, Type type)
        {
            var stringEnumConverter = primitiveContract.Converter as StringEnumConverter
                ?? _jsonSerializerSettings.Converters.OfType<StringEnumConverter>().FirstOrDefault();

            if (_describeAllEnumsAsStrings || stringEnumConverter != null)
            {
                var camelCase = _describeStringEnumsInCamelCase
                    || (stringEnumConverter != null && stringEnumConverter.CamelCaseText);

                return new Schema
                {
                    type = "string",
                    example = type.GetEnumNames().FirstOrDefault(),
                    @enum = camelCase
                        ? type.GetEnumNames().Select(name => name.ToCamelCase()).ToArray()
                        : type.GetEnumNames()
                };
            }

            return new Schema
            {
                type = "integer",
                format = "int32",
                example = type.GetEnumNames().FirstOrDefault(),
                @enum = type.GetEnumValues().Cast<object>().ToArray()
            };
        }

        private Schema CreateDictionarySchema(JsonDictionaryContract dictionaryContract)
        {
            var valueType = dictionaryContract.DictionaryValueType ?? typeof(object);
            return new Schema
                {
                    type = "object",
                    additionalProperties = CreateInlineSchema(valueType)
                };
        }

        private Schema CreateArraySchema(JsonArrayContract arrayContract)
        {
            var itemType = arrayContract.CollectionItemType ?? typeof(object);
            return new Schema
                {
                    type = "array",
                    items = CreateInlineSchema(itemType).WithValidationProperties(arrayContract)
                };
        }

        private Schema CreateObjectSchema(JsonObjectContract jsonContract)
        {
            var properties = jsonContract.Properties
                .Where(p => !p.Ignored)
                .Where(p => !(_ignoreObsoleteProperties && p.IsObsolete()))
                .Where(p => !p.IsSwaggerIgnore())
                .ToDictionary(
                    prop => prop.PropertyName,
                    prop => CreateInlineSchema(prop.PropertyType).WithValidationProperties(prop)
                );

            var required = jsonContract.Properties.Where(prop => prop.IsRequired())
                .Select(propInfo => propInfo.PropertyName)
                .ToList();

            var schema = new Schema
            {
                required = required.Any() ? required : null, // required can be null but not empty
                properties = properties,
                type = "object"
            };

            foreach (var filter in _schemaFilters)
            {
                filter.Apply(schema, this, jsonContract.UnderlyingType);
            }

            // NOTE: In next major version, _modelFilters will completely replace _schemaFilters
            var modelFilterContext = new ModelFilterContext(jsonContract.UnderlyingType, jsonContract, this);
            foreach (var filter in _modelFilters)
            {
                filter.Apply(schema, modelFilterContext);
            }

            return schema;
        }

        private Schema CreateRefSchema(Type type)
        {
            if (!_referencedTypes.ContainsKey(type))
            {
                var schemaId = _schemaIdSelector(type);
                if (_referencedTypes.Any(entry => entry.Value.SchemaId == schemaId))
                {
                    var conflictingType = _referencedTypes.First(entry => entry.Value.SchemaId == schemaId).Key;
                    throw new InvalidOperationException(String.Format(
                        "Conflicting schemaIds: Duplicate schemaIds detected for types {0} and {1}. " +
                        "See the config setting - \"UseFullTypeNameInSchemaIds\" for a potential workaround",
                        type.FullName, conflictingType.FullName));
                }

                _referencedTypes.Add(type, new SchemaInfo { SchemaId = schemaId });
            }

            return new Schema { @ref = "#/definitions/" + _referencedTypes[type].SchemaId };
        }
    }
}