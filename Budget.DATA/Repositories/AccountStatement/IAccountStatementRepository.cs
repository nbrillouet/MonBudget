using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Budget.DATA.Repositories
{
    public interface IAccountStatementRepository : IBaseRepository<AccountStatement>
    {
        PagedList<AccountStatement> GetAsTable(FilterAsTableSelected filter);
        AccountStatement GetAsDetail(int id);

        List<AccountStatement> GetByDatePlanPosteReferenceList(List<PlanPosteReference> planPosteReferences, DateTime dateMin, DateTime dateMax);

        Boolean Save(List<AccountStatement> accountStatements);
        SoldeDto GetSolde(int idAccount, DateTime dateMin, DateTime dateMax, bool isWithITransfer);


    }
}
