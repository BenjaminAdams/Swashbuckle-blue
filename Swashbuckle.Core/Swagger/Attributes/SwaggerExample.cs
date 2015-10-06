using System;

namespace Swashbuckle.Swagger.Attributes
{
    [AttributeUsage(AttributeTargets.All)]
    public class SwaggerExample : Attribute
    {
        public string Example { get; set; }
    }
}