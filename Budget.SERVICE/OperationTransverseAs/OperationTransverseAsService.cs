using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.SERVICE
{
    public class OperationTransverseAsService : IOperationTransverseAsService
    {
        private readonly IOperationTransverseAsRepository _operationTransverseAsRepository;
        private readonly IMapper _mapper;
        private readonly ISelectService _selectService;

        public OperationTransverseAsService(
            IOperationTransverseAsRepository operationTransverseAsRepository,
            IMapper mapper,
            ISelectService selectService

            )
        {
            _mapper = mapper;
            _operationTransverseAsRepository = operationTransverseAsRepository;
            _selectService = selectService;
        }

        public List<SelectDto> GetOperationTransverseSelectList(int IdAccountStatement, EnumSelectType enumSelectType)
        {
            var selectList = _selectService.GetSelectList(enumSelectType);
            var results = _operationTransverseAsRepository.GetOperationTransverseList(IdAccountStatement);
            selectList.AddRange(_mapper.Map<IEnumerable<SelectDto>>(results).ToList());

            return selectList;
        }

        public bool Update(List<SelectDto> operationTransverses, int idAs)
        {
            var result = _operationTransverseAsRepository.Update(operationTransverses, idAs);
            return result;
        }
    }
}
