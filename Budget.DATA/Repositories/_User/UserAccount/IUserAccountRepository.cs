using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IUserAccountRepository : IBaseRepository<UserAccount>
    {
        UserAccount Get(int idUser, int idAccount);
        List<BankAgency> GetBankAgencies(int idUser);
        //List<BankSubFamily> GetBankSubFamilies(List<int> idUsers);
        List<BankAgency> GetBankAgenciesByIdUserGroup(int idUserGroup);
    }
}
