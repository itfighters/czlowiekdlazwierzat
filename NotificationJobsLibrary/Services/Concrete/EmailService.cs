using Infrastructure;
using Microsoft.Extensions.Options;
using NotificationJobsLibrary.Services.Abstract;
using System;
using System.Net;
using System.Net.Mail;

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
                using (var smtpClient = new SmtpClient()
                {
                    Host = options.Value.Host,
                    Port = options.Value.Port,
                    EnableSsl = enableSsl,
                    UseDefaultCredentials = useDefaultCredentials,
                    Credentials = new NetworkCredential(options.Value.UserName, options.Value.Password)
                })
                {
                    smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
                    smtpClient.Send(mail);
                    return true;
                }
            }
            catch (Exception exp)
            {
                //todo logowanie
                return false;
            }
        }

        public bool SendMessage(string email, string subject, string body)
        {
            var message = MailMessageCreator.GenerateMessage(email, options.Value.From, subject, body);
            return SendMessage(message);
        }
    }
}