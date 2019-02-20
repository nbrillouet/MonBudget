using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Budget.DATA.Repositories
{
    public interface IAccountStatementImportRepository : IBaseRepository<AccountStatementImport>
    {
        List<Bank> GetDistinctBank(int idUser);
        PagedList1<AccountStatementImport> GetAsiTable(FilterAsiTableSelected filter);

        AccountStatementImport GetByIdForDetail(int id);
        Task<PagedList<AccountStatementImport>> GetAsync(FilterAccountStatementImport filter);
        Task<List<Bank>> GetDistinctBankAsync(int idUser);
        
        List<AccountStatement> ImportFile();
        new int Create(AccountStatementImport entity);
        AccountStatementImport CreateWithTran(AccountStatementImport entity);

    }
}
