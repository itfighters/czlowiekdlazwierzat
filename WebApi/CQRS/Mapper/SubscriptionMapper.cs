using CQRS.Command.Subscriptions;
using DAL.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CQRS.Mapper
{
    static class SubscriptionMapper
    {
        public static Func<SubscribeCommand, Subscription, Subscription> FromSubscribeCommandToSubscription = (command, subscription) =>
        {
          var result = subscription ?? new Subscription();
          result.SubscriptionType = command.SubscriptionType;
          result.Contact = command.Value;
          result.Categories = command.Categories.Select(x => new SubscriptionCategory
          {
              CategoryId = x
          }).ToList();

          return result;
        };
    }

}
