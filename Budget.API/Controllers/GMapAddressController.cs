using AutoMapper;
using Budget.API.Helpers;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.SERVICE.GMap;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Budget.API.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/GMapAddresses")]
    public class GMapAddressController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IGMapAddressService _gMapAddressService;


        public GMapAddressController(
            IGMapAddressService gMapAddressService,
            IMapper mapper)
        {
            _mapper = mapper;
            _gMapAddressService = gMapAddressService;
        }

        [HttpGet]
        [Route("{id}/GMapAddress")]
        public IActionResult Get(int id)
        {
            string toto = HttpContext.User.FindFirst(ClaimTypes.Locality)?.Value;
            var gMapAddress = _gMapAddressService.GetById(id, (EnumLanguage)Enum.Parse(typeof(EnumLanguage),toto));

            return Ok(gMapAddress);

        }

        [HttpPost]
        [Route("save")]
        public IActionResult Save([FromBody] GMapAddressDto gMapAddressDto)
        {
            //try
            //{
            var result = _gMapAddressService.Create(gMapAddressDto);
            return Ok(result);
            //}
            //catch (Exception e)
            //{
            //    throw new Exception(e.Message);
            //}

        }
    }
}
