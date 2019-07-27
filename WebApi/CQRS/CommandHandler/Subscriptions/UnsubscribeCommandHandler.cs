using CQRS.Command.Subscriptions;
using DAL;
using DAL.Model;
using MediatR;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using CQRS.Event;
using Infrastructure.Abstract;

namespace CQRS.CommandHandler.Subscriptions
{
    public class UnsubscribeCommandHandler : AsyncRequestHandler<UnsubscribeCommand>
    {
        private readonly DatabaseContext dbContext;
        private readonly IMediator mediator;
        private readonly IConfirmationCodesGenerator confiramationCodesGenerator;

        public UnsubscribeCommandHandler(DatabaseContext dbContext, IMediator mediator, IConfirmationCodesGenerator confiramationCodesGenerator)
        {
            this.dbContext = dbContext;
            this.mediator = mediator;
            this.confiramationCodesGenerator = confiramationCodesGenerator;
        }

        protected override async Task Handle(UnsubscribeCommand request, CancellationToken cancellationToken)
        {
            var subscription = dbContext.Subscriptions
                .FirstOrDefault(x => x.Contact == request.Contact);

            if (subscription == null)
                throw new Exception("Subscription doesn't exist");
            else
            {
                subscription.Subscribed = false;
                subscription.Confirmed = true;
                await dbContext.SaveChangesAsync();
            }
        }
    }
}
