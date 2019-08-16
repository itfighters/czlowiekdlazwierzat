using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using CQRS.Command.Subscriptions;
using CQRS.Event;
using CQRS.Mapper;
using DAL;
using DAL.Exceptions;
using DAL.Model;
using Infrastructure.Abstract;
using MediatR;

namespace CQRS.CommandHandler.Subscriptions
{
    public class SubscribeCommandHandler : AsyncRequestHandler<SubscribeCommand>
    {
        private readonly DatabaseContext dbContext;
        private readonly IMediator mediator;
        private readonly IConfirmationCodesGenerator confiramationCodesGenerator;

        public SubscribeCommandHandler(DatabaseContext dbContext, IMediator mediator, IConfirmationCodesGenerator confiramationCodesGenerator)
        {
            this.dbContext = dbContext;
            this.mediator = mediator;
            this.confiramationCodesGenerator = confiramationCodesGenerator;
        }

        protected override async Task Handle(SubscribeCommand request, CancellationToken cancellationToken)
        {
            if (dbContext.Subscriptions.Any(x => x.Contact == request.Value && x.Subscribed && x.Confirmed))
            {
                if (request.SubscriptionType == SubscriptionType.Push)
                {
                    throw new BusinessLogicException($"Jesteś już zapisany na push powiadomienia");
                }
                else
                {
                    throw new BusinessLogicException($"{request.Value} jest już zapisany na powiadomienia");
                }

            }

            var pendingConfirmation =
                dbContext.Subscriptions.FirstOrDefault(x =>
                    x.Contact == request.Value && x.Subscribed && !x.Confirmed);
            Subscription subscription = null;
            if (pendingConfirmation == null)
            {
                subscription = SubscriptionMapper.FromSubscribeCommandToSubscription(request, null);
                dbContext.Subscriptions.Add(subscription);
            }
            else
                subscription = pendingConfirmation;

            #region tempshit

            //send sms/email with token & obtain token, save to db
            subscription.ConfirmationToken = confiramationCodesGenerator.GenerateCode();
            #endregion

            subscription.Subscribed = true;
            subscription.Confirmed = subscription.SubscriptionType == SubscriptionType.Push ? true : false;
            await dbContext.SaveChangesAsync();


            await mediator.Publish(new SubscribtionChangedEvent
            {
                Contact = subscription.Contact,
                SubscriptionType = subscription.SubscriptionType,
                Token = subscription.ConfirmationToken,
                ActionType = SubscribtionChangedEvent.SubriptionChangedType.Subscribe
            });

        }
    }
}
