using System;
namespace NotificationJobsLibrary
{
    public class SMSSender : ISMSSender
    {
        public SMSSender()
        {

        }

        public void Send(string text, string number)
        {
            IPlaySMSHelper helper = new PlaySMSHelper();
            helper.SendAsync(text, number);

        }
    }
}
