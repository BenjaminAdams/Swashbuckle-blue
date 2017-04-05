using Newtonsoft.Json;
using Swashbuckle.Annotations;
using Swashbuckle.Annotations.AttributeTags;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Net;
using System.Web.Http;
using Swashbuckle.Swagger.Annotations;

namespace Swashbuckle.Dummy.Controllers
{
    [RoutePrefix("xmlannotated")]
    public class XmlAnnotatedController : ApiController
    {
        /// <summary>
        ///     Registers a new Account based on <paramref name="account" />.
        /// </summary>
        /// <remarks>Create an <see cref="Account" /> to access restricted resources</remarks>
        /// <param name="account">Details for the account to be created</param>
        /// <response code="201"><paramref name="account" /> created</response>
        /// <response code="400">Username already in use</response>
        [HttpPost]
        public int Create(Account account)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        ///     Updates a SubAccount.
        /// </summary>
        [HttpPut]
        public int UpdateSubAccount(SubAccount account)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        ///     Search all registered accounts by keywords
        /// </summary>
        /// <remarks>Restricted to admin users only</remarks>
        /// <param name="keywords">List of search keywords</param>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<Account> Search([RequiredConditionally]IEnumerable<string> keywords)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        ///     Filters account based on the given parameters.
        /// </summary>
        /// <param name="q">The search query on which to filter accounts</param>
        /// <param name="page">A complex type describing the paging to be used for the request</param>
        /// <returns></returns>
        [HttpGet]
        [Route("filter")]
        public IEnumerable<Account> Filter([SwaggerExample("123")] string q, [RequiredConditionally][SwaggerIgnore][FromUri] Page page)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        ///     Prevents the account from being used
        /// </summary>
        [HttpPut]
        [ActionName("put-on-hold")]
        public void PutOnHold([SwaggerExample("333333")]    [RequiredConditionally] int id)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        ///     Adds a reward to an existing account
        /// </summary>
        /// <param name="reward"></param>
        [HttpPut]
        [Route("{id}/add-reward")]
        public SoMuch AddReward([SwaggerExample("GUID")] int id, [RequiredConditionally] Reward<string> reward)
        {
            SwagValidator.Validate(reward);

            return new SoMuch();
        }

        /// <summary>
        ///    So much funs! .So we can verify an array schema serializes properly
        /// </summary>
        /// <param name="funs"></param>
        [HttpPost]
        [Route("yayxx")]
        [SwaggerResponse(HttpStatusCode.Accepted)]
        [SwaggerResponse(HttpStatusCode.Ambiguous)]
        [SwaggerResponse(HttpStatusCode.Conflict)]
        [SwaggerResponse(HttpStatusCode.BadRequest)]
        [SwaggerResponse(HttpStatusCode.Created)]
        [SwaggerResponse(HttpStatusCode.HttpVersionNotSupported)]
        public SoMuch AddFunsxx(SoMuch soMuch)
        {
            //var results = new List<ValidationResult>();
            //var isValid = Validator.TryValidateObject(soMuch, new ValidationContext(soMuch, null, null), results, true);
            //Console.WriteLine("Validation resulted in " + isValid);

            //isValid = Validator.TryValidateObject(soMuch.NestedObjTest, new ValidationContext(soMuch.NestedObjTest, null, null), results, true);
            //Console.WriteLine("Validation resulted in " + isValid);

            //Validator.ValidateObject(soMuch, new ValidationContext(soMuch, null, null));
            //Validator.ValidateObject(soMuch.NestedObjTest, new ValidationContext(soMuch.NestedObjTest, null, null));

            SwagValidator.Validate(soMuch);

            throw new NotImplementedException();
        }

        /// <summary>
        ///    Testing [SwaggerCustomRoute] attribute
        /// </summary>

        [HttpPost]
        [Route("CustomRouteTest")]
        [SwaggerRouteName("YayRenameWorked")]
        public void ThisShouldBeRenamed(SoMuch soMuch)
        {
            throw new NotImplementedException();
        }
    }

    /// <summary>
    ///     SoMuch bro
    /// </summary>
    public class SoMuch
    {
        /// <summary>
        ///     An array of funs!
        /// </summary>
        [Required]
        public List<CoolThings> Funs { get; set; }

