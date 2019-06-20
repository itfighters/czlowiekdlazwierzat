using DAL.Repositories.Abstract;
using DTO.Mapper;
using DTO.RequestViewModel;
using Microsoft.AspNetCore.Mvc;

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


        [HttpGet("{id}")]
        public  IActionResult GetSubscribers(int id)
        {
            return null; //return //CategoryMapper.ToListCategoryResponse(repository.GetCategories());
        }

        [HttpPost]
        public IActionResult Post([FromBody] SaveOrUpdateSubscriptionRequest value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _subscriptionRepository.AddSubscription(SubscriptionMapper.FromAddSubscriptionRequest(value));
            return Ok();
        }
    }
}
