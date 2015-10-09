using Swashbuckle.Dummy.Controllers.Requests;
using System;
using System.Web.Http;

namespace Swashbuckle.Dummy.Controllers
{
    public class ConflictingTypesController : ApiController
    {
        public int Create(Blog blog)
        {
            throw new NotImplementedException();
        }

        public Responses.Blog GetById(int id)
        {
            throw new NotImplementedException();
        }
    }

    namespace Requests
    {
        public class Blog
        {
            public string Text { get; set; }
        }
    }

    namespace Responses
    {
        public class Blog
        {
            public int Id { get; set; }
            public string Text { get; set; }
        }
    }
}