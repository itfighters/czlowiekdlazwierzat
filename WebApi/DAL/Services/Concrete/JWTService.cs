using DAL.Services.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Services.Concrete
{
    public class JWTService : IJWTService
    {
        public string GenerateToken()
        {
            string token = "jakistokenxdxdzajebisciebezpieczny";

            return token;
        }
    }
}
