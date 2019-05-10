using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IPlanPosteDetailService
    {
        PlanPosteForDetailDto GetForDetailById(int idUser, int id, int idPlan, int idPoste);
        PlanPosteForDetailDto GetForDetailById(int idUser, int id);
        
        int Save(PlanPosteForDetailDto planPosteForDetailDto);
        void Delete(List<int> listIdPlanPoste);
    }


}
