using CQRS.Command.Auctions;
using CQRS.QueryData;
using DAL.Model;
using System;
using System.Linq;

namespace CQRS.Mapper
{
    public static class AuctionMapper
    {
        public static Func<Auction, AuctionQueryData> FromAuctionToAuctionQueryData = (a) => new AuctionQueryData
        {
            Id = a.Id,
            Title = a.Title,
            Description = a.Description,
            Account = a.Account,
            AddressFrom = a.AddressFrom,
            AddressTo = a.AddressTo,
            Categories = a.Categories?.Select(x => x.CategoryId),
            ContactNumber = a.ContactNumber,
            DateFrom = a.DateFrom,
            DateTo = a.DateTo,
            DotpayLink = a.DotpayLink,
            SiepomagaLink = a.SiepomagaLink,
            Image = a.Image?.Source,
            Featured = a.Featured,
            PaypalLink = a.PaypalLink,
            Publish = a.Publish,
            Dotpay = a.Dotpay,
            Paypall = a.Paypall
        };

        public static Func<BaseAuctionCommand, Auction, Auction> FromAuctionCommandToAuction = (command, auction) =>
         {
             var result = auction ?? new Auction();

             result.Title = command.Title;
             result.Description = command.Description;
             result.Categories = command.Categories?.Select(x => new AuctionCategory() { CategoryId = x }).ToList();
             result.Account = command.Account;
             result.IsDeleted = false;
             result.SiepomagaLink = command.SiepomagaLink;
             result.PaypalLink = command.PaypalLink;
             result.Featured = command.Featured;
             result.DateTo = command.DateTo ?? DateTime.Now.AddYears(1); //TODO: wyjasnic kiedys
             result.AddressTo = command.AddressTo;
             result.DateFrom = command.DateFrom ?? DateTime.Now;
             result.ContactNumber = command.ContactNumber;
             result.AddressFrom = command.AddressFrom;
             result.Image = new Image() {Source = command.Image};
             result.DotpayLink = command.DotpayLink;
             result.Publish = command.Publish;
             result.Dotpay = command.Dotpay;
             result.Paypall = command.Paypall;
             return result;
         };

    }
}
