using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CQRS.Command.Auctions
{
    public abstract class BaseAuctionCommand
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public IEnumerable<int> Categories
        {
            get
            {
                return MultichoiceCategories?.Split(",").Select(x => int.Parse(x));
            }
        }
        public string MultichoiceCategories { get; set; }
        public string DotpayLink { get; set; }
        public string SiepomagaLink { get; set; }
        public bool Account { get; set; }
        public DateTime? DateFrom { get; set; }
        public DateTime? DateTo { get; set; }
        public string AddressFrom { get; set; }
        public string AddressTo { get; set; }
        public string ContactNumber { get; set; }
        public string PaypalLink { get; set; }
        public bool Featured { get; set; }
        public IFormFile Cover { get; set; }

        public bool Publish { get; set; }
        public bool Dotpay { get; set; }
        public bool Paypall { get; set; }
    }
}
