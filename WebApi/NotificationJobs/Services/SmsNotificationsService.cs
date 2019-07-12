using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using DAL.Model;
using DAL.Repositories.Abstract;
using DAL.Templates;
using Infrastructure;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using NotificationJobsLibrary.Services.Abstract;

namespace NotificationJobs.Services
{
    public class SmsNotificationsService : BackgroundService
    {
        private IServiceProvider serviceProvider { get; }


        public SmsNotificationsService(IServiceProvider serviceProvider)
        {
            this.serviceProvider = serviceProvider;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {

            while (!stoppingToken.IsCancellationRequested)
            {
                try
                {
                    var delay = 300000;
                    using (var scope = serviceProvider.CreateScope())
                    {
                        var jobsOptions = scope.ServiceProvider.GetRequiredService<IOptions<JobsConfig>>();
                        var jobsRepository = scope.ServiceProvider.GetRequiredService<IJobsRepository>();
                        var smsService = scope.ServiceProvider.GetRequiredService<ISMSService>();

                        var notifications = await jobsRepository.GetNotificationsToSend(SubscriptionType.Sms,
                            jobsOptions.Value?.SmsNotificationsConfig?.PackageSize ?? 25);

                        var toCancelDueToUnsubsription = FilterNotificationsOfUnsubscribedUsers(notifications);
                        await jobsRepository.SetNotificationsStatus(toCancelDueToUnsubsription,
                            NotificationStatus.UserUnsubscribed);

                        var notificationToSend = FilterNotificationToSend(notifications, toCancelDueToUnsubsription);
                        var groupedByAuction = notificationToSend.GroupBy(c => c.AuctionId);

                        foreach (var group in groupedByAuction)
                        {
                            await jobsRepository.SetNotificationsStatus(group.Select(c => c.Id).ToArray(),
                                NotificationStatus.Sending);
                            try
                            {
                                await smsService.SendAsync(
                                    SMSTemplate.NewNotification($"{jobsOptions.Value?.ServiceShortUrl}/{group.Key}"),
                                    group.Select(c => c.Subscription.Contact));
                                await jobsRepository.SetNotificationsStatus(group.Select(c => c.Id).ToArray(),
                                    NotificationStatus.Sent);
                            }
                            catch
                            {
                                await jobsRepository.SetNotificationsStatus(group.Select(c => c.Id).ToArray(),
                                    NotificationStatus.Failed);
                            }
                        }

                        var anotherCheckDelay = jobsOptions.Value?.SmsNotificationsConfig?.SleepPeriod ?? 300000;
                        var nextPackageDelay = 10000;
                        delay = notifications.Any() ? nextPackageDelay : anotherCheckDelay;
                    }

                    await Task.Delay(delay);
                }
                catch
                {
                    await Task.Delay(600000);
                }
            }
        }

        private static IEnumerable<Notification> FilterNotificationToSend(IEnumerable<Notification> notifications, Guid[] toCancelDueToUnsubsription)
        {
            var notificationToSend = notifications.Where(c => toCancelDueToUnsubsription.All(d => d != c.Id));
            return notificationToSend;
        }

        private Guid[] FilterNotificationsOfUnsubscribedUsers(IEnumerable<Notification> notifications)
        {
            var toCancelDueToUnsubsription = notifications
                .Where(c => (!c.Subscription.Subscribed && c.Subscription.Confirmed)
                            || !c.Subscription.Categories.Select(d => d.CategoryId)
                                .Intersect(c.Auction.Categories.Select(d => d.CategoryId)).Any()).Select(c => c.Id).ToList();
            return toCancelDueToUnsubsription.ToArray();
        }
    }
}
