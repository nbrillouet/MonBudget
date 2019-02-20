using Budget.MODEL.Database;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class VPlanGlobalRepository : BaseRepository<VPlanGlobal>, IVPlanGlobalRepository
    {
        public VPlanGlobalRepository(BudgetContext context) : base(context)
        {

        }

        public List<VPlanGlobal> Get(FilterPlanTracking filter)
        {
            var planGlobals = Context.VPlanGlobal
                .AsQueryable();

            planGlobals = planGlobals.Where(x => x.IdPlan == filter.IdPlan);

            if (filter.MonthYear != null)
            {
                planGlobals = planGlobals.Where(x => x.Month==filter.MonthYear.Month.Id  
                    && x.Year == filter.MonthYear.Year);
            }

            var results = planGlobals.ToList();
            return results;
        }

        public List<VPlanGlobal> GetByIdPlan(int IdPlan)
        {
            var planGlobals = Context.VPlanGlobal
                .Where(x => x.IdPlan == IdPlan && x.IdAccountStatement!=null)
                .ToList();

            return planGlobals;
        }
    }
}
