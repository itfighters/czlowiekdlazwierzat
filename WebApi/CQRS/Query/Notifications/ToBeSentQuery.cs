using DAL.Model;
using FluentValidation;
using MediatR;
using System.Collections.Generic;

namespace CQRS.Query.Notifications
{
    public class ToBeSentQuery : IRequest<Dictionary<SubscriptionType,int>>
    {
        public int AuctionId { get; set; }
    }

    public class ToBeSentValidator : AbstractValidator<ToBeSentQuery>
    {
        public ToBeSentValidator()
        {
            RuleFor(x => x.AuctionId).NotEmpty();
        }

    }
}
