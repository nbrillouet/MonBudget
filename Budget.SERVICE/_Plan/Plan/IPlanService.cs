using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IPlanService
    {
        PagedList<Plan> GetPlanTable(FilterPlanTableSelected filter);
        //PlanForTableComboFilter GetPlanTableComboFilter();
        Plan GetById(int idPlan);
        List<int> GetDistinctYears();

        void Create(Plan plan);
        void Update(Plan plan);
    }
}
