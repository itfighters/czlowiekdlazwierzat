using NotificationJobs.Services.Abstract;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace NotificationJobs.Services.Auction
{
    public class AuctionEmailNotification : IAuctionEmailNotification
    {
        public Task SendAsync(IEnumerable<string> contacts, int auctionId)
        {
            throw new NotImplementedException();
        }
    }
}
