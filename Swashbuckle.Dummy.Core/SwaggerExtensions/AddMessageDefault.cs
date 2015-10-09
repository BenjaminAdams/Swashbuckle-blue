using Swashbuckle.Swagger;
using System;

namespace Swashbuckle.Dummy.SwaggerExtensions
{
    public class AddMessageDefault : ISchemaFilter
    {
        public void Apply(Schema schema, SchemaRegistry schemaRegistry, Type type)
        {
            schema.@default = new { title = "A message", content = "Some content" };
        }
    }
}