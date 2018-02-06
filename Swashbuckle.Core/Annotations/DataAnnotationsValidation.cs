using Swashbuckle.Annotations.AttributeTags;
using System;
using System.Collections;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text.RegularExpressions;

namespace Swashbuckle.Annotations
{
    /// <summary>
    /// Validates the attribute tag validations declared on the class
    /// </summary>
    public static class SwagValidator
    {
        private static string _nullParamMsg = "Value cannot be null. Parameter name: ";
        private static string _nullOrZeroParamMsg = "Value cannot be null or zero. Parameter name: ";

        /// <summary>
        /// Validates the attribute tag validations declared on the class.  Returns false if validation rules are not met and returns the error message in the errorMessage (out) parameter
        /// </summary>
        /// <param name="input">The object you wish to validate</param>
        /// <param name="errorMessage">The error message</param>
        /// <param name="outputJsonPayload">If you want the error message to contain the values in the object we are validating</param>
        /// <returns></returns>
        public static bool TryValidate(object input, out string errorMessage, bool outputJsonPayload = false, bool showFullPath = false)
        {
            errorMessage = null;
            try
            {
                ValidateReal(input, outputJsonPayload, showFullPath);
                return true;
            }
            catch (Exception ex)
            {
                errorMessage = ex.Message;
                return false;
            }
        }

        public static bool Validate(object input, bool outputJsonPayload = false, bool showFullPath = false)
        {
            return ValidateReal(input, outputJsonPayload, showFullPath);
        }

        ///  <summary>
        ///  Validates the attribute tag validations declared on the class.  Throws an ValidationException if any validation rules are not met
        ///  </summary>
        ///  <param name="input">The object you wish to validate</param>
        ///  <param name="outputJsonPayload">If true will output the contents of input payload in the exception</param>
        ///  <exception cref="ValidationException"></exception>
        private static bool ValidateReal(object input, bool outputJsonPayload = false, bool showFullPath = false, string parentPath = null)
        {
            if (input == null) return false;
            if (IsPrimitiveType(input) == true) return true;
            if (CheckList(input)) return true;

            foreach (PropertyInfo prp in input.GetType().GetProperties(BindingFlags.Instance | BindingFlags.Public).Where(p => p.CanRead))
            {
                if (prp.SetMethod == null) continue; //  Validate only for properties and skip for value

                if (typeof(IList).IsAssignableFrom(prp.PropertyType)) // Property is collection
                {
                    var innerParentPath = BuildParentPath(parentPath, prp.Name);
                    CheckListProperty(input, prp, outputJsonPayload, showFullPath, innerParentPath);
                }
                else
                {
                    // Property is object
                    CheckRangeAttribute(prp, input, outputJsonPayload, showFullPath, parentPath);  //check range first
                    CheckRequiredAttribute(prp, input, outputJsonPayload, showFullPath, parentPath);
                    CheckMaxLengthAttribute(prp, input, outputJsonPayload, showFullPath, parentPath);
                    CheckMinLengthAttribute(prp, input, outputJsonPayload, showFullPath, parentPath);
                    CheckStringLengthAttribute(prp, input, outputJsonPayload, showFullPath, parentPath);
                    CheckDefinedExAttribute(prp, input, outputJsonPayload, showFullPath, parentPath);
                    CheckRegularExpressionAttribute(prp, input, outputJsonPayload, showFullPath, parentPath);

                    if (prp.PropertyType.Assembly == input.GetType().Assembly)
                    {
                        //check nested classes
                        var innerParentPath = BuildParentPath(parentPath, prp.Name);

                        ValidateReal(prp.GetValue(input, null), outputJsonPayload, showFullPath, innerParentPath);
                    }
                }
            }
            return true;
        }

        private static string BuildParentPath(string parentPath, string currentName)
        {
            if (parentPath == null)
            {
                return currentName;
            }
            else
            {
                return parentPath + "." + currentName;
            }
        }

