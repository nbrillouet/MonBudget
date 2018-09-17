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
    public class OperationTypeFamilyService : IOperationTypeFamilyService
    {
        private readonly IOperationTypeFamilyRepository _operationTypeFamilyRepository;
        private readonly ISelectService _selectService;
        private readonly IMapper _mapper;

        public OperationTypeFamilyService(
            IOperationTypeFamilyRepository operationTypeFamilyRepository,
            ISelectService selectService,
            IMapper mapper)
        {
            _operationTypeFamilyRepository = operationTypeFamilyRepository;
            _selectService = selectService;
            _mapper = mapper;
        }

        public List<SelectDto> GetSelects(int idMovement, int idSelectType)
        {
            var selectList = _selectService.GetSelectList(idSelectType);
            var operationTypeFamilies = _operationTypeFamilyRepository.GetByIdMovement(idMovement);
            selectList.AddRange(_mapper.Map<IEnumerable<SelectDto>>(operationTypeFamilies).ToList());

            return selectList;
        }

        public List<SelectGroupDto> GetSelectGroup()
        {
            var operationTypeFamilies = _operationTypeFamilyRepository.GetAllByOrder();
            var credit = operationTypeFamilies.Where(x => x.IdMovement == 1).ToList();
            var debit = operationTypeFamilies.Where(x => x.IdMovement == 2).ToList();
            List<SelectGroupDto> selectGroups = new List<SelectGroupDto>();
            selectGroups.Add(GetSelectGroup(credit,"Crédit"));
            selectGroups.Add(GetSelectGroup(debit, "Débit"));

            return selectGroups;
        }

        private SelectGroupDto GetSelectGroup(List<OperationTypeFamily> operationTypeFamilies,string label)
        {
            SelectGroupDto selectGroupDto = new SelectGroupDto
            {
                Id = operationTypeFamilies[0].Id,
                Label = label,
                Selects = _mapper.Map<List<SelectDto>>(operationTypeFamilies)
            };

            return selectGroupDto;
        }

        public List<GenericList> GetGenericList()
        {
            return _operationTypeFamilyRepository.GetGenericList();
        }

        public OperationTypeFamily GetById(int idOperationTypeFamily)
        {
            return _operationTypeFamilyRepository.GetById(idOperationTypeFamily);
        }

        public List<OperationTypeFamily> GetAllByOrder()
        {
            return _operationTypeFamilyRepository.GetAllByOrder();
        }

        public List<GenericList> GetGenericListByIdMovement(int idMovement, EnumSelect enumSelect)
        {
            return _operationTypeFamilyRepository.GetGenericListByIdMovement(idMovement, enumSelect);
        }

        public List<OperationTypeFamily> GetByIdMovement(int idMovement, EnumSelect enumSelect)
        {
            return _operationTypeFamilyRepository.GetByIdMovement(idMovement, enumSelect);
        }

        public int Create(OperationTypeFamily operationTypeFamily)
        {
            return _operationTypeFamilyRepository.Create(operationTypeFamily);
        }
        public void Update(OperationTypeFamily operationTypeFamily)
        {
            _operationTypeFamilyRepository.Update(operationTypeFamily);
        }

        public void Delete(OperationTypeFamily operationTypeFamily)
        {
            _operationTypeFamilyRepository.Delete(operationTypeFamily);
        }

    }
}
