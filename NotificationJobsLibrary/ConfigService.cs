using NotificationJobsLibrary.Models;

namespace NotificationJobsLibrary
{
    public static class ConfigService
    {
        public static EmailConfig GetEmailConfig => new EmailConfig()
        {
            Host = "smtp.gmail.com",
            Port = 587,
            UserName = "czlowiekdlazwierzathackton@gmail.com",
            Password = "Testowanie1",
            From = "czlowiekdlazwierzathackton@gmail.com"
        };

        public static SmsConfig GetSmsConfig => new SmsConfig()
        {
            ApiUrl = "https://api.playsms.pl/send",
            ApiKey = "8ad16723-2b9f-4b41-97cb-3aae72417bed",
            ApiPassword = "Hackathon2019",
            From = "TEST"
        };
    }
}
