using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using Budget.MODEL.Filter;
using Budget.MODEL;

namespace Budget.SERVICE
{
    public class AccountService : IAccountService
    {
        private readonly IMapper _mapper;
        private readonly IAccountRepository _accountRepository;
        private readonly IUserAccountService _userAccountService;
        private readonly IAccountTypeService _accountTypeService;
        private readonly IBankFamilyService _bankFamilyService;
        private readonly IBankSubFamilyService _bankSubFamilyService;
        private readonly IBankAgencyService _bankAgencyService;
        private readonly IBusinessExceptionMessageService _businessExceptionMessageService;
        private readonly IUserService _userService;
        private readonly IMailAskAccountOwnerService _mailAskAccountOwnerService;

        public AccountService(
            IAccountRepository accountRepository,
            IUserAccountService userAccountService,
            IAccountTypeService accountTypeService,
            IBankFamilyService bankFamilyService,
            IBankSubFamilyService bankSubFamilyService,
            IBankAgencyService bankAgencyService,
            IBusinessExceptionMessageService businessExceptionMessageService,
            IUserService userService,
            IMailAskAccountOwnerService mailAskAccountOwnerService,
            IMapper mapper)
        {
            _accountRepository = accountRepository;
            _userAccountService = userAccountService;
            _accountTypeService = accountTypeService;
            _bankFamilyService = bankFamilyService;
            _bankSubFamilyService = bankSubFamilyService;
            _bankAgencyService = bankAgencyService;
            _businessExceptionMessageService = businessExceptionMessageService;
            _userService = userService;
            _mailAskAccountOwnerService = mailAskAccountOwnerService;
            _mapper = mapper;

        }

        public PagedList<AccountForTable> GetForTable(FilterAccountTableSelected filter)
        {
            var pagedList = _accountRepository.GetForTable(filter);
            foreach(var item in pagedList.Datas)
            {
                item.UserAccounts = item.UserAccounts.Where(x => x.IdUser != filter.User.Id).ToList();
            }
            //pagedList = pagedList.Datas.Where(x => x.UserAccounts.Any(p => p.IdUser != filter.User.Id)).ToList();
            var results = new PagedList<AccountForTable>(_mapper.Map<List<AccountForTable>>(pagedList.Datas), pagedList.Pagination);
            
            //foreach(var result in results.Datas)
            //{
            //    result.LinkedUsers = _mapper.Map<List<Select>>(result.UserAccounts.Select(x => x.User).ToList());
            //}
            //var AccountForTables = _mapper.Map<List<AccountForTable>>(accounts);

            return results;
        }

        public AccountForDetail GetForDetail(int? idAccount)
        {
            AccountForDetail accountForDetail = !idAccount.HasValue ? GetForCreate() : GetForDetail(idAccount.Value);

            return accountForDetail;
        }

        private AccountForDetail GetForCreate()
        {
            AccountForDetail accountForDetail = new AccountForDetail
            {
                AccountType = null,
                AlertThreshold = 0,
                BankAgency = null,
                Label = null,
                LinkedUsers = null,
                Number = null,
                StartAmount = 0
            };

            return accountForDetail;
        }

        public AccountForDetail GetForDetail(int idAccount)
        {
            Account account = _accountRepository.GetForDetail(idAccount);
            var result = _mapper.Map<AccountForDetail>(account);

            return result;
        }

        public Account GetByNumber(string number)
        {
            Account account = _accountRepository.GetByNumber(number);
            return account;
        }

        //public Account GetById(int idAccount)
        //{
        //    return _accountRepository.GetById(idAccount);
        //}

        //public List<Account> GetAll()
        //{
        //    return _accountRepository.GetAll();
        //}

        //public List<Account> GetByIdBankAgency(int idBankAgency)
        //{
        //    return _accountRepository.GetByIdBankAgency(idBankAgency);
        //}

        public Account GetFullById(int id)
        {
            return _accountRepository.GetForDetail(id);
        }

        //public AccountForDetailDto GetForDetailById(int idAccount)
        //{
        //    Account account = new Account();
        //    if (idAccount == 0)
        //    {
        //        account.AccountType = new AccountType { Id = 1, Label = "INCONNU" };
        //    }
        //    else
        //    {
        //        account = GetFullById(idAccount);
        //    }
        //    var accountDto = _mapper.Map<AccountForDetailDto>(account);

        //    accountDto.AccountType = new ComboSimple<Select>
        //    {
        //        List = _accountTypeService.GetSelectList(EnumSelectType.Empty),
        //        Selected = _mapper.Map<Select>(account.AccountType)
        //    };

        //    accountDto.BankFamily = new ComboSimple<Select>
        //    {
        //        List = _bankFamilyService.GetSelectList(EnumSelectType.Empty),
        //        Selected = _mapper.Map<Select>(account.BankAgency.BankSubFamily.BankFamily)
        //    };

        //    accountDto.BankSubFamily = new ComboSimple<Select>
        //    {
        //        List = _bankSubFamilyService.GetSelectList(account.BankAgency.BankSubFamily.BankFamily.Id, EnumSelectType.Empty),
        //        Selected = _mapper.Map<Select>(account.BankAgency.BankSubFamily)
        //    };

