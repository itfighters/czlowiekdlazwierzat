using System;
using System.Collections.Generic;
using System.Text;

namespace DTO.ResponseViewModel
{
    public class AuctionResponse
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public byte[] Image { get; set; }
        public List<int> Categories { get; set; }
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
    }
}
