using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Budget.SERVICE
{
    public interface IUserService
    {
        PagedList<UserForTableDto> GetUserTable(FilterUserTableSelected filter);
        Task<User> GetByIdAsync(int id);
        UserForDetailDto GetForDetailById(int id);
        //Task<List<User>> GetAllAsync();
        List<User> GetAll();
        List<User> GetByIdUserGroup(int idUserGroup);
        void Update(UserForDetailDto entity);
        void Update(User entity);
        

    }
}
