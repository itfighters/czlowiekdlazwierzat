using DAL.Exceptions;
using DAL.Model;
using DAL.Repositories.Abstract;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace DAL.Repositories.Concrete
{
    public class SubscriptionRepository : ISubscriptionRepository
    {
        private readonly DatabaseContext _dbContext;

        public SubscriptionRepository(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task Subscribe(Subscription subscription)
        {
            if (_dbContext.Subscriptions.Any(x => x.Contact == subscription.Contact))
                throw new BusinessLogicException("Already subscribed");
            #region tempshit
            //send sms/email with token & obtain token, save to db
            Random rnd = new Random();
            int numb = rnd.Next(10000, 99000);
            subscription.ConfirmationToken = numb.ToString();
            #endregion
            subscription.Subscribed = true;
            subscription.Confirmed = false;

            _dbContext.Subscriptions.Add(subscription);
            await _dbContext.SaveChangesAsync();
        }

        public async Task Unsubscribe(string contact)
        {
            var subscription = _dbContext.Subscriptions.FirstOrDefault(x => x.Contact == contact);
            if (subscription == null)
                throw new Exception("Subscription doesn't exist");
            else
            {
                #region tempshit
                //send sms with token & obtain token, save to db
                Random rnd = new Random();
                int numb = rnd.Next(10000, 99000);
                subscription.ConfirmationToken = numb.ToString();
                #endregion
                subscription.Subscribed = false;
                subscription.Confirmed = false;
                await _dbContext.SaveChangesAsync();
            }
        }


        //'minimalnie' ryzykowne ze token się powtorzy, trzeba by unikalność token'u wymusić
        public async Task Confirm(string token)
        {
            var subscription = _dbContext.Subscriptions.FirstOrDefault(x => x.ConfirmationToken == token);
            if (subscription == null)
                throw new Exception("Subscription doesn't exist");
            else
            {
                subscription.Confirmed = true;
                await _dbContext.SaveChangesAsync();
            }
        }
    }
}
