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
        private readonly IAccountStatementImportFileService _accountStatementImportFileService;
        private readonly IFilterService _filterService;

        public AccountStatementImportFileController(
            IAccountStatementImportFileService accountStatementImportFileService,
            IMapper mapper,
            IFilterService filterService)
        {
            _mapper = mapper;
            _accountStatementImportFileService = accountStatementImportFileService;
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

        [HttpGet]
        [Route("{idAsif}/users/{idUser}/detail")]
        public IActionResult GetAsifDetail(int idAsif,int idUser)
        {

            var asifDto = _accountStatementImportFileService.GetAsifDetail(idAsif, idUser);
            
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

    }

    
}

