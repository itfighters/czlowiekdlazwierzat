using System.Threading;
using System.Threading.Tasks;
using CQRS.Command.User;
using DAL;
using DAL.Exceptions;
using DAL.Services.Abstract;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CQRS.CommandHandler.User
{
    public class ValidateUserCommandHandler : IRequestHandler<ValidateUserCommand, string>
    {
        private readonly DatabaseContext dbContext;
        private readonly IJWTService jwtService;

        public ValidateUserCommandHandler(DatabaseContext dbContext, IJWTService jwtService)
        {
            this.dbContext = dbContext;
            this.jwtService = jwtService;
        }

        public async Task<string> Handle(ValidateUserCommand request, CancellationToken cancellationToken)
        {
            var user = await dbContext.Users.FirstOrDefaultAsync(x => x.Login == request.Login);
            if (user == null)
                throw new BusinessLogicException($"User {request.Login} doesn't exist");
            else if (user.Password != request.Password)
                throw new BusinessLogicException("Wrong credentials");
            else return jwtService.GenerateToken(user);
        }
    }
}
