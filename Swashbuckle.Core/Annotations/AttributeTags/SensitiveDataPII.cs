using System;
using System.Collections;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;

namespace Swashbuckle.Annotations.AttributeTags
{
    [AttributeUsage(AttributeTargets.Field | AttributeTargets.Parameter | AttributeTargets.Property)]
    public class SensitiveDataPII : Attribute
    {
        public int _showChars = 4;

        public SensitiveDataPII()
        {
        }

        public SensitiveDataPII(int showChars)
        {
            _showChars = showChars;
        }
    }
}