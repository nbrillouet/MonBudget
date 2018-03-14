using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Budget.SERVICE
{
    public interface IUserService
    {
        Task<User> GetByIdAsync(int id);

        Task<List<User>> GetAllAsync();
        Task<PagedList<User>> GetUsers(Pagination userParams);
        void Update(User entity);

    }
}
