using DAL.Model;
using DAL.Repositories.Abstract;
using Infrastructure;
using Microsoft.Extensions.Options;
using NotificationJobs.Services.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NotificationJobs.Services.Concrete
{
    public interface INotificationHelper
    {
        Task<int> SendNotification(SubscriptionType subscriptionType, INotification notificationSender);
    }

    public class NotificationHelper  : INotificationHelper
    {
        private readonly IJobsRepository jobsRepository;
        private readonly IOptions<JobsConfig> jobsOptions;

        public NotificationHelper(IJobsRepository jobsRepository, IOptions<JobsConfig> jobsOptions)
        {
            this.jobsRepository = jobsRepository;
            this.jobsOptions = jobsOptions;
        }

        public async Task<int> SendNotification(SubscriptionType subscriptionType, INotification notificationSender)
        {
            var notifications = await jobsRepository.GetNotificationsToSend(subscriptionType, jobsOptions.Value.PackageSize);
            //process notifications with unsubscribed users
            var toCancelDueToUnsubs = notifications
                .Where(c => (!c.Subscription.Subscribed && c.Subscription.Confirmed)
                            || !c.Subscription.Categories.Select(d => d.CategoryId).Intersect(c.Auction.Categories.Select(d => d.CategoryId)).Any()).Select(c => c.Id).ToList();
            await jobsRepository.SetNotificationsStatus(toCancelDueToUnsubs.ToArray(),
                NotificationStatus.UserUnsubscribed);

            //process valid notifications
            var groupedByAuction = notifications
                .Where(c => !toCancelDueToUnsubs.Any(d => d == c.Id)).GroupBy(c => c.AuctionId);

            foreach (var group in groupedByAuction)
            {
                await jobsRepository.SetNotificationsStatus(group.Select(c => c.Id).ToArray(),
                    NotificationStatus.Sending);
                try
                {
                    //todo - dodać tutaj logowanie na podstawie wyniku sendasync 
                    await notificationSender.SendAsync(group.Select(c => c.Subscription.Contact),group.Key);
                    await jobsRepository.SetNotificationsStatus(group.Select(c => c.Id).ToArray(),
                        NotificationStatus.Sent);
                }
                catch
                {
                    await jobsRepository.SetNotificationsStatus(group.Select(c => c.Id).ToArray(),
                        NotificationStatus.Failed);
                }
            }
            var anotherCheckDelay = jobsOptions.Value.SleepPeriod;
            var nextPackageDelay = 10000;
            return notifications.Any() ? nextPackageDelay : anotherCheckDelay;
        }
    }
}
