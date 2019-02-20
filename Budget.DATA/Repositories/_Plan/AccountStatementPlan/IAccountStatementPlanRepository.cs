using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IAccountStatementPlanRepository : IBaseRepository<AccountStatementPlan>
    {
        List<AccountStatementPlan> GetByIdPlan(int IdPlan);
        List<AccountStatementPlan> GetPlansByIdAccountStatement(int IdAccountStatement, int year);

    }

}
