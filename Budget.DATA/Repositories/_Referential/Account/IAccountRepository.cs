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

        List<Account> GetByIdBank(int idBank);

        //new int Create(Account account);
        new Account Create(Account account);

    }
}
