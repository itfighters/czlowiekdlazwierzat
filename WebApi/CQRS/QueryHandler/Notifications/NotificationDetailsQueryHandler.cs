using CQRS.Query.Notifications;
using CQRS.QueryData;
using DAL;
using DAL.Exceptions;
using DAL.Model;
using DAL.Repositories.Abstract;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CQRS.QueryHandler.Notifications
{
    public class NotificationDetailsQueryHandler : IRequestHandler<NotificationDetailsQuery, Dictionary<SubscriptionType, NotificationDetails>>
    {
        private readonly DatabaseContext dbContext;
        private readonly ISubscriptionRepository subscriptionRepository;

        public NotificationDetailsQueryHandler(DatabaseContext dbContext, ISubscriptionRepository subscriptionRepository)
        {
            this.dbContext = dbContext;
            this.subscriptionRepository = subscriptionRepository;
        }

        public async Task<Dictionary<SubscriptionType, NotificationDetails>> Handle(NotificationDetailsQuery request, CancellationToken cancellationToken)
        {
            var auction = dbContext.Auctions
                        .Include(x => x.Categories)
                        .SingleOrDefault(x => x.Id == request.AuctionId);

            if (auction == null)
                throw new BusinessLogicException("Auction doesn't exist");

            var alreadySent = dbContext.Notifications
                .Include(x=>x.Subscription)
                .Where(x => x.UpdatedAt.Month == DateTime.Now.Month
                && x.UpdatedAt.Year == DateTime.Now.Year
                && (x.Status == NotificationStatus.ReadyToSend || x.Status == NotificationStatus.Sending || x.Status == NotificationStatus.Sent));

            return new Dictionary<SubscriptionType, NotificationDetails>(new KeyValuePair<SubscriptionType, NotificationDetails>[] {
                await GetNotificationDetails(SubscriptionType.Email, auction, alreadySent),
                await GetNotificationDetails(SubscriptionType.Push, auction, alreadySent),
                await GetNotificationDetails(SubscriptionType.Sms, auction, alreadySent),
            });
        }

        private async Task<KeyValuePair<SubscriptionType, NotificationDetails>> GetNotificationDetails(SubscriptionType subscriptionType, Auction auction, IQueryable<Notification> alreadySentQuery)
        {
            var details = new NotificationDetails
            {
                Subscribed = await subscriptionRepository.GetSubscriptionsCountByAuction(auction, subscriptionType),
                AlreadySent = await alreadySentQuery.Where(x => x.Subscription.SubscriptionType == subscriptionType).CountAsync(),
                MonthlyLimit = 1000 //todo - wyciągnąć z konfigu
            };
            return new KeyValuePair<SubscriptionType, NotificationDetails>(subscriptionType, details);
        }


    }
}
