using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IPlanPosteDetailService
    {
        PlanPosteForDetailDto GetForDetailById(int idUserGroup, int idPlan, int idPoste);
        PlanPosteForDetailDto GetForDetailById(int idUserGroup, int idPlanPoste);
        
        int Save(PlanPosteForDetailDto planPosteForDetailDto);
        void Delete(List<int> listIdPlanPoste);
    }


}