        private static void CheckListProperty(object input, PropertyInfo prp, bool outputJsonPayload = false, bool showFullPath = false, string parentPath = null)
        {
            var propValue = prp.GetValue(input, null);
            var listvalue = (IList)propValue;

            if (listvalue != null && listvalue.Count > 0) // Has values then iterate
            {
                CheckList(listvalue, outputJsonPayload, showFullPath, parentPath);
            }
            else  // validate for required attribute
            {
                ObjReqChecker(input, prp, outputJsonPayload, showFullPath, parentPath);
            }
        }

        private static void ObjReqChecker(object input, PropertyInfo property, bool outputJsonPayload = false, bool showFullPath = false, string parentPath = null)
        {
            if (property.GetCustomAttribute(typeof(RequiredAttribute)) != null) // validate for required attribute
            {
                var errormessage = ((ValidationAttribute)(property.GetCustomAttribute(typeof(RequiredAttribute)))).ErrorMessage;
                if (errormessage != null)
                {
                    throw new ValidationException(errormessage.AppendJson(input, outputJsonPayload));
                }
                else
                {
                    throw new ValidationException(GetErrMsg(property, input, outputJsonPayload, showFullPath, parentPath));
                }
            }
        }

        //if the root object is a list we need to check each element
        private static bool CheckList(object input, bool outputJsonPayload = false, bool showFullPath = false, string parentPath = null)
        {
            var elems = input as IList;
            if (elems != null)
            {
                //check nested arrays
                foreach (var item in elems)
                {
                    ValidateReal(item, outputJsonPayload, showFullPath, parentPath);
                }
                return true;
            }
            return false;
        }

        private static void CheckRangeAttribute(PropertyInfo property, object input, bool outputJsonPayload, bool showFullPath, string parentPath)
        {
            var attr = (RangeAttribute)(property.GetCustomAttribute(typeof(RangeAttribute)));
            if (attr == null) return;

            var value = property.GetValue(input);
            if (value == null) return;

            //we have to convert all values to double first because RangeAttribute can either have INT or double as an input
            var maxValue = Convert.ToDouble(attr.Maximum);
            var minValue = Convert.ToDouble(attr.Minimum);
            var valAsDbl = Convert.ToDouble(value);

            if (valAsDbl > maxValue)
            {
                if (attr.ErrorMessage != null) throw new ValidationException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                throw new ValidationException(string.Format("{0} is invalid. Received value: {1}, accepted values: {2} to {3}", GetVariableName(property, showFullPath, parentPath), value, minValue, maxValue).AppendJson(input, outputJsonPayload));
            }

            if (valAsDbl < minValue)
            {
                if (attr.ErrorMessage != null) throw new ValidationException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                throw new ValidationException(string.Format("{0} is invalid. Received value: {1}, accepted values: {2} to {3}", GetVariableName(property, showFullPath, parentPath), value, minValue, maxValue).AppendJson(input, outputJsonPayload));
            }
        }

        private static void CheckStringLengthAttribute(PropertyInfo property, object input, bool outputJsonPayload, bool showFullPath, string parentPath)
        {
            var attr = (StringLengthAttribute)(property.GetCustomAttribute(typeof(StringLengthAttribute)));
            if (attr == null) return;

            var value = property.GetValue(input);
            if (value == null) return;

            if (value.ToString().Length > attr.MaximumLength)
            {
                if (attr.ErrorMessage != null) throw new ValidationException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                throw new ValidationException(string.Format("{0} has length {1}.  Maxlength is {2}", GetVariableName(property, showFullPath, parentPath), value.ToString().Length, attr.MaximumLength).AppendJson(input, outputJsonPayload));
            }

            if (value.ToString().Length < attr.MinimumLength)
            {
                if (attr.ErrorMessage != null) throw new ValidationException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                throw new ValidationException(string.Format("{0} has length {1}.  Minlength is {2}", GetVariableName(property, showFullPath, parentPath), value.ToString().Length, attr.MinimumLength).AppendJson(input, outputJsonPayload));
            }
        }

