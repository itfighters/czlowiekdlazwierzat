namespace CQRS.QueryData
{
    public class NotificationDetails
    {
        public int Subscribed { get; set; }
        public int AlreadySent { get; set; } 
        public int MonthlyLimit { get; set; }
    }
}
