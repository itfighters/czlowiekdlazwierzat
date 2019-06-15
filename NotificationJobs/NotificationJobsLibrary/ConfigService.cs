using System;
using System.Collections.Generic;
using System.Text;
using NotificationJobsLibrary.Models;

namespace NotificationJobsLibrary
{
    public static class ConfigService
    {
        public static EmailConfig GetEmailConfig => new EmailConfig()
        {
            Host = "smtp.gmail.com",
            Port = 587,
            UserName = "czlowiekdlazwierzathackton@gmail.com",
            Password = "Testowanie1",
            From = "czlowiekdlazwierzathackton@gmail.com"
        };

        public static SmsConfig GetSmsConfig => new SmsConfig()
        {

        };
    }
}
