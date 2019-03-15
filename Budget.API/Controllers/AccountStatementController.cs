using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using AutoMapper;
using Budget.MODEL;
using Budget.MODEL.Filter;
using Budget.SERVICE;
using Budget.API.Helpers;
using Budget.MODEL.Dto;

namespace Budget.API.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/account-statements")]
    public class AccountStatementController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IAccountStatementService _accountStatementService;
        private readonly IFilterService _filterService;

        public AccountStatementController(
            IMapper mapper,
            IAccountStatementService accountStatementService,
            IFilterService filterService

            )
        {
            _mapper = mapper;
            _accountStatementService = accountStatementService;
            _filterService = filterService;


        }

        [HttpPost]
        [Route("table-filter")]
        public IActionResult getAsTableFilter([FromBody] FilterAsTableSelected filter)
        {
            var result = _filterService.GetFilterAsTable(filter);

            return Ok(result);
        }

        [HttpPost]
        [Route("filter")]
        public IActionResult getAsTable([FromBody] FilterAsTableSelected filter)
        {
            var pagedList = _accountStatementService.GetAsTable(filter);

            return Ok(pagedList);

        }

        [HttpGet]
        [Route("{idAs}/users/{idUser}/detail")]
        public IActionResult GetAsDetail(int idAs, int idUser)
        {

            var asifDto = _accountStatementService.GetAsDetail(idAs, idUser);

            return Ok(asifDto);
        }


        //[HttpPost]
        //[Route("filter")]
        //public async Task<IActionResult> Get([FromBody] FilterAccountStatement filter)
        //{
        //    var pagedList = _accountStatementService.Get(filter);

        //    return Ok(pagedList);

        //}

        [HttpPost]
        [Route("solde-filter")]
        public async Task<IActionResult> GetSolde([FromBody] FilterAsTableSelected filter)
        {
            var pagedList = _accountStatementService.GetSolde(filter);

            return Ok(pagedList);

        }

        [HttpPost]
        [Route("update")]
        public IActionResult update([FromBody] AsDetailDto asDetailDto)
        {
            try
            {
                var result = _accountStatementService.Update(asDetailDto);

                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        

    }
}
