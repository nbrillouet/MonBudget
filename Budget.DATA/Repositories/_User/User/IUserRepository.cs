using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Budget.DATA.Repositories
{
    public interface IUserRepository : IBaseRepository<User>
    {
        PagedList<User> GetUserTable(FilterUserTableSelected filter);

        User GetForDetailById(int id);

        List<BankAgency> GetBankAgencies(int idUser);
    }

}
