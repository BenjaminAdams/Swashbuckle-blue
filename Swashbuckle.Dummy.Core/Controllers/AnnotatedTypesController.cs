using Swashbuckle.Annotations;
using Swashbuckle.Annotations.AttributeTags;
using System;
using System.Collections.Generic;
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
        public Payment IgnoreOneParam(Payment payment)
        {
            if (!ModelState.IsValid)
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState));

            return payment;
        }


        [HttpPost]
        [Route("ArrayInputExample")]
        public List<ClassRoom> ArrayInputExample(List<ClassRoom> input)
        {
            if (!ModelState.IsValid)
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState));

            return input;
        }

    }

    public class ClassRoom
    {
        [SwaggerExample("Mr. Adams")]
        [RequiredConditionally]
        public string TeacherName { get; set; }

        [SwaggerExample("5")]
        [Required]
        public int StudentCount { get; set; }

        [SwaggerExample("Blue")]
        public string FavoriteColor { get; set; }
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
        [RequiredConditionally]
        [Required, Range(14, 99)]
        public int ExpYear { get; set; }

        [StringLength(500, MinimumLength = 10)]
        public string Note { get; set; }

        [SwaggerIgnore]
        public string IgnoredAttr { get; set; }
    }
}