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

        public AccountStatementController(
            IMapper mapper,
            IAccountStatementService accountStatementService
            )
        {
            _mapper = mapper;
            _accountStatementService = accountStatementService;


        }

        //[HttpGet]
        //[Route("accounts/{idAccount}/account-statements")]
        //public async Task<IActionResult> Get(int idAccount, [FromQuery] Pagination pagination)
        //{
        //    var filter = _mapper.Map(pagination, new FilterAccountStatement());
        //    filter.IdAccount = idAccount;
        //    var accountStatements = await _accountStatementService.GetAsync(filter);

        //    var asGridDto = _mapper.Map<IEnumerable<AsGridDto>>(accountStatements);
        //    Response.AddPagination(accountStatements.CurrentPage, accountStatements.PageSize, accountStatements.TotalCount, accountStatements.TotalPages);

        //    return Ok(asGridDto);
        //}

        [HttpPost]
        [Route("filter")]
        public async Task<IActionResult> Get([FromBody] FilterAccountStatement filter)
        {
            var pagedList = _accountStatementService.Get(filter);

            return Ok(pagedList);

        }

        [HttpPost]
        [Route("solde-filter")]
        public async Task<IActionResult> GetSolde([FromBody] FilterAccountStatement filter)
        {
            var pagedList = _accountStatementService.GetSolde(filter);

            return Ok(pagedList);

        }

        [HttpGet]
        [Route("{id}/detail")]
        public IActionResult GetById(int id)
        {
            var asDto =  _accountStatementService.GetForDetailById(id);

            return Ok(asDto);
        }

        //[HttpGet]
        //[Route("accounts/{idAccount}/date-start/{dateStart}/date-end/{dateEnd}/is-with-ITransfer/{isWithITranfer}/Solde")]
        //public IActionResult GetSolde(int idAccount,DateTime dateStart,DateTime dateEnd,int isWithITransfer)
        //{
        //    SoldeDto soldeDto = new SoldeDto
        //    {
        //        IdAccount = idAccount,
        //        DateStart = dateStart,
        //        DateEnd = dateEnd,
        //        IsWithITransfer = isWithITransfer
        //    };

        //    var solde = _accountStatementService.GetSolde(soldeDto);

        //    return Ok(solde);
        //}

    }
}
