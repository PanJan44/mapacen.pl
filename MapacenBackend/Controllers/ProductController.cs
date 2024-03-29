﻿using MapacenBackend.Entities;
using MapacenBackend.Models.CategoryDtos;
using MapacenBackend.Models.ProductDtos;
using MapacenBackend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;

namespace MapacenBackend.Controllers
{
    [Route("api/product")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _service;

        public ProductController(IProductService service)
        {
            _service = service;
        }

        [HttpPost]
        //[Authorize(Roles = "Service Administrator, Local Administrator")]
        public ActionResult<int> CreateProduct([FromForm] CreateProductDto dto)
        {
            var productId = _service.CreateProduct(dto);
            return Created($"/api/product/{productId}", productId);
        }

        [HttpGet]
        public ActionResult<ProductDto> GetAllProducts()
        {
            return Ok(_service.GetAllProducts());
        }

        [HttpPut("{id}")]
        //[Authorize(Roles = "Service Administrator, Local Administrator")]
        public ActionResult<int> Update([FromBody] UpdateProductDto dto, [FromRoute] int id)
        {
            return Ok(_service.UpdateProduct(id, dto));
        }

        [HttpDelete("{id}")]
        public ActionResult Delete([FromRoute] int id)
        {
            _service.DeleteProduct(id);
            return Ok();
        }
    }
}
