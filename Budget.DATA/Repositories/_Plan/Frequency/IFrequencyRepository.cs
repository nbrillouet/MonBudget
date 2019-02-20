using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IFrequencyRepository : IBaseRepository<Frequency>
    {
        List<Frequency> GetAllByOrder();
    }


}
