using Budget.MODEL;
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
    [Route("api/referential/operation-types")]
    public class OperationTypeController : Controller
    {
        private ReferentialService _referentialService;
        private IOperationTypeService _operationTypeService;
        private IFilterService _filterService;


        public OperationTypeController(
            ReferentialService referentialService,
            IOperationTypeService operationTypeService,
            IFilterService filterService
        )
        {
            _referentialService = referentialService;
            _operationTypeService = operationTypeService;
            _filterService = filterService;
        }

        [HttpPost]
        [Route("user-groups/{idUserGroup}/select-list")]
        public IActionResult GetSelectListByOperationTypeFamily(int idUserGroup, [FromBody] List<SelectDto> operationTypeFamilies)
        {
            var results = _referentialService.OperationTypeService.GetSelectList(idUserGroup, operationTypeFamilies);
            return Ok(results);
        }

        [HttpGet]
        [Route("operation-type-families/{idOperationTypeFamily}/select-type/{idSelectType}/select-list")]
        public IActionResult GetSelectList(int idOperationTypeFamily, int idSelectType)
        {
            var selectsDto = _referentialService.OperationTypeService.GetSelectList(idOperationTypeFamily, (EnumSelectType)idSelectType);

            return Ok(selectsDto);
        }


        [HttpPost]
        [Route("table-filter")]
        public IActionResult getOtTableFilter([FromBody] FilterOtTableSelected filter)
        {
            var result = _filterService.GetFilterOtTable(filter);

            return Ok(result);
        }

        [HttpPost]
        [Route("filter")]
        public IActionResult getOtTable([FromBody] FilterOtTableSelected filter)
        {
            var pagedList = _operationTypeService.GetOtTable(filter);

            return Ok(pagedList);

        }

        [HttpGet]
        [Route("{idOperationType}/user-groups/{idUserGroup}/detail")]
        public IActionResult GetOtDetail(int idOperationType, int idUserGroup)
        {
            var results = _operationTypeService.GetOtDetail(idOperationType, idUserGroup);
            return Ok(results);
        }

        [HttpPost]
        [Route("save")]
        public IActionResult SaveOtDetail([FromBody] OtForDetailDto otForDetailDto)
        {
            var pagedList = _operationTypeService.SaveOtDetail(otForDetailDto);

            return Ok(pagedList);

        }

        [HttpDelete]
        [Route("{idOt}/delete")]
        public IActionResult DeleteOtDetail(int idOt)
        {
            try
            {
                var results = _operationTypeService.DeleteOtDetail(idOt);
                return Ok(results);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
