using Swashbuckle.Swagger.Attributes;
using System;
using System.Web.Http;

namespace Swashbuckle.Dummy.Controllers
{
    public class AttributeRoutesController : ApiController
    {
        [Route("subscriptions/{id}/cancel")]
        public void CancelSubscription([SwaggerExample("777")] int id)
        {
            throw new NotImplementedException();
        }
    }
}