using System.Collections.Generic;
using System.Threading.Tasks;
using CQRS.Query.Categories;
using CQRS.QueryData;
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
