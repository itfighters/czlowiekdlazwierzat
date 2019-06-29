using DAL.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Services.Abstract
{
    public interface IJWTService
    {
        string GenerateToken(User user);
    }
}
