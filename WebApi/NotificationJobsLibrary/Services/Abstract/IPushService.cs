using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using NotificationJobsLibrary.Models;

namespace NotificationJobsLibrary.Services.Abstract
{
    public interface IPushService
    {
        Task<SendNotificationResult> SendMessage(string registrationId, int auctionId);

    }
}
