using System.Collections.Generic;

namespace NotificationJobsLibrary
{
    public interface ISMSSender
    {
        bool Send(string text, IEnumerable<string> numbers);
    }
}
