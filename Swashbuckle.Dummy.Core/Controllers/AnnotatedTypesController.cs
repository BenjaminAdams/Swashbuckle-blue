using Swashbuckle.Annotations;
using Swashbuckle.Annotations.AttributeTags;
using System;
using System.ComponentModel.DataAnnotations;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Swashbuckle.Dummy.Controllers
{
    [RoutePrefix("v1/thisShouldBeIgnored")]
    public class AnnotatedTypesController : ApiController
    {
        [HttpPost]
        [Route("IgnoreThisPlz")]
        public int IgnoreOneParam(Payment payment)
        {
            if (!ModelState.IsValid)
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState));

            throw new NotImplementedException();
        }
    }

    public class Payment
    {
        [Required]
        public decimal Amount { get; set; }

        [SwaggerIgnore]
        public string SwaggerIgnoredParam { get; set; }

        [Required, RegularExpression("^[3-6]?\\d{12,15}$")]
        public string CardNumber { get; set; }

        [Required, Range(1, 12)]
        public int ExpMonth { get; set; }

        [Required, Range(14, 99)]
        public int ExpYear { get; set; }

        [StringLength(500, MinimumLength = 10)]
        public string Note { get; set; }

        [SwaggerIgnore]
        public string IgnoredAttr { get; set; }
    }
}