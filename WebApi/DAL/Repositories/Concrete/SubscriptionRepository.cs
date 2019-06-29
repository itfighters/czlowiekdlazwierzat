using DAL.Exceptions;
using DAL.Model;
using DAL.Repositories.Abstract;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DAL.Repositories.Concrete
{
    public class SubscriptionRepository : ISubscriptionRepository
    {
        private readonly DatabaseContext _dbContext;

        public SubscriptionRepository(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Subscription>> GetSubscriptionsByAuction(Auction auction, SubscriptionType type) =>
            await SubscriptionsByAuction(auction, type)
                .ToListAsync();

        public async Task<int> GetSubscriptionsCountByAuction(Auction auction, SubscriptionType type) =>
            await SubscriptionsByAuction(auction, type)
                .CountAsync();

        private IQueryable<Subscription> SubscriptionsByAuction(Auction auction, SubscriptionType type)
        {
            if (auction == null)
                throw new BusinessLogicException("Auction doesn't exist");

            var auctionCategories = auction.Categories.Select(x => x.CategoryId);

            return _dbContext.Subscriptions
                .Include(x => x.Categories)
                .Where(x => 
                x.SubscriptionType == type
                && x.Categories.Select(y => y.CategoryId).Intersect(auctionCategories).Any()
                && (x.Subscribed && x.Confirmed) || (!x.Subscribed && x.Confirmed));
        }
    }
}
