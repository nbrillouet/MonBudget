using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IAccountTypeService
    {
        AccountType GetById(int id);
        List<AccountType> GetAll();
        //int Create(Account account);
        //void Update(Account account);
        //void Delete(Account account);
    }
}
