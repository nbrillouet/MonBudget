using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IUserAccountService
    {
        UserAccount Get(int idUser, int idAccount);
        UserAccount Create(UserAccount userAccount);
        void Update(UserAccount userAccount);
        void Delete(UserAccount userAccount);
    }
}
