using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IPlanRepository : IBaseRepository<Plan>
    {
        List<Plan> Get(FilterPlan filter);
        List<Int32> GetDistinctYears();
        new int Create(Plan plan);
    }
}
