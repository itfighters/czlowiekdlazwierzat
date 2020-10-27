using FluentValidation;
using MediatR;

namespace CQRS.Command.Subscriptions
{
    public class UnsubscribeCommand : IRequest
    {
        public string Contact { get; set; }
    }

    public class UnsubscribeCommandValidator : AbstractValidator<UnsubscribeCommand>
    {
        public UnsubscribeCommandValidator()
        {
            RuleFor(x => x.Contact).NotEmpty();
        }
    }
}
