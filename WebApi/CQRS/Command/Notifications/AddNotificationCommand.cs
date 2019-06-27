using DAL.Model;
using FluentValidation;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace CQRS.Command.Notifications
{
    public class AddNotificationCommand : IRequest
    {
        public int AuctionId { get; set; }
        public SubscriptionType Type { get; set; }
    }

    public class AddNotificationCommandValidator : AbstractValidator<AddNotificationCommand>
    {
        public AddNotificationCommandValidator()
        {
            RuleFor(x => x.AuctionId).NotEmpty();
            RuleFor(x => x.Type).NotEmpty().IsInEnum();
        }
    }
}
