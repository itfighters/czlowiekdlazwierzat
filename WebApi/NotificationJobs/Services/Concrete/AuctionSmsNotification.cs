using DAL.Templates;
using Infrastructure;
using Microsoft.Extensions.Options;
using NotificationJobs.Services.Abstract;
using NotificationJobsLibrary.Services.Abstract;
using System.Collections.Generic;
using System.Threading.Tasks;
using DAL.Model;
using NotificationJobsLibrary.Models;

namespace NotificationJobs.Services.Auction
{
    public class AuctionSmsNotification : IAuctionSmsNotification
    {
        private readonly ISMSService smsService;
        private readonly IOptions<JobsConfig> jobsOptions;

        public AuctionSmsNotification(ISMSService smsService, IOptions<JobsConfig> jobsOptions)
        {
            this.smsService = smsService;
            this.jobsOptions = jobsOptions;
        }

        public async Task<SendNotificationResult> SendMultiplesAsync(IEnumerable<string> contacts, DAL.Model.Auction auction)
        {
            return await smsService.SendAsync(
                SMSTemplate.NewNotification($"{jobsOptions.Value?.ServiceShortUrl}/{auction.Id}"),
                contacts);
        }

        public Task<SendNotificationResult> SendSingleAsync(string contact, DAL.Model.Auction auction)
        {
            throw new System.NotImplementedException();
        }
    }
}
