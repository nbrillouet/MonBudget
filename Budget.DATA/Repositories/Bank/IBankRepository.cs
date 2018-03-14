using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IBankRepository : IBaseRepository<Bank>
    {
        //Bank GetById(int idBank);
        //List<Bank> GetAll();
        List<GenericList> GetGenericList();
        List<Bank> GetAllWithNoUnknown();
    }
}
