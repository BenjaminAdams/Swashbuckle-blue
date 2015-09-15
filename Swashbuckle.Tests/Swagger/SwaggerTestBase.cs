using Newtonsoft.Json;
using NUnit.Framework;
using Swashbuckle.Application;
using Swashbuckle.Swagger;
using System;
using System.Web.Http;

namespace Swashbuckle.Tests.Swagger
{
    public class SwaggerTestBase : HttpMessageHandlerTestBase<SwaggerDocsHandler>
    {
        public SwaggerTestBase(string routeTemplate)
            : base(routeTemplate)
        { }

        public void SetUpHandler(Action<SwaggerDocsConfig> configure = null)
        {
            var swaggerDocsConfig = new SwaggerDocsConfig();
            swaggerDocsConfig.SingleApiVersion("v1", "Test API");

            if (configure != null)
                configure(swaggerDocsConfig);

            Handler = new SwaggerDocsHandler(swaggerDocsConfig);
        }
    }
}