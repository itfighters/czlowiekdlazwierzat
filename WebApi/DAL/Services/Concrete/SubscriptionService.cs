using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DAL.Model;
using Microsoft.EntityFrameworkCore;

namespace DAL.Services.Concrete
{
    public interface ISubscriptionService
    {
        void AddNotifications(int auctionId, SubscriptionType type);
    }

    public class SubscriptionService : ISubscriptionService
    {
        private readonly DatabaseContext dbContext;

        public SubscriptionService(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public void AddNotifications(int auctionId, SubscriptionType type)
        {
            // TODO:  rebuild whole logic

            //var categories = dbContext.Auctions
            //    .Include(x => x.Categories)
            //    .FirstOrDefault(x => x.Id == auctionId)
            //    .Categories.Select(x => x.CategoryId);

            //var subscriptions = dbContext.Subscriptions
            //    .Where(x => categories.Contains(x.CategoryId))
            //    .Where(x => (type == SubscriptionType.Email && !string.IsNullOrEmpty(x.Email))
            //                || type == SubscriptionType.Sms && !string.IsNullOrEmpty(x.Phone))
            //    .ToList();

            //var notifications = subscriptions.Select(x => new Notification
            //{
            //    AuctionId = auctionId,
            //    Email = x.Email,
            //    Phone = x.Phone,
            //    Timestamp = DateTime.Now
            //});

            //dbContext.Notifications.AddRange(notifications);
            //dbContext.SaveChanges();
        }


        
    }
}

