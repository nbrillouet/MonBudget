using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Budget.SERVICE
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        

        public UserService(IUserRepository userRepository,IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public UserForDetailDto GetForDetailById(int id)
        {
            var user =  _userRepository.GetForDetailById(id);

            var banks = GetBanks(id);

            var userForDetailDto = _mapper.Map<UserForDetailDto>(user);
            userForDetailDto.Banks = banks;

            return userForDetailDto;
        }

        public async Task<User> GetByIdAsync(int id)
        {
            var user = await _userRepository.GetByIdAsync(id);

            return user;
        }

        public Task<PagedList<User>> GetUsers(Pagination userParams)
        {
            return _userRepository.GetUsers(userParams);
        }

        public Task<List<User>> GetAllAsync()
        {
            return _userRepository.GetAllAsync();
        }

        public List<User> GetAll()
        {
            return _userRepository.GetAll();
        }

        public void Update(UserForDetailDto userForDetail)
        {
            User user = _userRepository.GetById(userForDetail.Id);
            user.FirstName = userForDetail.FirstName;
            user.LastName = userForDetail.LastName;
            user.UserName = userForDetail.UserName;
            user.IdGMapAddress = userForDetail.IdGMapAddress;
            user.DateOfBirth = userForDetail.DateOfBirth;
            //_mapper.Map<User>(userForDetail);
            Update(user);
           //_userRepository.Update(user);
        }

        public void Update(User user)
        {
            _userRepository.Update(user);
        }

        public List<BankAccountsDto> GetBanks(int idUser)
        {
            var banks = _userRepository.GetBanks(idUser);

            var bankAccountsDtos = _mapper.Map<List<BankAccountsDto>>(banks);
            foreach (var bank in bankAccountsDtos)
            {
                foreach (var account in bank.Accounts)
                {
                    var acc = banks.SelectMany(x => x.Accounts).Distinct().Where(u => u.Id == account.Id).FirstOrDefault();
                    var idx = acc.UserAccounts.FindIndex(x => x.IdUser == idUser);
                    acc.UserAccounts.RemoveAt(idx);
                    account.LinkedUsers = _mapper.Map<List<SelectDto>>(acc.UserAccounts.Select(x => x.User).ToList());
                }
                    
            }
            return bankAccountsDtos;
        }


    }

}
