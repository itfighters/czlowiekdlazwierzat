using System.Collections.Generic;

namespace NotificationJobsLibrary
{
    public class SmsSender : ISmsSender
    {
        public bool Send(string text, IEnumerable<string> numbers)
        {
            IPlaySmsHelper helper = new PlaySmsHelper();
            return helper.SendAsync(text, numbers).Result;
        }
    }
}
