using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class PlanRepository : BaseRepository<Plan>, IPlanRepository
    {
        public PlanRepository(BudgetContext context) : base(context)
        {

        }

        public List<Plan> Get(FilterPlan filter)
        {
            var plans = Context.Plan
                .AsQueryable();

            if (filter.YearSelected != null)
            {
                plans = plans.Where(x => x.Year == filter.YearSelected);
            }

            //string columnSorted;
            //if (filter.Pagination.SortColumn.Contains("operationTypeFamily"))
            //{
            //    columnSorted = $"OperationType.{filter.Pagination.SortColumn}.Label";
            //}
            //else
            //columnSorted = filter.Pagination.SortColumn;

            //if (filter.Pagination.SortDirection == "asc")
            //{
            //    //filter.Pagination.SortColumn
            //    plans = plans.OrderBy(columnSorted);
            //}
            //else
            //{
            //    //filter.Pagination.SortColumn
            //    plans = plans.OrderByDescending(columnSorted);
            //}
            //var results = PagedListRepository<Plan>.Create(plans, filter.Pagination);
            var results = plans.ToList();
            return results;
        }

        public List<Int32> GetDistinctYears()
        {
            var results = Context.Plan
                .Select(x => x.Year)
                .Distinct()
                .ToList();

            return results;
        }

        public new int Create(Plan plan)
        {
            Context.Set<Plan>().Add(plan);

            Context.SaveChanges();

            return plan.Id;
        }
    }
}
