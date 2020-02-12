using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Budget.SERVICE
{
    public interface IAccountStatementService
    {
        PagedList<AsForTableDto> GetTable(FilterAsTableSelected filter);
        //List<AsForTableDto> GetAsNotInPlan(FilterAsNotInPlan filter);
        AsDetailDto GetAsDetail(FilterAsDetail filter);
        SoldeDto GetSolde(FilterAsTableSelected filter);
        List<InternalTransferDto> GetAsInternalTransfer(FilterAsTableSelected filter);
        List<AsForTableDto> GetByPlanPosteReferences(List<PlanPosteReference> planPosteReferences,MonthYear monthYear);
        Boolean Save(List<AccountStatement> accountStatements);
        AccountStatement Save(AccountStatement accountStatement);
        bool Update(AsDetailDto asDetailDto);

    }
}
