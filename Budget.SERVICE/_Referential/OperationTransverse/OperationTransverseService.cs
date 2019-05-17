using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.SERVICE
{
    public class OperationTransverseService : IOperationTransverseService
    {
        private readonly IOperationTransverseRepository _operationTransverseRepository;
        private readonly IMapper _mapper;
        private readonly ISelectService _selectService;

        public OperationTransverseService(
            IOperationTransverseRepository operationTransverseRepository,
            IMapper mapper,
            ISelectService selectService
            )
        {
            _operationTransverseRepository = operationTransverseRepository;
            _mapper = mapper;
            _selectService = selectService;
        }

        public List<SelectDto> GetSelectList(int idUser, EnumSelectType enumSelectType)
        {
            //var selectList = _selectService.GetSelectList(enumSelectType);
            List<SelectDto> selectList = new List<SelectDto>();
            var results = _operationTransverseRepository.GetSelectList(idUser);
            selectList.AddRange(_mapper.Map<IEnumerable<SelectDto>>(results).ToList());

            return selectList;
        }

        public OperationTransverse Add(OperationTransverse operationTransverse)
        {
            //controle si le keyword_operation existe deja 
            var result = _operationTransverseRepository.Add(operationTransverse);
            return result;
        }

    }

}
