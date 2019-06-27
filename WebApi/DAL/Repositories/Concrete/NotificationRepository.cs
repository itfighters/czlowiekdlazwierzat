using DAL.Exceptions;
using DAL.Model;
using DAL.Repositories.Abstract;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace DAL.Repositories.Concrete
{
    public class NotificationRepository : INotificationRepository
    {
        private readonly DatabaseContext databaseContext;
        private readonly ISubscriptionRepository subscriptionRepository;

        public NotificationRepository(DatabaseContext databaseContext, ISubscriptionRepository subscriptionRepository)
        {
            this.databaseContext = databaseContext;
            this.subscriptionRepository = subscriptionRepository;
        }
        public async Task<int> ToBeSentCount(int auctionId, SubscriptionType subscriptionType)
        {
            var auction = databaseContext.Auctions
               .Include(x => x.Categories)
               .SingleOrDefault(x => x.Id == auctionId);

            if (auction == null)
                throw new BusinessLogicException("Auction doesn't exist");

            return await subscriptionRepository.GetSubscriptionsCountByAuction(auction, subscriptionType);
        }
    }
}
