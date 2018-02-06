using System;
using System.Collections;
using System.Linq;
using System.Reflection;
using System.Text.RegularExpressions;

namespace Swashbuckle.Annotations.AttributeTags
{
    [AttributeUsage(AttributeTargets.Field | AttributeTargets.Parameter | AttributeTargets.Property)]
    public class SensitiveData : Attribute
    {
        private static Regex _digitsOnly = new Regex("[0-9]");

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
                            if (item == null) continue;
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

        private static bool IsPrimitiveType(object myObject)
        {
            var myType = myObject.GetType();
            return myType.IsPrimitive || myType.Namespace == null || myType.Namespace.Equals("System");
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
                    if (item == null) continue;
                    MaskSensitiveData(item.GetType(), item);
                }
                return true;
            }
            return false;
        }

        private static void MaskObject(PropertyInfo property, object input)
        {
            if (property.CustomAttributes.Any() == false) return;

            var attr = property.GetCustomAttribute(typeof(SensitiveData));
            if (attr != null)
            {
                property.SetValue(input, null);
            }

            var attrPII = (SensitiveDataPII)(property.GetCustomAttribute(typeof(SensitiveDataPII)));

            if (attrPII != null)
            {
                try
                {
                    property.SetValue(input, GetMaskedValue(property, input, attrPII));
                }
                catch (Exception ex)
                {
                    var tmp = ex;
                }
            }
        }

        private static dynamic GetMaskedValue(PropertyInfo property, object input, SensitiveDataPII attr)
        {
            var value = property.GetValue(input);
            // var value = GetValue(property, input);

            try
            {
                if (typeof(IList).IsAssignableFrom(property.PropertyType) && value == null) //check if object is a list and is null
                {
                    return value;//this attribute tag shouldnt be on lists
                }

                //handle nullable fields
                var typeName = property.PropertyType.Name.ToUpper();
                if ((Nullable.GetUnderlyingType(property.PropertyType) != null && value != null))
                {
                    typeName = Nullable.GetUnderlyingType(property.PropertyType).Name.ToUpper();
                }
                else if (Nullable.GetUnderlyingType(property.PropertyType) != null && value == null)
                {
                    //when its a nullable type and the value is null, theres no need to mask it
                    return null;
                }
                //if ((Nullable.GetUnderlyingType(property.PropertyType) != null) && (value == null))
                //{
                //    if (attr.ErrorMessage != null) throw new ValidationException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                //    throw new ValidationException(_nullParamMsg + property.Name.AppendJson(input, outputJsonPayload));
                //}

                // var propertyTypeName = value.

                switch (typeName)
                {
                    case "STRING":

                        if (value != null)
                        {
                            string newStr = (string)value;
                            if (newStr.Length > attr._showChars)
                            {
                                var tmp = newStr.Substring(0, attr._showChars) + new string('*', newStr.Length - attr._showChars);
                                return tmp;
                            }
                            else
                            {
                                return newStr;
                            }
                        }
                        break;

                    case "GUID":
                        if ((Guid)value != Guid.Empty)
                        {
                            string newGuid = ((Guid)value).ToString().Replace("-", "");
                            newGuid = newGuid.Substring(0, attr._showChars) + new string('0', newGuid.Length - attr._showChars);
                            var tmp = Guid.ParseExact(newGuid, "N");
                            return tmp;
                        }
                        else
                        {
                            return value;
                        }
                        break;

                    case "DECIMAL":

                        string newDec = value.ToString();
                        if (newDec.Length > attr._showChars)
                        {
                            var thePartWeMask = newDec.Substring(attr._showChars, newDec.Length - attr._showChars);
                            thePartWeMask = _digitsOnly.Replace(thePartWeMask, "0");

                            var tmpStr = newDec.Substring(0, attr._showChars) + thePartWeMask;
                            decimal tmpNum = decimal.Parse(tmpStr);
                            return tmpNum;
                        }
                        else
                        {
                            return value;
                        }

                        break;

                    case "INT32":

                        string newInt = value.ToString();
                        if (newInt.Length > attr._showChars)
                        {
                            var tmpStr = newInt.Substring(0, attr._showChars) + new string('0', newInt.Length - attr._showChars);
                            int tmpNum = int.Parse(tmpStr);
                            return tmpNum;
                        }
                        else
                        {
                            return value;
                        }

                    case "INT64":
                        string newLong = value.ToString();
                        if (newLong.Length > attr._showChars)
                        {
                            var tmpStr = newLong.Substring(0, attr._showChars) + new string('0', newLong.Length - attr._showChars);
                            long tmpNum = long.Parse(tmpStr);
                            return tmpNum;
                        }
                        else
                        {
                            return value;
                        }
                    case "SINGLE": //aka float
                        string newFloat = value.ToString();
                        if (newFloat.Length > attr._showChars)
                        {
                            var tmpStr = newFloat.Substring(0, attr._showChars) + new string('0', newFloat.Length - attr._showChars);
                            float tmpNum = float.Parse(tmpStr);
                            return tmpNum;
                        }
                        else
                        {
                            return value;
                        }
                    case "DOUBLE":
                        string newDouble = value.ToString();
                        if (newDouble.Length > attr._showChars)
                        {
                            var tmpStr = newDouble.Substring(0, attr._showChars) + new string('0', newDouble.Length - attr._showChars);
                            double tmpNum = double.Parse(tmpStr);
                            return tmpNum;
                        }
                        else
                        {
                            return value;
                        }

                    default:
                        return DefaultValue(property.PropertyType);
                        //return value;
                        break;
                }
            }
            catch (Exception ex)
            {
                return DefaultValue(property.PropertyType);
            }

            return DefaultValue(property.PropertyType);
        }

        public static object DefaultValue(Type maybeNullable)
        {
            Type underlying = Nullable.GetUnderlyingType(maybeNullable);
            if (underlying != null)
                return Activator.CreateInstance(underlying);
            return Activator.CreateInstance(maybeNullable);
        }
    }
}