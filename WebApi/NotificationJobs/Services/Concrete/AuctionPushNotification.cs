using System.Collections.Generic;
using System.Threading.Tasks;
using NotificationJobs.Services.Abstract;

namespace NotificationJobs.Services.Auction
{
    public class AuctionPushNotification : IAuctionPushNotification
    {
        public Task SendAsync(IEnumerable<string> contacts, int auctionId)
        {
            throw new System.NotImplementedException();
        }
    }
}
