using Budget.MODEL;
using Budget.MODEL.Database;
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
    [Route("api/referential/operation-type-families")]
    public class OperationTypeFamilyController : Controller
    {
        private IOperationTypeFamilyService _operationTypeFamilyService;
        private FilterService _filterService;

        public OperationTypeFamilyController(
            IOperationTypeFamilyService operationTypeFamilyService,
            FilterService filterService
        )
        {
            _operationTypeFamilyService = operationTypeFamilyService;
            _filterService = filterService;
        }

        [HttpGet]
        [Route("user-groups/{idUser}/movements/{idMovement}/select-type/{idSelectType}/select-list")]
        public IActionResult GetSelectList(int idUserGroup, int idMovement, int idSelectType)
        {
            var selectsDto = _operationTypeFamilyService.GetSelectList(idUserGroup, (EnumMovement)idMovement,(EnumSelectType)idSelectType);

            return Ok(selectsDto);
        }

        [HttpGet]
        [Route("user-groups/{idUser}/select-group-list")]
        public IActionResult GetSelectGroupList(int idUserGroup)
        {
            var selectsDto = _operationTypeFamilyService.GetSelectGroup(idUserGroup);

            return Ok(selectsDto);
        }

        [HttpPost]
        [Route("table-filter")]
        public IActionResult getOtfTableFilter([FromBody] FilterOtfTableSelected filter)
        {
            var result = _filterService.FilterTableService.GetFilterOtfTable(filter);

            return Ok(result);
        }

        [HttpPost]
        [Route("filter")]
        public IActionResult getOtfTable([FromBody] FilterOtfTableSelected filter)
        {
            var pagedList = _operationTypeFamilyService.GetOtfTable(filter);

            return Ok(pagedList);

        }

        [HttpGet]
        [Route("{idOperationTypeFamily}/detail")]
        public IActionResult GetOtfDetail(int idOperationTypeFamily)
        {
            var results = _operationTypeFamilyService.GetOtfDetail(idOperationTypeFamily);
            return Ok(results);
        }

        [HttpPost]
        [Route("save")]
        public IActionResult SaveOtfDetail([FromBody] OtfForDetailDto otfForDetailDto)
        {
            var pagedList = _operationTypeFamilyService.SaveOtfDetail(otfForDetailDto);

            return Ok(pagedList);

        }

        [HttpDelete]
        [Route("{idOtf}/delete")]
        public IActionResult DeleteOtfDetail(int idOtf)
        {
            try
            {
                var results = _operationTypeFamilyService.DeleteOtfDetail(idOtf);
                return Ok(results);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }

}
