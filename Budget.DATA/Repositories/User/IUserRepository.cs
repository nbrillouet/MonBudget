using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Budget.DATA.Repositories
{
    public interface IUserRepository : IBaseRepository<User>
    {
        Task<PagedList<User>> GetUsers(Pagination userParams);
        List<Bank> GetBanks(int idUser);
    }

}
