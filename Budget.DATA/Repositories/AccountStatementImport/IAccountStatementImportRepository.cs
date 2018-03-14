using Budget.MODEL;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Budget.DATA.Repositories
{
    public interface IAccountStatementImportRepository : IBaseRepository<AccountStatementImport>
    {
        Task<PagedList<AccountStatementImport>> GetAsync(FilterAccountStatementImport filter);
        Task<List<Bank>> GetDistinctBankAsync(int idUser);
        List<AccountStatement> ImportFile();
        new int Create(AccountStatementImport entity);

    }
}
