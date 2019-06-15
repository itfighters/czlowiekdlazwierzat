using System;
namespace NotificationJobsLibrary
{
    public interface ISMSSender 
    {

        public void Send(string text, string number);


    }
}
