using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories.Abstract
{
    public interface IUserRepository
    {
        bool Validate(string login, string password);
    }
}
