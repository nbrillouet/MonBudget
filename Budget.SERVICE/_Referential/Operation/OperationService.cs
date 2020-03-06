using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Budget.SERVICE
{
    public class OperationService : IOperationService
    {
        private readonly IMapper _mapper;
        private readonly IOperationRepository _operationRepository;
        private readonly ISelectService _selectService;
        private readonly IOperationMethodService _operationMethodService;
        private readonly IOperationTypeService _operationTypeService;

        public OperationService(
            IMapper mapper,
            IOperationRepository operationRepository,
            ISelectService selectService,
            IOperationMethodService operationMethodService,
            IOperationTypeService operationTypeService
            )
        {
            _mapper = mapper;
            _operationRepository = operationRepository;
            _selectService = selectService;
            _operationMethodService = operationMethodService;
            _operationTypeService = operationTypeService;
        }

        public List<SelectDto> GetSelectList(int idUserGroup)
        {
            var operations = _operationRepository.GetSelectList(idUserGroup);
            return _mapper.Map<List<SelectDto>>(operations);
        }


        public List<SelectDto> GetSelectList(int idUserGroup, int idOperationMethod, int idOperationType, EnumSelectType enumSelectType)
        {
            List<SelectDto> selectList = new List<SelectDto>();
            if (enumSelectType == EnumSelectType.Inconnu)
            {
                var select = _mapper.Map<SelectDto>(GetUnknown(idUserGroup));
                selectList.Add(select);
            }
            else
            {
                selectList = _selectService.GetSelectList(enumSelectType);
            }

            //var selectList = _selectService.GetSelectList(EnumTableRef.Operation, idUserGroup,  enumSelectType);
            var operations = _operationRepository.GetSelectList(idUserGroup, idOperationMethod, idOperationType);
            selectList.AddRange(_mapper.Map<IEnumerable<SelectDto>>(operations).ToList());

            return selectList;
        }

        public List<SelectDto> GetSelectList(int idUserGroup, List<SelectDto> operationMethodList, List<SelectDto> operationTypeFamilyList, List<SelectDto> operationTypeList)
        {
            var operations = _operationRepository.GetSelectList(idUserGroup, operationMethodList, operationTypeFamilyList, operationTypeList);
            return _mapper.Map<List<SelectDto>>(operations);
        }
        //public List<SelectDto> GetSelectList(int idUserGroup, List<SelectDto> operationTypes)
        //{
        //    var operations = _operationRepository.GetSelectList(idUserGroup, operationTypes);
        //    return _mapper.Map<List<SelectDto>>(operations);
        //}

        public List<SelectGroupDto> GetSelectGroupListByIdPoste(int idUserGroup, int idPoste)
        {
            EnumMovement idMovement = idPoste == (int)EnumMovement.Credit ? EnumMovement.Credit : EnumMovement.Debit;
            List<Operation> operations = _operationRepository.GetByIdMovement(idUserGroup, idMovement);

            return GetSelectGroupList(operations);
        }

        public List<SelectDto> GetSelectListByIdList(List<int> idList)
        {
            List<Operation> operations = _operationRepository.GetByIdList(idList);
            return _mapper.Map<List<SelectDto>>(operations);
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

        public SelectDto GetUnknown(int idUserGroup)
        {
            var operation = _operationRepository.GetUnknown(idUserGroup);
            return _mapper.Map<SelectDto>(operation);
        }

        public PagedList<OperationForTableDto> GetTable(FilterOperationTableSelected filter)
        {
            var pagedList = _operationRepository.GetTable(filter);

            var result = new PagedList<OperationForTableDto>(_mapper.Map<List<OperationForTableDto>>(pagedList.Datas), pagedList.Pagination);

            return result;

        }


        public OperationForDetailDto GetDetail(int idOperation, int idUserGroup)
        {
            Operation operation = new Operation();
            if (idOperation == -1)
            {
                operation.OperationMethod = new OperationMethod { Id = 1, Label = "INCONNU" };
                operation.OperationType = new OperationType { Id = 1, Label = "INCONNU" };
            }
            else
            {
                operation = _operationRepository.GetDetail(idOperation);
            }
            var operationDto = _mapper.Map<OperationForDetailDto>(operation);

            operationDto.OperationMethod = new ComboSimple<SelectDto>
            {
                List = _operationMethodService.GetSelectList(EnumSelectType.Empty),
                Selected = new SelectDto { Id = operation.OperationMethod.Id, Label = operation.OperationMethod.Label }
            };
            operationDto.OperationType = new ComboSimple<SelectGroupDto>
            {
                List = _operationTypeService.GetSelectGroup(idUserGroup),
                Selected = new SelectDto { Id = operation.OperationType.Id, Label = operation.OperationType.Label }
            };
            return operationDto;
        }

        public OperationForDetailDto SaveDetail(OperationForDetailDto operationForDetailDto)
        {
            var operation = _mapper.Map<Operation>(operationForDetailDto);
            if (operation.Id != 0)
            {
                _operationRepository.Update(operation);
            }
            else
            {
                operation = _operationRepository.Create(operation);
            }

            return _mapper.Map<OperationForDetailDto>(operation); ;
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

        public bool DeleteDetail(int idOperation)
        {
            var operation = _operationRepository.GetById(idOperation);
            if (operation.IsMandatory)
                throw new Exception("Opération obligatoire, suppression impossible");
            _operationRepository.Delete(operation);

            return true;
        }

        public void DeleteOperations(List<int> idOperationList)
        {
            foreach(var idOperation in idOperationList)
            {
                DeleteDetail(idOperation);
            }
        }
    }
}
