using System.Threading.Tasks;
using CQRS.Command.User;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMediator mediatior;

        public UserController(IMediator mediatior) => this.mediatior = mediatior;

        [HttpPost("validate")]
        public async Task<string> Validate([FromBody] ValidateUserCommand command) => await mediatior.Send(command);
    }
}
