using CQRS.QueryData;
using DAL.Model;
using FluentValidation;
using MediatR;
using System.Collections.Generic;

namespace CQRS.Query.Notifications
{
    public class NotificationDetailsQuery : IRequest<Dictionary<SubscriptionType,NotificationDetails>>
    {
        public int AuctionId { get; set; }
    }

    public class NotificationDetailsValidator : AbstractValidator<NotificationDetailsQuery>
    {
        public NotificationDetailsValidator()
        {
            RuleFor(x => x.AuctionId).NotEmpty();
        }

    }
}
