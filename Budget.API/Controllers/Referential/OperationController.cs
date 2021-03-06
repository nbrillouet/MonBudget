﻿using Budget.MODEL.Database;
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
    [Route("api/referential/operations")]
    public class OperationController : Controller
    {
        //private IOperationService _operationService;
        private readonly ReferentialService _referentialService;
        private readonly IFilterService _filterService;

        public OperationController(
            ReferentialService referentialService,
            IFilterService filterService
        )
        {
            _referentialService = referentialService;
            _filterService = filterService;
        }

        [HttpGet]
        [Route("user-groups/{idUserGroup}/operation-methods/{idOperationMethod}/operation-types/{idOperationType}/select-type/{enumSelectType}/operations")]
        public IActionResult GetSelectList(int idUserGroup, int idOperationMethod, int idOperationType, EnumSelectType enumSelectType)
        {
            var selectsDto = _referentialService.OperationService.GetSelectList(idUserGroup, idOperationMethod, idOperationType, enumSelectType);

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

        /*-------------------------------------*/
        [HttpPost]
        [Route("filter")]
        public IActionResult getTable([FromBody] FilterOperationTableSelected filter)
        {
            var pagedList = _referentialService.OperationService.GetTable(filter);

            return Ok(pagedList);

        }

        [HttpPost]
        [Route("table-filter")]
        public IActionResult getTableFilter([FromBody] FilterOperationTableSelected filter)
        {
            var result = _filterService.GetFilterOperationTable(filter);

            return Ok(result);
        }



        [HttpGet]
        [Route("{idOperation}/user-groups/{idUserGroup}/detail")]
        public IActionResult GetDetail(int idOperation, int idUserGroup)
        {
                var results = _referentialService.OperationService.GetDetail(idOperation, idUserGroup);
            return Ok(results);
        }

        [HttpPost]
        [Route("save")]
        public IActionResult SaveDetail([FromBody] OperationForDetailDto operationForDetailDto)
        {
            var pagedList = _referentialService.OperationService.SaveDetail(operationForDetailDto);

            return Ok(pagedList);

        }

        [HttpDelete]
        [Route("{idOperation}/delete")]
        public IActionResult DeleteDetail(int idOperation)
        {
            try
            {
                var results = _referentialService.OperationService.DeleteDetail(idOperation);
                return Ok(results);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
    }

}
