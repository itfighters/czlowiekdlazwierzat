using CQRS.Event;
using DAL.Model;
using DAL.Templates;
using MediatR;
using NotificationJobsLibrary.Services.Abstract;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace CQRS.EventHandler
{
    public class SubscribtionChangedEventHandler : INotificationHandler<SubscribtionChangedEvent>
    {
        private readonly ISMSService smsService;
        private readonly IEmailService emailService;

        public SubscribtionChangedEventHandler(ISMSService smsService, IEmailService emailService)
        {
            this.smsService = smsService;
            this.emailService = emailService;
        }

        public async Task Handle(SubscribtionChangedEvent notification, CancellationToken cancellationToken)
        {
            var result = false;
            switch (notification.SubscriptionType)
            {
                case SubscriptionType.Email:
                {
                    var message = MailTemplate.NotificationTemplate("Zbiórka dla Reksia", "LOREM");
                        result = emailService.SendMessage("m.rozycki@avanade.com", "Nowa pomoc", message);
                        break;
                    }
                case SubscriptionType.Sms:
                    {
                        var notificationText =
                            notification.ActionType == SubscribtionChangedEvent.SubriptionChangedType.Subscribe
                                ? SMSTemplate.SubscribeTemplate(notification.Token)
                                : SMSTemplate.UnsubscribeTemplate(notification.Token);
                        result = await smsService.SendAsync(notificationText, new string[] { notification.Contact });
                        break;
                    }
                case SubscriptionType.Push:
                    {
                        break;
                    }
                default: throw new NotImplementedException();
            }

            if (!result)
            {
                //zalogować 
            }
        }
    }
}
