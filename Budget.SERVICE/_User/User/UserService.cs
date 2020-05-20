using AutoMapper;
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
        private readonly IBusinessExceptionMessageService _businessExceptionMessageService;
        //private readonly ReferentialService _referentialService;
        private readonly IMapper _mapper;


        public UserService(
            IUserRepository userRepository,
            IMapper mapper,
            IUserAccountService userAccountService,
            IBusinessExceptionMessageService businessExceptionMessageService
            //ReferentialService referentialService
            )
        {
            _userRepository = userRepository;
            _userAccountService = userAccountService;
            _mapper = mapper;
            _businessExceptionMessageService = businessExceptionMessageService;
            //_referentialService = referentialService;
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

        public UserForGroupDto GetForUserGroup(int id)
        {
            var user = _userRepository.GetById(id);

            return _mapper.Map<UserForGroupDto>(user);
        }

        public async Task<User> GetByIdAsync(int id)
        {
            var user = await _userRepository.GetByIdAsync(id);

            return user;
        }

        public User GetLast()
        {
            return _userRepository.GetLast();
        }
        
        public User ActivateAccount(string activationCode)
        {
            var user = _userRepository.GetByActivationCode(activationCode);
            CheckForActivateAccount(user);

            // Mettre à jour l'activation Code à ACTIVATED
            user.ActivationCode = "ACTIVATED";
            // Mettre à jour le flag mail à true
            user.IsMailConfirmed = true;
            // Creation d'un nouveau user group
            user.IdUserGroup = _userRepository.GetNewUserGroup();

            user = _userRepository.Update(user);

            //Ajout du referentiel pour l'utilisateur
            //_referentialService.OperationService.InitUser(user);

            return user;
        }

        public User GetById(int id)
        {
            return _userRepository.GetById(id);
        }

        public User GetByMail(string mail)
        {
            return _userRepository.GetByMail(mail);
        }

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

        private void CheckForActivateAccount(User user)
        {
            List<BusinessExceptionMessage> businessExceptionMessages = new List<BusinessExceptionMessage>();
            //Recherche si utilisateur est trouvé par son code activation
            if (user==null)
                businessExceptionMessages.Add(_businessExceptionMessageService.Get(EnumBusinessException.BUS_USER_ERR_000));

            if (businessExceptionMessages.Count() > 0)
            {
                throw new BusinessException(businessExceptionMessages);
            }

        }



    }

}
