﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Budget.SERVICE;
using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using Budget.API.Dtos;
using System.Security.Claims;
using Microsoft.Extensions.Options;
using Budget.API.Helpers;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Budget.MODEL;

namespace Budget.API.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/user")]
    public class UserController : Controller
    {
        private IUserService _userService;
        private readonly IMapper _mapper;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;

        public UserController(
            IUserService userService, 
            IMapper mapper,
            IOptions<CloudinarySettings> cloudinaryConfig)
        {
            _mapper = mapper;
            _userService = userService;
            _cloudinaryConfig = cloudinaryConfig;

            Account acc = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret);

            _cloudinary = new Cloudinary(acc);
        }

        //[HttpGet]
        //public async Task<IActionResult> Get()
        //{
        //    var users = await _userService.GetAll();
        //    var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);

        //    return Ok(usersToReturn);
        //}

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] Pagination pagination)
        {
            var users = await _userService.GetUsers(pagination);
            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);
            Response.AddPagination(users.CurrentPage, users.PageSize, users.TotalCount, users.TotalPages);

            return Ok(usersToReturn);
        }

        [HttpGet("{id}", Name = "GetUser")]
        public async Task<IActionResult> Get(int id)
        {
            var user = await _userService.GetByIdAsync(id);
            var userToReturn = _mapper.Map<UserForDetailedDto>(user);

            return Ok(userToReturn);
        }

        //[HttpGet("{id}", Name = "GetUser")]
        //public async Task<IActionResult> GetUser(int id)
        //{
        //    var user = await _userService.GetById(id);
        //    //var userToReturn = _mapper.Map<UserForDetailedDto>(user);

        //    return Ok(user);
        //}

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] UserForDetailedDto userForDetailedDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var user = await _userService.GetByIdAsync(id);

            if (user == null)
                return NotFound($"Could not find user with an ID of {id}");

            if (currentUserId != user.Id)
                return Unauthorized();

            _mapper.Map(userForDetailedDto, user);

            _userService.Update(user);

            return NoContent();
        }

        [HttpPost]
        [Route("{idUser}/avatar")]
        public async Task<IActionResult> AddAvatar(int idUser, UserForAvatarCreationDto avatarDto)
        {
            var user = await _userService.GetByIdAsync(idUser);

            if (user == null)
                return BadRequest("Could not find user");

            //var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            //if (currentUserId != user.Id)
            //    return Unauthorized();

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
    }
}