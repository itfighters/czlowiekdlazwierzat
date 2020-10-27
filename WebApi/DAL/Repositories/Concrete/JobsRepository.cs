using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Model;
using DAL.Repositories.Abstract;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories.Concrete
{
    public class JobsRepository : IJobsRepository
    {
        private readonly DatabaseContext dbContext;

        public JobsRepository(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public async Task<IEnumerable<Notification>> GetNotificationsToSend(SubscriptionType type, int packageSize)
        {
            return await dbContext.Notifications.Include(c=>c.Subscription).ThenInclude(c=>c.Categories)
                .Include(c=>c.Auction).ThenInclude(c=>c.Categories)
                .Where(c => c.Status == NotificationStatus.ReadyToSend && c.Subscription.SubscriptionType == type)
                .OrderByDescending(c=>c.Auction.Featured).ThenBy(c => c.AuctionId)
                .Take(packageSize).ToListAsync();
        }

        public async Task SetNotificationsStatus(Guid[] notificationIds, NotificationStatus status)
        {
            foreach (var notificationId in notificationIds)
            {
                var notification = dbContext.Notifications.First(c => c.Id == notificationId);
                notification.Status = status;
            }
            await dbContext.SaveChangesAsync();
        }
    }
}
