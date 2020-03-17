using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System.Collections.Generic;

namespace Budget.SERVICE
{
    public interface IPlanPosteReferenceService
    {
        void DeleteByIdPlanPoste(int idPlanPoste);
        void Create(PlanPosteReference planPosteReference);
        ComboMultiple<SelectGroupDto> GetListForComboByIdPlanPoste(int idUser, int idPlanPoste, int idReferenceTable, int idPoste);
        List<PlanPosteReference> GetByIdPlanPoste(int idPlanPoste);
    }


}
