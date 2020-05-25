using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System.Collections.Generic;

namespace Budget.SERVICE
{
    public interface IUserAccountService
    {
        UserAccount Get(int idUser, int idAccount);
        List<BankAgencyWithAccountsDto> GetBankAgencies(int idUser);
        List<SelectGroupDto> GetBankSubFamilySelectGroup(int idUserGroup);
        List<Select> GetBankFamily(int idUser);
        UserAccount Create(UserAccount userAccount);
        void Update(UserAccount userAccount);
        void Delete(UserAccount userAccount);
    }
}
