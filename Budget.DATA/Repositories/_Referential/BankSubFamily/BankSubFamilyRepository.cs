using Budget.MODEL.Database;
using System.Collections.Generic;
using System.Linq;

namespace Budget.DATA.Repositories
{
    public class BankSubFamilyRepository : BaseRepository<BankSubFamily>, IBankSubFamilyRepository
    {
        public BankSubFamilyRepository(BudgetContext context) : base(context)
        {
        }

        public List<BankSubFamily> GetAllOrdering()
        {
            return Context.BankAgency
                .OrderBy(x => x.LabelLong)
                .ToList();
        }

    }
}
