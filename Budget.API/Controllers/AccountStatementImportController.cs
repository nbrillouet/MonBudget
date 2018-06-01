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
using System.IO;
using System.Text;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;

namespace Budget.API.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/AccountStatementImport")]
    public class AccountStatementImportController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IUserService _userService;
        private readonly IAccountStatementImportService _accountStatementImportService;
        private readonly IBankService _bankService;
        private readonly IAccountStatementImportFileService _accountStatementImportFileService;

        private readonly IAccountService _accountService;

        public AccountStatementImportController(
            IAccountStatementImportService accountStatementImportService,
            IUserService userService,
            IBankService bankService,
            IAccountStatementImportFileService accountStatementImportFileService,
            IMapper mapper,
            IAccountService accountService)
        {
            _mapper = mapper;
            _accountStatementImportService = accountStatementImportService;
            _bankService = bankService;
            _userService = userService;
            _accountStatementImportFileService = accountStatementImportFileService;
            _accountService = accountService;
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
            var asiDto = _mapper.Map<IEnumerable<AccountStatementImportForListDto>>(accountStatementImports);
            Response.AddPagination(accountStatementImports.CurrentPage, accountStatementImports.PageSize, accountStatementImports.TotalCount, accountStatementImports.TotalPages);

            return Ok(asiDto); 

        }

        [HttpGet]
        [Route("user/{idUser}")]
        public async Task<IActionResult> GetDistinctBank(int idUser)
        {
            var banks = await _accountStatementImportService.GetDistinctBankAsync(idUser);
            var banksDto = _mapper.Map<IEnumerable<BankForListDto>>(banks);

            return Ok(banksDto);

        }

        [HttpPost]
        [Route("user/{idUser}")]
        public async Task<IActionResult> UploadFile(int idUser, AccountStatementImportForUploadDto asifuDto)
        {

            var account = _accountService.GetAccountByNumber("30919688017");

            var user = await _userService.GetByIdAsync(idUser);

            if (user == null)
                return BadRequest("Could not find user");

            var file = asifuDto.File;

            AsifGroupByAccounts asifGroupByAccounts = new AsifGroupByAccounts();
            if (file.Length > 0)
            {
                try
                {
                    StreamReader csvreader = new StreamReader(file.OpenReadStream(), Encoding.GetEncoding(1252));
                    AccountStatementImport accountStatementImport = _accountStatementImportService.ImportFile(csvreader, user);
                    asifGroupByAccounts = _accountStatementImportFileService.GetListDto(accountStatementImport.Id);

                }
                catch(Exception e)
                {
                    ModelState.AddModelError("Erreur lors du chargement de fichier", e.Message.ToString());
                    return BadRequest(ModelState);
                }
            }

            return Ok(asifGroupByAccounts);
        }

        [HttpGet]
        [Route("imports/{idImport}/accounts/{idAccount}/asifStates")]
        public IActionResult GetAsifStates(int idImport, int idAccount)
        {
            var results = _accountStatementImportFileService.GetAsifStates(idImport,idAccount);
            return Ok(results);
        }

        [HttpGet]
        [Route("imports/{idImport}/accounts")]
        public IActionResult GetAsifAccounts(int idImport)
        {
            var results = _accountStatementImportFileService.GetListDto(idImport); 
            return Ok(results);
        }
    }
}
