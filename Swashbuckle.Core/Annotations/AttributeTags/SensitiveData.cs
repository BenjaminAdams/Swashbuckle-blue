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
                property.SetValue(input, GetMaskedValue(property, input, attrPII));
            }
        }

        private static dynamic GetValue(PropertyInfo property, object input)
        {
            var value = property.GetValue(input);
            if (Nullable.GetUnderlyingType(property.PropertyType) != null)
            {
                Type t = Nullable.GetUnderlyingType(property.PropertyType) ?? property.PropertyType;

                object newType = ChangeType(value, t);
                return newType;
            }
            else
            {
                return property.GetValue(input);
            }
        }

        public static object ChangeType(object value, Type type)
        {
            if (value == null && type.IsGenericType) return Activator.CreateInstance(type);
            if (value == null) return null;
            if (type == value.GetType()) return value;
            if (type.IsEnum)
            {
                if (value is string)
                    return Enum.Parse(type, value as string);
                else
                    return Enum.ToObject(type, value);
            }
            if (!type.IsInterface && type.IsGenericType)
            {
                Type innerType = type.GetGenericArguments()[0];
                object innerValue = ChangeType(value, innerType);
                return Activator.CreateInstance(type, new object[] { innerValue });
            }
            if (value is string && type == typeof(Guid)) return new Guid(value as string);
            if (value is string && type == typeof(Version)) return new Version(value as string);
            if (!(value is IConvertible)) return value;
            return Convert.ChangeType(value, type);
        }

        private static dynamic GetMaskedValue(PropertyInfo property, object input, SensitiveDataPII attr)
        {
            // var value = property.GetValue(input);
            var value = GetValue(property, input);
            try
            {
                //if (typeof(IList).IsAssignableFrom(property.PropertyType) && value == null) //check if object is a list and is null
                //  {
                //      throw new ValidationException(_nullParamMsg + property.Name.AppendJson(input, outputJsonPayload));
                //  }

                //todo handle nullable fields

                //if ((Nullable.GetUnderlyingType(property.PropertyType) != null) && (value == null))
                //{
                //    if (attr.ErrorMessage != null) throw new ValidationException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                //    throw new ValidationException(_nullParamMsg + property.Name.AppendJson(input, outputJsonPayload));
                //}

                var propertyTypeName = value.

                switch (property.PropertyType.Name.ToUpper())
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
                            //if (newDec.Contains(".")) //since we have many different formats we store money in, lets just change every digit to zero
                            //{
                            //    newDec = newDec.Substring(0, newDec.IndexOf(".", ));
                            //}

                            var tmpStr = newDec.Substring(0, attr._showChars) + new string('0', newDec.Length - attr._showChars);
                            decimal tmpNum = decimal.Parse(tmpStr);
                            return tmpNum;
                        }
                        else
                        {
                            return newDec;
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
                            return newInt;
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
                            return newLong;
                        }

                    default:
                        var theType = property.PropertyType;
                        var asddd = DefaultValue(property.PropertyType);
                        return value;
                        break;
                }
            }
            catch (Exception ex)
            {
                return value;
            }

            return value;
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