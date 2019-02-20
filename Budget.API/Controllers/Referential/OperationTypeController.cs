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
    [Route("api/referential/operation-types")]
    public class OperationTypeController : Controller
    {
        private IOperationTypeService _operationTypeService;

        public OperationTypeController(
            IOperationTypeService operationTypeService
        )
        {
            _operationTypeService = operationTypeService;
        }

        //[HttpGet("postes/{idPoste}")]
        //public IActionResult GetSelectGroupListByIdPoste(int idPoste)
        //{
        //    var selectListDto = _operationTypeService.GetSelectGroupListByIdPoste(idPoste);

        //    return Ok(selectListDto);
        //}
        [HttpPost]
        [Route("select-list")]
        public IActionResult GetSelectListByOperationTypeFamily([FromBody] List<SelectDto> operationTypeFamilies)
        {
            var results = _operationTypeService.GetSelectList(operationTypeFamilies);
            return Ok(results);
        }

        [HttpGet]
        [Route("operation-type-families/{idOperationTypeFamily}/select-type/{idSelectType}/select-list")]
        public IActionResult GetSelectList(int idOperationTypeFamily, int idSelectType)
        {
            var selectsDto = _operationTypeService.GetSelects(idOperationTypeFamily, idSelectType);

            return Ok(selectsDto);
        }

    }
}
