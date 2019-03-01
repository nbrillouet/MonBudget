using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.SERVICE
{
    public class OperationTransverseAsifService: IOperationTransverseAsifService
    {
        private readonly IOperationTransverseAsifRepository _operationTransverseAsifRepository;
        private readonly IMapper _mapper;
        private readonly ISelectService _selectService;

        public OperationTransverseAsifService(
            IOperationTransverseAsifRepository operationTransverseAsifRepository,
            IMapper mapper,
            ISelectService selectService

            )
        {
            _mapper = mapper;
            _operationTransverseAsifRepository = operationTransverseAsifRepository;
            _selectService = selectService;
        }

        public List<SelectDto> GetOperationTransverseSelectList(int IdAccountStatementFile, EnumSelectType enumSelectType)
        {
            var selectList = _selectService.GetSelectList(enumSelectType);
            var results = _operationTransverseAsifRepository.GetOperationTransverseList(IdAccountStatementFile);
            selectList.AddRange(_mapper.Map<IEnumerable<SelectDto>>(results).ToList());

            return selectList;
        }
    }
}
