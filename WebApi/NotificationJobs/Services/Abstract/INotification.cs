using System.Collections.Generic;
using System.Threading.Tasks;

namespace NotificationJobs.Services.Abstract
{
    public interface INotification
    {
        Task SendAsync(IEnumerable<string> contacts, int auctionId);
    }
}
