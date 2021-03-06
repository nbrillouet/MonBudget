﻿using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
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
        private readonly IUserAccountService _userAccountService;
        private readonly IMapper _mapper;
        

        public UserService(
            IUserRepository userRepository,
            IMapper mapper,
            IUserAccountService userAccountService
            )
        {
            _userRepository = userRepository;
            _userAccountService = userAccountService;
            _mapper = mapper;
        }

        public PagedList<UserForTableDto> GetUserTable(FilterUserTableSelected filter)
        {
            var pagedList = _userRepository.GetUserTable(filter);

            var result = new PagedList<UserForTableDto>(_mapper.Map<List<UserForTableDto>>(pagedList.Datas), pagedList.Pagination);

            return result;
        }

        public UserForDetailDto GetForDetailById(int id)
        {
            var user =  _userRepository.GetForDetailById(id);

            var bankAgencies = _userAccountService.GetBankAgencies(id);

            var userForDetailDto = _mapper.Map<UserForDetailDto>(user);
            userForDetailDto.BankAgencies = bankAgencies;

            return userForDetailDto;
        }

        public async Task<User> GetByIdAsync(int id)
        {
            var user = await _userRepository.GetByIdAsync(id);

            return user;
        }

        //public Task<PagedList<User>> GetUsers(Pagination userParams)
        //{
        //    return _userRepository.GetUsers(userParams);
        //}

        //public Task<List<User>> GetAllAsync()
        //{
        //    return _userRepository.GetAllAsync();
        //}

        public List<User> GetAll()
        {
            return _userRepository.GetAll();
        }

        public List<User> GetByIdUserGroup(int idUserGroup)
        {
            return _userRepository.GetByIdUserGroup(idUserGroup);
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

        


    }

}
