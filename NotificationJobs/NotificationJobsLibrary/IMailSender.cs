using System.Net.Mail;
using System.Threading.Tasks;

namespace NotificationJobsLibrary
{
    public interface IMailSender
    {
        Task<EmailResult> SendMessageAsync(MailMessage mail);
    }
}
