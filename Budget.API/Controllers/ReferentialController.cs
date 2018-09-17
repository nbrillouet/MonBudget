using AutoMapper;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.SERVICE;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Budget.API.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/Referential")]
    public class ReferentialController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IOperationMethodService _operationMethodService;
        private readonly IOperationTypeFamilyService _operationTypeFamilyService;
        private readonly IOperationTypeService _operationTypeService;
        private readonly IOperationService _operationService;
        //private readonly IOperationPlaceService _operationPlaceService;

        public ReferentialController(
            IMapper mapper,
            IOperationMethodService operationMethodService,
            IOperationTypeFamilyService operationTypeFamilyService,
            IOperationTypeService operationTypeService,
            IOperationService operationService
            //IOperationPlaceService operationPlaceService
            )
        {
            _mapper = mapper;
            _operationMethodService = operationMethodService;
            _operationTypeFamilyService = operationTypeFamilyService;
            _operationTypeService = operationTypeService;
            _operationService = operationService;
            //_operationPlaceService = operationPlaceService;
        }

        

        [HttpGet]
        [Route("operationMethods/selectType/{idSelectType}")]
        public IActionResult GetOperationMethodSelectList(int idSelectType)
        {
            var selectsDto = _operationMethodService.GetSelect(idSelectType);

            return Ok(selectsDto);

        }

        [HttpGet]
        [Route("operationTypeFamilies/movements/{idMovement}/selectType/{idSelectType}")]
        public IActionResult GetOperationTypeFamilySelectList(int idMovement, int idSelectType)
        {
            var selectsDto = _operationTypeFamilyService.GetSelects(idMovement,idSelectType);

            return Ok(selectsDto);
        }

        [HttpGet]
        [Route("operationTypes/operationTypeFamilies/{idOperationTypeFamily}/selectType/{idSelectType}")]
        public IActionResult GetOperationTypeSelectList(int idOperationTypeFamily, int idSelectType)
        {
            var selectsDto = _operationTypeService.GetSelects(idOperationTypeFamily, idSelectType);

            return Ok(selectsDto);
        }

        [HttpGet]
        [Route("operation-methods/{idOperationMethod}/operation-types/{idOperationType}/operations")]
        public IActionResult GetOperationList(int idOperationMethod,int idOperationType)
        {
            var selectsDto = _operationService.GetSelectList(idOperationMethod,idOperationType);

            return Ok(selectsDto);
        }

        //[HttpGet]
        //[Route("selectType/{idSelectType}/operationPlaces")]
        //public IActionResult GetOperationPlaceSelectList(int idSelectType)
        //{
        //    var selectsDto = _operationPlaceService.GetSelect(idSelectType);

        //    return Ok(selectsDto);
        //}


        [HttpPost]
        [Route("addOperation")]
        public IActionResult AddOperation([FromBody] Operation operation)
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

        [HttpPost]
        [Route("operations")]
        public IActionResult GetOperationSelectListByOperationMethods([FromBody] List<SelectDto> operationMethods)
        {
            var results = _operationService.GetSelectList(operationMethods);
            return Ok(results);
        }

        [HttpGet]
        [Route("operation-type-families/select-group-list")]
        public IActionResult GetOperationTypeFamiliesSelectGroupList()
        {
            var selectsDto = _operationTypeFamilyService.GetSelectGroup();

            return Ok(selectsDto);
        }

        [HttpPost]
        [Route("operation-types/select-list")]
        public IActionResult GetOperationTypeSelectListByOperationTypeFamily([FromBody] List<SelectDto> operationTypeFamilies)
        {
            var results = _operationTypeService.GetSelectList(operationTypeFamilies);
            return Ok(results);
        }



    }
}
