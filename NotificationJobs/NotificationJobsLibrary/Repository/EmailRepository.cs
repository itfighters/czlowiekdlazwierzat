using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace NotificationJobsLibrary.Repository
{
    public class EmailRepository
    {
        private readonly NotifDbContext _dbContext;

        public EmailRepository(NotifDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IList<Email>> GetEmailTasks()
        {
            return await _dbContext.Emails.Where(email => !email.Processed).ToListAsync();
        }
    }
}
