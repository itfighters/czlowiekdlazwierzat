using FluentValidation;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace CQRS.Command.Auctions
{
    public class DeleteAuctionCommand : IRequest
    {
        public int Id { get; set; }
    }

    public class DeleteAuctionCommandValidator : AbstractValidator<DeleteAuctionCommand>
    {
        public DeleteAuctionCommandValidator()
        {
            RuleFor(x => x.Id).NotEmpty();
        }
    }
}
