using Budget.MODEL.Database;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class UserAccountRepository : BaseRepository<UserAccount>, IUserAccountRepository
    {
        public UserAccountRepository(BudgetContext context) : base(context)
        {

        }

        public UserAccount Get(int idUser, int idAccount)
        {
            return Context.UserAccount
                .Where(x => x.IdUser == idUser
                    && x.IdAccount == idAccount)
                .FirstOrDefault();
        }

        public List<BankAgency> GetBankAgencies(int idUser)
        {
            var results = Context.UserAccount
                .Where(x => x.IdUser == idUser).AsQueryable();
            
            return GetBankAgencies(results);
        }

        public List<BankAgency> GetBankAgenciesByIdUserGroup(int idUserGroup)
        {
            var results = Context.UserAccount
                .Where(x => x.User.IdUserGroup == idUserGroup)
                .AsQueryable();

            return GetBankAgencies(results);
        }

        private List<BankAgency> GetBankAgencies(IQueryable<UserAccount> query)
        {
            List<Account> results = query.Select(x => x.Account)
                .Include(x => x.BankAgency)
                    .ThenInclude(x => x.BankSubFamily)
                    .ThenInclude(x => x.BankFamily)
                .Include(x => x.AccountType)
                .Include(x => x.UserAccounts)
                    .ThenInclude(ua => ua.User)
                .ToList();

            var bankAgencies = results.Select(x => x.BankAgency).ToList();
            var distinctBankAgencies = bankAgencies.GroupBy(x => x.Id)
                .Select(x => x.FirstOrDefault())
                .ToList();

            return distinctBankAgencies;
        }

        //public List<BankSubFamily> GetBankSubFamilies(List<int> idUsers)
        //{
        //    List<Account> results = Context.UserAccount
        //        .Where(x => idUsers.Contains(x.IdUser))
        //        .Select(x => x.Account)
        //        .Include(x => x.BankAgency)
        //            .ThenInclude(x => x.BankSubFamily)
        //            //.ThenInclude(x => x.BankFamily)
        //        //.Include(x => x.AccountType)
        //        //.Include(x => x.UserAccounts)
        //        //    .ThenInclude(ua => ua.User)
        //        .ToList();

        //    var distinctAccounts = results.GroupBy(x => x.Id)
        //        .Select(x => x.FirstOrDefault())
        //        .ToList();

        //    var bankAgencies = results.Select(x => x.BankAgency).ToList();
        //    var bankSubFamilies = bankAgencies.Select(x => x.BankSubFamily).ToList();
        //    return null;
        //}
    }
}
