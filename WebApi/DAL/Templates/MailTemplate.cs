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
                new StreamReader(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "Templates","Resources", "SignIn", "signin.html")))
            {
                var templateContent = fileReader.ReadToEnd();
                templateContent = templateContent.Replace("$PLACEHOLDER_TITLE", "Dziękujemy, że do nad dołączyłeś!");
                templateContent = templateContent.Replace("$PLACEHOLDER_DESC", $"Aby potwierdzić zapis i aktywować powiadomienia o potrzebach przytuliska w Łętkowicach kliknij w link: <a href='{confirmationUrl}'>{confirmationUrl}</a>.");
                templateContent = templateContent.Replace("$PLACEHOLDER_LINK", $"");

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
                templateContent = templateContent.Replace("$PLACEHOLDER_LINK", $"https://pomagalnia.pl/potrzeba/{auction.Id}");

                return templateContent;
            }
        }
    }
}
