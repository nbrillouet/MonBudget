using Budget.HELPER;
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
            
            //planGlobals = planGlobals.Where(x => x.Month.Value == 13);
            if (filter.MonthYear != null && filter.MonthYear.Month.Id!= (int)EnumMonth.BalanceSheetYear)
            {
                //ajout systématique du mois 13 (prevision annuelle)
                planGlobals = planGlobals
                    .Where(
                        x => x.Month!=null
                        &&
                        (
                            x.Month == (int)EnumMonth.BalanceSheetYear
                                && x.DateIntegration <= DateHelper
                                .GetLastDayOfMonth(Convert.ToDateTime($"01/{filter.MonthYear.Month.Id}/{filter.MonthYear.Year}"))
                        )
                        ||
                        (x.Month == filter.MonthYear.Month.Id && x.Year == filter.MonthYear.Year)
                    );
                    //.Where(x => x.Month == 13 || (x.Month==filter.MonthYear.Month.Id  
                    //&& x.Year == filter.MonthYear.Year));
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
