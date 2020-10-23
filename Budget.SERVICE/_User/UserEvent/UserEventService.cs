using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class UserEventService : IUserEventService
    {
        private readonly IUserAccountService _userAccountService;
        private readonly IUserRepository _userRepository;
        private readonly Lazy<IAccountStatementService> _accountStatementService;
        //private readonly  _accountStatementService;
        private readonly IMapper _mapper;
        //private readonly IServiceProvider _services;

        public UserEventService(
            IUserAccountService userAccountService,
            IUserRepository userRepository,
            Lazy<IAccountStatementService> accountStatementService,
            //IServiceProvider services,
            IMapper mapper
            )
        {
            _userAccountService = userAccountService;
            _userRepository = userRepository;
            _mapper = mapper;
            _accountStatementService = accountStatementService;
            //_services = services;

        }

        public List<UserEventDto> GetByIdUser(int idUser)
        {
            List<UserEventDto> UserEvents = new List<UserEventDto>();
            //Referentiel
            //information utilisateur: recherche si toutes les informations sont completes
            if (!UserHasCompleteInformation(idUser))
            {
                UserEvents.Add (new UserEventDto
                {
                    Category = EnumUserCategory.Referential.ToString(),
                    Title = "Informations utilisateur incomplète",
                    SubTitle = "Vos informations utilisteurs sont incomplètes",
                    Link = $"/apps/referential/users/{idUser}/detail"
                });
            }
            if(_userAccountService.GetAccounts(idUser).Count==0)
            {
                UserEvents.Add(new UserEventDto { Category = EnumUserCategory.Referential.ToString(), Title = "Aucun compte affecté", SubTitle = "Vous n'avez aucun compte disponible", Link = $"/apps/referential/accounts/new/detail" });
            }

            var user = _userRepository.GetById(idUser);
            var asIsolatedCount = _accountStatementService.Value.GetAsInternalTransferOrphan(user.IdUserGroup).Count;
            if (asIsolatedCount > 0)
            {
                UserEvents.Add(new UserEventDto { Category = EnumUserCategory.Referential.ToString(), Title = "Virement(s) interne(s) isolé(s)", SubTitle = $"{asIsolatedCount} virement(s) interne(s) isolé(s).", Link = $"/apps/referential/accounts/new/detail" });
            }

            return UserEvents;
        }

        private bool UserHasCompleteInformation(int idUser)
        {
            var user = _userRepository.GetById(idUser);
            if (string.IsNullOrEmpty(user.FirstName))
                return false;
            if (string.IsNullOrEmpty(user.LastName))
                return false;
            if (string.IsNullOrEmpty(user.Gender))
                return false;
            if (!user.DateOfBirth.HasValue)
                return false;
            if (user.IdGMapAddress == 1)
                return false;

            return true;
        }
    }
}
