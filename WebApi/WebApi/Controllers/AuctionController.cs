using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CQRS.Command;
using CQRS.Command.Auctions;
using CQRS.Query.Auctions;
using CQRS.QueryData;
using DAL.Repositories.Abstract;
using DTO.Mapper;
using DTO.RequestViewModel;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuctionController : ControllerBase
    {
        private readonly IAuctionRepository auctionRepository;
        private readonly IMediator mediator;

        public AuctionController(IAuctionRepository auctionRepository, IMediator mediator)
        {
            this.auctionRepository = auctionRepository;
            this.mediator = mediator;
        }

        [HttpGet]
        public async Task<IEnumerable<AuctionQueryData>> Get([FromQuery] GetAuctionsListQuery query) => await mediator.Send(query);

        [HttpGet("details")]
        public async Task<AuctionQueryData> Get([FromQuery] GetAuctionDetailsQuery query) => await mediator.Send(query);

        [HttpGet("featured")]
        public async Task<IEnumerable<AuctionQueryData>> GetFeatured([FromQuery] GetFeaturedAuctionsQuery query) => await mediator.Send(query);

        [HttpPost]
        public async Task AddAuction([FromBody] AddAuctionCommand command) => await mediator.Send(command);

        [HttpPut]
        public async Task Put([FromBody] UpdateAuctionCommand command) => await mediator.Send(command);

        [HttpDelete]
        public async Task Delete([FromQuery] DeleteAuctionCommand command) => await mediator.Send(command);
    }
}
