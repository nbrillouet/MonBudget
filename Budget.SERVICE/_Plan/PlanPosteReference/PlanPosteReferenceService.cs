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
    public class PlanPosteReferenceService : IPlanPosteReferenceService
    {
        private readonly IMapper _mapper;
        private readonly IPlanPosteReferenceRepository _planPosteReferenceRepository;
        private readonly IOperationTypeService _operationTypeService;
        private readonly IOperationTypeFamilyService _operationTypeFamilyService;
        private readonly IOperationService _operationService;


        public PlanPosteReferenceService(
            IMapper mapper,
            IPlanPosteReferenceRepository planPosteReferenceRepository,
            IOperationTypeService operationTypeService,
            IOperationTypeFamilyService operationTypeFamilyService,
            IOperationService operationService
        )
        {
            _mapper = mapper;
            _planPosteReferenceRepository = planPosteReferenceRepository;
            _operationTypeService = operationTypeService;
            _operationTypeFamilyService = operationTypeFamilyService;
            _operationService = operationService;
        }

       
        public ComboMultiple<SelectGroupDto> GetListForComboByIdPlanPoste(int IdPlanPoste, int idReferenceTable, int idPoste)
        {
            ComboMultiple<SelectGroupDto> result = new ComboMultiple<SelectGroupDto>();

            List<PlanPosteReference> planPosteReferences = Get(IdPlanPoste, idReferenceTable);
            List<int> idList = planPosteReferences.Select(x => x.IdReference ).ToList();

            switch (idReferenceTable)
            {
                case 1: //OPERATION_TYPE_FAMILY
                    result.List = _operationTypeFamilyService.GetSelectGroupListByIdPoste(idPoste);
                    result.ListSelected = _operationTypeFamilyService.GetSelectListByIdList(idList);
                    break;
                case 2: // "OPERATION_TYPE"
                    result.List = _operationTypeService.GetSelectGroupListByIdPoste(idPoste);
                    result.ListSelected = _operationTypeService.GetSelectListByIdList(idList);
                    break;
                case 3: //TODO OPERATION
                    result.List = _operationService.GetSelectGroupListByIdPoste(idPoste);
                    result.ListSelected = _operationService.GetSelectListByIdList(idList);
                    break;
            }

            return result;
        }

        public List<PlanPosteReference> GetByIdPlanPoste(int IdPlanPoste)
        {
            return _planPosteReferenceRepository.GetByIdPlanPoste(IdPlanPoste);
        }

        public List<PlanPosteReference> Get(int IdPlanPoste,int idReferenceTable)
        {
            return _planPosteReferenceRepository.Get(IdPlanPoste, idReferenceTable);
        }

        public void DeleteByIdPlanPoste(int idPlanPoste)
        {
            _planPosteReferenceRepository.DeleteByIdPlanPoste(idPlanPoste);
        }

        public void Create(PlanPosteReference planPosteReference)
        {
            _planPosteReferenceRepository.Create(planPosteReference);
        }
    }
}
