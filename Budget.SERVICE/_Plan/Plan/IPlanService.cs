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
        List<Plan> GetPlanTable(FilterPlan filter);
        PlanForTableComboFilter GetPlanTableComboFilter();
        //List<Plan> Get(FilterPlan filter);


        Plan GetById(int idPlan);

        

        void Create(Plan plan);
        void Update(Plan plan);
    }
}
