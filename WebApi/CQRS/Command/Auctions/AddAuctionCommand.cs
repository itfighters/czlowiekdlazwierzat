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
            RuleFor(x => x.Title).NotEmpty().Length(1, 100);
            RuleFor(x => x.Description).NotEmpty().Length(1, 500);
            RuleFor(x => x.Categories).NotEmpty();
        }
    }
}
