using Budget.MODEL.Database;
using System.Collections.Generic;

namespace Budget.DATA.Repositories
{
    public interface IBankAgencyRepository : IBaseRepository<BankAgency>
    {
        List<BankAgency> GetAllOrdering();
    }
}
