using Swashbuckle.SwaggerUi;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Reflection;
using System.Text;

namespace Swashbuckle.Application
{
    public class SwaggerUiConfig
    {
        private readonly Dictionary<string, EmbeddedAssetDescriptor> _pathToAssetMap;
        private readonly Dictionary<string, string> _templateParams;
        private readonly Func<HttpRequestMessage, string> _rootUrlResolver;

        public SwaggerUiConfig(IEnumerable<string> discoveryPaths, Func<HttpRequestMessage, string> rootUrlResolver)
        {
            _pathToAssetMap = new Dictionary<string, EmbeddedAssetDescriptor>();

            _templateParams = new Dictionary<string, string>
            {
                { "%(vRootUrl)", "" },
                { "%(StylesheetIncludes)", "" },
                { "%(DiscoveryPaths)", String.Join("|", discoveryPaths) },
                { "%(DiscoveryUrlObj)", "{}" },
                { "%(CustomSwagDocLocation)", "" },
                { "%(BooleanValues)", "true|false" },
                { "%(ValidatorUrl)", "" },
                { "%(CustomScripts)", "" },
                { "%(CustomLogo)", "images/logo_small-png" },
                { "%(OAuth2Enabled)", "false" },
                { "%(OAuth2ClientId)", "" },
                { "%(OAuth2ClientSecret)", "" },
                { "%(OAuth2Realm)", "" },
                { "%(OAuth2AppName)", "" },
                { "%(ApiKeyLocation)", "header" },
                { "%(ApiKeyName)", "none" },
                { "%(EnableDiscoveryUrlSelector)", "false" },
                { "%(XmlVariableNamesUppercase)", "true" },
                { "%(XmlRemoveNameSpace)", "true" },
            };
            _rootUrlResolver = rootUrlResolver;

            MapPathsForSwaggerUiAssets();

            // Use some custom versions to support config and extensionless paths
            var thisAssembly = GetType().Assembly;
            CustomAsset("index", thisAssembly, "Swashbuckle.SwaggerUi.CustomAssets.index.html");
            CustomAsset("favicon.ico", thisAssembly, "Swashbuckle.SwaggerUi.CustomAssets.favicon-16x16.png");
            CustomAsset("swagger-ui-js", thisAssembly, "Swashbuckle.SwaggerUi.CustomAssets.swagger-ui.js");
            CustomAsset("swagger-ui-bundle-js", thisAssembly, "Swashbuckle.SwaggerUi.CustomAssets.swagger-ui-bundle.js");
            CustomAsset("swagger-ui-bundle.js", thisAssembly, "Swashbuckle.SwaggerUi.CustomAssets.swagger-ui-bundle.js");
            CustomAsset("swagger-ui-bundle.js.map", thisAssembly, "Swashbuckle.SwaggerUi.CustomAssets.swagger-ui-bundle.js.map");
            CustomAsset("swagger-ui-bundle-js.map", thisAssembly, "Swashbuckle.SwaggerUi.CustomAssets.swagger-ui-bundle.js.map");
            CustomAsset("swagger-ui-bundle-js-map", thisAssembly, "Swashbuckle.SwaggerUi.CustomAssets.swagger-ui-bundle.js.map");
            CustomAsset("swagger-ui-standalone-preset-js", thisAssembly, "Swashbuckle.SwaggerUi.CustomAssets.swagger-ui-standalone-preset.js");
            CustomAsset("swagger-ui-standalone-preset-js", thisAssembly, "Swashbuckle.SwaggerUi.CustomAssets.swagger-ui-standalone-preset.js");
            CustomAsset("oauth2-redirect.html", thisAssembly, "Swashbuckle.SwaggerUi.CustomAssets.oauth2-redirect.html");
            CustomAsset("oauth2-redirect-html", thisAssembly, "Swashbuckle.SwaggerUi.CustomAssets.oauth2-redirect.html");

            CustomAsset("swagger-ui.css", thisAssembly, "Swashbuckle.SwaggerUi.CustomAssets.swagger-ui.css");
            CustomAsset("swagger-ui-css", thisAssembly, "Swashbuckle.SwaggerUi.CustomAssets.swagger-ui.css");
        }

        public void CustomLogo(string url)
        {
            _templateParams["%(CustomLogo)"] = url;
        }

        public void CustomSwagDocLocation(string url)
        {
            _templateParams["%(CustomSwagDocLocation)"] = url;
        }

