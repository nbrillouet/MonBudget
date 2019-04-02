using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Budget.DATA.Repositories
{
    public class BankAgencyRepository : BaseRepository<BankAgency>, IBankAgencyRepository
    {
        public BankAgencyRepository(BudgetContext context) : base(context)
        {
        }

        public List<BankAgency> GetAllOrdering()
        {
            return Context.BankAgency
                .OrderBy(x => x.LabelLong)
                .ToList();
        }

    }
}
