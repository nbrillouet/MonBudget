using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IPlanUserService
    {
        List<PlanUser> GetByIdPlan(int idPlan);
        List<Plan> GetPlansByIdUser(int idUser);
        ComboMultiple<SelectDto> GetUserComboMultiple(int idPlan, int idUserGroup);
        void Create(PlanUser planUser);
        //void SaveByIdPlan(int idPlan,List<SelectDto> selectUsers);
        //void DeleteByIdPlan(int idPlan);
    }


}
