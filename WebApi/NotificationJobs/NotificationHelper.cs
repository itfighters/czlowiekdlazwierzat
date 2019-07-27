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
using Microsoft.Extensions.Logging;

namespace NotificationJobs.Services.Concrete
{
    public interface INotificationHelper
    {
        Task<int> SendNotification(SubscriptionType subscriptionType, INotification notificationSender);
        Task CancelUbsubscribedNotifications(SubscriptionType subscriptionType);
    }

    public class NotificationHelper  : INotificationHelper
    {
        private readonly IJobsRepository jobsRepository;
        private readonly IOptions<JobsConfig> jobsOptions;
        private readonly ILogger<NotificationHelper> logger;

        public NotificationHelper(IJobsRepository jobsRepository, IOptions<JobsConfig> jobsOptions, ILogger<NotificationHelper> logger)
        {
            this.jobsRepository = jobsRepository;
            this.jobsOptions = jobsOptions;
            this.logger = logger;
        }

        public async Task<int> SendNotification(SubscriptionType subscriptionType, INotification notificationSender)
        {
            var notifications = await jobsRepository.GetNotificationsToSend(subscriptionType, jobsOptions.Value.PackageSize);
            var groupedByAuction = notifications.GroupBy(c => c.Auction);

            foreach (var auction in groupedByAuction)
            {
                if (subscriptionType == SubscriptionType.Sms)
                {
                    try
                    {
                        await jobsRepository.SetNotificationsStatus(auction.Select(c => c.Id).ToArray(),
                            NotificationStatus.Sending);
                        var result = await notificationSender.SendMultiplesAsync(auction.Select(c => c.Subscription.Contact),
                            auction.Key);
                        await jobsRepository.SetNotificationsStatus(auction.Select(c => c.Id).ToArray(),
                            result.IsSuccessful ? NotificationStatus.Sent : NotificationStatus.Failed);
                        if (result.IsSuccessful)
                        {
                            await jobsRepository.SetNotificationsStatus(auction.Select(c => c.Id).ToArray(), NotificationStatus.Sent);
                            logger.Log(LogLevel.Information, result.LogMessage);
                        }
                        else
                        {
                            await jobsRepository.SetNotificationsStatus(auction.Select(c => c.Id).ToArray(), NotificationStatus.Failed);
                            logger.Log(LogLevel.Error, result.LogMessage);
                        }
                    }
                    catch (Exception ex)
                    {
                        logger.LogError(ex, ex.Message);
                    }
                }
                else
                {
                    foreach (var notification in auction)
                    {
                        try
                        {
                            await jobsRepository.SetNotificationsStatus(new[] {notification.Id},
                                NotificationStatus.Sending);
                            var result = await notificationSender.SendSingleAsync(notification.Subscription.Contact, auction.Key);
                            if (result.IsSuccessful)
                            {
                                await jobsRepository.SetNotificationsStatus(new[] { notification.Id }, NotificationStatus.Sent);
                                logger.Log(LogLevel.Information, result.LogMessage);
                            }
                            else
                            {
                                await jobsRepository.SetNotificationsStatus(new[] { notification.Id }, NotificationStatus.Failed);
                                logger.Log(LogLevel.Error, result.LogMessage);
                            }
                            
                        }
                        catch (Exception ex)
                        {
                            logger.LogError(ex, ex.Message);
                        }
                    }
                }
            }
            var anotherCheckDelay = jobsOptions.Value.SleepPeriod;
            var nextPackageDelay = 10000;
            return notifications.Any() ? nextPackageDelay : anotherCheckDelay;
        }

        public async Task CancelUbsubscribedNotifications(SubscriptionType subscriptionType)
        {
            var notifications = await jobsRepository.GetNotificationsToSend(subscriptionType, jobsOptions.Value.PackageSize);
            var toCancelDueToUnsubs = notifications
                .Where(c => (!c.Subscription.Subscribed && c.Subscription.Confirmed)
                            || !c.Subscription.Categories.Select(d => d.CategoryId).Intersect(c.Auction.Categories.Select(d => d.CategoryId)).Any()).Select(c => c.Id).ToList();
            await jobsRepository.SetNotificationsStatus(toCancelDueToUnsubs.ToArray(),
                NotificationStatus.UserUnsubscribed);
        }
    }
}
