using DAL.Repositories.Abstract;
using DTO.Mapper;
using DTO.RequestViewModel;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscriptionController : ControllerBase
    {
        private readonly ISubscriptionRepository _subscriptionRepository;

        public SubscriptionController(ISubscriptionRepository subscriptionRepository)
        {
            _subscriptionRepository = subscriptionRepository;
        }

        [HttpPost("subscribe")]
        public async Task<IActionResult> Subscribe([FromBody] SubscribeRequest value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _subscriptionRepository.Subscribe(SubscriptionMapper.FromAddSubscriptionRequest(value));
            return Ok();
        }

        [HttpPost("unsubscribe")]
        public async Task<IActionResult> Unsubscribe([FromBody] string contact)
        {
            if (string.IsNullOrEmpty(contact))
            {
                return BadRequest("Contact cannot be null");
            }
            await _subscriptionRepository.Unsubscribe(contact);
            return Ok();
        }

        [HttpPost("confirm")]
        public async Task<IActionResult> Confirm([FromBody] string token)
        {
            if (string.IsNullOrEmpty(token))
            {
                return BadRequest("Contact cannot be null");
            }
            await _subscriptionRepository.Confirm(token);
            return Ok();
        }

    }
}
