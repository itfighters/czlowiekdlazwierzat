using DAL.Model;
using MediatR;

namespace CQRS.Event
{
    public class SubscribtionChangedEvent : INotification
    {
        public string Contact { get; set; }
        public SubscriptionType SubscriptionType { get; set; }
        public string Token { get; set; }
    }
}
