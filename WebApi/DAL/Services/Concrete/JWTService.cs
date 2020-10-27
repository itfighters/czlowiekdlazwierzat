using DAL.Model;
using DAL.Services.Abstract;
using Infrastructure;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DAL.Services.Concrete
{
    public class JWTService : IJWTService
    {
        private readonly IOptions<JWTConfig> config;

        public JWTService(IOptions<JWTConfig> config, IOptions<SMSConfig> smsConfig, IOptions<EmailConfig> emailConfig)
        {
            this.config = config;
        }

        public string GenerateToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(config.Value.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Issuer = config.Value.Issuer, 
                Audience = config.Value.Audience,
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
