namespace NotificationJobsLibrary.Services.Abstract
{
    public interface IEmailService
    {
        bool SendMessage(string email, string subject, string body);
    }
}
