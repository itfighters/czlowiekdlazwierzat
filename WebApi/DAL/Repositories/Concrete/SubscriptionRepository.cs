using DAL.Model;
using DAL.Repositories.Abstract;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories.Concrete
{
    public class SubscriptionRepository : ISubscriptionRepository
    {
        private readonly DatabaseContext _dbContext;

        public SubscriptionRepository(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void AddSubscription(Subscription subscription)
        {
            try
            {
                _dbContext.Subscriptions.Add(subscription);
                _dbContext.SaveChanges();

            }
            catch (DbUpdateException ex)
            {
                // Obsluga 
            }
        }
    }
}
