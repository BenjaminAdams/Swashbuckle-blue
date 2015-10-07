using Swashbuckle.Swagger.Attributes;
using System;
using System.Web.Http;

namespace Swashbuckle.Dummy.Controllers
{
    public class MultipleApiVersionsController : ApiController
    {
        [Route("{apiVersion:regex(v1|v2)}/todos")]
        public int Create([FromBody, SwaggerExample("this is an example description")]string description)
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        [Route("{apiVersion:regex(v2)}/todos/{id}")]
        public void Update(int id, [FromBody, SwaggerExample("this is an example description")]   string description)
        {
            throw new NotImplementedException();
        }
    }
}