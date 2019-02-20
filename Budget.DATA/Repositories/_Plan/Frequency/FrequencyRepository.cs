using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class FrequencyRepository : BaseRepository<Frequency>, IFrequencyRepository
    {
        public FrequencyRepository(BudgetContext context) : base(context)
        {

        }

        public List<Frequency> GetAllByOrder()
        {
            var frequencies = Context.Frequency
                .OrderBy(x=>x.MonthNumber)
                .ToList();
            return frequencies;
        }
    }
}
