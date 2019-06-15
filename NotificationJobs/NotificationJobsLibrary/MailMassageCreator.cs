using System;
using System.Collections.Generic;
using System.Net.Mail;
using System.Text;

namespace NotificationJobsLibrary
{
    public class MailMassageCreator
    {
        private string _emailSender;    
        private string _emailSenderPassword;
        private string _emailSenderHost;
        private string _emailSenderPort;
        Boolean emailIsSSL = true;


        public MailMessage GenerateMessage()
        {
            var mailMessage = new MailMessage()
            {
                BodyEncoding = Encoding.UTF8,
                Priority = MailPriority.Normal,
                IsBodyHtml = true,
                From = new MailAddress ("czlowiekdlazwierzathackton@gmail.com"),
                Subject = "testSub1",
            };

            mailMessage.To.Add("nocon.robert@gmail.com");

            return mailMessage;
        }


    }
}
