using Budget.MODEL.Database;
using System.Linq;
using System.Collections.Generic;
using System.Text;

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
                .OrderBy(x => x.Label)
                .ToList();
        }

        public List<BankAgency> GetByIdBankSubFamily(int idBankSubFamily)
        {
            return Context.BankAgency
                .Where(x=>x.IdBankSubFamily== idBankSubFamily)
                .OrderBy(x => x.Label)
                .ToList();
        }

    }

}
