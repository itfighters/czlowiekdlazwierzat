using DAL.Model;
using DAL.Repositories.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories.Concrete
{
    public class UserRepository : IUserRepository
    {
        private readonly DatabaseContext databaseContext;

        public UserRepository(DatabaseContext databaseContext)
        {
            this.databaseContext = databaseContext;
        }
        public string Validate(string login, string password)
        {
            User user = databaseContext.Users.FirstOrDefault(x=>x.Login == login);
            if (user == null)
                return null;

            if (user.Password == password)
                return GenerateToken();
            else
                return null;
        }

        private string GenerateToken()
        {
            return "tokasdajsdkasodaksod";
        }
    }
}
