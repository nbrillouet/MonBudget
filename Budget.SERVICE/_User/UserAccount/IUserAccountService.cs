using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System.Collections.Generic;

namespace Budget.SERVICE
{
    public interface IUserAccountService
    {
        UserAccount Get(int idUser, int idAccount);
        UserAccount Create(UserAccount userAccount);
        List<BankAgencyWithAccountsDto> GetBankAgencies(int idUser);
        List<SelectGroupDto> GetBankSubFamilySelectGroup(int idUserGroup);

        //List<SelectGroupDto> GetAccountComboMultiple(int idUser);
        void Update(UserAccount userAccount);
        void Delete(UserAccount userAccount);
    }
}
