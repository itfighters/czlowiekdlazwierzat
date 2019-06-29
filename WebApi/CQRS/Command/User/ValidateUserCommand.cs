using FluentValidation;
using MediatR;

namespace CQRS.Command.User
{
    public class ValidateUserCommand : IRequest<string>
    {
        public string Login { get; set; }
        public string Password { get; set; }
    }

    public class ValidateUserCommandValidator : AbstractValidator<ValidateUserCommand>
    {
        public ValidateUserCommandValidator()
        {
            RuleFor(x => x.Login).NotEmpty();
            RuleFor(x => x.Password).NotEmpty();
        }
    }
}
