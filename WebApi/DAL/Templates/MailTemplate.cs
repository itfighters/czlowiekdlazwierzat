using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;

namespace DAL.Templates
{
    public static class MailTemplate
    {
        public static string NotificationTemplate(string title, string message)
        {
            using (var fileReader =
                new StreamReader(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "Templates\\Resources\\notification.html")))
            {
                var templateContent = fileReader.ReadToEnd();
                templateContent = templateContent.Replace("$PLACEHOLDER_TITLE", title);
                templateContent = templateContent.Replace("$PLACEHOLDER_DESC", message);
                return templateContent;
            }
        }
    }
}
