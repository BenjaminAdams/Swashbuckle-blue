using Swashbuckle.Annotations.AttributeTags;
using System;
using System.Collections;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;

namespace Swashbuckle.Annotations
{
    /// <summary>
    /// Validates the attribute tag validations declared on the class
    /// </summary>
    public static class SwashValidator
    {
        /// <summary>
        /// Validates the attribute tag validations declared on the class.  Returns false if validation rules are not met and returns the error message in the errorMessage (out) parameter
        /// </summary>
        /// <param name="input">The object you wish to validate</param>
        /// <param name="errorMessage">The error message</param>
        /// <param name="outputJsonPayload">If you want the error message to contain the values in the object we are validating</param>
        /// <returns></returns>
        public static bool TryValidate(object input, out string errorMessage, bool outputJsonPayload = true)
        {
            errorMessage = null;
            try
            {
                Validate(input, outputJsonPayload);
                return true;
            }
            catch (Exception ex)
            {
                errorMessage = ex.Message;
                return false;
            }
        }

        ///  <summary>
        ///  Validates the attribute tag validations declared on the class.  Throws an ArgumentNullException if any validation rules are met
        ///  </summary>
        ///  <param name="input">The object you wish to validate</param>
        ///  <param name="outputJsonPayload">If true will output the contents of input payload in the exception</param>
        ///  <exception cref="ArgumentNullException"></exception>
        public static bool Validate(object input, bool outputJsonPayload = true)
        {
            if (input == null) return false;
            if (IsPrimitiveType(input) == true) return true;
            if (CheckList(input)) return true;

            foreach (PropertyInfo prp in input.GetType().GetProperties(BindingFlags.Instance | BindingFlags.Public).Where(p => p.CanRead))
            {
                if (prp.SetMethod == null) continue; //  Validate only for properties and skip for value

                if (typeof(IList).IsAssignableFrom(prp.PropertyType)) // Property is collection
                {
                    CheckListProperty(input, prp, outputJsonPayload);
                }
                else
                {
                    // Property is object
                    CheckRangeAttribute(prp, input, outputJsonPayload);  //check range first
                    CheckRequiredAttribute(prp, input, outputJsonPayload);
                    CheckMaxLengthAttribute(prp, input, outputJsonPayload);
                    CheckMinLengthAttribute(prp, input, outputJsonPayload);
                    CheckStringLengthAttribute(prp, input, outputJsonPayload);
                    CheckRegExAttribute(prp, input, outputJsonPayload);

                    if (prp.PropertyType.Assembly == input.GetType().Assembly)
                    {
                        //check nested classes
                        Validate(prp.GetValue(input, null), outputJsonPayload);
                    }
                }
            }
            return true;
        }

        private static void CheckListProperty(object input, PropertyInfo prp, bool outputJsonPayload = true)
        {
            var propValue = prp.GetValue(input, null);
            var listvalue = (IList)propValue;

            if (listvalue != null && listvalue.Count > 0) // Has values then iterate
            {
                CheckList(listvalue, outputJsonPayload);
            }
            else  // validate for required attribute
            {
                ObjReqChecker(input, prp);
            }
        }

        private static void ObjReqChecker(object input, PropertyInfo prp, bool outputJsonPayload = true)
        {
            if (prp.GetCustomAttribute(typeof(RequiredAttribute)) != null) // validate for required attribute
            {
                var errormessage = ((ValidationAttribute)(prp.GetCustomAttribute(typeof(RequiredAttribute)))).ErrorMessage;
                if (errormessage != null)
                {
                    throw new ArgumentException(errormessage.AppendJson(input, outputJsonPayload));
                }
                else
                {
                    throw new ArgumentNullException(prp.Name + " is null".AppendJson(input, outputJsonPayload));
                }
            }
        }

        //if the root object is a list we need to check each element
        private static bool CheckList(object input, bool outputJsonPayload = true)
        {
            var elems = input as IList;
            if (elems != null)
            {
                //check nested arrays
                foreach (var item in elems)
                {
                    Validate(item, outputJsonPayload);
                }
                return true;
            }
            return false;
        }

        private static void CheckRangeAttribute(PropertyInfo property, object input, bool outputJsonPayload)
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
                if (attr.ErrorMessage != null) throw new ArgumentException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                throw new ArgumentException(string.Format("{0} is invalid. Received value: {1}, accepted values: {2} to {3}", property.Name, value, minValue, maxValue).AppendJson(input, outputJsonPayload));
            }

