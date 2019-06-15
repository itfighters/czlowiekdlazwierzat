using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL.Repositories.Abstract;
using DAL.Services.Abstract;
using DTO.RequestViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository userRepository;
        private readonly IJWTService jwtService;

        public UserController(IUserRepository userRepository, IJWTService jwtService)
        {
            this.userRepository = userRepository;
            this.jwtService = jwtService;
        }

        [HttpPost]
        public IActionResult Post([FromBody] ValidateUserRequest value)
        {
            if (userRepository.Validate(value.Login, value.Password))
                return BadRequest("Bad credentials");
            else
                return Ok(jwtService.GenerateToken());
        }


    }
}
