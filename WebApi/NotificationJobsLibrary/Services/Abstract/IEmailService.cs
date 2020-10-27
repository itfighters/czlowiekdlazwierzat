using System.Threading.Tasks;
using NotificationJobsLibrary.Models;

namespace NotificationJobsLibrary.Services.Abstract
{
    public interface IEmailService
    {
        Task<SendNotificationResult> SendMessage(string email, string subject, string body);
    }
}
