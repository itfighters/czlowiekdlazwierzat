using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL.Repositories.Abstract;
using DTO.Mapper;
using DTO.RequestViewModel;
using DTO.ResponseViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuctionController : ControllerBase
    {
        private readonly IAuctionRepository auctionRepository;

        public AuctionController(IAuctionRepository auctionRepository)
        {
            this.auctionRepository = auctionRepository;
        }

        [HttpGet]
        public async Task<ListAuctionResponse> Get(int page, int pageSize, int[] category)
            => AuctionMappers.ToListAuctionResponse(await auctionRepository.GetAuctions(page, pageSize, category));

        [HttpGet("{id}")]
        public async Task<AuctionResponse> Get(int id) => AuctionMappers.ToAuctionResponse(await auctionRepository.GetAuction(id));

        [HttpGet("featured")]
        public async Task<ListAuctionResponse> GetFeatured(int count = 6)
            => AuctionMappers.ToListAuctionResponse(await auctionRepository.GetFeaturedAuctions(count));

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] SaveOrUpdateAuctionRequest value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await auctionRepository.AddAuction(AuctionMappers.FromAddAuctionRequest(value));
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] SaveOrUpdateAuctionRequest value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await auctionRepository.UpdateAuction(AuctionMappers.FromAddAuctionRequest(value));
            return Ok();
        }

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
