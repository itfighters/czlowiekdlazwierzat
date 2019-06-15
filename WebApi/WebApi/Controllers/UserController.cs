using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL.Repositories.Abstract;
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

        public UserController(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }
        // POST: api/User
        [HttpPost]
        public IActionResult Post([FromBody] ValidateUserRequest value)
        {
            string token = userRepository.Validate(value.Login, value.Password);
            if (token == null)
                return BadRequest("Bad credentials");
            else
                return Ok(token);
        }


    }
}
