using System.Collections.Generic;
using System.Threading.Tasks;
using CQRS.Command.Notifications;
using CQRS.Query.Notifications;
using CQRS.QueryData;
using DAL.Model;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationController : Controller
    {
        private readonly IMediator mediator;

        public NotificationController(IMediator mediator) => this.mediator = mediator;

        [HttpGet]
        public async Task<Dictionary<SubscriptionType, NotificationDetails>> NotificationDetails([FromQuery] NotificationDetailsQuery query) => await mediator.Send(query);

        [HttpPost]
        public async Task Post([FromBody] AddNotificationCommand command) => await mediator.Send(command);
    }
}