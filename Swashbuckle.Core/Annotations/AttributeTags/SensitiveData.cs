using System;
using System.Collections;
using System.Linq;
using System.Reflection;

namespace Swashbuckle.Annotations.AttributeTags
{
    [AttributeUsage(AttributeTargets.Field | AttributeTargets.Parameter | AttributeTargets.Property)]
    public class SensitiveData : Attribute
    {
        public static object MaskSensitiveData<T>(T input)
        {
            return MaskSensitiveData(typeof(T), input);
        }

        public static object MaskSensitiveData(Type T, object input)
        {
            if (input == null || IsPrimitiveType(input) == true) return input;
            if (CheckList(input) == true) return input;

            if (T.BaseType != null && T.BaseType.ToString() == "Newtonsoft.Json.Linq.JToken") //prevent stackoverflow if its this type
            {
                return true;
            }

            foreach (PropertyInfo prp in input.GetType().GetProperties(BindingFlags.Instance | BindingFlags.Public).Where(x => x.CanRead && x.CanWrite))
            {
                var propValue = prp.GetValue(input, null);
                MaskObject(prp, input);

                var elems = propValue as IList;
                if (elems != null)
                {
                    //check nested arrays
                    var items = prp.GetValue(input, null) as IList;
                    if (items != null)
                    {
                        foreach (var item in items)
                        {
                            MaskSensitiveData(item.GetType(), item);
                        }
                    }
                }

                if (prp.PropertyType.Assembly == input.GetType().Assembly)
                {
                    //check nested classes
                    MaskSensitiveData(prp.PropertyType, prp.GetValue(input, null));
                }
            }

            return input;
        }

        //if the root object is a list we need to check each element
        private static bool CheckList<T>(T input)
        {
            var elems = input as IList;
            if (elems != null)
            {
                //check nested arrays
                foreach (var item in elems)
                {
                    MaskSensitiveData(item.GetType(), item);
                }
                return true;
            }
            return false;
        }

        private static void MaskObject(PropertyInfo prop, object input)
        {
            if (prop.CustomAttributes.Any() == false) return;

            var attr = prop.GetCustomAttribute(typeof(SensitiveData));
            if (attr != null)
            {
                prop.SetValue(input, null);
            }
        }

        private static bool IsPrimitiveType(object myObject)
        {
            var myType = myObject.GetType();
            return myType.IsPrimitive || myType.Namespace == null || myType.Namespace.Equals("System");
        }
    }
}