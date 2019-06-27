using System.Threading.Tasks;
using CQRS.Command.Notifications;
using CQRS.Query.Notifications;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationController : Controller
    {
        private readonly IMediator mediator;

        public NotificationController(IMediator mediator) => this.mediator = mediator;

        [HttpGet]
        public async Task<int> ToBeSentCount([FromQuery] ToBeSentQuery query) => await mediator.Send(query);

        [HttpPost]
        public async Task Post([FromBody] AddNotificationCommand command) => await mediator.Send(command);

    }
}