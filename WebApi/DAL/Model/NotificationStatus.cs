namespace DAL.Model
{
    public enum NotificationStatus
    {
        ReadyToSend = 1,
        Sending = 2,
        Sent = 3,
        Failed = 4,
        UserUnsubscribed = 5,
        Cancelled = 6
    }
}