        public SubAccount NestedObjTest { get; set; }

        [RequiredConditionally]
        public CatNames EumTest { get; set; }

        public List<CatNames> EumTestList { get; set; }

        [Required]
        public List<TestListStuff> ListWithSomeGuidsInside { get; set; }
    }

    public enum CatNames
    {
        Ziggy,
        Mouse
    }

    /// <summary>
    ///     Cool things we can do!
    /// </summary>
    public class CoolThings
    {
        /// <summary>
        ///     The Id of the thing
        /// </summary>
        [SwaggerExample("123123")]
        public int Id { get; set; }

        /// <summary>
        ///     The name of the cool thing we did
        /// </summary>
        [SwaggerExample("Kayaking")]
        public string Name { get; set; }

        /// <summary>
        ///     This is a test to see if [SwaggerExample("null")] will make the field null in the example payload
        /// </summary>
        [SwaggerExample("null")]
        public string SwaggerExampleNullTest { get; set; }

        [DefinedValidationAttribute(ValidationType.Country)]
        [SwaggerExample("US")]
        public string Country { get; set; }
    }

    [SwaggerIgnore]
    public class Page
    {
        /// <summary>
        ///     The maximum number of accounts to return
        /// </summary>
        [SwaggerExample("50")]
        public int Limit { get; set; }

        /// <summary>
        ///     Offset into the result
        /// </summary>
        [SwaggerExample("0")]
        [SwaggerIgnore]
        public int Offset { get; set; }
    }

    /// <summary>
    ///     Account details
    /// </summary>
    public class Account
    {
        /// <summary>
        ///    Really long SwaggerExample test
        /// </summary>
        [SwaggerExample("abc12333333")]
        public virtual int AccountID { get; set; }

        /// <summary>
        ///     a random guid
        /// </summary>
        [SwaggerExample("GUID")]
        [Required]
        public Guid StupdSexyFlanders { get; set; }

        /// <summary>
        ///    Really long SwaggerExample test
        /// </summary>
        [SwaggerExample("abc12333333xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")]
        public string Username { get; set; }

        /// <summary>
        ///     For authentication
        /// </summary>
        [SwaggerExample("my secret pw")]
        public string Password { get; set; }

        public AccountPreferences Preferences { get; set; }

        public class AccountPreferences
        {
            /// <summary>
            ///     Provide a display name to use instead of Username when signed in
            /// </summary>
            [SwaggerExample("Benjamin")]
            public string DisplayName { get; set; }

            /// <summary>
            ///     Flag to indicate if marketing emails may be sent
            /// </summary>
            [SwaggerExample("Hey its a working example guy")]
            [JsonProperty("allow-marketing-emails")]
            // [StringLength(MaximumLength = 50, MinimumLength = 5)]
            // [Range(5, 500)]
            public string AllowMarketingEmails { get; set; }
        }
    }

    /// <summary>
    ///     A Sub-Type of Account
    /// </summary>
    public class SubAccount : Account
    {
        /// <summary>
        ///     The Account ID for SubAccounts should be 7 digits.
        /// </summary>
        [SwaggerExample("RAND")]
        [Range(0, 3)]
        public override int AccountID { get; set; }

        [Required]
        public string ThisIsRequired { get; set; }
    }

    /// <summary>
    ///     A redeemable reward
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class Reward<T>
    {
        /// <summary>
        ///     The monetary value of the reward
        /// </summary>
        [SwaggerExample("some kinda value")]
        public decimal value;

        /// <summary>
        ///     The reward type
        /// </summary>
        [SwaggerExample("some kinda type")]
        public T RewardType { get; set; }

        [SwaggerExample("GUID")]
        public Guid GuidTest { get; set; }
    }

    public class TestListStuff
    {
        /// <summary>
        /// The Amount to charge the customer.  Must be greater than zero
        /// </summary>
        [Required]
        [DataType(DataType.Currency)]
        [Range(0.01, Double.MaxValue)]
        [SwaggerExample("0.01")]
        public decimal Amount { get; set; }

        /// <summary>
        /// Identifies a location where the goods or services are coming from
        /// </summary>
        [Required]
        [SwaggerExample("GUID")]
        public Guid FulfillmentId { get; set; }
    }
}