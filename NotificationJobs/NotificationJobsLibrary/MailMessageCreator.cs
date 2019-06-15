﻿using System.Net.Mail;
using System.Text;

namespace NotificationJobsLibrary
{
    public static class MailMessageCreator
    {
        public static MailMessage GenerateMessage(string to, string subject, string body)
        {
            var mailMessage = new MailMessage()
            {
                BodyEncoding = Encoding.UTF8,
                Priority = MailPriority.Normal,
                IsBodyHtml = true,
                From = new MailAddress(ConfigService.GetEmailConfig.From),
                Subject = subject,
                Body = body,
            };

            mailMessage.To.Add(to);

            return mailMessage;
        }


    }
}