            if (valAsDbl < minValue)
            {
                if (attr.ErrorMessage != null) throw new ArgumentException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                throw new ArgumentException(string.Format("{0} is invalid. Received value: {1}, accepted values: {2} to {3}", property.Name, value, minValue, maxValue).AppendJson(input, outputJsonPayload));
            }
        }

        private static void CheckStringLengthAttribute(PropertyInfo property, object input, bool outputJsonPayload)
        {
            var attr = (StringLengthAttribute)(property.GetCustomAttribute(typeof(StringLengthAttribute)));
            if (attr == null) return;

            var value = property.GetValue(input);
            if (value == null) return;

            if (value.ToString().Length > attr.MaximumLength)
            {
                if (attr.ErrorMessage != null) throw new ArgumentException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                throw new ArgumentException(string.Format("{0} has length {1}.  Maxlength is {2}", property.Name, value.ToString().Length, attr.MaximumLength).AppendJson(input, outputJsonPayload));
            }

            if (value.ToString().Length < attr.MinimumLength)
            {
                if (attr.ErrorMessage != null) throw new ArgumentException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                throw new ArgumentException(string.Format("{0} has length {1}.  Minlength is {2}", property.Name, value.ToString().Length, attr.MinimumLength).AppendJson(input, outputJsonPayload));
            }
        }

        private static void CheckMaxLengthAttribute(PropertyInfo property, object input, bool outputJsonPayload)
        {
            var attr = (MaxLengthAttribute)(property.GetCustomAttribute(typeof(MaxLengthAttribute)));
            if (attr == null) return;

            var value = property.GetValue(input);
            if (value == null) return;

            if (value.ToString().Length > attr.Length)
            {
                if (attr.ErrorMessage != null) throw new ArgumentException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                throw new ArgumentException(string.Format("{0} has length {1}.  Maxlength is {2}", property.Name, value.ToString().Length, attr.Length).AppendJson(input, outputJsonPayload));
            }
        }

        /// <summary>
        /// Checks the regular expersion attribute.
        /// </summary>
        /// <param name="property">The property.</param>
        /// <param name="input">The input.</param>
        /// <param name="outputJsonPayload">if set to <c>true</c> [output json payload].</param>
        /// <exception cref="System.ArgumentException"></exception>
        private static void CheckRegExAttribute(PropertyInfo property, object input, bool outputJsonPayload)
        {
            var attr = (RegExAttribute)(property.GetCustomAttribute(typeof(RegExAttribute)));
            if (attr == null)
                return;

            var value = property.GetValue(input);
            if (value == null)
                return;

            if (string.IsNullOrWhiteSpace(value.ToString()))
            {
                return;
            }

            if (RegExAttribute.Validate(attr.KeyName, value.ToString()) == false)
            {
                throw new ArgumentException(string.Format("{0} is invalid. Received value: {1}", property.Name, value).AppendJson(input, outputJsonPayload));
            }
        }

        private static void CheckMinLengthAttribute(PropertyInfo property, object input, bool outputJsonPayload)
        {
            var attr = (MinLengthAttribute)(property.GetCustomAttribute(typeof(MinLengthAttribute)));
            if (attr == null) return;

            var value = property.GetValue(input); //value of field
            if (value == null) return;

            if (value.ToString().Length < attr.Length)
            {
                if (attr.ErrorMessage != null) throw new ArgumentException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                throw new ArgumentException(string.Format("{0} has length {1}.  Minlength is {2}", property.Name, value.ToString().Length, attr.Length).AppendJson(input, outputJsonPayload));
            }
        }

        private static void CheckRequiredAttribute(PropertyInfo property, object input, bool outputJsonPayload)
        {
            var value = property.GetValue(input);

            if (typeof(IList).IsAssignableFrom(property.PropertyType) && value == null) //check if object is a list and is null
            {
                throw new ArgumentNullException(property.Name + " is null ".AppendJson(input, outputJsonPayload));
            }

            var attr = (RequiredAttribute)(property.GetCustomAttribute(typeof(RequiredAttribute)));
            if (attr == null) return;

            //Validate whether Nullable fields are present and it contains proper values
            if ((Nullable.GetUnderlyingType(property.PropertyType) != null) && (value == null))
            {
                if (attr.ErrorMessage != null) throw new ArgumentException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                throw new ArgumentNullException(property.Name + " is null".AppendJson(input, outputJsonPayload));
            }

            switch (property.PropertyType.Name.ToUpper())
            {
                case "STRING":
                    //Validates null, empty string and white space -if a string is set with string.empty-value.Tostring() with fail
                    if (value == null || string.IsNullOrWhiteSpace(value.ToString()))
                    {
                        if (attr.ErrorMessage != null) throw new ArgumentException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                        throw new ArgumentNullException(property.Name + " is null".AppendJson(input, outputJsonPayload));
                    }
                    break;

                case "GUID":
                    // Guid result;
                    //Validate Guid- if you dont specify any value for Guid will be populated with Guid.Empty -explicitly check that
                    // if (!Guid.TryParse(value.ToString(), out result) || (result == Guid.Empty))
                    if ((Guid)value == Guid.Empty)
                    {
                        if (attr.ErrorMessage != null) throw new ArgumentException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                        throw new ArgumentNullException(property.Name + " is null".AppendJson(input, outputJsonPayload));
                    }
                    break;

                case "INT32":
                case "INT64":
                case "DECIMAL":
                    //Currently among value types -we support int and decimal - Converting to bigger type- int as it can hold decimal
                    if (Convert.ToDouble(value) == 0)
                    {
                        if (attr.ErrorMessage != null) throw new ArgumentException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                        throw new ArgumentNullException(property.Name + " is null".AppendJson(input, outputJsonPayload));
                    }
                    break;

                default:
                    //handles objects and all others
                    if (value == null)
                    {
                        if (attr.ErrorMessage != null) throw new ArgumentException(attr.ErrorMessage.AppendJson(input, outputJsonPayload));
                        throw new ArgumentNullException(property.Name + " is null".AppendJson(input, outputJsonPayload));
                    }
                    break;
            }
        }

        private static bool IsPrimitiveType(object myObject)
        {
            var myType = myObject.GetType();
            return myType.IsPrimitive || myType.Namespace == null || myType.Namespace.Equals("System");
        }

        /// <summary>
        ///
        /// </summary>
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