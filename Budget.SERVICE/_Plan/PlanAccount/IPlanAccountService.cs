using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using System.Collections.Generic;

namespace Budget.SERVICE
{
    public interface IPlanAccountService
    {
        ComboMultiple<SelectGroupDto> GetAccountComboMultiple(int idPlan, int idUserGroup);
        List<PlanAccount> GetByIdPlan(int idPlan);
        void DeleteByIdPlan(int idPlan);
        void Create(PlanAccount planAccount);
        void Save(int idPlan, List<SelectDto> accounts);
        //void Update(PlanAccount planAccount);
        //void Delete(PlanAccount planAccount);
    }

}
