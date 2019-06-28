using System.Collections.Generic;

namespace NotificationJobsLibrary
{
    public interface ISmsSender
    {
        bool Send(string text, IEnumerable<string> numbers);
    }
}
