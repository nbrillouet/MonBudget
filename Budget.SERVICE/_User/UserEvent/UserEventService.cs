using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class UserEventService : IUserEventService
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        
        public UserEventService(
            IUserRepository userRepository,
            IMapper mapper
            )
        {
            _userRepository = userRepository;
            _mapper = mapper;

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
                    SubTitle = "Vos informations de compte sont incomplètes",
                    Link = $"/apps/referential/users/{idUser}/detail"
                });
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
