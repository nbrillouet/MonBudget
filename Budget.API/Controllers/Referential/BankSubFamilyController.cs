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
    [Route("api/referential/bankSubFamilies")]
    public class BankSubFamilyController : Controller
    {
        private IBankSubFamilyService _bankSubFamilyService;

        public BankSubFamilyController(
            IBankSubFamilyService bankSubFamilyService
        )
        {
            _bankSubFamilyService = bankSubFamilyService;
        }

        [HttpGet("select-type/{idSelectType}/select-list")]
        public IActionResult GetSelectList(int idSelectType)
        {
            var selectListDto = _bankSubFamilyService.GetSelectList(idSelectType);

            return Ok(selectListDto);
        }
    }
}
