using Budget.MODEL.Database;
using Budget.MODEL.Filter;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class AccountStatementPlanRepository : BaseRepository<AccountStatementPlan>, IAccountStatementPlanRepository
    {
        public AccountStatementPlanRepository(BudgetContext context) : base(context)
        {

        }

        public List<AccountStatementPlan> GetByIdPlan(int IdPlan)
        {
            var accountStatementPlans = Context.AccountStatementPlan
                .Where(x => x.IdPlan == IdPlan)
                .ToList();

            return accountStatementPlans;
        }

        public List<AccountStatementPlan> GetPlansByIdAccountStatement(int IdAccountStatement, int year)
        {
            var accountStatementPlans = Context.AccountStatementPlan
                .Where(x => x.IdAccountStatement == IdAccountStatement
                    && x.Plan.Year == year)
                .Include(x => x.Plan)
                .ToList();

            return accountStatementPlans;
        }

        public List<AccountStatement> GetAsNotInPlan(FilterAsNotInPlan filter)
        {
            var accountStatements = Context.AccountStatement
                .Include(x => x.Operation)
                .Include(x => x.OperationMethod)
                .Include(x => x.OperationType)
                .Include(x => x.OperationType.OperationTypeFamily)
                .AsQueryable();

            accountStatements = accountStatements.Where(x => x.DateIntegration.Value.Year == filter.Year);
            accountStatements = accountStatements.Where(x => x.OperationTypeFamily.Id != filter.IdInternalTransfert);
            accountStatements = accountStatements.Where(x => filter.Accounts.Contains(x.IdAccount));
            accountStatements = accountStatements.Where(x => !filter.AsInPlan.Contains(x.Id));
            accountStatements = accountStatements
                .OrderBy(x => x.OperationMethod.Label)
                .ThenBy(x => x.OperationTypeFamily.Label)
                .ThenBy(x => x.OperationType.Label);
            return accountStatements.ToList();
        }

    }

}
