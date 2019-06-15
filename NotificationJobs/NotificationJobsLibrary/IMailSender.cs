using System.Net.Mail;

namespace NotificationJobsLibrary
{
    public interface IMailSender
    {
        bool SendMessage(string email, string subject, string body);
    }
}