        public void InjectStylesheet(Assembly resourceAssembly, string resourceName, string media = "screen")
        {
            var path = "ext/" + resourceName.Replace(".", "-");

            var stringBuilder = new StringBuilder(_templateParams["%(StylesheetIncludes)"]);
            stringBuilder.AppendLine("<link href='" + path + "' media='" + media + "' rel='stylesheet' type='text/css' />");
            _templateParams["%(StylesheetIncludes)"] = stringBuilder.ToString();

            CustomAsset(path, resourceAssembly, resourceName);
        }

        internal IAssetProvider GetSwaggerUiProvider()
        {
            return new EmbeddedAssetProvider(_pathToAssetMap, _templateParams);
        }

        public void SetApiKeyDetails(SecuritySchemeBuilder sec)
        {
            if (sec == null) return;
            var built = sec.Build();
            _templateParams["%(ApiKeyLocation)"] = built.@in;
            _templateParams["%(ApiKeyName)"] = built.name;

            if (string.IsNullOrWhiteSpace(_templateParams["%(ApiKeyName)"]))
            {
                _templateParams["%(ApiKeyName)"] = "none";
            }
        }

        public void BooleanValues(IEnumerable<string> values)
        {
            _templateParams["%(BooleanValues)"] = String.Join("|", values);
        }

        public void SetValidatorUrl(string url)
        {
            _templateParams["%(ValidatorUrl)"] = url;
        }

        public void DisableValidator()
        {
            _templateParams["%(ValidatorUrl)"] = "null";
        }

        public void InjectJavaScript(Assembly resourceAssembly, string resourceName)
        {
            var path = "ext/" + resourceName.Replace(".", "-");

            var stringBuilder = new StringBuilder(_templateParams["%(CustomScripts)"]);
            if (stringBuilder.Length > 0)
                stringBuilder.Append("|");

            stringBuilder.Append(path);
            _templateParams["%(CustomScripts)"] = stringBuilder.ToString();

            CustomAsset(path, resourceAssembly, resourceName);
        }

        [Obsolete]
        public void DocExpansion(DocExpansion docExpansion)
        {
            _templateParams["%(DocExpansion)"] = docExpansion.ToString().ToLower();
        }

        public void XmlVariableNamesUppercase(bool value)
        {
            _templateParams["%(XmlVariableNamesUppercase)"] = value.ToString().ToLower();
        }

        public void XmlRemoveNameSpace(bool value)
        {
            _templateParams["%(XmlRemoveNameSpace)"] = value.ToString().ToLower();
        }

        public void CustomAsset(string path, Assembly resourceAssembly, string resourceName)
        {
            _pathToAssetMap[path] = new EmbeddedAssetDescriptor(resourceAssembly, resourceName, path == "index");
        }

        public void EnableDiscoveryUrlSelector()
        {
            // InjectJavaScript(GetType().Assembly, "Swashbuckle.SwaggerUi.CustomAssets.discoveryUrlSelector.js"); //old version injected a new view to handle this, we will handle it by a template param now
            _templateParams["%(EnableDiscoveryUrlSelector)"] = "true";
        }

        public void SetDiscUrlsObj(List<DiscoveryUrlsObj> discObj)
        {
            var str = "[";

            foreach (var disc in discObj)
            {
                str += string.Format("{{version:'{0}', title: '{1}', url:'{2}'}},  ", disc.version, disc.title, disc.url);
            }

            str += "]";

            _templateParams["%(DiscoveryUrlObj)"] = str;
        }

        public void EnableOAuth2Support(string clientId, string realm, string appName)
        {
            EnableOAuth2Support(clientId, "N/A", realm, appName);
        }

        public void EnableOAuth2Support(string clientId, string clientSecret, string realm, string appName)
        {
            _templateParams["%(OAuth2Enabled)"] = "true";
            _templateParams["%(OAuth2ClientId)"] = clientId;
            _templateParams["%(OAuth2ClientSecret)"] = clientSecret;
            _templateParams["%(OAuth2Realm)"] = realm;
            _templateParams["%(OAuth2AppName)"] = appName;
        }

        internal string GetRootUrl(HttpRequestMessage swaggerRequest)
        {
            return _rootUrlResolver(swaggerRequest);
        }

        private void MapPathsForSwaggerUiAssets()
        {
            var thisAssembly = GetType().Assembly;
            foreach (var resourceName in thisAssembly.GetManifestResourceNames())
            {
                // if (resourceName.Contains("Swashbuckle.SwaggerUi.CustomAssets")) continue; // original assets only

                var path = resourceName
                    .Replace("\\", "/");
                // .Replace(".", "-"); // extensionless to avoid RUMMFAR

                _pathToAssetMap[path] = new EmbeddedAssetDescriptor(thisAssembly, resourceName, path == "index");
            }
        }
    }

    public enum DocExpansion
    {
        None,
        List,
        Full
    }
}