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
                Id = from.Id ?? 0,
                Title = from.Title,
                Description = from.Description,
                Categories = from.Categories?.Select(x=> new AuctionCategory(){CategoryId = x}).ToList(),
                Account = from.Account,
                IsDeleted = false,
                SiepomagaLink = from.SiepomagaLink,
                PaypalLink = from.PaypalLink,
                Featured = from.Featured,
                DateTo = from.DateTo ?? DateTime.Now.AddYears(100), //TODO: wyjasnic kiedys
                AddressTo = from.AddressTo,
                DateFrom = from.DateFrom ?? DateTime.Now,
                ContactNumber = from.ContactNumber,
                AddressFrom = from.AddressFrom,
                Image = from.Image,
                DotpayLink = from.DotpayLink,
               };
        }

        public static ListAuctionResponse ToListAuctionResponse(IEnumerable<Auction> auctions) =>
            new ListAuctionResponse
            {
                Values = auctions.Select(ToAuctionResponse).ToList()
            };

        public static AuctionResponse ToAuctionResponse(Auction auction)
        {
            if (auction == null)
                return null;

            return new AuctionResponse
            {
                Id = auction.Id,
                Title = auction.Title,
                Description = auction.Description,
                Account = auction.Account,
                AddressFrom = auction.AddressFrom,
                AddressTo = auction.AddressTo,
                Categories = auction.Categories.Select(x => x.Id).ToList(),
                ContactNumber = auction.ContactNumber,
                DateFrom = auction.DateFrom,
                DateTo = auction.DateTo,
                DotpayLink = auction.DotpayLink,
                SiepomagaLink = auction.SiepomagaLink,
                Image = auction.Image,
                Featured = auction.Featured,
                PaypalLink = auction.PaypalLink
            };
        }
    }
}
