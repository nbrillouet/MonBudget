using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto.Select;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IPlanPosteReferenceService
    {
        void DeleteByIdPlanPoste(int idPlanPoste);
        void Create(PlanPosteReference planPosteReference);
        ComboMultiple<SelectGroupDto> GetListForComboByIdPlanPoste(int IdPlanPoste, int idReferenceTable, int idPoste);

    }


}
