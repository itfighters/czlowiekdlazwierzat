﻿using System.IO;
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
            logo.ContentId = "logoId";
            logo.ContentType = new ContentType(MediaTypeNames.Image.Jpeg);
            LinkedResource fb = new LinkedResource(Path.Combine(imagesPath, "facebook.png"));
            fb.ContentId = "facebook";
            fb.ContentType = new ContentType(MediaTypeNames.Image.Jpeg);
            LinkedResource thumbnail = new LinkedResource(Path.Combine(imagesPath, "thumbnail.png"));
            thumbnail.ContentId = "thumbnail";
            thumbnail.ContentType = new ContentType(MediaTypeNames.Image.Jpeg);
            LinkedResource background = new LinkedResource(Path.Combine(imagesPath, "background.png"));
            background.ContentId = "background";
            background.ContentType = new ContentType(MediaTypeNames.Image.Jpeg);

            AlternateView htmlView = AlternateView.CreateAlternateViewFromString(body, null, "text/html");
            htmlView.LinkedResources.Add(logo);
            htmlView.LinkedResources.Add(fb);
            htmlView.LinkedResources.Add(thumbnail);
            htmlView.LinkedResources.Add(background);
            mailMessage.AlternateViews.Add(htmlView);

            mailMessage.To.Add(to);

            return mailMessage;
        }


    }
}