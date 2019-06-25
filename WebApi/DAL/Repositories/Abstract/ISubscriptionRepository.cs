using DAL.Model;
using System.Threading.Tasks;

namespace DAL.Repositories.Abstract
{
    public interface ISubscriptionRepository
    {
        Task Subscribe(Subscription subscription);
        Task Unsubscribe(string contact);
        Task Confirm(string token);
    }
}
