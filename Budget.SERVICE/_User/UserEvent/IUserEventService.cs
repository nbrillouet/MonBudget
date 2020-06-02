using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IUserEventService 
    {
        List<UserEventDto> GetByIdUser(int idUser);
    }
}
