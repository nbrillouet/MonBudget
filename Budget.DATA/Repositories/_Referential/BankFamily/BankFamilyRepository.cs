using Budget.MODEL.Database;
using System.Linq;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class BankFamilyRepository : BaseRepository<BankFamily>, IBankFamilyRepository
    {
        public BankFamilyRepository(BudgetContext context) : base(context)
        {
        }

        public List<BankFamily> GetAllOrdering()
        {
            return Context.BankFamily
                .OrderBy(x => x.LabelLong)
                .ToList();
        }

    }


}
