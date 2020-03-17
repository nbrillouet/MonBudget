using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System.Collections.Generic;
using System.Linq;

namespace Budget.SERVICE
{
    public class PlanPosteReferenceService : IPlanPosteReferenceService
    {
        private readonly IMapper _mapper;
        private readonly IPlanPosteReferenceRepository _planPosteReferenceRepository;
        private readonly ReferentialService _referentialService;

        public PlanPosteReferenceService(
            IMapper mapper,
            IPlanPosteReferenceRepository planPosteReferenceRepository,
            ReferentialService referentialService
        )
        {
            _mapper = mapper;
            _planPosteReferenceRepository = planPosteReferenceRepository;
            _referentialService = referentialService;
        }

       
        public ComboMultiple<SelectGroupDto> GetListForComboByIdPlanPoste(int idUserGroup, int idPlanPoste, int idReferenceTable, int idPoste)
        {
            ComboMultiple<SelectGroupDto> result = new ComboMultiple<SelectGroupDto>();

            List<PlanPosteReference> planPosteReferences = Get(idPlanPoste, idReferenceTable);
            List<int> idList = planPosteReferences.Select(x => x.IdReference ).ToList();

            switch (idReferenceTable)
            {
                case 1: //OPERATION_TYPE_FAMILY
                    result.List = _referentialService.OperationTypeFamilyService.GetSelectGroupListByIdPoste(idUserGroup, idPoste);
                    result.ListSelected = _referentialService.OperationTypeFamilyService.GetSelectListByIdList(idList);
                    break;
                case 2: // "OPERATION_TYPE"
                    result.List = _referentialService.OperationTypeService.GetSelectGroupListByIdPoste(idUserGroup, idPoste);
                    result.ListSelected = _referentialService.OperationTypeService.GetSelectListByIdList(idList);
                    break;
                case 3: //TODO OPERATION
                    result.List = _referentialService.OperationService.GetSelectGroupListByIdPoste(idUserGroup, idPoste);
                    result.ListSelected = _referentialService.OperationService.GetSelectListByIdList(idList);
                    break;
            }

            return result;
        }

        public List<PlanPosteReference> GetByIdPlanPoste(int idPlanPoste)
        {
            return _planPosteReferenceRepository.GetByIdPlanPoste(idPlanPoste);
        }

        public List<PlanPosteReference> Get(int idPlanPoste,int idReferenceTable)
        {
            return _planPosteReferenceRepository.Get(idPlanPoste, idReferenceTable);
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
