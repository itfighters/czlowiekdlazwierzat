using System;
using System.Collections.Generic;
using System.Text;

namespace NotificationJobsLibrary.Models
{
    public class SendNotificationResult
    {
        public bool IsSuccessful { get; set; }
        public string LogMessage { get; set; }
    }
}
