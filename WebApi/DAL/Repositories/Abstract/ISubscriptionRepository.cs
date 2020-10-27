using DAL.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL.Repositories.Abstract
{
    public interface ISubscriptionRepository
    {
        Task<IEnumerable<Subscription>> GetSubscriptionsByAuction(Auction auction, SubscriptionType type);
        Task<int> GetSubscriptionsCountByAuction(Auction auction, SubscriptionType type);
    }
}
