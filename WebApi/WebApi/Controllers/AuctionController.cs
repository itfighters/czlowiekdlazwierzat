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
        public string Get(int id)
        {
            //todo pobranie szczegółów aukcji
            return "value";
        }

        [HttpPost]
        public IActionResult Post([FromBody] AddAuctionRequest value)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //auctionRepository.AddAuction(AuctionMappers.FromAddAuctionRequest(value));
            return Ok();
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
            //todo aktualizacja aukcji
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            //todo ukrywanie aukcji
        }
    }
}
