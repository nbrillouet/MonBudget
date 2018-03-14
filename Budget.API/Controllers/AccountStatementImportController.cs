using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using Budget.SERVICE;
using Budget.MODEL;
using Budget.API.Dtos;
using Budget.API.Helpers;

namespace Budget.API.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/AccountStatementImport")]
    public class AccountStatementImportController : Controller
    {
        private readonly IMapper _mapper;
        private IAccountStatementImportService _accountStatementImportService;
        private IBankService _bankService;

        public AccountStatementImportController(
            IAccountStatementImportService accountStatementImportService,
            IBankService bankService,
            IMapper mapper)
        {
            _mapper = mapper;
            _accountStatementImportService = accountStatementImportService;
            _bankService = bankService;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] FilterAccountStatementImport filter)
        {
            var accountStatementImports = await _accountStatementImportService.GetAsync(filter);
            var asi = _mapper.Map<IEnumerable<AccountStatementImportForListDto>>(accountStatementImports);

            Response.AddPagination(accountStatementImports.CurrentPage, accountStatementImports.PageSize, accountStatementImports.TotalCount, accountStatementImports.TotalPages);

            return Ok(asi);
        }

        [HttpGet]
        [Route("user/{idUser}/bank/{idBank}")]
        public async Task<IActionResult> Get(int idUser,int idBank, [FromQuery] Pagination pagination)
        {
            var filter = _mapper.Map(pagination, new FilterAccountStatementImport());
            filter.idBank = idBank;
            filter.idUser = idUser;

            var accountStatementImports = await _accountStatementImportService.GetAsync(filter);

            return Ok(); 

        }

        [HttpGet]
        [Route("user/{idUser}")]
        public async Task<IActionResult> GetDistinctBank(int idUser)
        {
            var banks = await _accountStatementImportService.GetDistinctBankAsync(idUser);
            var banksDto = _mapper.Map<IEnumerable<BankForListDto>>(banks);

            return Ok(banksDto);

        }
    }
}
