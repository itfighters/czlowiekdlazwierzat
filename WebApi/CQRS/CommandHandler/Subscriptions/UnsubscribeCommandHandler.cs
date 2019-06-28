using CQRS.Command.Subscriptions;
using DAL;
using DAL.Model;
using MediatR;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using CQRS.Event;

namespace CQRS.CommandHandler.Subscriptions
{
    public class UnsubscribeCommandHandler : AsyncRequestHandler<UnsubscribeCommand>
    {
        private readonly DatabaseContext dbContext;
        private readonly IMediator mediator;

        public UnsubscribeCommandHandler(DatabaseContext dbContext, IMediator mediator)
        {
            this.dbContext = dbContext;
            this.mediator = mediator;
        }

        protected override async Task Handle(UnsubscribeCommand request, CancellationToken cancellationToken)
        {
            var subscription = dbContext.Subscriptions
                .FirstOrDefault(x => x.Contact == request.Contact);

            if (subscription == null)
                throw new Exception("Subscription doesn't exist");
            else
            {
                #region tempshit
                //send sms with token & obtain token, save to db
                Random rnd = new Random();
                int numb = rnd.Next(10000, 99000);
                subscription.ConfirmationToken = numb.ToString();
                #endregion
                subscription.Subscribed = false;
                subscription.Confirmed = subscription.SubscriptionType == SubscriptionType.Push ? true : false;
                await dbContext.SaveChangesAsync();
                await mediator.Publish(new SubscribtionChangedEvent
                {
                    Contact = subscription.Contact,
                    SubscriptionType = subscription.SubscriptionType,
                    Token = subscription.ConfirmationToken,
                    ActionType = SubscribtionChangedEvent.SubriptionChangedType.Unsubscribe
                });
            }
        }
    }
}
