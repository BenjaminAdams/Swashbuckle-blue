using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Swashbuckle.Annotations.AttributeTags
{
    /// <summary>
    /// Attribute tag used when a field is only required sometimes.  This will display a "C" in the Required column of swagger.
    /// </summary>
    [AttributeUsage(AttributeTargets.All)]
    public class RequiredConditionally : Attribute
    {
    }
}