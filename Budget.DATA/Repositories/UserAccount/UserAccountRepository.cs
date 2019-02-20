using Budget.MODEL.Database;
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
    }
}
