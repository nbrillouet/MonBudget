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
using Budget.API.Helpers;
using System.IO;
using System.Text;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;

namespace Budget.API.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/account-statement-import")]
    public class AccountStatementImportController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IUserService _userService;
        private readonly IAccountStatementImportService _accountStatementImportService;
        private readonly IAccountStatementImportFileService _accountStatementImportFileService;
        private readonly IFilterService _filterService;

        public AccountStatementImportController(
            IAccountStatementImportService accountStatementImportService,
            IUserService userService,
            IAccountStatementImportFileService accountStatementImportFileService,
            IMapper mapper,
            IFilterService filterService
            )
        {
            _mapper = mapper;
            _accountStatementImportService = accountStatementImportService;
            _userService = userService;
            _accountStatementImportFileService = accountStatementImportFileService;
            _filterService = filterService;
        }

        [HttpPost]
        [Route("table-filter")]
        public IActionResult getAsiTableFilter([FromBody] FilterAsiTableSelected filter)
        {
            var result= _filterService.GetFilterAsiTable(filter);

            return Ok(result);
        }

        [HttpPost]
        [Route("filter")]
        public IActionResult getAsiTable([FromBody] FilterAsiTableSelected filter)
        {
            var pagedList = _accountStatementImportService.GetAsiTable(filter);

            return Ok(pagedList);
        }

        [HttpGet]
        [Route("asi/{id}/asi-detail")]
        public IActionResult getById(int id)
        {
            var pagedList = _accountStatementImportService.GetByIdForData(id);

            return Ok(pagedList);
        }

        [HttpGet]
        [Route("users/{idUser}/bankAgencies")]
        public IActionResult GetDistinctBankAgencies(int idUser)
        {
            var bankAgencies = _accountStatementImportService.GetDistinctBankAgencies(idUser);
            var bankAgenciesDto = _mapper.Map<IEnumerable<BankAgencyForListDto>>(bankAgencies);

            return Ok(bankAgenciesDto);

        }

        [HttpGet]
        [Route("imports/{idImport}/account-statement-import")]
        public IActionResult GetAsiDto(int idImport)
        {
            var asiDto = _accountStatementImportService.GetForDetailById(idImport);
            return Ok(asiDto);
        }

        [HttpPost]
        [Route("users/{idUser}/upload-file")]
        public async Task<IActionResult> UploadFile(int idUser, AsiForUploadDto asifuDto)
        {

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
                catch (Exception e)
                {
                    ModelState.AddModelError("Erreur lors du chargement de fichier", e.Message.ToString());
                    return BadRequest(ModelState);
                }
            }

            return Ok(asifGroupByAccounts);
        }

        
    }
}
