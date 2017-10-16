using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Swashbuckle.Annotations.AttributeTags
{
    [AttributeUsage(AttributeTargets.All)]
    public class SwaggerIgnore : Attribute
    {
    }

    [AttributeUsage(AttributeTargets.All)]
    public class SwaggerDepricated : Attribute
    {
    }
}