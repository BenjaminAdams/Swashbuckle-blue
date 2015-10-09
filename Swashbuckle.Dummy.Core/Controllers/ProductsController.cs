﻿using System;
using System.Collections.Generic;
using System.Web.Http;

namespace Swashbuckle.Dummy.Controllers
{
    public class ProductsController : ApiController
    {
        public int Create(Product product)
        {
            throw new NotImplementedException();
        }

        public Product GetById(int id)
        {
            throw new NotImplementedException();
        }

        [HttpGet]
        public IEnumerable<Product> GetAllByType(ProductType type)
        {
            throw new NotImplementedException();
        }
    }

    public class Product
    {
        public int Id { get; internal set; }
        public ProductType Type { get; set; }
        public string Description { get; set; }
        public decimal UnitPrice { get; set; }
    }

    public enum ProductType
    {
        Book = 2,
        Album = 4
    }
}