﻿using System;
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
using Budget.MODEL.Filter;
using System.Security.Claims;

//var toto = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

namespace Budget.API.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/account-statement-import-files")]
    public class AccountStatementImportFileController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IUserService _userService;
        private readonly IAccountStatementImportService _accountStatementImportService;
        private readonly IBankService _bankService;
        private readonly IAccountStatementImportFileService _accountStatementImportFileService;
        private readonly IFilterService _filterService;

        private readonly IAccountService _accountService;

        public AccountStatementImportFileController(
            IAccountStatementImportService accountStatementImportService,
            IUserService userService,
            IBankService bankService,
            IAccountStatementImportFileService accountStatementImportFileService,
            IMapper mapper,
            IAccountService accountService,
            IFilterService filterService)
        {
            _mapper = mapper;
            _accountStatementImportService = accountStatementImportService;
            _bankService = bankService;
            _userService = userService;
            _accountStatementImportFileService = accountStatementImportFileService;
            _accountService = accountService;
            _filterService = filterService;
        }

        [HttpPost]
        [Route("table-filter")]
        public IActionResult getAsifTableFilter([FromBody] FilterAsifTableSelected filter)
        {
            var result = _filterService.GetFilterAsifTable(filter);

            return Ok(result);
        }

        [HttpPost]
        [Route("filter")]
        public IActionResult getAsifTable([FromBody] FilterAsifTableSelected filter)
        {
            var pagedList = _accountStatementImportFileService.GetAsifTable(filter);

            return Ok(pagedList);

        }

        //[HttpPost]
        //[Route("filter")]
        //public IActionResult getAsifTableFilter([FromBody] FilterAsifTableSelected filter)
        //{
        //    var pagedList = _filterService.GetAsifTableFilter(filter);

        //    return Ok(pagedList);

        //}

        //[HttpGet]
        //public async Task<IActionResult> Get([FromQuery] FilterAccountStatementImport filter)
        //{
        //    var accountStatementImports = await _accountStatementImportService.GetAsync(filter);
        //    var asi = _mapper.Map<IEnumerable<AccountStatementImportForListDto>>(accountStatementImports);

        //    Response.AddPagination(accountStatementImports.CurrentPage, accountStatementImports.PageSize, accountStatementImports.TotalCount, accountStatementImports.TotalPages);

        //    return Ok(asi);
        //}

        //[HttpGet]
        //[Route("imports/{idImport}/accounts/{idAccount}/asifStates/{idAsifState}/asifs")]
        //public async Task<IActionResult> Get(int idImport, int idAccount,int idAsifState, [FromQuery] Pagination pagination)
        //{
        //    var filter = _mapper.Map(pagination, new FilterAccountStatementImportFile());
        //    filter.IdImport = idImport;
        //    filter.IdAccount = idAccount;
        //    filter.IdAsifState = idAsifState;

        //    var accountStatementImportFiles = await _accountStatementImportFileService.GetAsync(filter);
        //    var asifGridDto = _mapper.Map<IEnumerable<AsifGridDto>>(accountStatementImportFiles);
        //    Response.AddPagination(accountStatementImportFiles.CurrentPage, accountStatementImportFiles.PageSize, accountStatementImportFiles.TotalCount, accountStatementImportFiles.TotalPages);

        //    return Ok(asifGridDto);

        //}


        [HttpGet]
        [Route("{id}/detail")]
        public async Task<IActionResult> GetById(int id)
        {

            var asifDto = await _accountStatementImportFileService.GetForDetailByIdAsync(id);
            
            return Ok(asifDto);
        }

        [HttpPost]
        [Route("update")]
        public IActionResult update([FromBody] AsifDetailDto asifDetailDto)
        {
            try
            {
                var result = _accountStatementImportFileService.Update(asifDetailDto);

                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }



        [HttpGet]
        [Route("imports/{idImport}/SaveInAccountStatement")]
        public IActionResult SaveInAccountStatement(int idImport)
        {
            try
            {
                var result = _accountStatementImportFileService.SaveInAccountStatement(idImport);
                return Ok(result);
            }
            catch (Exception e)
            {
                //throw new Exception(e.Message);
                return BadRequest(e.Message);
            }

        }

        [HttpGet]
        [Route("imports/{idImport}/IsSaveableInAccountStatement")]
        public IActionResult IsSaveableInAccountStatement(int idImport)
        {
            var result = _accountStatementImportFileService.IsSaveableInAccountStatement(idImport);

            return Ok(result);
        }

        



        //[HttpGet]
        //[Route("user/{idUser}")]
        //public async Task<IActionResult> GetDistinctBank(int idUser)
        //{
        //    var banks = await _accountStatementImportService.GetDistinctBankAsync(idUser);
        //    var banksDto = _mapper.Map<IEnumerable<BankForListDto>>(banks);

        //    return Ok(banksDto);

        //}

        //[HttpPost]
        //[Route("user/{idUser}")]
        //public async Task<IActionResult> UploadFile(int idUser, AccountStatementImportForUploadDto asifuDto)
        //{

        //    var account = _accountService.GetAccountByNumber("30919688017");

        //    var user = await _userService.GetByIdAsync(idUser);

        //    if (user == null)
        //        return BadRequest("Could not find user");

        //    var file = asifuDto.File;

        //    AsifGroupByAccounts asifGroupByAccounts = new AsifGroupByAccounts();
        //    if (file.Length > 0)
        //    {
        //        try
        //        {
        //            StreamReader csvreader = new StreamReader(file.OpenReadStream(), Encoding.GetEncoding(1252));
        //            AccountStatementImport accountStatementImport = _accountStatementImportService.ImportFile(csvreader, user);
        //            asifGroupByAccounts = _accountStatementImportFileService.GetListDto(accountStatementImport.Id);

        //        }
        //        catch (Exception e)
        //        {
        //            ModelState.AddModelError("Erreur lors du chargement de fichier", e.Message.ToString());
        //            return BadRequest(ModelState);
        //        }
        //    }

        //    return Ok(asifGroupByAccounts);
        //}

        //[HttpGet]
        //[Route("imports/{idImport}/accounts/{idAccount}/asifStates")]
        //public IActionResult GetAsifStates(int idImport, int idAccount)
        //{
        //    var results = _accountStatementImportFileService.GetAsifStates(idImport, idAccount);
        //    return Ok(results);
        //}

        //[HttpGet]
        //[Route("imports/{idImport}/accounts")]
        //public IActionResult GetAsifAccounts(int idImport)
        //{
        //    var results = _accountStatementImportFileService.GetListDto(idImport);
        //    return Ok(results);
        //}
    }

    
}

