using System;
using System.Collections.Generic;
using System.Text;

namespace DTO.RequestViewModel
{
    public class SendSubscriptionRequest
    {
        public int AuctionId { get; set; }

        public int Type { get; set; }
    }
}
