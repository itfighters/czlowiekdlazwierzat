using DAL.Model;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using NotificationJobs.Services.Abstract;
using NotificationJobs.Services.Concrete;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace NotificationJobs.Jobs
{
    public class PushNotificationJob : BackgroundService
    {
        private IServiceProvider serviceProvider { get; }

        public PushNotificationJob(IServiceProvider serviceProvider)
        {
            this.serviceProvider = serviceProvider;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                var delay = 300000;
                using (var scope = serviceProvider.CreateScope())
                {
                    var notificationHelper = scope.ServiceProvider.GetRequiredService<INotificationHelper>();
                    var notificationSender = scope.ServiceProvider.GetRequiredService<IAuctionPushNotification>();
                    await notificationHelper.CancelUbsubscribedNotifications(SubscriptionType.Push);
                    delay = await notificationHelper.SendNotification(SubscriptionType.Push, notificationSender);
                }
                await Task.Delay(delay);
            }
        }
    }
}
