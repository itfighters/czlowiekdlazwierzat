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
using DTO.ResponseViewModel;
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
        public async Task<ListAuctionResponse> Get(int page, int pageSize, int[] category)
            => AuctionMappers.ToListAuctionResponse(await auctionRepository.GetAuctions(page, pageSize, category));

        [HttpGet("details")]
        public async Task<AuctionQueryData> Get([FromQuery] GetAuctionDetailsQuery query)
            => await mediator.Send(query);

        [HttpGet("featured")]
        public async Task<ListAuctionResponse> GetFeatured(int count = 6)
            => AuctionMappers.ToListAuctionResponse(await auctionRepository.GetFeaturedAuctions(count));

        [HttpPost]
        public async Task<IActionResult> AddAuction([FromBody] AddAuctionCommand command) =>
            Ok(await mediator.Send(command));


        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] UpdateAuctionCommand command) =>
             Ok(await mediator.Send(command));

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await auctionRepository.DeleteAuction(id);
            return Ok();
        }
    }
}
