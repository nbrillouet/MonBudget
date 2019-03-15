using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
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

        public List<SelectDto> GetSelectList(int idOperationTypeFamily, EnumSelectType enumSelectType)
        {
            var selectList = _selectService.GetSelectList(enumSelectType);
            var operationTypeFamilies = _operationTypeRepository.GetByIdOperationTypeFamily(idOperationTypeFamily);
            selectList.AddRange(_mapper.Map<IEnumerable<SelectDto>>(operationTypeFamilies).ToList());

            return selectList;
        }

        public List<SelectDto> GetSelectList(List<SelectDto> operationTypeFamilies)
        {
            var operationTypes = _operationTypeRepository.GetByOperationTypeFamilies(operationTypeFamilies);
            return _mapper.Map<List<SelectDto>>(operationTypes);
        }


        //public List<GenericList> GetGenericList()
        //{
        //    return _operationTypeRepository.GetGenericList();
        //}
        public List<OperationType> GetAll()
        {
            return _operationTypeRepository.GetAll();
        }
        public OperationType GetById(int idOperationType)
        {
            return _operationTypeRepository.GetById(idOperationType);
        }
        //public List<OperationType> GetByIdOperationTypeFamily(int idOperationTypeFamily, EnumSelect enumSelect)
        //{
        //    return _operationTypeRepository.GetByIdOperationTypeFamily(idOperationTypeFamily, enumSelect);
        //}
        public List<OperationType> GetByIdMovement(EnumMovement enumMovement)
        {
            return _operationTypeRepository.GetByIdMovement(enumMovement);
        }
        //public List<GenericList> GetGenericListByIdMovement(EnumMovement enumMovement)
        //{
        //    return _operationTypeRepository.GetGenericListByIdMovement(enumMovement);
        //}

        public OperationType GetByIdWithOperationTypeFamily(int idOperationType)
        {
            return _operationTypeRepository.GetByIdWithOperationTypeFamily(idOperationType);
        }

        //public List<OperationType> GetAllByOrder(EnumSelect enumSelect)
        //{
        //    return _operationTypeRepository.GetAllByOrder(enumSelect);
        //}

        //public List<GenericList> GetGenericListByIdOperationTypeFamily(int IdOperationTypeFamily, EnumSelect enumSelect)
        //{
        //    return _operationTypeRepository.GetGenericListByIdOperationTypeFamily(IdOperationTypeFamily, enumSelect);
        //}

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

        public List<SelectGroupDto> GetSelectGroupListByIdPoste(int idPoste)
        {
            EnumMovement idMovement = idPoste == (int)EnumMovement.Credit ? EnumMovement.Credit : EnumMovement.Debit;
            List<OperationType> operationTypes = _operationTypeRepository.GetByIdMovement(idMovement);

            return GetSelectGroupList(operationTypes);
        }

        public List<SelectGroupDto> GetSelectGroupListByIdList(List<int> idList)
        {
            List<OperationType> operationTypes = _operationTypeRepository.GetByIdList(idList);

            return GetSelectGroupList(operationTypes);
        }

        private List<SelectGroupDto> GetSelectGroupList(List<OperationType> operationTypes)
        {
            List<SelectGroupDto> results = new List<SelectGroupDto>();
            //regroupement par idOperationTypeFamily
            List<OperationTypeFamily> operationTypeFamilies = operationTypes.Select(x => x.OperationTypeFamily).Distinct().ToList();
            foreach (var operationTypeFamily in operationTypeFamilies)
            {
                SelectGroupDto selectGroup = new SelectGroupDto { Id = operationTypeFamily.Id, Label = operationTypeFamily.Label };

                var operationTypesByFamily = operationTypes.Where(x => x.IdOperationTypeFamily == operationTypeFamily.Id).ToList();
                foreach (var operationType in operationTypesByFamily)
                {
                    SelectDto selectDto = new SelectDto { Id = operationType.Id, Label = operationType.Label };
                    selectGroup.Selects.Add(selectDto);
                }

                results.Add(selectGroup);
            }
            return results;
        }

        public List<SelectDto> GetSelectListByIdList(List<int> idList)
        {
            List<OperationType> operationTypes = _operationTypeRepository.GetByIdList(idList);
            return _mapper.Map<List<SelectDto>>(operationTypes);
        }

    }
}
