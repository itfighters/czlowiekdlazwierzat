using System.Linq;
using System.Text.RegularExpressions;
using DAL.Model;
using FluentValidation;

namespace DTO.RequestViewModel
{
    public class SubscribeRequest
    {
        public SubscriptionType SubscriptionType { get; set; }
        public string Value { get; set; }
        public int[] Categories { get; set; }
    }

    public class AddSubscriptionRequestValidator : AbstractValidator<SubscribeRequest>
    {
        public AddSubscriptionRequestValidator()
        {
            RuleFor(x => x.Categories).NotEmpty().Custom((arr, context) =>
            {
                if (arr.Any(x => x < 1 ))
                    context.AddFailure("Wrong category id (value should be between 1 and 6)");
            });

            RuleFor(x => x.SubscriptionType).NotEmpty().IsInEnum();

            RuleFor(x => x.Value).EmailAddress()
            .When(x=>x.SubscriptionType == SubscriptionType.Email);

            RuleFor(x => x.Value).NotEmpty().Must(arg =>
            {
                return IsValidPhone(arg);
            }).When(x => x.SubscriptionType == SubscriptionType.Sms);
        }

        private bool IsValidPhone(string phoneNumber)
        {
            if (string.IsNullOrEmpty(phoneNumber))
                return false;
            var r = new Regex(@"^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$");
            return r.IsMatch(phoneNumber);
        }
    }
    
}
