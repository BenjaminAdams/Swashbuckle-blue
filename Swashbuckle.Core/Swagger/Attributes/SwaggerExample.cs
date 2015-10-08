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
            if (_example.ToUpper() == "GUID")
            {
                return Guid.NewGuid().ToString();
            }
            else if (_example.ToUpper() == "RANDOM" || _example.ToUpper() == "RAND")
            {
                return new Random().Next(int.MaxValue).ToString();
            }

            return _example;
        }
    }
}