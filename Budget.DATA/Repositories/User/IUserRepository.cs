using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Budget.DATA.Repositories
{
    public interface IUserRepository : IBaseRepository<User>
    {
        //Task<User> GetById(int id);
        Task<PagedList<User>> GetUsers(Pagination userParams);


    }

}
