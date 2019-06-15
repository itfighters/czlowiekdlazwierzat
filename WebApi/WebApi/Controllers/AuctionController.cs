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
        public ListAuctionResponse Get()
        {
            return AuctionMappers.ToListAuctionResponse(auctionRepository.GetAuctions());
        }

        [HttpGet("{id}", Name = "Get")]
        public AuctionResponse Get(int id)
        {
            return AuctionMappers.ToAuctionResponse(auctionRepository.GetAuction(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] SaveOrUpdateAuctionRequest value)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            auctionRepository.AddAuction(AuctionMappers.FromAddAuctionRequest(value));
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] SaveOrUpdateAuctionRequest value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            auctionRepository.UpdateAuction(AuctionMappers.FromAddAuctionRequest(value));
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            auctionRepository.DeleteAuction(id);
            return Ok();
        }
    }
}
