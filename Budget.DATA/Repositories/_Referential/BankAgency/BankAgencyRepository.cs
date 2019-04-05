using Budget.MODEL.Database;
using System.Collections.Generic;
using System.Linq;

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
