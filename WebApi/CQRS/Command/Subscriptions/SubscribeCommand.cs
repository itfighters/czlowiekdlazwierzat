using DAL.Model;
using FluentValidation;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace CQRS.Command.Subscriptions
{
    public class SubscribeCommand : IRequest
    {
        public SubscriptionType SubscriptionType { get; set; }
        public string Value { get; set; }
        public int[] Categories { get; set; }
    }

    public class SubscribeCommandValidator : AbstractValidator<SubscribeCommand>
    {
        public SubscribeCommandValidator()
        {
            RuleFor(x => x.Categories).NotEmpty()

            RuleFor(x => x.SubscriptionType).NotEmpty().IsInEnum();

            RuleFor(x => x.Value).EmailAddress()
            .When(x => x.SubscriptionType == SubscriptionType.Email);

            RuleFor(x => x.Value).NotEmpty().Must(arg =>
            {
                return IsValidPhone(arg);
            }).When(x => x.SubscriptionType == SubscriptionType.Sms);
        }

        private bool IsValidPhone(string phoneNumber)
        {
            if (string.IsNullOrEmpty(phoneNumber))
                return false;

            //regex do poprawy
            //var r = new Regex(@"^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$");


            //return r.IsMatch(phoneNumber);
            return true; 
        }
    }
}
