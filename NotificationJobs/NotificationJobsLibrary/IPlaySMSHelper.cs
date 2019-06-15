using System.Collections.Generic;
using System.Threading.Tasks;

namespace NotificationJobsLibrary
{
    public interface IPlaySMSHelper
    {
        Task<bool> SendAsync(string text, IEnumerable<string> numbers);
    }
}
