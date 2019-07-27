using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using FCM.Net;
using Infrastructure;
using Microsoft.Extensions.Options;
using NotificationJobsLibrary.Models;
using NotificationJobsLibrary.Services.Abstract;

namespace NotificationJobsLibrary.Services.Concrete
{
    public class PushService : IPushService
    {
        private readonly IOptions<PushConfig> pushConfig;
        public PushService(IOptions<PushConfig> pushConfig)
        {
            this.pushConfig = pushConfig;
        }
        public async Task<SendNotificationResult> SendMessage(string registrationId, int auctionId)
        {
            using (var sender = new Sender(pushConfig.Value?.ServiceKey))
            {
                var message = new Message
                {
                    RegistrationIds = new List<string> { registrationId },
                    Notification = new Notification
                    {
                        Title = "Nowa potrzeba",
                        Body = "Cześć, fundacja Człowiek dla zwierząt ma nową potrzebę. Kliknij w dymek aby poznać szczegóły.",
                    },
                    Data = new { auctionId, title = "Nowa potrzeba" }
                };
                var result = await sender.SendAsync(message);
                return new SendNotificationResult() {IsSuccessful = result.MessageResponse.Success == 1, LogMessage =
                    result.MessageResponse.Success == 1 ? $"Push notification to sent, registrationId: {registrationId}." :
                        $"Push notification error: {result.MessageResponse?.Results?.FirstOrDefault()?.Error}, registrationId: {registrationId}."};
            }
        }
    }
}