        private static void CheckMaxLengthAttribute(PropertyInfo property, object input, bool outputJsonPayload, bool showFullPath, string parentPath)
        {
            var attr = (MaxLengthAttribute)(property.GetCustomAttribute(typeof(MaxLengthAttribute)));
            if (attr == null) return;

            var value = property.GetValue(input);
            if (value == null) return;

            if (value.ToString().Length > attr.Length)
            {
                if (attr.ErrorMessage != null) throw new ValidationException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                throw new ValidationException(string.Format("{0} has length {1}.  Maxlength is {2}", GetVariableName(property, showFullPath, parentPath), value.ToString().Length, attr.Length).AppendJson(input, outputJsonPayload));
            }
        }

        /// <summary>
        /// Checks the Defined attribute.
        /// </summary>
        /// <param name="property">The property.</param>
        /// <param name="input">The input.</param>
        /// <param name="outputJsonPayload">if set to <c>true</c> [output json payload].</param>
        /// <exception cref="ValidationException"></exception>
        private static void CheckDefinedExAttribute(PropertyInfo property, object input, bool outputJsonPayload, bool showFullPath, string parentPath)
        {
            var attr = (DefinedValidationAttribute)(property.GetCustomAttribute(typeof(DefinedValidationAttribute)));
            if (attr == null)
                return;

            var value = property.GetValue(input);
            if (value == null)
                return;

            if (string.IsNullOrWhiteSpace(value.ToString()))
            {
                return;
            }

            if (DefinedValidationAttribute.Validate(attr.KeyName, value.ToString()) == false)
            {
                throw new ValidationException(string.Format("{0} is invalid. Received value: {1}", GetVariableName(property, showFullPath, parentPath), value).AppendJson(input, outputJsonPayload));
            }
        }

        /// <summary>
        /// Checks the Defined attribute.
        /// </summary>
        /// <param name="property">The property.</param>
        /// <param name="input">The input.</param>
        /// <param name="outputJsonPayload">if set to <c>true</c> [output json payload].</param>
        /// <exception cref="ValidationException"></exception>
        private static void CheckRegularExpressionAttribute(PropertyInfo property, object input, bool outputJsonPayload, bool showFullPath, string parentPath)
        {
            var attr = (RegularExpressionAttribute)(property.GetCustomAttribute(typeof(RegularExpressionAttribute)));
            if (attr == null)
                return;

            var value = property.GetValue(input);
            if (value == null)
                return;

            if (string.IsNullOrWhiteSpace(value.ToString()))
            {
                return;
            }

            if (Regex.IsMatch(value.ToString(), attr.Pattern, RegexOptions.IgnoreCase) == false)
            {
                throw new ValidationException(string.Format("{0} is invalid. Received value: {1}", GetVariableName(property, showFullPath, parentPath), value).AppendJson(input, outputJsonPayload));
            }
        }

        private static void CheckMinLengthAttribute(PropertyInfo property, object input, bool outputJsonPayload, bool showFullPath, string parentPath)
        {
            var attr = (MinLengthAttribute)(property.GetCustomAttribute(typeof(MinLengthAttribute)));
            if (attr == null) return;

            var value = property.GetValue(input); //value of field
            if (value == null) return;

            if (value.ToString().Length < attr.Length)
            {
                if (attr.ErrorMessage != null) throw new ValidationException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                throw new ValidationException(string.Format("{0} has length {1}.  Minlength is {2}", GetVariableName(property, showFullPath, parentPath), value.ToString().Length, attr.Length).AppendJson(input, outputJsonPayload));
            }
        }

        private static string GetErrMsg(PropertyInfo property, object input, bool outputJsonPayload, bool showFullPath, string parentPath)
        {
            try
            {
                return _nullParamMsg + GetVariableName(property, showFullPath, parentPath).AppendJson(input, outputJsonPayload);
            }
            catch
            {
                return _nullParamMsg + property.Name.AppendJson(input, outputJsonPayload);
            }
        }

