using Budget.MODEL;
using Budget.MODEL.Database;
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
        Task<PagedList<AccountStatement>> GetAsync(FilterAccountStatement filter);
        PagedList1<AccountStatement> Get(FilterAccountStatement filter);

        Boolean Save(List<AccountStatement> accountStatements);
        //double GetSum(DateTime startDate, DateTime endDate, int idMovement, int idAccount);


    }
}
