using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IAccountService
    {
        Account GetAccountByNumber(string accountNumber);
        Account GetById(int idAccount);
        List<Account> GetAll();
        List<Account> GetByIdBank(int idBank);
        int Create(Account account);
        void Update(Account account);
        void Delete(Account account);
    }
}
