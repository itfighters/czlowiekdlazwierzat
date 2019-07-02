namespace DAL.Templates
{
    public static class SMSTemplate
    {
        public static string SubscribeTemplate(string token) => $"W celu zapisania się na powiadomienia wprowadź kod: {token} / Fundacja Człowiek dla Zwierząt.";
        public static string UnsubscribeTemplate(string token) => $"W celu wypisania się z powiadomienia wprowadź kod: {token} / Fundacja Człowiek dla Zwierząt.";
        public static string NewNotification(string url) => $"Nowa potrzeba w serwisie. Wejdź na {url} aby pomóc / Fundacja Człowiek dla Zwierząt.";
    }
}
