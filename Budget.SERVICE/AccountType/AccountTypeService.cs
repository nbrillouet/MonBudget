using Budget.DATA.Repositories;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class AccountTypeService : IAccountTypeService
    {
        private readonly IAccountTypeRepository _accountTypeRepository;
        public AccountTypeService(IAccountTypeRepository accountTypeRepository)
        {
            _accountTypeRepository = accountTypeRepository;

        }

        public AccountType GetById(int id)
        {
            return _accountTypeRepository.GetById(id);
        }

        public List<AccountType> GetAll()
        {
            return _accountTypeRepository.GetAll();
        }


        //public int Create(Account account)
        //{
        //    return _accountRepository.Create(account);
        //}

        //public void Update(Account account)
        //{
        //    _accountRepository.Update(account);
        //}

        //public void Delete(Account account)
        //{
        //    _accountRepository.Delete(account);
        //}


    }
}
