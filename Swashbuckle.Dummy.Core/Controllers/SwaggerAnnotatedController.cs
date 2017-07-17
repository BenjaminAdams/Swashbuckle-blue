﻿using Swashbuckle.Dummy.SwaggerExtensions;
using Swashbuckle.Swagger.Annotations;
using System;
using System.Collections.Generic;
using System.Net;
using System.Web.Http;

namespace Swashbuckle.Dummy.Controllers
{
    [SwaggerResponse(400, "Bad request")]
    [RoutePrefix("v3/SwaggerAnnotated")]
    public class SwaggerAnnotatedController : ApiController
    {
        [SwaggerResponseRemoveDefaults]
        [SwaggerResponse(HttpStatusCode.Created, Type = typeof(int))]
        [SwaggerResponse(HttpStatusCode.BadRequest, "Invalid message", typeof(HttpError))]
        public int Create(Message message)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Message> GetAll()
        {
            throw new NotImplementedException();
        }

        [SwaggerOperationFilter(typeof(AddGetMessageExamples))]
        public Message GetById(int id)
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        [SwaggerOperation("UpdateMessage", Tags = new[] { "messages" }, Schemes = new[] { "ws" })]
        public void Put(int id, Message message)
        {
            throw new NotImplementedException();
        }
    }

    [SwaggerSchemaFilter(typeof(AddMessageDefault))]
    public class Message
    {
        public string Title { get; set; }
        public string Content { get; set; }
    }
}