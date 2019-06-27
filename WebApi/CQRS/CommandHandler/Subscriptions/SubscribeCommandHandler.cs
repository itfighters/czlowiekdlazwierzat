using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using CQRS.Command.Subscriptions;
using CQRS.Mapper;
using DAL;
using DAL.Exceptions;
using MediatR;

namespace CQRS.CommandHandler.Subscriptions
{
    public class SubscribeCommandHandler : AsyncRequestHandler<SubscribeCommand>
    {
        private readonly DatabaseContext dbContext;

        public SubscribeCommandHandler(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }

        protected override async Task Handle(SubscribeCommand request, CancellationToken cancellationToken)
        {
            if (dbContext.Subscriptions.Any(x => x.Contact == request.Value))
                throw new BusinessLogicException($"{request.Value} already subscribed");

            var subscription = SubscriptionMapper.FromSubscribeCommandToSubscription(request, null);

            #region tempshit
            //send sms/email with token & obtain token, save to db
            Random rnd = new Random();
            int numb = rnd.Next(10000, 99000);
            subscription.ConfirmationToken = numb.ToString();
            #endregion

            subscription.Subscribed = true;
            subscription.Confirmed = false;

            dbContext.Subscriptions.Add(subscription);
            await dbContext.SaveChangesAsync();
        }
    }
}
