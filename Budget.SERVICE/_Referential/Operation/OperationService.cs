using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using System.Collections.Generic;
using System.Linq;

namespace Budget.SERVICE
{
    public class OperationService : IOperationService
    {
        private readonly IMapper _mapper;
        private readonly IOperationRepository _operationRepository;
        private readonly ISelectService _selectService;

        public OperationService(
            IMapper mapper,
            IOperationRepository operationRepository,
            ISelectService selectService
            )
        {
            _mapper = mapper;
            _operationRepository = operationRepository;
            _selectService = selectService;
        }

       
        public List<SelectDto> GetSelectList(int idUserGroup, int idOperationMethod, int idOperationType, EnumSelectType enumSelectType)
        {
            var selectList = _selectService.GetSelectList(enumSelectType);
            var operations = _operationRepository.GetSelectList(idUserGroup, idOperationMethod, idOperationType);
            selectList.AddRange(_mapper.Map<IEnumerable<SelectDto>>(operations).ToList());

            return selectList;
        }

        public List<SelectDto> GetSelectList(int idUserGroup, List<SelectDto> operationTypes)
        {
            var operations = _operationRepository.GetSelectList(idUserGroup, operationTypes);
            return _mapper.Map<List<SelectDto>>(operations);
        }

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
