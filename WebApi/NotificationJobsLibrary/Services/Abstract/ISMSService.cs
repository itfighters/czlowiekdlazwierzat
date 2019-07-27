using System.Collections.Generic;
using System.Threading.Tasks;
using NotificationJobsLibrary.Models;

namespace NotificationJobsLibrary.Services.Abstract
{
    public interface ISMSService
    {
        Task<SendNotificationResult> SendAsync(string text, IEnumerable<string> numbers);
    }
}
