using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class BankService : IBankService
    {
        private readonly IBankRepository _bankRepository;
        //private readonly IAccountService _accountService;
        public BankService(IBankRepository bankRepository)
                            //IAccountService accountService)
        {
            _bankRepository = bankRepository;
            //_accountService = accountService;
        }

        public Bank GetById(int idBank)
        {
            return _bankRepository.GetById(idBank);
        }

        public List<Bank> GetAll()
        {
            return _bankRepository.GetAll();
        }

        public List<Bank> GetAllWithNoUnknown()
        {
            return _bankRepository.GetAllWithNoUnknown();
        }

        public Bank GetBankByAccountNumber(string accountNumber)
        {
            //Account account = _accountService.GetAccountByNumber(accountNumber);
            //if (account != null)
            //    return _bankRepository.GetById(account.IdBank);
            //else
            //    return null;
            return null;
        }

        public List<GenericList> GetGenericList()
        {
            return _bankRepository.GetGenericList();
        }
    }
}
