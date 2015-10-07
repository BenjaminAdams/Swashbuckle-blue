using System;

namespace Swashbuckle.Swagger.Attributes
{
    [AttributeUsage(AttributeTargets.All)]
    public class SwaggerExample : Attribute
    {
        private string _example { get; set; }

        public SwaggerExample(string example)
        {
            _example = example;
        }

        public string GetExample()
        {
            return _example;
        }
    }
}