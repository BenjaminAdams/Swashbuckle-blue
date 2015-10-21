﻿using Newtonsoft.Json;
using Swashbuckle.Swagger.Attributes;
using System;
using System.Collections.Generic;
using System.Web.Http;

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
        public IEnumerable<Account> Search(IEnumerable<string> keywords)
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
        public IEnumerable<Account> Filter([SwaggerExample("123")] string q, [SwaggerIgnore][FromUri] Page page)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        ///     Prevents the account from being used
        /// </summary>
        [HttpPut]
        [ActionName("put-on-hold")]
        public void PutOnHold([SwaggerExample("333333")] int id)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        ///     Adds a reward to an existing account
        /// </summary>
        /// <param name="reward"></param>
        [HttpPut]
        [Route("{id}/add-reward")]
        public void AddReward([SwaggerExample("GUID")] int id, Reward<string> reward)
        {
            throw new NotImplementedException();
        }
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
        ///     The ID for Accounts is 5 digits long.
        /// </summary>
        [SwaggerExample("abc12333333")]
        public virtual int AccountID { get; set; }

        /// <summary>
        ///     Uniquely identifies the account
        /// </summary>
        [SwaggerExample("Benjamin Adams")]
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
        public override int AccountID { get; set; }
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
    }
}