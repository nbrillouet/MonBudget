using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Budget.SERVICE;
using Microsoft.AspNetCore.Authorization;
using Budget.API.Dtos;
using Budget.MODEL;
using AutoMapper;
using Budget.MODEL.Dto;

namespace Budget.API.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/users/{idUser}/shortcuts")]
    public class ShortcutController : Controller
    {
        private readonly IUserService _userService;
        private readonly IShortcutService _shortcutService;
        private readonly IMapper _mapper;

        public ShortcutController(
            IUserService userService,
            IShortcutService shortcutService,
            IMapper mapper)
        {
            _userService = userService;
            _shortcutService = shortcutService;
            _mapper = mapper;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShortcut(int idUser,int id)
        {
            var user = await _userService.GetByIdAsync(idUser);
            if (user == null)
                return BadRequest($"Could not find user id: {idUser}");

            var shortcut = await _shortcutService.GetByIdAsync(id);
            if(shortcut == null)
                return BadRequest($"Could not find shortcut id: {id}");

            _shortcutService.Delete(shortcut);

            return Ok();
        }

        [HttpPost()]
        public async Task<IActionResult> AddShortcut(int idUser, [FromBody] UserShortcutDto shortcutDto)
        {
            // return Ok($"ok {idUser}");
            var user = await _userService.GetByIdAsync(idUser);
            if (user == null)
                return BadRequest($"Could not find user id: {idUser}");

            var shortcut = new Shortcut();
            _mapper.Map(shortcutDto, shortcut);
            shortcut.IdUser = idUser;
            shortcut.Icon = shortcut.Icon == "false" ? null : shortcut.Icon;
            shortcut = await _shortcutService.Create(shortcut);

            return Ok(shortcut);
        }
    }
}