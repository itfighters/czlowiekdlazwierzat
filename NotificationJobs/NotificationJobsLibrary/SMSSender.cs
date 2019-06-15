using System.Collections.Generic;

namespace NotificationJobsLibrary
{
    public class SMSSender : ISMSSender
    {
        public bool Send(string text, IEnumerable<string> numbers)
        {
            IPlaySMSHelper helper = new PlaySMSHelper();
            return helper.SendAsync(text, numbers).Result;
        }
    }
}
