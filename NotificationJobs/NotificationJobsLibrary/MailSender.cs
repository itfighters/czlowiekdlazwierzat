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

        public EmailResult SendMessage(MailMessage mail)
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
                    return EmailResult.Ok;
                }
            }
            catch (Exception exp)
            {
                return EmailResult.Fail;
            }

        }
    }
}