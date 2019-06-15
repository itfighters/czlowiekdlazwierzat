using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories.Abstract
{
    public interface IUserRepository
    {
        string Validate(string login, string password);
    }
}
