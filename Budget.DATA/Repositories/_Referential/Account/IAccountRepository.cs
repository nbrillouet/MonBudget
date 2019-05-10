using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IAccountRepository : IBaseRepository<Account>
    {
        Account GetForDetailById(int id);
        Account GetByNumber(string number);
        List<Account> GetByIdBankAgency(int idBankAgency);

        new Account Create(Account account);

    }
}
