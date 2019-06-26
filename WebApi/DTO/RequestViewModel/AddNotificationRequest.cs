using DAL.Model;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DTO.RequestViewModel
{
    public class AddNotificationRequest
    {
        public int AuctionId { get; set; }
        public SubscriptionType Type { get; set; }
    }

    public class AddNotificationRequestValidator : AbstractValidator<AddNotificationRequest>
    {
        public AddNotificationRequestValidator()
        {
            RuleFor(x => x.AuctionId).NotEmpty();
            RuleFor(x => x.Type).NotEmpty().IsInEnum();
        }
    }
}
