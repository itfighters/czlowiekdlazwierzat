using System;
using System.Threading;
using System.Threading.Tasks;
using DAL;
using DAL.Model;
using DAL.Repositories.Abstract;
using DAL.Repositories.Concrete;
using Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using NotificationJobs.Services.Abstract;
using NotificationJobs.Services.Auction;
using NotificationJobs.Services.Concrete;

namespace NotificationJobs.Jobs
{
    public class SmsNotificationJob : BackgroundService
    {
        private IServiceProvider serviceProvider { get; }

        public SmsNotificationJob(IServiceProvider serviceProvider)
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
                    var notificationSender = scope.ServiceProvider.GetRequiredService<IAuctionSmsNotification>();
                    await notificationHelper.CancelUbsubscribedNotifications(SubscriptionType.Sms);
                    delay = await notificationHelper.SendNotification(SubscriptionType.Sms, notificationSender);
                }
                await Task.Delay(delay);
            }
        }
    }
}
