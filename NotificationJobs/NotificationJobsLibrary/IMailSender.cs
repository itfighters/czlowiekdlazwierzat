using System.Net.Mail;
using System.Threading.Tasks;

namespace NotificationJobsLibrary
{
    public interface IMailSender
    {
        EmailResult SendMessage(MailMessage mailMessage);
    }
}
