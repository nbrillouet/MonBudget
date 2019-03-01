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
        AccountStatement GetForDetailById(int id);
        //Task<PagedList<AccountStatement>> GetAsync(FilterAccountStatement filter);
        PagedList<AccountStatement> Get(FilterAccountStatement filter);

        List<AccountStatement> GetByDatePlanPosteReferenceList(List<PlanPosteReference> planPosteReferences, DateTime dateMin, DateTime dateMax);

        Boolean Save(List<AccountStatement> accountStatements);
        SoldeDto GetSolde(int idAccount, DateTime dateMin, DateTime dateMax, bool isWithITransfer);


    }
}
