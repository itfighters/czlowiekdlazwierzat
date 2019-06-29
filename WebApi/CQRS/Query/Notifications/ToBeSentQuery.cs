using DAL.Model;
using FluentValidation;
using MediatR;

namespace CQRS.Query.Notifications
{
    public class ToBeSentQuery : IRequest<int>
    {
        public int AuctionId { get; set; }
        public SubscriptionType Type {get;set;}
    }

    public class ToBeSentValidator : AbstractValidator<ToBeSentQuery>
    {
        public ToBeSentValidator()
        {
            RuleFor(x => x.AuctionId).NotEmpty();
            RuleFor(x => x.Type).IsInEnum();
        }

    }
}
