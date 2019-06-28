using System.Collections.Generic;
using System.Threading.Tasks;

namespace NotificationJobsLibrary
{
    public interface IPlaySmsHelper
    {
        Task<bool> SendAsync(string text, IEnumerable<string> numbers);
    }
}
