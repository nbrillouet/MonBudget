using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System.Linq;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class AccountService : IAccountService
    {
        private readonly IMapper _mapper;
        private readonly IAccountRepository _accountRepository;
        private readonly IUserAccountService _userAccountService;

        public AccountService(
            IAccountRepository accountRepository,
            IUserAccountService userAccountService,
            IMapper mapper)
        {
            _accountRepository = accountRepository;
            _userAccountService = userAccountService;
            _mapper = mapper;

        }
        public Account GetByNumber(string number)
        {
            Account account = _accountRepository.GetByNumber(number);
            //if (account == null)
            //{
            //    account = GetById((int)EnumAccount.Inconnu);
            //    account.Number = number;
            //}
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

        public List<Account> GetByIdBankAgency(int idBankAgency)
        {
            return _accountRepository.GetByIdBankAgency(idBankAgency);
        }

        public Account GetFullById(int id)
        {
            return _accountRepository.GetForDetailById(id);
        }

        public AccountForDetailDto GetForDetailById(int id)
        {
            var account = GetFullById(id);
            var accountForDetail = _mapper.Map<AccountForDetailDto>(account);
            //Recherche des comptes liés
            accountForDetail.LinkedUsers = _mapper.Map<List<SelectDto>>(account.UserAccounts.Select(x => x.User).ToList()); 
            
            return accountForDetail;
        }

        public void Update(AccountForDetailDto accountForDetailDto)
        {
            var account = _accountRepository.GetById(accountForDetailDto.Id);
            account.IdBankAgency = accountForDetailDto.BankAgency.Id;
            account.IdAccountType = accountForDetailDto.AccountType.Id;
            account.Label = accountForDetailDto.Label;
            account.Number = accountForDetailDto.Number;
            account.StartAmount = accountForDetailDto.StartAmount;
            account.AlertThreshold = accountForDetailDto.AlertThreshold;

            Update(account);

        }

        public Account Create(int idUser, AccountForDetailDto accountForDetailDto)
        {
            var account = _accountRepository.GetByNumber(accountForDetailDto.Number);
            if (account == null)
            {
                account = new Account
                {
                    IdBankAgency = accountForDetailDto.BankAgency.Id,
                    IdAccountType = accountForDetailDto.AccountType.Id,
                    Label = accountForDetailDto.Label,
                    Number = accountForDetailDto.Number,
                    StartAmount = accountForDetailDto.StartAmount,
                    AlertThreshold = accountForDetailDto.AlertThreshold
                };
                account = Create(account);
            }

            var userAccount = new UserAccount
            {
                IdAccount = account.Id,
                IdUser = idUser
            };
            _userAccountService.Create(userAccount);

            return account;

        }

        public void Delete(int idUser, int idAccount)
        {
            var userAccount = _userAccountService.Get(idUser, idAccount);
            _userAccountService.Delete(userAccount);
        }

        public Account Create(Account account)
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
