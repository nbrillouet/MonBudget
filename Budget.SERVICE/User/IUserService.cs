using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Budget.SERVICE
{
    public interface IUserService
    {
        Task<User> GetById(int id);
        Task<List<User>> GetAll();
        Task<PagedList<User>> GetUsers(UserParams userParams);
        void Update(User entity);

    }
}
