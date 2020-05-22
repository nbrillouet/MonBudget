using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
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
    [Route("api/referential/accounts")]
    public class AccountController : Controller
    {
        private IAccountService _accountService;
        private FilterService _filterService;

        public AccountController(
            IAccountService accountService,
            FilterService filterService
        )
        {
            _accountService = accountService;
            _filterService = filterService;
        }

        [HttpPost]
        [Route("account-table-filter")]
        public IActionResult getForTableFilter([FromBody] FilterAccountTableSelected filter)
        {
            var result = _filterService.FilterTableService.GetFilterAccountTable(filter);

            return Ok(result);
        }

        [HttpPost]
        [Route("account-table")]
        public IActionResult getForTable([FromBody] FilterAccountTableSelected filter)
        {

            var pagedList = _accountService.GetForTable(filter);

            return Ok(pagedList);
        }

        [HttpGet("{id}/account-detail")]
        public IActionResult Get(int id)
        {
            var accountForDetailDto = _accountService.GetForDetailById(id);

            return Ok(accountForDetailDto);
        }

        [HttpPost("{id}/update")]
        public IActionResult Update([FromBody] AccountForDetailDto accountForDetailDto)
        {
             _accountService.Update(accountForDetailDto);

            return Ok("UPDATED");
        }

        [HttpPost("{id}/users/{idUser}/create")]
        public IActionResult Create(int idUser,[FromBody] AccountForDetailDto accountForDetailDto)
        {
            _accountService.Create(idUser,accountForDetailDto);

            return Ok("UPDATED");
        }

        [HttpPost("{id}/users/{idUser}/delete")]
        public IActionResult Delete(int idUser, [FromBody] AccountForDetailDto accountForDetailDto)
        {
            _accountService.Delete(idUser, accountForDetailDto.Id);

            return Ok("DELETED");
        }
    }
}
