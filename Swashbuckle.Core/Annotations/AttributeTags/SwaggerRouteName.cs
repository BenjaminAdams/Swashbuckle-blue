using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Swashbuckle.Annotations.AttributeTags
{
    [AttributeUsage(AttributeTargets.Method)]
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
}