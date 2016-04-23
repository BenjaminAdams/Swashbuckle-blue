using System;

namespace Swashbuckle.Swagger.Attributes
{
    [AttributeUsage(AttributeTargets.All)]
    public class SwaggerIgnore : Attribute
    {
    }

    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class SwaggerRouteName : Attribute
    {
        private string _customRouteName { get; set; }

        public SwaggerRouteName(string customRouteName)
        {
            _customRouteName = customRouteName;
        }

        public string GetNewRouteName()
        {
            if (string.IsNullOrWhiteSpace(_customRouteName) == false)
            {
                return _customRouteName;
            }
            else
            {
                return null;
            }
        }
    }

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
            else if (_example.ToUpper() == "NULL")
            {
                return "NULL"; //we cant set it to null here, the JS in the UI makes it the default value of "string"
            }

            return _example;
        }
    }
}