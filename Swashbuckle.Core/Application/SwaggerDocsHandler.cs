using Newtonsoft.Json;
using Swashbuckle.Swagger;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;

namespace Swashbuckle.Application
{
    public class SwaggerDocsHandler : HttpMessageHandler
    {
        private readonly SwaggerDocsConfig _config;
        private static Dictionary<string, SwaggerDocument> _cache = new Dictionary<string, SwaggerDocument>();

        public SwaggerDocsHandler(SwaggerDocsConfig config)
        {
            _config = config;
        }

        protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            var swaggerProvider = _config.GetSwaggerProvider(request);
            var rootUrl = _config.GetRootUrl(request);
            var apiVersion = request.GetRouteData().Values["apiVersion"].ToString();
            var cacheKey = string.Format("{0}_{1}", rootUrl, apiVersion);

            try
            {
                SwaggerDocument swaggerDoc;
                if (_cache.ContainsKey(cacheKey))
                {
                    _cache.TryGetValue(cacheKey, out swaggerDoc);
                }
                else
                {
                    swaggerDoc = swaggerProvider.GetSwagger(rootUrl, apiVersion);
                    _cache.Add(cacheKey, swaggerDoc);
                }

                var content = ContentFor(request, swaggerDoc);
                return TaskFor(new HttpResponseMessage { Content = content });
            }
            catch (UnknownApiVersion ex)
            {
                return TaskFor(request.CreateErrorResponse(HttpStatusCode.NotFound, ex));
            }
        }

        private HttpContent ContentFor(HttpRequestMessage request, SwaggerDocument swaggerDoc)
        {
            var negotiator = request.GetConfiguration().Services.GetContentNegotiator();

            var result = negotiator.Negotiate(typeof(SwaggerDocument), request, GetSupportedSwaggerFormatters());

            return new ObjectContent(typeof(SwaggerDocument), swaggerDoc, result.Formatter, result.MediaType);
            //return new ObjectContent(typeof(SwaggerDocument), swaggerDoc, new JsonMediaTypeFormatter());
            //return new ObjectContent(typeof(SwaggerDocument), swaggerDoc, result.Formatter, result.MediaType);
        }

        private static List<MediaTypeFormatter> GetSupportedSwaggerFormatters()
        {
            // NOTE: The custom converter would not be neccessary in Newtonsoft.Json >= 5.0.5 as JsonExtensionData
            // provides similar functionality. But, need to stick with older version for WebApi 5.0.0 compatibility
            return new List<MediaTypeFormatter>()
            {
                new JsonMediaTypeFormatter()
                {
                    SerializerSettings = new JsonSerializerSettings()
                    {
                         NullValueHandling = NullValueHandling.Ignore,
                         Converters = new List<JsonConverter>() {new VendorExtensionsConverter()}
                    }
                }
            };
        }

        private Task<HttpResponseMessage> TaskFor(HttpResponseMessage response)
        {
            var tsc = new TaskCompletionSource<HttpResponseMessage>();
            tsc.SetResult(response);
            return tsc.Task;
        }
    }

    public class JsonContentNegotiator : IContentNegotiator
    {
        private readonly JsonMediaTypeFormatter _jsonFormatter;

        public JsonContentNegotiator(JsonMediaTypeFormatter formatter)
        {
            _jsonFormatter = formatter;
        }

        public ContentNegotiationResult Negotiate(Type type, HttpRequestMessage request, IEnumerable<MediaTypeFormatter> formatters)
        {
            var result = new ContentNegotiationResult(_jsonFormatter, new MediaTypeHeaderValue("application/json"));
            return result;
        }
    }
}