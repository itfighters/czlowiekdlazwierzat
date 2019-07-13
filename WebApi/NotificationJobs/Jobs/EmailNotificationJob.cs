using System;
using System.Threading;
using System.Threading.Tasks;
using DAL.Model;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using NotificationJobs.Services.Abstract;
using NotificationJobs.Services.Concrete;

namespace NotificationJobs.Jobs
{
    public class EmailNotificationJob : BackgroundService
    {
        private IServiceProvider serviceProvider { get; }

        public EmailNotificationJob(IServiceProvider serviceProvider)
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
                    var notificationSender = scope.ServiceProvider.GetRequiredService<IAuctionEmailNotification>();
                    delay = await notificationHelper.SendNotification(SubscriptionType.Sms, notificationSender);
                }
                await Task.Delay(delay);
            }
        }
    }
}
