using NotificationJobs.Services.Abstract;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DAL.Model;
using DAL.Templates;
using NotificationJobsLibrary.Models;
using NotificationJobsLibrary.Services.Abstract;

namespace NotificationJobs.Services.Auction
{
    public class AuctionEmailNotification : IAuctionEmailNotification
    {
        private readonly IEmailService emailService;

        public AuctionEmailNotification(IEmailService emailService)
        {
            this.emailService = emailService;
        }

        public Task<SendNotificationResult> SendMultiplesAsync(IEnumerable<string> contacts, DAL.Model.Auction auction)
        {
            throw new NotImplementedException();
        }

        public async Task<SendNotificationResult> SendSingleAsync(string contact, DAL.Model.Auction auction)
        {
            var message = MailTemplate.NotificationTemplate(auction);
            return await emailService.SendMessage(contact, "Nowa potrzeba", message);
        }
    }
}
