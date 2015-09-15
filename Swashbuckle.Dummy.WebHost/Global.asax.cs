using System;
using System.Web;
using System.Web.Http;

namespace Swashbuckle.Dummy.WebHost
{
    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {
            SwaggerConfig.Register(GlobalConfiguration.Configuration);

            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}