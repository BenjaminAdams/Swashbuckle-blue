using Swashbuckle.Swagger;
using System;

namespace Swashbuckle.Dummy.SwaggerExtensions
{
    public class ApplySchemaVendorExtensions : ISchemaFilter
    {
        public void Apply(Schema schema, SchemaRegistry schemaRegistry, Type type)
        {
            schema.vendorExtensions.Add("x-schema", "bar");
        }
    }
}