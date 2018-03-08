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
            return Context.User
                .Where(x => x.Id == id)
                .Include(x => x.Shortcuts)
                .FirstOrDefaultAsync();
        }

        public async Task<PagedList<User>> GetUsers(UserParams userParams)
        {
            var users = Context.User.Include(x => x.Shortcuts);

            return await PagedListRepository<User>.CreateAsync(users, userParams.PageNumber, userParams.PageSize);
        }
    }
}
