using DAL.Model;

namespace DAL.Repositories.Abstract
{
    public interface ISubscriptionRepository
    {
        void AddSubscription(Subscription subscription);
    }
}
