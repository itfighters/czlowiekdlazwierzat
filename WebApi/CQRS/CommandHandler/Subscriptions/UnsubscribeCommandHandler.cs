using CQRS.Command.Subscriptions;
using DAL;
using MediatR;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CQRS.CommandHandler.Subscriptions
{
    public class UnsubscribeCommandHandler : AsyncRequestHandler<UnsubscribeCommand>
    {
        private readonly DatabaseContext dbContext;

        public UnsubscribeCommandHandler(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
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
                subscription.Confirmed = false;
                await dbContext.SaveChangesAsync();
            }
        }
    }
}
