using System.Collections.Generic;
using System.Threading.Tasks;
using CQRS.Command.Categories;
using CQRS.Query.Categories;
using CQRS.QueryData;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController
    {
        private readonly IMediator mediator;

        public CategoryController(IMediator mediator) => this.mediator = mediator;

        [AllowAnonymous]
        [HttpGet]
        public async Task<IEnumerable<CategoryQueryData>> Get() => await mediator.Send(new GetCategoriesListQuery());

        [AllowAnonymous]
        [HttpGet("details")]
        public async Task<CategoryDetailsQueryData> GetDetails([FromQuery] GetCategoryDetailsQuery query) => await mediator.Send(query);

        [HttpDelete]
        public async Task Delete([FromQuery] DeleteCategoryCommand command) => await mediator.Send(command);

        [HttpPost]
        public async Task Add([FromBody] AddCategoryCommand command) => await mediator.Send(command);

        [HttpPut]
        public async Task Update([FromBody] UpdateCategoryCommand command) => await mediator.Send(command);
    }

}
