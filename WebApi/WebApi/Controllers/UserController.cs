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
        public async Task<IActionResult> Validate([FromBody] ValidateUserCommand command) => Ok(new { Token = await mediatior.Send(command) });
    }
}
