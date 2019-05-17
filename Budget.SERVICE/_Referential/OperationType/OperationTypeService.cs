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
using System.Text;

namespace Budget.SERVICE
{
    public class OperationTypeService : IOperationTypeService
    {
        private readonly IOperationTypeRepository _operationTypeRepository;
        private readonly ISelectService _selectService;
        private readonly IMapper _mapper;
        private readonly IOperationTypeFamilyService _operationTypeFamilyService;

        public OperationTypeService(
            IOperationTypeRepository operationTypeRepository,
            ISelectService selectService,
            IMapper mapper,
            IOperationTypeFamilyService operationTypeFamilyService
            )
        {
            _operationTypeRepository = operationTypeRepository;
            _selectService = selectService;
            _mapper = mapper;
            _operationTypeFamilyService = operationTypeFamilyService;
        }

        public OperationType GetByIdWithOperationTypeFamily(int idOperationType)
        {
            return _operationTypeRepository.GetByIdWithOperationTypeFamily(idOperationType);
        }

        public List<SelectGroupDto> GetSelectGroup(int idUserGroup)
        {
            List<SelectGroupDto> results = new List<SelectGroupDto>();
            var operationTypeFamilies = _operationTypeFamilyService.GetByIdUserGroup(idUserGroup);

            return GetSelectGroup(operationTypeFamilies);
            //foreach(var operationTypeFamily in operationTypeFamilies)
            //{
            //    SelectGroupDto selectGroupDto = new SelectGroupDto
            //    {
            //        Id = operationTypeFamily.Id,
            //        Label = operationTypeFamily.Label
            //    };
            //    var operationTypes = _operationTypeRepository.GetByIdOperationTypeFamily(operationTypeFamily.Id);
            //    var operationTypesDto = _mapper.Map<List<SelectDto>>(operationTypes);
            //    selectGroupDto.Selects = operationTypesDto;

            //    results.Add(selectGroupDto);
            //}

            //return results;
        }

        public List<SelectGroupDto> GetSelectGroup(int idUserGroup, List<SelectDto> operationTypeFamilies)
        {
            if(operationTypeFamilies == null || operationTypeFamilies.Count==0)
            {
                operationTypeFamilies = _operationTypeFamilyService.GetByIdUserGroup(idUserGroup);
            }

            return GetSelectGroup(operationTypeFamilies);
            //var operationTypeFamilies = _operationTypeFamilyService.GetByIds(idUserGroup);
        }

        private List<SelectGroupDto> GetSelectGroup(List<SelectDto> operationTypeFamilies)
        {
            List<SelectGroupDto> results = new List<SelectGroupDto>();
            foreach (var operationTypeFamily in operationTypeFamilies)
            {
                SelectGroupDto selectGroupDto = new SelectGroupDto
                {
                    Id = operationTypeFamily.Id,
                    Label = operationTypeFamily.Label
                };
                var operationTypes = _operationTypeRepository.GetByIdOperationTypeFamily(operationTypeFamily.Id);
                var operationTypesDto = _mapper.Map<List<SelectDto>>(operationTypes);
                selectGroupDto.Selects = operationTypesDto;

                results.Add(selectGroupDto);
            }

            return results;
        }

        public List<SelectDto> GetSelectList(int idUserGroup, List<SelectDto> operationTypeFamilies)
        {
            var operationTypes = _operationTypeRepository.GetByOperationTypeFamilies(idUserGroup, operationTypeFamilies);
            return _mapper.Map<List<SelectDto>>(operationTypes);
        }

        public List<SelectDto> GetSelectList(int idOperationTypeFamily, EnumSelectType enumSelectType)
        {
            
            List<SelectDto> selectList = new List<SelectDto>();
            if (enumSelectType == EnumSelectType.Inconnu)
            {
                var operationTypeFamily = _operationTypeFamilyService.GetById(idOperationTypeFamily);
                var select = _mapper.Map<SelectDto>(GetUnknown(operationTypeFamily.IdUserGroup));
                selectList.Add(select);
            }
            else
            {
                selectList = _selectService.GetSelectList(enumSelectType);
            }



            //var selectList = _selectService.GetSelectList(EnumTableRef.OperationType, operationTypeFamily.IdUserGroup,enumSelectType);
            var operationTypeFamilies = _operationTypeRepository.GetByIdOperationTypeFamily(idOperationTypeFamily);
            selectList.AddRange(_mapper.Map<IEnumerable<SelectDto>>(operationTypeFamilies).ToList());

            return selectList;
        }
        public List<SelectGroupDto> GetSelectGroupListByIdPoste(int idUserGroup, int idPoste)
        {
            EnumMovement idMovement = idPoste == (int)EnumMovement.Credit ? EnumMovement.Credit : EnumMovement.Debit;
            List<OperationType> operationTypes = _operationTypeRepository.GetByIdMovement(idUserGroup, idMovement);

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

        public OperationType GetUnknown(int idUserGroup)
        {
            var operationType = _operationTypeRepository.GetUnknown(idUserGroup);
            return operationType;
        }

        public PagedList<OtForTableDto> GetOtTable(FilterOtTableSelected filter)
        {
            var pagedList = _operationTypeRepository.GetOtTable(filter);

            var result = new PagedList<OtForTableDto>(_mapper.Map<List<OtForTableDto>>(pagedList.Datas), pagedList.Pagination);

            return result;

        }

        public OtForDetailDto GetOtDetail(int idOperationType, int idUserGroup)
        {
            OperationType ot = new OperationType();
            if (idOperationType == -1)
            {
                ot.OperationTypeFamily = new OperationTypeFamily { Id = 1, Label = "INCONNU" };
            }
            else
            {
                ot = _operationTypeRepository.GetOtDetail(idOperationType);
            }
            var otDto = _mapper.Map<OtForDetailDto>(ot);

            otDto.OperationTypeFamily = new ComboSimple<SelectDto>
            {
                List = _operationTypeFamilyService.GetSelectList(idUserGroup, EnumSelectType.Empty),
                Selected = new SelectDto { Id = ot.OperationTypeFamily.Id, Label = ot.OperationTypeFamily.Label }
            };

            return otDto;
        }

        public OtForDetailDto SaveOtDetail(OtForDetailDto otForDetailDto)
        {
            var ot = _mapper.Map<OperationType>(otForDetailDto);
            if (ot.Id != 0)
            {
                _operationTypeRepository.Update(ot);
            }
            else
            {
                ot = _operationTypeRepository.Create(ot);
            }

            return _mapper.Map<OtForDetailDto>(ot); ;
        }

        public bool DeleteOtDetail(int idOt)
        {
            var ot = _operationTypeRepository.GetById(idOt);
            if (ot.IsMandatory)
                throw new Exception("Type d'opération obligatoire, suppression impossible");
            _operationTypeRepository.DeleteWithEscalation(ot);


            return true;
        }

    }
}
