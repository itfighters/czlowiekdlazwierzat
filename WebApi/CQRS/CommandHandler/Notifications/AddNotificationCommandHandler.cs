using CQRS.Command.Notifications;
using DAL;
using DAL.Exceptions;
using DAL.Model;
using DAL.Repositories.Abstract;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CQRS.CommandHandler.Notifications
{
    public class AddNotificationCommandHandler : AsyncRequestHandler<AddNotificationCommand>
    {
        private readonly DatabaseContext dbContext;
        private readonly ISubscriptionRepository subscriptionRepository;

        public AddNotificationCommandHandler(DatabaseContext dbContext, ISubscriptionRepository subscriptionRepository)
        {
            this.dbContext = dbContext;
            this.subscriptionRepository = subscriptionRepository;
        }

        protected override async Task Handle(AddNotificationCommand request, CancellationToken cancellationToken)
        {
            var auction = dbContext.Auctions
               .Include(x => x.Categories)
               .SingleOrDefault(x => x.Id == request.AuctionId);

            if (auction == null)
                throw new BusinessLogicException("Auction doesn't exist");

            var subscriptions = await subscriptionRepository.GetSubscriptionsByAuction(auction, request.Type);

            await dbContext.AddRangeAsync(
                subscriptions.Select(s => new Notification
                {
                    Status = NotificationStatus.ReadyToSend,
                    Auction = auction,
                    Subscription = s
                }));

            await dbContext.SaveChangesAsync();
        }
    }
}
