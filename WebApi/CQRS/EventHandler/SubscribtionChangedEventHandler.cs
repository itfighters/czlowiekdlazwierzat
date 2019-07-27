using CQRS.Event;
using DAL.Model;
using DAL.Templates;
using MediatR;
using NotificationJobsLibrary.Services.Abstract;
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using NotificationJobsLibrary.Models;

namespace CQRS.EventHandler
{
    public class SubscribtionChangedEventHandler : INotificationHandler<SubscribtionChangedEvent>
    {
        private readonly ISMSService smsService;
        private readonly IEmailService emailService;
        private readonly ILogger<SubscribtionChangedEventHandler> logger;

        public SubscribtionChangedEventHandler(ISMSService smsService, IEmailService emailService, ILogger<SubscribtionChangedEventHandler> logger)
        {
            this.smsService = smsService;
            this.emailService = emailService;
            this.logger = logger;
        }

        public async Task Handle(SubscribtionChangedEvent notification, CancellationToken cancellationToken)
        {
            var result = new SendNotificationResult();
            if (notification.SubscriptionType == SubscriptionType.Email)
            {
                var message = MailTemplate.NotificationTemplate("Zbiórka dla Reksia", "LOREM");
                result = await emailService.SendMessage("m.rozycki@avanade.com", "Nowa pomoc", message);
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
