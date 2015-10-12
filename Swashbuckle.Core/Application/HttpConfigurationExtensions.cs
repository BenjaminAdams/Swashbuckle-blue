using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Routing;

namespace Swashbuckle.Application
{
    public static class HttpConfigurationExtensions
    {
        private static readonly string DefaultRouteTemplate = "swagger/docs/{apiVersion}";
        private static SwaggerDocsConfig _cnfg;

        public static SwaggerEnabledConfiguration EnableSwagger(this HttpConfiguration httpConfig, Action<SwaggerDocsConfig> configure = null)
        {
            return EnableSwagger(httpConfig, DefaultRouteTemplate, configure);
        }

        public static SwaggerEnabledConfiguration EnableSwagger(this HttpConfiguration httpConfig, string routeTemplate, Action<SwaggerDocsConfig> configure = null)
        {
            var config = new SwaggerDocsConfig();
            if (configure != null) configure(config);

            _cnfg = config;

            httpConfig.Routes.MapHttpRoute(
                name: "swagger_docs",
                routeTemplate: routeTemplate,
                defaults: null,
                constraints: new { apiVersion = @".+" },
                handler: new SwaggerDocsHandler(config)
            );

            return new SwaggerEnabledConfiguration(
                httpConfig,
                config.GetRootUrl,
                config.GetApiVersions().Select(version => routeTemplate.Replace("{apiVersion}", version)), config);
        }

        public static JsonSerializerSettings SerializerSettingsOrDefault(this HttpConfiguration httpConfig)
        {
            //var formatter = httpConfig.Formatters.JsonFormatter;
            //if (formatter != null)
            //{
            //    return formatter.SerializerSettings;
            //}

            return new JsonSerializerSettings();
        }
    }

    public class SwaggerEnabledConfiguration
    {
        private static readonly string DefaultRouteTemplate = "swagger/ui/{*assetPath}";

        private readonly HttpConfiguration _httpConfig;
        private readonly Func<HttpRequestMessage, string> _rootUrlResolver;
        private readonly IEnumerable<string> _discoveryPaths;
        private readonly SwaggerDocsConfig _swaggerDocsConfig;

        public SwaggerEnabledConfiguration(HttpConfiguration httpConfig, Func<HttpRequestMessage, string> rootUrlResolver,
            IEnumerable<string> discoveryPaths, SwaggerDocsConfig swaggerDocsConfig)
        {
            _swaggerDocsConfig = swaggerDocsConfig;
            _httpConfig = httpConfig;
            _rootUrlResolver = rootUrlResolver;
            _discoveryPaths = discoveryPaths;
        }

        public void EnableSwaggerUi(Action<SwaggerUiConfig> configure = null)
        {
            EnableSwaggerUi(DefaultRouteTemplate, configure);
        }

        public void EnableSwaggerUi(string routeTemplate, Action<SwaggerUiConfig> configure = null)
        {
            var config = new SwaggerUiConfig(_discoveryPaths, _rootUrlResolver);
            if (configure != null) configure(config);

            var apiKey = _swaggerDocsConfig.GetApiKeyDetails();
            config.SetApiKeyDetails(apiKey);

            _httpConfig.Routes.MapHttpRoute(
                name: "swagger_ui",
                routeTemplate: routeTemplate,
                defaults: null,
                constraints: new { assetPath = @".+" },
                handler: new SwaggerUiHandler(config)
            );

            if (routeTemplate == DefaultRouteTemplate)
            {
                _httpConfig.Routes.MapHttpRoute(
                    name: "swagger_ui_shortcut",
                    routeTemplate: "swagger",
                    defaults: null,
                    constraints: null,
                    handler: new RedirectHandler(_rootUrlResolver, "swagger/ui/index"));
            }
        }
    }
}