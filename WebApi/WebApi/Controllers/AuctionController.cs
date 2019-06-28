using System.Collections.Generic;
using System.Threading.Tasks;
using CQRS.Command.Auctions;
using CQRS.Query.Auctions;
using CQRS.QueryData;
using DAL.Repositories.Abstract;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AuctionController : ControllerBase
    {
        private readonly IMediator mediator;

        public AuctionController( IMediator mediator)
        {
            this.mediator = mediator;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IEnumerable<AuctionQueryData>> Get([FromQuery] GetAuctionsListQuery query) => await mediator.Send(query);

        [AllowAnonymous]
        [HttpGet("details")]
        public async Task<AuctionQueryData> Get([FromQuery] GetAuctionDetailsQuery query) => await mediator.Send(query);

        [HttpGet("featured")]
        public async Task<IEnumerable<AuctionQueryData>> GetFeatured([FromQuery] GetFeaturedAuctionsQuery query) => await mediator.Send(query);

        [Authorize]
        [HttpPost]
        public async Task AddAuction([FromBody] AddAuctionCommand command) => await mediator.Send(command);

        [Authorize]
        [HttpPut]
        public async Task Put([FromBody] UpdateAuctionCommand command) => await mediator.Send(command);

        [Authorize]
        [HttpDelete]
        public async Task Delete([FromQuery] DeleteAuctionCommand command) => await mediator.Send(command);
    }
}
