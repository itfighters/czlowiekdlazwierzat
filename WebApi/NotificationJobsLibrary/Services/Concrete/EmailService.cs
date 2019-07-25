using Infrastructure;
using Microsoft.Extensions.Options;
using NotificationJobsLibrary.Services.Abstract;
using System;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Reflection;

namespace NotificationJobsLibrary.Services.Concrete
{
    public class EmailService : IEmailService
    {
        private readonly bool enableSsl = true;
        private readonly bool useDefaultCredentials = false;
        private readonly IOptions<EmailConfig> options;

        public EmailService(IOptions<EmailConfig> options)
        {
            this.options = options;
        }

        private bool SendMessage(MailMessage mail)
        {
            try
            {
                SmtpClient client = new SmtpClient();
                client.Host = "smtp.gmail.com";
                client.Port = 587;
                client.EnableSsl = true;
                client.UseDefaultCredentials = false;
                client.DeliveryMethod = SmtpDeliveryMethod.Network;
                client.Credentials = new NetworkCredential(options.Value.UserName, options.Value.Password);
                client.Send(mail);
                return true;
            }
            catch (Exception exp)
            {
                //todo logowanie
                return false;
            }
        }

        public bool SendMessage(string email, string subject, string body)
        {
            var message = MailMessageCreator.GenerateMessage(email, options.Value.From, subject, body, Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "Templates\\Resources"));
            return SendMessage(message);
        }
    }
}