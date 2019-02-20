using Budget.MODEL.Database;
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

        public Account GetForDetailById(int id)
        {
            return Context.Account
                .Where(x => x.Id == id)
                .Include(x => x.Bank)
                .Include(x => x.AccountType)
                .Include(x=>x.UserAccounts)
                    .ThenInclude(ua=>ua.User)
                .FirstOrDefault();
        }

        public Account GetByNumber(string number)
        {
            return Context.Account
                .Where(x => x.Number == number)
                .Include(x=>x.Bank)
                .FirstOrDefault();
        }

        public new Account Create(Account account)
        {
            Context.Set<Account>().Add(account);
            Context.SaveChanges();

            return account;
        }

        public List<Account> GetByIdBank(int idBank)
        {
            return Context.Account.Where(x => x.Id != (int)EnumAccount.Inconnu && x.IdBank == idBank).ToList();
        }
    }
}
