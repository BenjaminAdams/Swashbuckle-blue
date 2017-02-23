using Newtonsoft.Json.Linq;
using NUnit.Framework;
using Swashbuckle.Dummy.Controllers;

namespace Swashbuckle.Tests.Swagger
{
    [TestFixture]
    public class FromUriParamsTests : SwaggerTestBase
    {
        public FromUriParamsTests()
            : base("swagger/docs/{apiVersion}")
        { }

        [SetUp]
        public void SetUp()
        {
            SetUpDefaultRouteFor<FromUriParamsController>();
            SetUpHandler();
        }

        [Test]
        public void It_sets_collection_format_multi_for_array_params()
        {
            var swagger = GetContent<JObject>("http://tempuri.org/swagger/docs/v1");
            var headParams = swagger["paths"]["/fromuriparams"]["head"]["parameters"];

            var expectedHeadParams = JArray.FromObject(new object[]
            {
                new
                {
                    name = "currencies",
                    @in = "query",
                    required = true,
                    type = "array",
                    items = new
                    {
                        type = "string",
                        ignore = false
                    },
                    collectionFormat = "multi",
                    ignore = false
                }
            });

            Assert.AreEqual(expectedHeadParams.ToString(), headParams.ToString());
        }
    }
}