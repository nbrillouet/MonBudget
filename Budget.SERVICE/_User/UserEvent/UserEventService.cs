using AutoMapper;
using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class UserEventService : IUserEventService
    {
        private readonly IMapper _mapper;
        
        public UserEventService(
            IMapper mapper
            )
        {
            _mapper = mapper;

        }

        public List<UserEventDto> GetByIdUser(int idUser)
        {
            return null;
        }
    }
}
