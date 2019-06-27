using CQRS.Command.Subscriptions;
using DAL.Repositories.Abstract;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscriptionController : ControllerBase
    {
        private readonly ISubscriptionRepository _subscriptionRepository;
        private readonly IMediator mediator;

        public SubscriptionController(ISubscriptionRepository subscriptionRepository, IMediator mediator)
        {
            _subscriptionRepository = subscriptionRepository;
            this.mediator = mediator;
        }

        [HttpPost("subscribe")]
        public async Task Subscribe([FromBody] SubscribeCommand command) => await mediator.Send(command);

        [HttpPost("unsubscribe")]
        public async Task Unsubscribe([FromBody] UnsubscribeCommand command) => await mediator.Send(command);

        [HttpPost("confirm")]
        public async Task Confirm([FromBody] ConfirmCommand command) => await mediator.Send(command);

    }
}
