using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IPlanPosteService
    {
        PagedList<PlanPosteForTableDto> GetPlanPosteTable(FilterPlanPosteTableSelected filter);
        PlanPoste GetById(int idPlanPoste);
        List<PlanPoste> Get(int idPlan, int idPoste);

        void Create(PlanPoste planPoste);
        void Update(PlanPoste planPoste);
        void Delete(PlanPoste planPoste);
        void DeleteByIdPlan(int idPlan);

    }
}
