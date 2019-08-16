using CQRS.Event;
using DAL.Model;
using DAL.Templates;
using MediatR;
using NotificationJobsLibrary.Services.Abstract;
using System;
using System.Threading;
using System.Threading.Tasks;
using Infrastructure;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using NotificationJobsLibrary.Models;

namespace CQRS.EventHandler
{
    public class SubscribtionChangedEventHandler : INotificationHandler<SubscribtionChangedEvent>
    {
        private readonly ISMSService smsService;
        private readonly IEmailService emailService;
        private readonly ILogger<SubscribtionChangedEventHandler> logger;
        private readonly IOptions<JobsConfig> jobsOptions;

        public SubscribtionChangedEventHandler(ISMSService smsService, IOptions<JobsConfig> jobsOptions, IEmailService emailService, ILogger<SubscribtionChangedEventHandler> logger)
        {
            this.smsService = smsService;
            this.emailService = emailService;
            this.logger = logger;
            this.jobsOptions = jobsOptions;
        }

        public async Task Handle(SubscribtionChangedEvent notification, CancellationToken cancellationToken)
        {
            var result = new SendNotificationResult();
            if (notification.SubscriptionType == SubscriptionType.Email)
            {
                var link =
                    $"{jobsOptions.Value.ServiceFullUrl}/confirm?token={notification.Token}&mail={notification.Contact}";
                var message = MailTemplate.SubscriptionTemplate(link);
                result = await emailService.SendMessage(notification.Contact, "Potwierdzenie zapisu na powiadomienia", message);
            }
            else if (notification.SubscriptionType == SubscriptionType.Sms)
            {
                var notificationText =
                    notification.ActionType == SubscribtionChangedEvent.SubriptionChangedType.Subscribe
                        ? SMSTemplate.SubscribeTemplate(notification.Token)
                        : SMSTemplate.UnsubscribeTemplate(notification.Token);
                result = await smsService.SendAsync(notificationText, new string[] {notification.Contact});
                logger.Log(LogLevel.Information, result.LogMessage);
            }

            if (!result.IsSuccessful)
            {
                logger.Log(LogLevel.Error, result.LogMessage);
            }
        }
    }
}
