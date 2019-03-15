using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class MonthRepository : BaseRepository<Month>, IMonthRepository
    {
        public MonthRepository(BudgetContext context) : base(context)
        {

        }

        public List<Month> GetAllByOrder()
        {
            var months = Context.Month
                .OrderBy(x=>x.Id)
                .ToList();
            return months;
        }
    }
}
