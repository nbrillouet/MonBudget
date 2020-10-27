using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Budget.SERVICE;
using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using System.Security.Claims;
using Microsoft.Extensions.Options;
using Budget.API.Helpers;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Budget.MODEL;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using Budget.HELPER;

namespace Budget.API.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/users")]
    public class UserController : Controller
    {
        private IUserService _userService;
        private IUserAccountService _userAccountService;
        private readonly IMapper _mapper;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;
        private readonly FilterService _filterService;

        public UserController(
            IUserService userService, 
            IMapper mapper,
            IOptions<CloudinarySettings> cloudinaryConfig,
            FilterService filterService,
            IUserAccountService userAccountService
            )
        {
            _mapper = mapper;
            _userService = userService;
            _cloudinaryConfig = cloudinaryConfig;

            Account acc = new Account(
                CryptoHelper.Decrypt(_cloudinaryConfig.Value.CloudName),
                CryptoHelper.Decrypt(_cloudinaryConfig.Value.ApiKey),
                CryptoHelper.Decrypt(_cloudinaryConfig.Value.ApiSecret));

            _cloudinary = new Cloudinary(acc);
            _filterService = filterService;
            _userAccountService = userAccountService;
        }

        [HttpPost]
        [Route("table-filter")]
        [Authorize(Roles = "Admin")]
        public IActionResult getUserTableFilter([FromBody] FilterUserTableSelected filter)
        {
            var toto = HttpContext.User.Claims;
            var result = _filterService.FilterTableService.GetFilterUserTable(filter);

            return Ok(result);
        }

        [HttpPost]
        [Route("filter")]
        [Authorize(Roles = "Admin")]
        public IActionResult getUserTable([FromBody] FilterUserTableSelected filter)
        {
            var pagedList = _userService.GetUserTable(filter);

            return Ok(pagedList);
        }

        
        [HttpGet("{id}/user-detail", Name = "GetUser")]
        public IActionResult Get(int id)
        {
            var userForDetailDto =  _userService.GetForDetailById(id);

            return Ok(userForDetailDto);
        }

        //[HttpGet("{id}", Name = "GetUser")]
        //public async Task<IActionResult> GetUser(int id)
        //{
        //    var user = await _userService.GetById(id);
        //    //var userToReturn = _mapper.Map<UserForDetailedDto>(user);

        //    return Ok(user);
        //}

        [HttpPut("{id}/update")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] UserForDetailDto userForDetailedDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var user = await _userService.GetByIdAsync(id);

            if (user == null)
                return NotFound($"Could not find user with an ID of {id}");

            if (currentUserId != user.Id)
                return Unauthorized();

            //_mapper.Map(userForDetailedDto, user);

            _userService.Update(userForDetailedDto);

            return NoContent();
        }

        [HttpPost]
        [Route("{idUser}/avatar")]
        public async Task<IActionResult> AddAvatar(int idUser, UserForAvatarCreationDto avatarDto)
        {
            var user = await _userService.GetByIdAsync(idUser);

            if (user == null)
                return BadRequest("Could not find user");


            //ajout de l'avatar dans Cloudinary
            var file = avatarDto.File;

            var uploadResult = new ImageUploadResult();

            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams()
                    {
                        File = new FileDescription(file.Name, stream)
                        //Transformation = new Transformation().Width(250).Height(250).Crop("fill").Gravity("face")
                    };

                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }

            //suppression de l'ancien avatar dans Cloudinary
            var deleteParams = new DeletionParams(user.IdAvatarCloud);
            var result = _cloudinary.Destroy(deleteParams);

            //maj bdd
            avatarDto.AvatarUrl = uploadResult.Uri.ToString();
            avatarDto.IdAvatarCloud = uploadResult.PublicId;

            _mapper.Map(avatarDto, user);
            //user = _mapper.Map<User>(avatarDto);

            _userService.Update(user);

            return CreatedAtRoute("GetUser", new { id = user.Id }, user);

        }

        ///// <summary>
        ///// Rechercher les banques + comptes liés aux banque pour un utilisateurs
        ///// </summary>
        ///// <param name="idUser"></param>
        ///// <returns></returns>
        //[HttpGet]
        //[Route("{idUser}/bankAgencies")]
        //public IActionResult GetBankAgencies(int idUser)
        //{
        //    var bankAgencies = _userAccountService.GetBankAgencies(idUser);

        //    return Ok(bankAgencies);
        //}
    }
}