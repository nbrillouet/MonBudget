using Budget.MODEL.Database;
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
    [Route("api/referential/operation-type-families")]
    public class OperationTypeFamilyController : Controller
    {
        private IOperationTypeFamilyService _operationTypeFamilyService;

        public OperationTypeFamilyController(
            IOperationTypeFamilyService operationTypeFamilyService
        )
        {
            _operationTypeFamilyService = operationTypeFamilyService;
        }

        //[HttpGet("postes/{idPoste}")]
        //public IActionResult GetSelectGroupListByIdPoste(int idPoste)
        //{
        //    var selectListDto = _operationTypeFamilyService.GetSelectGroupListByIdPoste(idPoste);

        //    return Ok(selectListDto);
        //}

        [HttpGet]
        [Route("movements/{idMovement}/selectType/{idSelectType}/select-list")]
        public IActionResult GetSelectList(int idMovement, int idSelectType)
        {
            var selectsDto = _operationTypeFamilyService.GetSelectList((EnumMovement)idMovement,(EnumSelectType)idSelectType);

            return Ok(selectsDto);
        }

        [HttpGet]
        [Route("select-group-list")]
        public IActionResult GetOperationTypeFamiliesSelectGroupList()
        {
            var selectsDto = _operationTypeFamilyService.GetSelectGroup();

            return Ok(selectsDto);
        }

    }

}
