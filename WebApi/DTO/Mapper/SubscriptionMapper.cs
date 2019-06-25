using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DAL.Model;
using DTO.RequestViewModel;

namespace DTO.Mapper
{
    public static class SubscriptionMapper
    {
        public static Subscription FromAddSubscriptionRequest(SubscribeRequest from)
        {
            return new Subscription()
            {
                Contact = from.Value,
                Categories = from.Categories.Select(x => new SubscriptionCategory
                {
                    CategoryId = x
                }).ToList()
            };
        }
    }
}
