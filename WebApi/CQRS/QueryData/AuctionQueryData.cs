using System;
using System.Collections.Generic;
using System.Text;

namespace CQRS.QueryData
{
    public class AuctionQueryData
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public string CurrentImage { get; set; }
        public IEnumerable<int> Categories { get; set; }
        public string DotpayLink { get; set; }
        public string PaypalLink { get; set; }

        public bool Featured { get; set; }
        public string SiepomagaLink { get; set; }
        public bool Account { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime DateTo { get; set; }
        public string AddressFrom { get; set; }
        public string AddressTo { get; set; }
        public string ContactNumber { get; set; }

        public bool Publish { get; set; }
        public bool Dotpay { get; set; }
        public bool Paypall { get; set; }
    }
}
