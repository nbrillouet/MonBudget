using Budget.MODEL.Database;
using System.Collections.Generic;

namespace Budget.DATA.Repositories
{
    public interface IBankSubFamilyRepository : IBaseRepository<BankSubFamily>
    {
        List<BankSubFamily> GetAllOrdering();
    }
}
