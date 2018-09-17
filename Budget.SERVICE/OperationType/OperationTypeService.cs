using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.SERVICE
{
    public class OperationTypeService : IOperationTypeService
    {
        private readonly IOperationTypeRepository _operationTypeRepository;
        private readonly ISelectService _selectService;
        private readonly IMapper _mapper;

        public OperationTypeService(
            IOperationTypeRepository operationTypeRepository,
            ISelectService selectService,
            IMapper mapper)
        {
            _operationTypeRepository = operationTypeRepository;
            _selectService = selectService;
            _mapper = mapper;
        }

        public List<SelectDto> GetSelects(int idOperationTypeFamily, int idSelectType)
        {
            var selectList = _selectService.GetSelectList(idSelectType);
            var operationTypeFamilies = _operationTypeRepository.GetByIdOperationTypeFamily(idOperationTypeFamily);
            selectList.AddRange(_mapper.Map<IEnumerable<SelectDto>>(operationTypeFamilies).ToList());

            return selectList;
        }

        public List<SelectDto> GetSelectList(List<SelectDto> operationTypeFamilies)
        {
            var operationTypes = _operationTypeRepository.GetByOperationTypeFamilies(operationTypeFamilies);
            return _mapper.Map<List<SelectDto>>(operationTypes);
        }


        public List<GenericList> GetGenericList()
        {
            return _operationTypeRepository.GetGenericList();
        }
        public List<OperationType> GetAll()
        {
            return _operationTypeRepository.GetAll();
        }
        public OperationType GetById(int idOperationType)
        {
            return _operationTypeRepository.GetById(idOperationType);
        }
        public List<OperationType> GetByIdOperationTypeFamily(int idOperationTypeFamily, EnumSelect enumSelect)
        {
            return _operationTypeRepository.GetByIdOperationTypeFamily(idOperationTypeFamily, enumSelect);
        }
        public List<OperationType> GetByIdMovement(int IdMovement)
        {
            return _operationTypeRepository.GetByIdMovement(IdMovement);
        }
        public List<GenericList> GetGenericListByIdMovement(int IdMovement)
        {
            return _operationTypeRepository.GetGenericListByIdMovement(IdMovement);
        }

        public OperationType GetByIdWithOperationTypeFamily(int idOperationType)
        {
            return _operationTypeRepository.GetByIdWithOperationTypeFamily(idOperationType);
        }

        public List<OperationType> GetAllByOrder(EnumSelect enumSelect)
        {
            return _operationTypeRepository.GetAllByOrder(enumSelect);
        }

        public List<GenericList> GetGenericListByIdOperationTypeFamily(int IdOperationTypeFamily, EnumSelect enumSelect)
        {
            return _operationTypeRepository.GetGenericListByIdOperationTypeFamily(IdOperationTypeFamily, enumSelect);
        }

        public OperationType GetFirstByIdOperationTypeFamily(int idOperationTypeFamily)
        {
            return _operationTypeRepository.GetFirstByIdOperationTypeFamily(idOperationTypeFamily);
        }

        public int Create(OperationType operationType)
        {
            return _operationTypeRepository.Create(operationType);
        }
        public void Update(OperationType operationType)
        {
            _operationTypeRepository.Update(operationType);
        }

        public void Delete(OperationType operationType)
        {
            _operationTypeRepository.Delete(operationType);
        }

    }
}
