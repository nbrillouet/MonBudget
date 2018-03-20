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

        public AccountStatementImportController(
            IAccountStatementImportService accountStatementImportService,
            IUserService userService,
            IBankService bankService,
            IMapper mapper)
        {
            _mapper = mapper;
            _accountStatementImportService = accountStatementImportService;
            _bankService = bankService;
            _userService = userService;
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
            var user = await _userService.GetByIdAsync(idUser);

            if (user == null)
                return BadRequest("Could not find user");

            var file = asifuDto.File;
            AccountStatementImport accountStatementImport = new AccountStatementImport();

            if (file.Length > 0)
            {
                try
                {
                    StreamReader csvreader = new StreamReader(file.OpenReadStream(), Encoding.GetEncoding(1252));
                    accountStatementImport = _accountStatementImportService.ImportFile(csvreader, user);
                }
                catch(Exception e)
                {
                    ModelState.AddModelError("Erreur lors du chargement de fichier", e.Message.ToString());
                    return BadRequest(ModelState);
                }
            }
            accountStatementImport.File = null;
            return Ok(accountStatementImport);
        }
    }
}
