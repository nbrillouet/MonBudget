using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Filter;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class AccountRepository : BaseRepository<Account>, IAccountRepository
    {
        public AccountRepository(BudgetContext context) : base(context)
        {
        }

        public PagedList<Account> GetForTable(FilterAccountTableSelected filter)
        {
            var accounts = Context.Account
                .Where(x => x.UserAccounts.Any(o => o.IdUser == filter.User.Id))
                .Include(x => x.BankAgency)
                .Include(x=>x.BankAgency.BankSubFamily)
                .Include(x => x.BankAgency.BankSubFamily.BankFamily)
                        //.ThenInclude(x => x.BankSubFamily)
                        .ThenInclude(x => x.Asset)
                .Include(x => x.AccountType)
                .Include(x => x.UserAccounts)
                    .ThenInclude(ua => ua.User)
                .AsQueryable();

            accounts = GenericTableFilter.GetGenericFilters(accounts, filter);

            var results = PagedListRepository<Account>.Create(accounts, filter.Pagination);
            return results;
        }

        public Account GetForDetailById(int id)
        {
            return Context.Account
                .Where(x => x.Id == id)
                .Include(x => x.BankAgency)
                    .ThenInclude(x=>x.BankSubFamily)
                        .ThenInclude(x=>x.BankFamily)
                .Include(x => x.AccountType)
                .Include(x=>x.UserAccounts)
                    .ThenInclude(ua=>ua.User)
                .FirstOrDefault();
        }

        public Account GetByNumber(string number)
        {
            return Context.Account
                .Where(x => x.Number == number)
                .Include(x=>x.BankAgency)
                    .ThenInclude(x=>x.BankSubFamily)
                        .ThenInclude(x=>x.BankFamily)
                .FirstOrDefault();
        }

        //public new Account Create(Account account)
        //{
        //    Context.Set<Account>().Add(account);
        //    Context.SaveChanges();

        //    return account;
        //}

        public List<Account> GetByIdBankAgency(int idBankAgency)
        {
            return Context.Account
                .Where(x => x.Id != (int)EnumAccount.Inconnu 
                    && x.IdBankAgency == idBankAgency)
                .ToList();
        }
    }
}
