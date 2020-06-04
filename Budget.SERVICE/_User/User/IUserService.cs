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
        User GetById(int id);
        User GetByUsername(string username);
        Task<User> GetByIdAsync(int id);
        User GetLast();
        User GetByMail(string mail);
        User ActivateAccount(string activationCode);
        UserForDetailDto GetForDetailById(int id);
        UserForGroupDto GetForUserGroup(int id);
        List<User> GetAll();
        List<User> GetByIdUserGroup(int idUserGroup);
        //bool HasCompleteInformation(int idUser);

        void Update(UserForDetailDto entity);
        void Update(User entity);
        User Register(User user);
    }
}
