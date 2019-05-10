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
    [Route("api/referential/operations")]
    public class OperationController : Controller
    {
        //private IOperationService _operationService;
        private readonly ReferentialService _referentialService;

        public OperationController(
            ReferentialService referentialService
        )
        {
            _referentialService = referentialService;
        }

        [HttpGet]
        [Route("user-groups/{idUserGroup}/operation-methods/{idOperationMethod}/operation-types/{idOperationType}/select-type/{enumSelectType}/operations")]
        public IActionResult GetSelectList(int idUserGroup, int idOperationMethod, int idOperationType,EnumSelectType enumSelectType)
        {
            var selectsDto = _referentialService.OperationService.GetSelectList(idUserGroup,idOperationMethod, idOperationType, enumSelectType);

            return Ok(selectsDto);
        }

        [HttpPost]
        [Route("user-groups/{idUserGroup}/select-list")]
        public IActionResult GetSelectListByOperationMethods(int idUserGroup, [FromBody] List<SelectDto> operationMethods)
        {
            var results = _referentialService.OperationService.GetSelectList(idUserGroup, operationMethods);
            return Ok(results);
        }

        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Operation operation)
        {
            var result = _referentialService.OperationService.Create(operation);
            return Ok(operation);
        }

    }

}
