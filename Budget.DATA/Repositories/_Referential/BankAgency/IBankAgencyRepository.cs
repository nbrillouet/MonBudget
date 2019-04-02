using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IBankAgencyRepository : IBaseRepository<BankAgency>
    {
        List<BankAgency> GetAllOrdering();
    }
}
