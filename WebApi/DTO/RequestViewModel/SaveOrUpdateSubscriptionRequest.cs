using System.Text.RegularExpressions;
using FluentValidation;

namespace DTO.RequestViewModel
{
    public class SaveOrUpdateSubscriptionRequest
    {
        public string Email { get; set; }
        public string Phone { get; set; }
        public int CategoryId { get; set; }
    }

    public class AddSubscriptionRequestValidator : AbstractValidator<SaveOrUpdateSubscriptionRequest>
    {
        public AddSubscriptionRequestValidator()
        {
            RuleFor(x => x.CategoryId).NotEmpty().WithMessage("Podaj odpowiednią kategorię");
            RuleFor(x => x).Must(arg =>
            {
                if (arg.Email == string.Empty && arg.Phone == string.Empty) return false;
                if (arg.Email == string.Empty) return IsValidPhone(arg.Phone);
                return arg.Phone == string.Empty && IsValidEmail(arg.Email);
            }).WithMessage("Nieprawidłowy numer telefonu lub e-mail");
        }

        private bool IsValidPhone(string phoneNumber)
        {
            if (string.IsNullOrEmpty(phoneNumber))
                return false;
            var r = new Regex(@"^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$");
            return r.IsMatch(phoneNumber);
        }
        private bool IsValidEmail(string inputEmail)
        {
            string strRegex = @"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}" +
                              @"\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\" +
                              @".)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$";
            Regex re = new Regex(strRegex);
            return re.IsMatch(inputEmail);
        }
    }
}
