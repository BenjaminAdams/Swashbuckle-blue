using Newtonsoft.Json.Serialization;
using Swashbuckle.Swagger.Attributes;
using System;
using System.ComponentModel.DataAnnotations;
using System.Reflection;

namespace Swashbuckle.Swagger
{
    public static class JsonPropertyExtensions
    {
        public static bool IsRequired(this JsonProperty jsonProperty)
        {
            return jsonProperty.HasAttribute<RequiredAttribute>();
        }

        public static bool IsObsolete(this JsonProperty jsonProperty)
        {
            return jsonProperty.HasAttribute<ObsoleteAttribute>();
        }

        public static bool IsSwaggerIgnore(this JsonProperty jsonProperty)
        {
            return jsonProperty.HasAttribute<SwaggerIgnore>();
        }

        public static bool IsSwaggerExample(this JsonProperty jsonProperty)
        {
            return jsonProperty.HasAttribute<SwaggerExample>();
        }

        public static bool HasAttribute<T>(this JsonProperty jsonProperty)
        {
            var propInfo = jsonProperty.PropertyInfo();
            return propInfo != null && Attribute.IsDefined(propInfo, typeof(T));
        }

        public static PropertyInfo PropertyInfo(this JsonProperty jsonProperty)
        {
            if (jsonProperty.UnderlyingName == null) return null;
            return jsonProperty.DeclaringType.GetProperty(jsonProperty.UnderlyingName, jsonProperty.PropertyType);
        }

        public static PropertyInfo PropertyInfo(this JsonArrayContract jsonProperty)
        {
            if (jsonProperty.UnderlyingType.FullName == null) return null;
            return jsonProperty.UnderlyingType.GetProperty(jsonProperty.UnderlyingType.FullName, jsonProperty.UnderlyingType);
        }
    }
}