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
    [Route("api/referential/bankAgencies")]
    public class BankAgencyController : Controller
    {
        private IBankAgencyService _bankAgencyService;

        public BankAgencyController(
            IBankAgencyService bankAgencyService
        )
        {
            _bankAgencyService = bankAgencyService;
        }

        [HttpGet("select-type/{idSelectType}/select-list")]
        public IActionResult GetSelectList(int idSelectType)
        {
            var selectListDto = _bankAgencyService.GetSelectList(idSelectType);

            return Ok(selectListDto);
        }
    }
}
