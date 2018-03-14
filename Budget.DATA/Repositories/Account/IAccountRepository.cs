using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IAccountRepository : IBaseRepository<Account>
    {
        Account GetAccountByNumber(string accountNumber);

        List<Account> GetByIdBank(int idBank);
        new int Create(Account account);

    }
}
