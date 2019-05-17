using Budget.MODEL.Dto;
using Budget.SERVICE;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Budget.API.Controllers.Referential
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/referential/bank-sub-families")]
    public class BankSubFamilyController : Controller
    {
        private IBankSubFamilyService _bankSubFamilyService;

        public BankSubFamilyController(
            IBankSubFamilyService bankSubFamilyService
        )
        {
            _bankSubFamilyService = bankSubFamilyService;
        }

        [HttpGet("bank-families/{idBankFamily}/select-type/{idSelectType}/select-list")]
        public IActionResult GetSelectList(int idBankFamily,int idSelectType)
        {
            var selectListDto = _bankSubFamilyService.GetSelectList(idBankFamily,(EnumSelectType)idSelectType);

            return Ok(selectListDto);
        }
    }
}
