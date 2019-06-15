using System;
using System.Threading.Tasks;

namespace NotificationJobsLibrary
{
    public interface IPlaySMSHelper
    {
        void SendAsync(string text, string number);

    }
}
