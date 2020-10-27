using System.IO;
using System.Net.Mail;
using System.Net.Mime;
using System.Text;

namespace NotificationJobsLibrary
{
    public static class MailMessageCreator
    {

        public static MailMessage GenerateMessage(string to, string from, string subject, string body, string imagesPath)
        {
            var mailMessage = new MailMessage()
            {
                BodyEncoding = Encoding.UTF8,
                Priority = MailPriority.Normal,
                IsBodyHtml = true,
                From = new MailAddress(from),
                Subject = subject,
            };

            LinkedResource logo = new LinkedResource(Path.Combine(imagesPath, "logo.png"));
            logo.ContentId = "logo";
            logo.ContentType = new ContentType(MediaTypeNames.Image.Jpeg);
            LinkedResource thumbnail = new LinkedResource(Path.Combine(imagesPath, "placeholder.png"));
            thumbnail.ContentId = "thumbnail";
            thumbnail.ContentType = new ContentType(MediaTypeNames.Image.Jpeg);
            LinkedResource button = new LinkedResource(Path.Combine(imagesPath, "button.png"));
            button.ContentId = "button";
            button.ContentType = new ContentType(MediaTypeNames.Image.Jpeg);
            LinkedResource background = new LinkedResource(Path.Combine(imagesPath, "footer.png"));
            background.ContentId = "footer";
            background.ContentType = new ContentType(MediaTypeNames.Image.Jpeg);

            AlternateView htmlView = AlternateView.CreateAlternateViewFromString(body, null, "text/html");
            htmlView.LinkedResources.Add(logo);
            htmlView.LinkedResources.Add(thumbnail);
            htmlView.LinkedResources.Add(background);
            htmlView.LinkedResources.Add(button);

            mailMessage.AlternateViews.Add(htmlView);

            mailMessage.To.Add(to);

            return mailMessage;
        }


    }
}
