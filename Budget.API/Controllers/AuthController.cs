using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Budget.SERVICE;
using Budget.MODEL;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using Budget.MODEL.Dto;

namespace Budget.API.Controllers
{
    [AllowAnonymous]
    [Produces("application/json")]
    [Route("api/Auth")]
    public class AuthController : Controller
    {
        private IAuthService _authService;
        private IConfiguration _config;
        private readonly IMapper _mapper;

        public AuthController(
            IAuthService authService,
            IConfiguration config,
            IMapper mapper)
        {
            _authService = authService;
            _config = config;
            _mapper = mapper;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]UserForRegisterDto userForRegisterDto)
        {
            userForRegisterDto.Name = userForRegisterDto.Name.ToLower();
            if (await _authService.UserExists(userForRegisterDto.Name))
                ModelState.AddModelError("UserName","Username already exists");
            
            //validate request
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var userToCreate = new User
            {
                UserName = userForRegisterDto.Name
            };

            var createdUser = await _authService.Register(userToCreate, userForRegisterDto.Password);

            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]UserForLoginDto userForLoginDto)
        {
            //throw new Exception("Computer says no!");

            var userRetrieve = await _authService.Login(userForLoginDto.Username, userForLoginDto.Password);

            if (userRetrieve == null)
            {
                ModelState.AddModelError("Login Error","Incorrect username or password");
                return BadRequest(ModelState);
                // return Unauthorized();
            }
            //generate token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_config.GetSection("AppSettings:Token").Value);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier,userRetrieve.Id.ToString()),
                    new Claim(ClaimTypes.Name, userRetrieve.UserName),
                    new Claim(ClaimTypes.Locality, "fr")
                }),

                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha512Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            var user = _mapper.Map<UserForConnectionDto>(userRetrieve);
            user.Token = tokenString;
            return Ok(user);
        }
    }
}