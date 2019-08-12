using FluentValidation;
using MediatR;

namespace CQRS.Command.Auctions
{
    public class UpdateAuctionCommand : BaseAuctionCommand, IRequest
    {
        public int Id { get; set; }
    }

    public class UpdateAuctionCommandValidator : AbstractValidator<UpdateAuctionCommand>
    {
        public UpdateAuctionCommandValidator()
        {
            RuleFor(x => x.Id).NotEmpty();
            RuleFor(x => x.Title).NotEmpty().Length(1, 100);
            RuleFor(x => x.Description).NotEmpty().Length(1, 500);
            RuleFor(x => x.MultichoiceCategories).NotEmpty();
        }
    }
}
