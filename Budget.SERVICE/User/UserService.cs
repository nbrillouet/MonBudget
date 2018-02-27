using Budget.DATA.Repositories;
using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Budget.SERVICE
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public Task<User> GetById(int id)
        {
            return _userRepository.GetById(id);
        }

        public Task<List<User>> GetAll()
        {
            return _userRepository.GetAll();
        }

        public void Update(User user)
        {
           _userRepository.Update(user);
        }


    }

}