        private static string GetErrMsgNumber(PropertyInfo property, object input, bool outputJsonPayload, bool showFullPath, string parentPath)
        {
            try
            {
                return _nullOrZeroParamMsg + GetVariableName(property, showFullPath, parentPath).AppendJson(input, outputJsonPayload);
            }
            catch
            {
                return _nullOrZeroParamMsg + property.Name.AppendJson(input, outputJsonPayload);
            }
        }

        private static string GetVariableName(PropertyInfo property, bool showFullPath, string parentPath)
        {
            if (showFullPath == true && parentPath != null)
            {
                //return property.DeclaringType.FullName + "." + property.Name;
                return parentPath + "." + property.Name;
            }
            else
            {
                return property.Name;
            }
        }

        private static void CheckRequiredAttribute(PropertyInfo property, object input, bool outputJsonPayload, bool showFullPath, string parentPath)
        {
            var value = property.GetValue(input);

            if (typeof(IList).IsAssignableFrom(property.PropertyType) && value == null) //check if object is a list and is null
            {
                throw new ValidationException(_nullParamMsg + property.Name.AppendJson(input, outputJsonPayload));
            }

            var attr = (RequiredAttribute)(property.GetCustomAttribute(typeof(RequiredAttribute)));
            if (attr == null) return;

            //Validate whether Nullable fields are present and it contains proper values
            if ((Nullable.GetUnderlyingType(property.PropertyType) != null) && (value == null))
            {
                if (attr.ErrorMessage != null) throw new ValidationException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                throw new ValidationException(GetErrMsg(property, input, outputJsonPayload, showFullPath, parentPath));
            }

            switch (property.PropertyType.Name.ToUpper())
            {
                case "STRING":
                    //Validates null, empty string and white space -if a string is set with string.empty-value.Tostring() with fail
                    if (value == null || string.IsNullOrWhiteSpace(value.ToString()))
                    {
                        if (attr.ErrorMessage != null) throw new ValidationException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                        throw new ValidationException(GetErrMsg(property, input, outputJsonPayload, showFullPath, parentPath));
                    }
                    break;

                case "GUID":
                    // Guid result;
                    //Validate Guid- if you dont specify any value for Guid will be populated with Guid.Empty -explicitly check that
                    // if (!Guid.TryParse(value.ToString(), out result) || (result == Guid.Empty))
                    if ((Guid)value == Guid.Empty)
                    {
                        if (attr.ErrorMessage != null) throw new ValidationException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                        throw new ValidationException(GetErrMsg(property, input, outputJsonPayload, showFullPath, parentPath));
                    }
                    break;

                case "INT32":
                case "INT64":
                case "DECIMAL":
                    //Currently among value types -we support int and decimal - Converting to bigger type- int as it can hold decimal
                    if (Convert.ToDouble(value) == 0)
                    {
                        if (attr.ErrorMessage != null) throw new ValidationException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                        throw new ValidationException(GetErrMsgNumber(property, input, outputJsonPayload, showFullPath, parentPath));
                    }
                    break;

                default:
                    //handles objects and all others
                    if (value == null)
                    {
                        if (attr.ErrorMessage != null) throw new ValidationException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                        throw new ValidationException(GetErrMsg(property, input, outputJsonPayload, showFullPath, parentPath));
                    }
                    break;
            }
        }

        private static bool IsPrimitiveType(object myObject)
        {
            try
            {
                var myType = myObject.GetType();
                return myType.IsPrimitive;
            }
            catch
            {
                return false;
            }
        }

        //public static PaymentException GetErrorInsideOfPaymentExceptions(object input, bool outputJsonPayload = true)
        //{
        //    try
        //    {
        //        input.CheckDataAnnotations(outputJsonPayload);
        //        return null;
        //    }
        //    catch (Exception ex)
        //    {
        //        //remove newline characters from exception msg
        //        return PaymentException.GetGenericError(Regex.Replace(ex.Message, @"\t|\n|\r", " "));
        //    }
        //}
    }
}