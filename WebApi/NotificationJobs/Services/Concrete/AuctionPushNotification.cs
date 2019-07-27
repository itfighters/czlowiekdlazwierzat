using System.Collections.Generic;
using System.Threading.Tasks;
using FCM.Net;
using Infrastructure;
using Microsoft.Extensions.Options;
using NotificationJobs.Services.Abstract;
using NotificationJobsLibrary.Models;
using NotificationJobsLibrary.Services.Abstract;

namespace NotificationJobs.Services.Auction
{
    public class AuctionPushNotification : IAuctionPushNotification
    {
        private readonly IOptions<PushConfig> pushConfig;
        private readonly IPushService pushService;
        public AuctionPushNotification(IOptions<PushConfig> pushConfig, IPushService pushService)
        {
            this.pushConfig = pushConfig;
            this.pushService = pushService;
        }

        public Task<SendNotificationResult> SendMultiplesAsync(IEnumerable<string> contacts, DAL.Model.Auction auction)
        {
            throw new System.NotImplementedException();
        }

        public async Task<SendNotificationResult> SendSingleAsync(string contact, DAL.Model.Auction auction)
        {
            return await pushService.SendMessage(contact, auction.Id);
        }
    }
}
