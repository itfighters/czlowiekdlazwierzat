using FluentValidation;
using MediatR;

namespace CQRS.Command.Auctions
{
    public class AddAuctionCommand : BaseAuctionCommand, IRequest
    {
        
    }

    public class AddAuctionCommandValidator : AbstractValidator<AddAuctionCommand>
    {
        public AddAuctionCommandValidator()
        {
            RuleFor(x => x.Title).NotEmpty().Length(1, 300);
            RuleFor(x => x.Description).NotEmpty().Length(1, 1500);
            RuleFor(x => x.Categories).NotEmpty();
        }
    }
}
