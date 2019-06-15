using System;
using System.Net;
using System.Net.Mail;

namespace NotificationJobsLibrary
{
    public class MailSender : IMailSender
    {
        private readonly bool _enableSsl = true;
        private readonly bool _useDefaultCredentials = false;
        private readonly ICredentialsByHost _credentials = new NetworkCredential(ConfigService.GetEmailConfig.UserName, ConfigService.GetEmailConfig.Password);

        private bool SendMessage(MailMessage mail)
        {
            try
            {
                using (var smtpClient = new SmtpClient()
                {
                    Host = ConfigService.GetEmailConfig.Host,
                    Port = ConfigService.GetEmailConfig.Port,
                    EnableSsl = _enableSsl,
                    UseDefaultCredentials = _useDefaultCredentials,
                    Credentials = _credentials
                })
                {
                    smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
                    smtpClient.Send(mail);
                    return true;
                }
            }
            catch (Exception exp)
            {
                return false;
            }

        }

        public bool SendMessage(string email, string subject, string body)
        {
            var message = MailMessageCreator.GenerateMessage(email, subject, body);
            return SendMessage(message);
        }
    }
}