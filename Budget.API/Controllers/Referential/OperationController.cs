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
        private IOperationService _operationService;

        public OperationController(
            IOperationService operationService
        )
        {
            _operationService = operationService;
        }

        //[HttpGet("postes/{idPoste}")]
        //public IActionResult GetSelectGroupListByIdPoste(int idPoste)
        //{
        //    var selectListDto = _operationService.GetSelectGroupListByIdPoste(idPoste);

        //    return Ok(selectListDto);
        //}

        [HttpGet]
        [Route("operation-methods/{idOperationMethod}/operation-types/{idOperationType}/operations")]
        public IActionResult GetList(int idOperationMethod, int idOperationType)
        {
            var selectsDto = _operationService.GetSelectList(idOperationMethod, idOperationType);

            return Ok(selectsDto);
        }

        [HttpPost]
        [Route("select-list")]
        public IActionResult GetSelectListByOperationMethods([FromBody] List<SelectDto> operationMethods)
        {
            var results = _operationService.GetSelectList(operationMethods);
            return Ok(results);
        }

        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Operation operation)
        {
            //try
            //{
            var result = _operationService.Add(operation);
            return Ok(operation);
            //}
            //catch (Exception e)
            //{
            //    throw new Exception(e.Message);
            //}

        }

    }

}
