using DAL.Model;
using DTO.RequestViewModel;
using DTO.ResponseViewModel;
using System.Collections.Generic;
using System.Linq;

namespace DTO.Mapper
{
    public static class AuctionMappers
    {
        public static Auction FromAddAuctionRequest(AddAuctionRequest from)
        {
            return new Auction
            {
                Title = from.Title,
                Description = from.Description
            };
        }

        public static ListAuctionResponse ToListAuctionResponse(IEnumerable<Auction> auctions)
        {
            return new ListAuctionResponse
            {
                Values = auctions.Select(x => new AuctionResponse
                {
                    Id = x.Id,
                    Title = x.Title,
                    Description = x.Description
                })
            };
        }
    }
}
