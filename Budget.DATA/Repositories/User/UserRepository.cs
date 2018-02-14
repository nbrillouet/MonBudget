using Budget.MODEL;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Budget.DATA.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(BudgetContext context) : base(context)
        {

        }

        public Task<User> GetById(int id)
        {
            return Context.Set<User>().FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
