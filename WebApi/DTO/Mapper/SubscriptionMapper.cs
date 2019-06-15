using System;
using System.Collections.Generic;
using System.Text;
using DAL.Model;
using DTO.RequestViewModel;

namespace DTO.Mapper
{
    public static class SubscriptionMapper
    {
        public static Subscription FromAddSubscriptionRequest(SaveOrUpdateSubscriptionRequest from)
        {
            return new Subscription()
            {
                Email = from.Email,
                Phone = from.Phone,
                Timestamp = DateTime.Now,
                CategoryId = from.CategoryId,
            };
        }
    }
}
