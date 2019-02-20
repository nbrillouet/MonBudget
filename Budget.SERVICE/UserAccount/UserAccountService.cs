using Budget.DATA.Repositories;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class UserAccountService : IUserAccountService
    {
        private readonly IUserAccountRepository _userAccountRepository;
        //private readonly IMapper _mapper;


        public UserAccountService(IUserAccountRepository userAccountRepository)
        {
            _userAccountRepository = userAccountRepository;

        }

        public UserAccount Get(int idUser, int idAccount)
        {
            return _userAccountRepository.Get(idUser, idAccount);
        }

        public UserAccount Create(UserAccount userAccount)
        {
            return _userAccountRepository.Create(userAccount);
        }

        public void Update(UserAccount userAccount)
        {
            _userAccountRepository.Update(userAccount);
        }

        public void Delete(UserAccount userAccount)
        {
            _userAccountRepository.Delete(userAccount);
        }
    }
}
