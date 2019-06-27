using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CQRS.Query.Categories;
using CQRS.QueryData;
using DAL.Repositories.Abstract;
using DTO.Mapper;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController
    {
        private readonly IMediator mediator;

        public CategoryController(IMediator mediator) => this.mediator = mediator;

        [HttpGet]
        public async Task<IEnumerable<CategoryQueryData>> Get() => await mediator.Send(new GetCategoriesListQuery());

    }
}
