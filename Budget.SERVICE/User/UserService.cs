using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
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

        public Task<User> GetByIdAsync(int id)
        {
            return _userRepository.GetByIdAsync(id);
        }

        public Task<PagedList<User>> GetUsers(Pagination userParams)
        {
            return _userRepository.GetUsers(userParams);
        }

        public Task<List<User>> GetAllAsync()
        {
            return _userRepository.GetAllAsync();
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
            var results = _mapper.Map<List<BankAccountsDto>>(banks);
            return results;
        }


    }

}
