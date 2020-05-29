using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System.Collections.Generic;
using System.Linq;

namespace Budget.SERVICE
{
    public class UserAccountService : IUserAccountService
    {
        private readonly IUserAccountRepository _userAccountRepository;
        private readonly IMapper _mapper;


        public UserAccountService(
            IUserAccountRepository userAccountRepository,
            IMapper mapper
            )
        {
            _userAccountRepository = userAccountRepository;
            _mapper = mapper;

        }

        public UserAccount Get(int idUser, int idAccount)
        {
            return _userAccountRepository.Get(idUser, idAccount);
        }

        public List<User> GetUsers(string accountNumber)
        {
            return _userAccountRepository.GetUsers(accountNumber);
        }

        public User GetUserOwner(string accountNumber)
        {
            return _userAccountRepository.GetUserOwner(accountNumber);
        }

        public List<BankAgencyWithAccountsDto> GetBankAgencies(int idUser)
        {
            var bankAgencies = _userAccountRepository.GetBankAgencies(idUser);

            var bankAgencyAccountsDtos = _mapper.Map<List<BankAgencyWithAccountsDto>>(bankAgencies);
            foreach (var bankAgency in bankAgencyAccountsDtos)
            {
                //Find linked users
                foreach (var account in bankAgency.Accounts)
                {
                    var acc = bankAgencies.SelectMany(x => x.Accounts).Distinct().Where(u => u.Id == account.Id).FirstOrDefault();
                    var idx = acc.UserAccounts.FindIndex(x => x.IdUser == idUser);
                    acc.UserAccounts.RemoveAt(idx);
                    account.LinkedUsers = _mapper.Map<List<Select>>(acc.UserAccounts.Select(x => x.User).ToList());
                }
            }
            return bankAgencyAccountsDtos;
        }

        public List<SelectGroupDto> GetBankSubFamilySelectGroup(int idUserGroup)
        {
            //Recuperation des Agences + comptes associés
            var bankAgencies = _userAccountRepository.GetBankAgenciesByIdUserGroup(idUserGroup);

            //Recuperation des banksubfamily
            var bankSubFamilies = bankAgencies.Select(x => x.BankSubFamily).ToList();
            List<SelectGroupDto> results = new List<SelectGroupDto>();

            //scan des baksubFamilies et creation des selectGroupDto
            foreach (var bankSubFamily in bankSubFamilies)
            {
                SelectGroupDto SelectGroupDto = new SelectGroupDto
                {
                    Id = bankSubFamily.Id,
                    Label = bankSubFamily.Label,
                    Selects = _mapper.Map<List<Select>>(bankAgencies.Where(x => x.BankSubFamily.Id == bankSubFamily.Id).Select(x => x.Accounts).ToList()[0])
                };
                results.Add(SelectGroupDto);
            }

            return results;
        }

        public List<Select> GetBankFamily(int idUser)
        {
            var results = _userAccountRepository.GetBankFamily(idUser);
            var groupResult = results
                    .GroupBy(x => new { x.Id, x.Label })
                    .Select(g => new Select { Id = g.Key.Id, Label = g.Key.Label })
                    .ToList();
            return _mapper.Map<List<Select>>(groupResult);
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
