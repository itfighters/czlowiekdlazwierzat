using System.Collections.Generic;
using System.Threading.Tasks;

namespace NotificationJobsLibrary.Services.Abstract
{
    public interface ISMSService
    {
        Task<bool> SendAsync(string text, IEnumerable<string> numbers);
    }
}
