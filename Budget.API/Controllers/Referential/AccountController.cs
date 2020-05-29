using Budget.MODEL;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using Budget.SERVICE;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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

        [HttpGet]
        [Route("{idAccount}/account-detail")]
        public IActionResult GetForDetail(int? idAccount)
        {
            var results = _accountService.GetForDetail(idAccount);
            return Ok(results);
        }

        [HttpPost]
        [Route("account-detail-filter")]
        public IActionResult GetForDetailFilter([FromBody] AccountForDetail accountForDetail)
        {
            return Ok(_filterService.FilterDetailService.GetFilterForAccount(accountForDetail));
        }

        [HttpPost]
        [Route("account-save")]
        public IActionResult Save([FromBody] AccountForDetail accountForDetail)
        {
            try
            {
                accountForDetail = _accountService.Save(accountForDetail);

                return Ok(accountForDetail);
            }
            catch (BusinessException e)
            {
                return StatusCode(StatusCodes.Status400BadRequest, e.BusinessExceptionMessages);
            }
            catch (Exception exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, exception);
            }
            
        }

        [HttpPost]
        [Route("ask-account-owner")]
        public IActionResult AskAccountOwner([FromBody] AccountForDetail accountForDetail)
        {
            var result = _accountService.AskAccountOwner(accountForDetail);

            return Ok(result);
        }
            //[HttpPost("{id}/update")]
            //public IActionResult Update([FromBody] AccountForDetail accountForDetailDto)
            //{
            //     _accountService.Update(accountForDetailDto);

            //    return Ok("UPDATED");
            //}

            //[HttpPost("{id}/users/{idUser}/create")]
            //public IActionResult Create(int idUser,[FromBody] AccountForDetail accountForDetailDto)
            //{
            //    _accountService.Create(idUser,accountForDetailDto);

            //    return Ok("UPDATED");
            //}

            //[HttpPost("{id}/users/{idUser}/delete")]
            //public IActionResult Delete(int idUser, [FromBody] AccountForDetailDto accountForDetailDto)
            //{
            //    _accountService.Delete(idUser, accountForDetailDto.Id);

            //    return Ok("DELETED");
            //}
        }
}
