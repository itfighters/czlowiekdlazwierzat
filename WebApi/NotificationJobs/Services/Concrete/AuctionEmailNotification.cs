using NotificationJobs.Services.Abstract;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DAL.Model;
using NotificationJobsLibrary.Models;

namespace NotificationJobs.Services.Auction
{
    public class AuctionEmailNotification : IAuctionEmailNotification
    {
        public Task<SendNotificationResult> SendMultiplesAsync(IEnumerable<string> contacts, DAL.Model.Auction auction)
        {
            throw new NotImplementedException();
        }

        public Task<SendNotificationResult> SendSingleAsync(string contact, DAL.Model.Auction auction)
        {
            throw new NotImplementedException();
        }
    }
}
