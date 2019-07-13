using DAL.Templates;
using Infrastructure;
using Microsoft.Extensions.Options;
using NotificationJobs.Services.Abstract;
using NotificationJobsLibrary.Services.Abstract;
using System.Collections.Generic;
using System.Threading.Tasks;

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

        public async Task SendAsync(IEnumerable<string> contacts, int auctionId)
        {
            //tutaj budujemy wiadomość z template
            await smsService.SendAsync(
                        SMSTemplate.NewNotification($"{jobsOptions.Value?.ServiceShortUrl}/{auctionId}"),
                        contacts);
        }
    }
}
