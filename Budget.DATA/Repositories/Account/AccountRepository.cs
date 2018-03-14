using Budget.MODEL.Database;
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

        public Account GetAccountByNumber(string accountNumber)
        {
            return Context.Account.Where(x => x.Number == accountNumber).FirstOrDefault();
        }

        public new int Create(Account account)
        {
            Context.Set<Account>().Add(account);

            Context.SaveChanges();

            return account.Id;
        }

        public List<Account> GetByIdBank(int idBank)
        {
            return Context.Account.Where(x => x.Id != (int)EnumAccount.Inconnu && x.IdBank == idBank).ToList();
        }
    }
}
