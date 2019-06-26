using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL.Model;
using DAL.Repositories.Abstract;
using DAL.Services.Concrete;
using DTO.RequestViewModel;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationController : Controller
    {
        private readonly INotificationRepository notificationRepository;

        public NotificationController(INotificationRepository notificationRepository)
        {
            this.notificationRepository = notificationRepository;
        }

        [HttpGet]
        public async Task<IActionResult> ToBeSentCount(int auctionId, SubscriptionType type)=>
            Ok(await notificationRepository.ToBeSentCount(auctionId, type));
       


        [HttpPost]
        public async Task<IActionResult> Post([FromBody] AddNotificationRequest value)
        {
            await notificationRepository.AddNotification(value.AuctionId, value.Type);
            return Ok();
        }

    }
}