using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IPlanPosteRepository : IBaseRepository<PlanPoste>
    {
        List<PlanPoste> Get(int idPlan, int idPoste);
        new PlanPoste GetById(int id);
    }    
}
