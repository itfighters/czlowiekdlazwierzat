using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL.Services.Concrete;
using DTO.RequestViewModel;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationController : Controller
    {
        private ISubscriptionService _service;

        public NotificationController(ISubscriptionService service)
        {
            _service = service;
        }

        [HttpPost]
        public IActionResult Post([FromBody] SendSubscriptionRequest value)
        {
           

           _service.AddNotifications(value.AuctionId,(SubscriptionType) value.Type);
            return Ok();
        }
    }
}