        //    accountDto.BankAgency = new ComboSimple<Select>
        //    {
        //        List = _bankAgencyService.GetSelectList(account.BankAgency.BankSubFamily.Id,EnumSelectType.Empty),
        //        Selected = _mapper.Map<Select>(account.BankAgency)
        //    };
        
        //    accountDto.LinkedUsers = _mapper.Map<List<Select>>(account.UserAccounts.Select(x => x.User).ToList());
        //    return accountDto;

        //}

        public Select GetSelectById(int idAccount)
        {
            var account = _accountRepository.GetById(idAccount);
            return _mapper.Map<Select>(account);
        }

        public bool AskAccountOwner(AccountForDetail accountForDetail)
        {
            var userCaller = _userService.GetById(accountForDetail.User.Id);
            //recherche du owner de compte
            var userOwner = _userAccountService.GetUserOwner(accountForDetail.Number);

            //Envoi du mail au owner de compte
            _mailAskAccountOwnerService.SendAskAccountOwnerMail(userCaller, userOwner, accountForDetail.Number);

            return true;
        }

        public AccountForDetail Save(AccountForDetail accountForDetail)
        {
            var account = _mapper.Map<Account>(accountForDetail);
            CheckForSave(account, accountForDetail.User.Id);

            if (account.Id != 0)
            {
                _accountRepository.Update(account);
            }
            else
            {
                account = _accountRepository.Create(account);
            }

            return _mapper.Map<AccountForDetail>(account);
        }

        private void CheckForSave(Account account, int idUser)
        {
            List<BusinessExceptionMessage> businessExceptionMessages = new List<BusinessExceptionMessage>();
            //Recherche si numero de compte est utilisé par un autre user
            var users = _userAccountService.GetUsers(account.Number);
            if (users.Where(x=>x.Id!= idUser).Any())
                businessExceptionMessages.Add(_businessExceptionMessageService.Get(EnumBusinessException.BUS_ACC_ERR_000));

            ////Recherche si operation utilisée dans account statement file
            //if (_accountStatementCheckReferentialService.AsifHasOtf(otf.Id))
            //{
            //    businessExceptionMessages.Add(_businessExceptionMessageService.Get(EnumBusinessException.BUS_OTF_ERR_001));
            //}

            ////Recherche si operation utilisé dans account statement
            //if (_accountStatementCheckReferentialService.AsHasOtf(otf.Id))
            //{
            //    businessExceptionMessages.Add(_businessExceptionMessageService.Get(EnumBusinessException.BUS_OTF_ERR_002));
            //}

            ////Recherche si operation utilisé dans type operation
            //if (_userCheckReferentialService.HasOtf(otf.Id))
            //{
            //    businessExceptionMessages.Add(_businessExceptionMessageService.Get(EnumBusinessException.BUS_OTF_ERR_003));
            //}

            ////Recherche si operation utilisé dans User account
            //if (_userCheckReferentialService.HasOtf(otf.Id))
            //{
            //    businessExceptionMessages.Add(_businessExceptionMessageService.Get(EnumBusinessException.BUS_OTF_ERR_004));
            //}


            if (businessExceptionMessages.Count() > 0)
            {
                throw new BusinessException(businessExceptionMessages);
            }
        }
        //public void Update(AccountForDetail accountForDetailDto)
        //{
        //    //var account = _accountRepository.GetById(accountForDetailDto.Id);
        //    //account.IdBankAgency = accountForDetailDto.BankAgency.Id;
        //    //account.IdAccountType = accountForDetailDto.AccountType.Id;
        //    //account.Label = accountForDetailDto.Label;
        //    //account.Number = accountForDetailDto.Number;
        //    //account.StartAmount = accountForDetailDto.StartAmount;
        //    //account.AlertThreshold = accountForDetailDto.AlertThreshold;

        //    //Update(account);

        //}

        //public Account Create(int idUser, AccountForDetail accountForDetailDto)
        //{
        //    //var account = _accountRepository.GetByNumber(accountForDetailDto.Number);
        //    //if (account == null)
        //    //{
        //    //    account = new Account
        //    //    {
        //    //        IdBankAgency = accountForDetailDto.BankAgency.Id,
        //    //        IdAccountType = accountForDetailDto.AccountType.Id,
        //    //        Label = accountForDetailDto.Label,
        //    //        Number = accountForDetailDto.Number,
        //    //        StartAmount = accountForDetailDto.StartAmount,
        //    //        AlertThreshold = accountForDetailDto.AlertThreshold
        //    //    };
        //    //    account = Create(account);
        //    //}

        //    //var userAccount = new UserAccount
        //    //{
        //    //    IdAccount = account.Id,
        //    //    IdUser = idUser
        //    //};
        //    //_userAccountService.Create(userAccount);

        //    return null;

        //}

        //public void Delete(int idUser, int idAccount)
        //{
        //    var userAccount = _userAccountService.Get(idUser, idAccount);
        //    _userAccountService.Delete(userAccount);
        //}

        //public Account Create(Account account)
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
