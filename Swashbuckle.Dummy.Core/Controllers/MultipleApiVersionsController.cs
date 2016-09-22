using Swashbuckle.Annotations;
using Swashbuckle.Annotations.AttributeTags;
using System;
using System.ComponentModel.DataAnnotations;
using System.Web.Http;

namespace Swashbuckle.Dummy.Controllers
{
    public enum testEnum
    {
        testItem1,
        testItem3434,
        asdasdasd
    }

    public class MultipleApiVersionsController : ApiController
    {
        [Route("{apiVersion:regex(v1|v2)}/todos")]
        public int Create([FromBody, SwaggerExample("this is an example description"), MaxLength(39)] string description, testEnum anEnumField)
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        [Route("{apiVersion:regex(v2)}/todos/{id}")]
        public void Update([SwaggerExample("12333")] int id,
            [FromBody, SwaggerExample("this is an example description")] string description)
        {
            throw new NotImplementedException();
        }
    }
}