using Swashbuckle.Annotations;
using Swashbuckle.Annotations.AttributeTags;
using System;
using System.ComponentModel.DataAnnotations;
using System.Web.Http;

namespace Swashbuckle.Dummy.Controllers
{
    public class AttributeRoutesController : ApiController
    {
        [Route("v3/subscriptions/IgnoreThis")]
        // [SwaggerIgnore]
        public void IgnoreThis([SwaggerIgnore] string ignoreThis, [SwaggerExample("57575757")] string butNotThis)
        {
            throw new NotImplementedException();
        }

        [Route("v3/subscriptions/{id}/cancel")]
        public void CancelSubscription([SwaggerExample("777"), Range(0, 9861)] int id, [MaxLength(55)] string strWithMaxLen,
                            [MinLength(24)] string strWithMinLen)
        {
            throw new NotImplementedException();
        }
    }
}