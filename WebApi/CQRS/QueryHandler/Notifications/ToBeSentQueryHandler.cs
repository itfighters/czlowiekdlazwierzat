using CQRS.Query.Notifications;
using DAL;
using DAL.Exceptions;
using DAL.Repositories.Abstract;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CQRS.QueryHandler.Notifications
{
    public class ToBeSentQueryHandler : IRequestHandler<ToBeSentQuery, int>
    {
        private readonly DatabaseContext dbContext;
        private readonly ISubscriptionRepository subscriptionRepository;

        public ToBeSentQueryHandler(DatabaseContext dbContext, ISubscriptionRepository subscriptionRepository)
        {
            this.dbContext = dbContext;
            this.subscriptionRepository = subscriptionRepository;
        }

        public async Task<int> Handle(ToBeSentQuery request, CancellationToken cancellationToken)
        {
            var auction = dbContext.Auctions
               .Include(x => x.Categories)
               .SingleOrDefault(x => x.Id == request.AuctionId);

            if (auction == null)
                throw new BusinessLogicException("Auction doesn't exist");

            return await subscriptionRepository.GetSubscriptionsCountByAuction(auction, request.Type);
        }
    }
}
