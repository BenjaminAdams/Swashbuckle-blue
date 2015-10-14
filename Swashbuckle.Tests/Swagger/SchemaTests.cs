using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using NUnit.Framework;
using Swashbuckle.Application;
using Swashbuckle.Dummy.Controllers;
using Swashbuckle.Dummy.SwaggerExtensions;
using Swashbuckle.Swagger;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;

namespace Swashbuckle.Tests.Swagger
{
    [TestFixture]
    public class SchemaTests : SwaggerTestBase
    {
        public SchemaTests()
            : base("swagger/docs/{apiVersion}")
        { }

        [SetUp]
        public void SetUp()
        {
            // Default set-up
            SetUpHandler();
        }

        [Test]
        public void It_provides_validation_properties_for_annotated_types()
        {
            SetUpDefaultRouteFor<AnnotatedTypesController>();

            var swagger = GetContent<JObject>("http://tempuri.org/swagger/docs/v1");
            var definitions = swagger["definitions"];
            Assert.IsNotNull(definitions);

            var expected = JObject.FromObject(new
                {
                    Payment = new
                    {
                        required = new string[] { "Amount", "CardNumber", "ExpMonth", "ExpYear" },
                        type = "object",
                        properties = new
                        {
                            Amount = new
                            {
                                format = "double",
                                type = "number",
                                ignore = false
                            },
                            CardNumber = new
                            {
                                pattern = "^[3-6]?\\d{12,15}$",
                                type = "string",
                                ignore = false
                            },
                            ExpMonth = new
                            {
                                format = "int32",
                                maximum = 12,
                                minimum = 1,
                                type = "integer",
                                ignore = false
                            },
                            ExpYear = new
                            {
                                format = "int32",
                                maximum = 99,
                                minimum = 14,
                                type = "integer",
                                ignore = false
                            },
                            Note = new
                            {
                                maxLength = 500,
                                minLength = 10,
                                type = "string",
                                ignore = false
                            }
                        },
                        ignore = false
                    }
                });
            Assert.AreEqual(expected.ToString(), definitions.ToString());
        }

        [Test]
        public void It_omits_indexer_properties()
        {
            SetUpDefaultRouteFor<IndexerTypesController>();

            var swagger = GetContent<JObject>("http://tempuri.org/swagger/docs/v1");
            var definitions = swagger["definitions"];

            var expected = JObject.FromObject(new
                {
                    Lookup = new
                    {
                        type = "object",
                        properties = new
                        {
                            TotalEntries = new
                            {
                                format = "int32",
                                type = "integer",
                                ignore = false
                            }
                        },
                        ignore = false
                    }
                });
            Assert.AreEqual(expected.ToString(), definitions.ToString());
        }

        [Test]
        public void It_honors_json_annotated_attributes()
        {
            SetUpDefaultRouteFor<JsonAnnotatedTypesController>();

            var swagger = GetContent<JObject>("http://tempuri.org/swagger/docs/v1");

            var definitions = swagger["definitions"];
            Assert.IsNotNull(definitions);

            var expected = JObject.FromObject(new
                {
                    JsonRequest = new
                    {
                        type = "object",
                        properties = new
                        {
                            foobar = new
                            {
                                type = "string",
                                ignore = false
                            },
                            Category = new
                            {
                                @enum = new[] { "A", "B" },
                                type = "string",
                                ignore = false,
                                example = "A"
                            }
                        },
                        ignore = false
                    }
                });
            Assert.AreEqual(expected.ToString(), definitions.ToString());
        }

        [Test]
        public void It_honors_json_string_enum_converter_configured_globally()
        {
            Configuration.Formatters.JsonFormatter.SerializerSettings.Converters.Add(
                new StringEnumConverter { CamelCaseText = true });
            SetUpDefaultRouteFor<ProductsController>();

            var swagger = GetContent<JObject>("http://tempuri.org/swagger/docs/v1");
            var typeSchema = swagger["definitions"]["Product"]["properties"]["Type"];

            var expected = JObject.FromObject(new
                {
                    @enum = new[] { "book", "album" },
                    type = "string",
                    ignore = false,
                    example = "Book"
                });
            Assert.AreEqual(expected.ToString(), typeSchema.ToString());
        }

        [Test]
        public void It_exposes_config_to_map_a_type_to_an_explicit_schema()
        {
            SetUpDefaultRouteFor<ProductsController>();
            SetUpHandler(c => c.MapType<ProductType>(() => new Schema
                {
                    type = "integer",
                    format = "int32",
                    maximum = 2,
                    minimum = 1
                }));

            var swagger = GetContent<JObject>("http://tempuri.org/swagger/docs/v1");
            var parameter = swagger["paths"]["/products"]["get"]["parameters"][0];

            var expected = JObject.FromObject(new
                {
                    name = "type",
                    @in = "query",
                    required = true,
                    type = "integer",
                    format = "int32",
                    maximum = 2,
                    minimum = 1,
                    ignore = false
                });
            Assert.AreEqual(expected.ToString(), parameter.ToString());
        }

        [Test]
        public void It_exposes_config_to_post_modify_schemas()
        {
            SetUpDefaultRouteFor<ProductsController>();
            SetUpHandler(c => c.SchemaFilter<ApplySchemaVendorExtensions>());

            var swagger = GetContent<JObject>("http://tempuri.org/swagger/docs/v1");
            var xProp = swagger["definitions"]["Product"]["x-schema"];

            Assert.IsNotNull(xProp);
            Assert.AreEqual("bar", xProp.ToString());
        }

