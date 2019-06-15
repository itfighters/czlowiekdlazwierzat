using System;
using DAL.Model;
using DTO.RequestViewModel;
using DTO.ResponseViewModel;
using System.Collections.Generic;
using System.Linq;

namespace DTO.Mapper
{
    public static class AuctionMappers
    {
        public static Auction FromAddAuctionRequest(SaveOrUpdateAuctionRequest from)
        {
            return new Auction
            {
                Title = from.Title,
                Description = from.Description,
                Categories = from.Categories.Select(x=> new AuctionCategory(){CategoryId = x}).ToList(),
                Account = from.Account
            };
        }

        public static ListAuctionResponse ToListAuctionResponse(IEnumerable<Auction> auctions) =>
            new ListAuctionResponse
            {
                Values = auctions.Select(ToAuctionResponse).ToList()
            };

        public static AuctionResponse ToAuctionResponse(Auction auction) =>
            new AuctionResponse
            {
                Id = auction.Id,
                Title = auction.Title,
                Description = auction.Description,
                Account = auction.Account,
                AddressFrom = auction.AddressFrom,
                AddressTo = auction.AddressTo,
                Categories = auction.Categories.Select(x=> x.Id).ToList(),
                ContactNumber = auction.ContactNumber,
                DateFrom =  auction.DateFrom,
                DateTo = auction.DateTo,
                DotpayLink = auction.DotpayLink,
                SiepomagaLink = auction.SiepomagaLink,
                Image = auction.Image,
                Featured = auction.Featured,
                PaypalLink = auction.PaypalLink
            };
    }
}
