using System.Net.Mail;

namespace NotificationJobsLibrary
{
    public interface IMailSender
    {
        EmailResult SendMessage(MailMessage mailMessage);
    }
}
