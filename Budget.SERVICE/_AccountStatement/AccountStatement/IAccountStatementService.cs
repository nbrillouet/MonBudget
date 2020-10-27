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
        PagedList<AsForTable> GetTable(FilterAsTableSelected filter);
        PagedList<AsForTable> GetPlanNotAsTable(FilterPlanNotAsTableGroupSelected filter);
        int GetPlanNotAsCount(FilterFixedPlanNotAsTableSelected filterFixed);
        AsForDetail GetForDetail(int idAs);
        //AsDetailDto GetAsDetail(FilterAsDetail filter);
        Solde GetSolde(FilterAsTableSelected filter);
        List<InternalTransferDto> GetAsInternalTransfer(FilterAsTableSelected filter);
        List<AsForTable> GetAsInternalTransferOrphan(int idUserGroup);
        List<AsForTable> GetByPlanPosteReferences(List<PlanPosteReference> planPosteReferences,MonthYear monthYear);
        AsForTable GetLastAccountStatement(int idAccount);
        bool Save(List<AccountStatement> accountStatements);
        AccountStatement Save(AccountStatement accountStatement);
        bool Update(AsForDetail asForDetail);

    }
}
