using FluentValidation;
using MediatR;

namespace CQRS.Command.Subscriptions
{
    public class ConfirmCommand : IRequest
    {
        public string Token { get; set; }
        public string Contact { get; set; }
    }

    public class ConfirmCommandValidator : AbstractValidator<ConfirmCommand>
    {
        public ConfirmCommandValidator()
        {
            RuleFor(x => x.Contact).NotEmpty();
            RuleFor(x => x.Token)
                .NotEmpty()
                .Length(5);
        }
    }
}
