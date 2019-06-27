using DAL.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.Abstract
{
    public interface INotificationRepository
    {
        Task<int> ToBeSentCount(int auctionId, SubscriptionType subscriptionType);
    }
}
