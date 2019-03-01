using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;

namespace Budget.SERVICE
{
    public class OperationService : IOperationService
    {
        private readonly IMapper _mapper;
        private readonly IOperationRepository _operationRepository;
        private readonly IOperationTypeRepository _operationTypeRepository;
        private readonly IOperationTypeFamilyRepository _operationTypeFamilyRepository;
        private readonly ISelectService _selectService;

        public OperationService(
            IMapper mapper,
            IOperationRepository operationRepository,
            IOperationTypeRepository operationTypeRepository,
            IOperationTypeFamilyRepository operationTypeFamilyRepository,
            ISelectService selectService
            )
        {
            _mapper = mapper;
            _operationRepository = operationRepository;
            _operationTypeRepository = operationTypeRepository;
            _operationTypeFamilyRepository = operationTypeFamilyRepository;
            _selectService = selectService;
        }

        //public List<Operation> GetByIdOperationMethod(int idOperationMethod)
        //{
        //    return _operationRepository.GetByIdOperationMethod(idOperationMethod);
        //}

        public List<SelectDto> GetSelectList(int idOperationMethod, int idOperationType, EnumSelectType enumSelectType)
        {
            var selectList = _selectService.GetSelectList(enumSelectType);
            var operations = _operationRepository.GetSelectList(idOperationMethod, idOperationType);
            selectList.AddRange(_mapper.Map<IEnumerable<SelectDto>>(operations).ToList());

            return selectList;
        }

        public List<SelectDto> GetSelectList(List<SelectDto> operationMethods)
        {
            var operations = _operationRepository.GetSelectList(operationMethods);
            return _mapper.Map<List<SelectDto>>(operations);
        }

        public Operation Add(Operation operation)
        {
            //controle si le keyword_operation existe deja 
            var result = _operationRepository.Add(operation);
            return result;
        }

        public Operation GetById(int idOperation)
        {
            return _operationRepository.GetById(idOperation);
        }
        public List<Operation> GetAllByOrder()
        {
            return _operationRepository.GetAllByOrder();
        }

        //public List<GenericList> GetGenericList()
        //{
        //    return _operationRepository.GetGenericList();
        //}

        public List<Operation> GetAllByIdOperationMethod(int idOperationMethod)
        {
            return _operationRepository.GetAllByIdOperationMethod(idOperationMethod);
        }

        public List<Operation> GetAllByIdOperationTypeFamily(int idOperationTypeFamily)
        {
            return _operationRepository.GetAllByIdOperationTypeFamily(idOperationTypeFamily);
        }

        public List<SelectGroupDto> GetSelectGroupListByIdPoste(int idPoste)
        {
            EnumMovement idMovement = idPoste == (int)EnumMovement.Credit ? EnumMovement.Credit : EnumMovement.Debit;
            List<Operation> operations = _operationRepository.GetByIdMovement(idMovement);

            return GetSelectGroupList(operations);
        }
        private List<SelectGroupDto> GetSelectGroupList(List<Operation> operations)
        {
            List<SelectGroupDto> results = new List<SelectGroupDto>();
            //regroupement par idOperationType
            List<OperationType> operationTypes = operations.Select(x => x.OperationType).Distinct().ToList();
            foreach (var operationType in operationTypes)
            {
                SelectGroupDto selectGroup = new SelectGroupDto { Id = operationType.Id, Label = operationType.Label };

                var operationsByOperationType = operations.Where(x => x.IdOperationType == operationType.Id).ToList();
                foreach (var operation in operationsByOperationType)
                {
                    SelectDto selectDto = new SelectDto { Id = operation.Id, Label = operation.Label };
                    selectGroup.Selects.Add(selectDto);
                }

                results.Add(selectGroup);
            }
            return results;
        }

        public List<SelectDto> GetSelectListByIdList(List<int> idList)
        {
            List<Operation> operations = _operationRepository.GetByIdList(idList);
            return _mapper.Map<List<SelectDto>>(operations);
        }

        public Operation Create(Operation operation)
        {
            return _operationRepository.Create(operation);
        }
        public void Update(Operation operation)
        {
            _operationRepository.Update(operation);
        }

        public void Delete(Operation operation)
        {
            _operationRepository.Delete(operation);
        }
    }
}
