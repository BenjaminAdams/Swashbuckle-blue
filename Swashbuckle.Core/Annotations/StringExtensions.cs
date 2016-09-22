using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Swashbuckle.Annotations.AttributeTags;
using System;
using System.IO;
using System.Text;
using System.Xml;
using System.Xml.Serialization;

namespace Swashbuckle.Annotations
{
    public static class StringExtensions
    {
        public static void ThrowIfNullOrEmpty(this string str, string variableName)
        {
            //in c# 6.0 we can use the nameof() operator and get the variableName =)
            if (string.IsNullOrWhiteSpace(str))
            {
                throw new ArgumentNullException(variableName);
            }
        }

        public static void ThrowIfNullOrEmpty(this string str, string variableName, string customException)
        {
            if (string.IsNullOrWhiteSpace(str))
            {
                throw new ArgumentException(customException, variableName);
            }
        }

        public static void ThrowIfNullOrEmpty(this string str, string variableName, string customException, object input)
        {
            if (string.IsNullOrWhiteSpace(str))
            {
                customException = str.AppendJson(input);

                ThrowIfNullOrEmpty(str, variableName, customException);
            }
        }

        public static string AppendJson<T>(this string str, T input, bool outputJsonPayload = true)
        {
            if (input == null) return str;
            if (outputJsonPayload == false) return str;

            try
            {
                str += ". Payload=" + ObjToJson(input);
            }
            catch (Exception ex)
            {
                str += " Not able to serialize payload";
            }
            return str;
        }

        public static string ObjToJson<T>(this T input)
        {
            if (input == null) return null;

            try
            {
                //for some reason we have to pass in the input.GetType() to the CloneJson method
                //it was not propigating the type T to the inside of CloneJson in some cases
                var inputValue = CloneJson(input.GetType(), input);
                var inputMasked = SensitiveData.MaskSensitiveData(inputValue);
                return JsonConvert.SerializeObject(inputMasked, new StringEnumConverter());
            }
            catch (Exception ex)
            {
                return "Not able to serialize payload";
            }
        }

        private static object CloneJson(Type T, object source)
        {
            // Don't serialize a null object, simply return the default for that object
            if (Object.ReferenceEquals(source, null))
            {
                return source;
            }

            var deserializeSettings = new JsonSerializerSettings { ObjectCreationHandling = ObjectCreationHandling.Replace };

            dynamic cloned = JsonConvert.DeserializeObject(JsonConvert.SerializeObject(source), T, deserializeSettings);

            try
            {
                //This is an ugly hack go get around the fact we set the Gpid in the setter, but when we clone the T source object it generates a new Gpid.
                dynamic dynSource = source;
                cloned.UpdateGpid(dynSource.Gpid);
                return cloned;
            }
            catch
            {
                return cloned;
            }
        }

        public static bool IsValidUrl(this string str)
        {
            Uri uriResult;
            return Uri.TryCreate(str, UriKind.Absolute, out uriResult) && (uriResult.Scheme == Uri.UriSchemeHttp || uriResult.Scheme == Uri.UriSchemeHttps);
        }

        public static string ObjToXmlString<T>(this T value)
        {
            if (value == null)
            {
                return null;
            }

            var serializer = new XmlSerializer(typeof(T));

            var settings = new XmlWriterSettings();
            settings.Encoding = new UnicodeEncoding(false, false); // no BOM in a .NET string
            settings.Indent = false;
            settings.OmitXmlDeclaration = false;

            using (var textWriter = new StringWriter())
            {
                using (var xmlWriter = XmlWriter.Create(textWriter, settings))
                {
                    serializer.Serialize(xmlWriter, value);
                }
                return textWriter.ToString();
            }
        }

        public static T StringToXmlObj<T>(this string xml)
        {
            if (string.IsNullOrEmpty(xml))
            {
                return default(T);
            }

            var serializer = new XmlSerializer(typeof(T));
            var settings = new XmlReaderSettings();
            using (StringReader textReader = new StringReader(xml))
            {
                using (XmlReader xmlReader = XmlReader.Create(textReader, settings))
                {
                    return (T)serializer.Deserialize(xmlReader);
                }
            }
        }
    }
}