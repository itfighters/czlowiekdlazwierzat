using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;
using DAL.Model;
using NotificationJobsLibrary.Services.Abstract;

namespace DAL.Templates
{
    public static class MailTemplate
    {
        public static string SubscriptionTemplate(string confirmationUrl)
        {
            using (var fileReader =
                new StreamReader(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "Templates","Resources", "Notification", "notification.html")))
            {
                var templateContent = fileReader.ReadToEnd();
                templateContent = templateContent.Replace("$PLACEHOLDER_TITLE", "Potwierdzenie zapisu na powiadomienia");
                templateContent = templateContent.Replace("$PLACEHOLDER_DESC", $"W celu zapisania się na powiadomienia mailowe wpisz wejdź pod adres: <a href='{confirmationUrl}'>{confirmationUrl}</a>.");
                return templateContent;
            }
        }

        public static string NotificationTemplate(Auction auction)
        {
            using (var fileReader =
                new StreamReader(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "Templates", "Resources", "Notification", "notification.html")))
            {
                var templateContent = fileReader.ReadToEnd();
                templateContent = templateContent.Replace("$PLACEHOLDER_TITLE", auction.Title);
                templateContent = templateContent.Replace("$PLACEHOLDER_DESC", auction.Description);
                return templateContent;
            }
        }
    }
}
