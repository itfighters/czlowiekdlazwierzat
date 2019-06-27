using CQRS.Command.Subscriptions;
using DAL;
using DAL.Exceptions;
using MediatR;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CQRS.CommandHandler.Subscriptions
{
    public class ConfirmCommandHandler : AsyncRequestHandler<ConfirmCommand>
    {
        private readonly DatabaseContext dbContext;

        public ConfirmCommandHandler(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }

        protected override async Task Handle(ConfirmCommand request, CancellationToken cancellationToken)
        {
            var subscription = dbContext.Subscriptions
                .FirstOrDefault(x => x.Contact == request.Contact);

            if (subscription == null)
                throw new BusinessLogicException("Subscription doesn't exist");
            else if (subscription.ConfirmationToken != request.Token)
                throw new BusinessLogicException("Invalid token");
            else
            {
                subscription.Confirmed = true;
                await dbContext.SaveChangesAsync();
            }
        }
    }
}
