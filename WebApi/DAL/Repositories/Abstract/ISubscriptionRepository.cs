using DAL.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL.Repositories.Abstract
{
    public interface ISubscriptionRepository
    {
        Task Subscribe(Subscription subscription);
        Task Unsubscribe(string contact);
        Task Confirm(string token);
        Task<IEnumerable<Subscription>> GetSubscriptionsByAuction(Auction auction, SubscriptionType type);
        Task<int> GetSubscriptionsCountByAuction(Auction auction, SubscriptionType type);
    }
}
