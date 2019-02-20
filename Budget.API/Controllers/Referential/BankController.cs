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
    [Route("api/referential/banks")]
    public class BankController : Controller
    {
        private IBankService _bankService;

        public BankController(
            IBankService bankService
        )
        {
            _bankService = bankService;
        }

        [HttpGet("select-type/{idSelectType}/select-list")]
        public IActionResult GetSelectList(int idSelectType)
        {
            var selectListDto = _bankService.GetSelectList(idSelectType);

            return Ok(selectListDto);
        }
    }
}
