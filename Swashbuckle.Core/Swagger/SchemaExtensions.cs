﻿using Newtonsoft.Json.Serialization;
using Swashbuckle.Swagger.Attributes;
using System;
using System.ComponentModel.DataAnnotations;

namespace Swashbuckle.Swagger
{
    public static class SchemaExtensions
    {
        public static Schema SetSchemaDetails(Schema schema, Object attribute)
        {
            var regex = attribute as RegularExpressionAttribute;
            if (regex != null)
                schema.pattern = regex.Pattern;

            var range = attribute as RangeAttribute;
            if (range != null)
            {
                int maximum;
                if (Int32.TryParse(range.Maximum.ToString(), out maximum))
                    schema.maximum = maximum;

                int minimum;
                if (Int32.TryParse(range.Minimum.ToString(), out minimum))
                    schema.minimum = minimum;
            }

            var length = attribute as StringLengthAttribute;
            if (length != null)
            {
                schema.maxLength = length.MaximumLength;
                schema.minLength = length.MinimumLength;
            }

            var maxLength = attribute as MaxLengthAttribute;
            if (maxLength != null)
            {
                schema.maxLength = maxLength.Length;
            }

            var minLength = attribute as MinLengthAttribute;
            if (minLength != null)
            {
                schema.minLength = minLength.Length;
            }

            var example = attribute as SwaggerExample;
            if (example != null)
            {
                schema.example = example.GetExample();
            }

            var ignore = attribute as SwaggerIgnore;
            if (ignore != null)
            {
                schema.ignore = true;
            }

            return schema;
        }

        public static Schema GetAttributeDetails(Schema schema, System.Reflection.PropertyInfo propInfo)
        {
            if (schema == null || propInfo == null)
            {
                return schema;
            }
            foreach (var attribute in propInfo.GetCustomAttributes(false))
            {
                SetSchemaDetails(schema, attribute);
            }

            return schema;
        }

        public static Schema WithValidationProperties(this Schema schema, JsonProperty jsonProperty)
        {
            var propInfo = jsonProperty.PropertyInfo();
            if (propInfo == null)
                return schema;

            schema = GetAttributeDetails(schema, propInfo);

            if (!jsonProperty.Writable)
                schema.readOnly = true;
            return schema;
        }

        public static Schema WithValidationProperties(this Schema schema, JsonArrayContract jsonProperty)
        {
            var propInfo = jsonProperty.PropertyInfo();
            if (propInfo == null)
                return schema;

            schema = GetAttributeDetails(schema, propInfo);

            return schema;
        }

        public static Schema WithValidationProperties(this Schema schema, JsonContract jsonProperty)
        {
            var propInfo = jsonProperty.PropertyInfo();
            if (propInfo == null)
                return schema;

            schema = GetAttributeDetails(schema, propInfo);

            return schema;
        }

        public static void PopulateFrom(this PartialSchema partialSchema, Schema schema)
        {
            if (schema == null) return;

            partialSchema.type = schema.type;
            partialSchema.format = schema.format;

            if (schema.items != null)
            {
                // TODO: Handle jagged primitive array and error on jagged object array
                partialSchema.items = new PartialSchema();
                partialSchema.items.PopulateFrom(schema.items);
            }

            partialSchema.example = schema.example;
            partialSchema.ignore = schema.ignore;

            partialSchema.@default = schema.@default;
            partialSchema.maximum = schema.maximum;
            partialSchema.exclusiveMaximum = schema.exclusiveMaximum;
            partialSchema.minimum = schema.minimum;
            partialSchema.exclusiveMinimum = schema.exclusiveMinimum;
            partialSchema.maxLength = schema.maxLength;
            partialSchema.minLength = schema.minLength;
            partialSchema.pattern = schema.pattern;
            partialSchema.maxItems = schema.maxItems;
            partialSchema.minItems = schema.minItems;
            partialSchema.uniqueItems = schema.uniqueItems;
            partialSchema.@enum = schema.@enum;
            partialSchema.multipleOf = schema.multipleOf;
        }
    }
}