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
        AsDetailDto GetForDetailById(int id);
        PagedList<AsGridDto> Get(FilterAccountStatement filter);
        SoldeDto GetSolde(FilterAccountStatement filter);
        //Task<PagedList<AccountStatement>> GetAsync(FilterAccountStatement filter);
        List<AsGridDto> GetByPlanPosteReferences(List<PlanPosteReference> planPosteReferences,MonthYear monthYear);
        Boolean Save(List<AccountStatement> accountStatements);

        SoldeDto GetSolde(int idAccount, DateTime dateMin, DateTime dateMax, bool isWithITransfer);


    }
}
