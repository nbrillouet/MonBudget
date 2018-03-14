using Budget.DATA.Repositories;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class AccountService : IAccountService
    {
        private readonly IAccountRepository _accountRepository;
        public AccountService(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;

        }
        public Account GetAccountByNumber(string accountNumber)
        {
            Account account = _accountRepository.GetAccountByNumber(accountNumber);
            if (account == null)
            {
                account = GetById((int)EnumAccount.Inconnu);
                account.Number = accountNumber;
            }
            return account;
        }

        public Account GetById(int idAccount)
        {
            return _accountRepository.GetById(idAccount);
        }

        public List<Account> GetAll()
        {
            return _accountRepository.GetAll();
        }

        public List<Account> GetByIdBank(int idBank)
        {
            return _accountRepository.GetByIdBank(idBank);
        }

        public int Create(Account account)
        {
            return _accountRepository.Create(account);
        }

        public void Update(Account account)
        {
            _accountRepository.Update(account);
        }

        public void Delete(Account account)
        {
            _accountRepository.Delete(account);
        }


    }
}