        [Test]
        public void It_exposes_config_to_ignore_all_properties_that_are_obsolete()
        {
            SetUpDefaultRouteFor<ObsoletePropertiesController>();
            SetUpHandler(c => c.IgnoreObsoleteProperties());

            var swagger = GetContent<JObject>("http://tempuri.org/swagger/docs/v1");
            var calendarProps = swagger["definitions"]["Event"]["properties"];
            var expectedProps = JObject.FromObject(new Dictionary<string, object>
                {
                    {
                        "Name", new { type = "string", ignore = false }
                    }
                });

            Assert.AreEqual(expectedProps.ToString(), calendarProps.ToString());
        }

        [Test]
        public void It_exposes_config_to_ignore_all_properties_that_are_swagger_ignore()
        {
            SetUpDefaultRouteFor<ObsoletePropertiesController>();
            SetUpHandler(c => c.IgnoreObsoleteProperties());

            var swagger = GetContent<JObject>("http://tempuri.org/swagger/docs/v1");
            var calendarProps = swagger["definitions"]["Event"]["properties"];
            var expectedProps = JObject.FromObject(new Dictionary<string, object>
                {
                    {
                        "Name", new { type = "string", ignore = false }
                    }
                });

            Assert.AreEqual(expectedProps.ToString(), calendarProps.ToString());
        }

        [Test]
        public void It_exposes_config_to_workaround_multiple_types_with_the_same_class_name()
        {
            SetUpDefaultRouteFor<ConflictingTypesController>();
            SetUpHandler(c => c.UseFullTypeNameInSchemaIds());

            var swagger = GetContent<JObject>("http://tempuri.org/swagger/docs/v1");
            var defintitions = swagger["definitions"];

            Assert.AreEqual(2, defintitions.Count());
        }

        [Test]
        public void It_exposes_config_to_choose_schema_id()
        {
            SetUpDefaultRouteFor<ProductsController>();
            SetUpHandler(c => c.SchemaId(t => "my custom name"));

            var swagger = GetContent<JObject>("http://tempuri.org/swagger/docs/v1");
            var defintitions = swagger["definitions"];

            Assert.IsNotNull(defintitions["my custom name"]);
        }

        [Test]
        public void It_exposes_config_to_modify_schema_ids()
        {
            SetUpDefaultRouteFor<ConflictingTypesController>();
            // We have to know the default implementation of FriendlyId before we can modify it's output.
            SetUpHandler(c => { c.SchemaId(t => t.FriendlyId(true).Replace("Swashbuckle.Dummy.Controllers.", String.Empty)); });

            var swagger = GetContent<JObject>("http://tempuri.org/swagger/docs/v1");
            var defintitions = swagger["definitions"];

            Assert.IsNotNull(defintitions["Requests.Blog"]);
        }

        [Test]
        public void It_handles_nested_types()
        {
            SetUpDefaultRouteFor<NestedTypesController>();

            var swagger = GetContent<JObject>("http://tempuri.org/swagger/docs/v1");

            var definitions = swagger["definitions"];
            Assert.IsNotNull(definitions);

            var expected = JObject.FromObject(new
                {
                    Order = new
                    {
                        type = "object",
                        properties = new
                        {
                            LineItems = new
                            {
                                type = "array",
                                items = JObject.Parse("{ $ref: \"#/definitions/LineItem\",\"ignore\": false }"),
                                ignore = false
                            }
                        },
                        ignore = false
                    },
                    LineItem = new
                    {
                        type = "object",
                        properties = new
                        {
                            ProductId = new
                            {
                                format = "int32",
                                type = "integer",
                                ignore = false
                            },
                            Quantity = new
                            {
                                format = "int32",
                                type = "integer",
                                ignore = false
                            }
                        },
                        ignore = false
                    }
                });
            Assert.AreEqual(expected.ToString(), definitions.ToString());
        }

        [Test]
        public void It_handles_two_dimensional_arrays()
        {
            SetUpDefaultRouteFor<TwoDimensionalArraysController>();

            var swagger = GetContent<JObject>("http://tempuri.org/swagger/docs/v1");
            var schema = swagger["paths"]["/twodimensionalarrays"]["post"]["parameters"][0]["schema"];

            var expected = JObject.FromObject(new
                {
                    type = "array",
                    items = new
                    {
                        type = "array",
                        items = new
                        {
                            format = "int32",
                            type = "integer",
                            ignore = false
                        },
                        ignore = false
                    },
                    ignore = false
                });
            Assert.AreEqual(expected.ToString(), schema.ToString());
        }

        [Test]
        public void It_handles_dynamic_types()
        {
            SetUpDefaultRouteFor<DynamicTypesController>();

            var swagger = GetContent<JObject>("http://tempuri.org/swagger/docs/v1");
            var definitions = swagger["definitions"];
            Assert.IsNotNull(definitions);

            var expected = JObject.FromObject(new Dictionary<string, object>
                {
                    {
                        "Object", new
                        {
                            type = "object",
                            properties = new Dictionary<string, Schema>(),
                            ignore= false
                        }
                    }
                });
            Assert.AreEqual(expected.ToString(), definitions.ToString());
        }

        [Test]
        [ExpectedException(typeof(InvalidOperationException))]
        public void It_errors_on_multiple_types_with_the_same_class_name()
        {
            SetUpDefaultRouteFor<ConflictingTypesController>();

            var swagger = GetContent<JObject>("http://tempuri.org/swagger/docs/v1");
        }

        [Test]
        public void It_always_marks_path_parameters_as_required()
        {
            SetUpDefaultRouteFor<PathRequiredController>();

            var swagger = GetContent<JObject>("http://tempuri.org/swagger/docs/v1");
            var required = (bool)swagger["paths"]["/pathrequired/{id}"]["get"]["parameters"][0]["required"];

            Assert.IsTrue(required);
        }
    }
}