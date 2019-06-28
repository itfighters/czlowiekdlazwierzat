using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DAL.Model;

namespace DAL.Repositories.Abstract
{
    public interface IJobsRepository
    {
        Task<IEnumerable<Notification>> GetNotificationsToSend(SubscriptionType type, int packageSize);
        Task SetNotificationsStatus(Guid[] notificationIds, NotificationStatus status);
    }
}
