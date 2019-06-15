using System.Net.Mail;
using System.Text;

namespace NotificationJobsLibrary
{
    public class MailMassageCreator
    {
        public MailMessage GenerateMessage()
        {
            var mailMessage = new MailMessage()
            {
                BodyEncoding = Encoding.UTF8,
                Priority = MailPriority.Normal,
                IsBodyHtml = true,
                From = new MailAddress(ConfigService.GetEmailConfig.From),
                Subject = "testSub1",
            };

            mailMessage.To.Add("nocon.robert@gmail.com");

            return mailMessage;
        }


    }
}
