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
        List<BankAgency> GetDistinctBankAgencies(int idUser);
        PagedList<AccountStatementImport> GetAsiTable(FilterAsiTableSelected filter);

        AccountStatementImport GetByIdForDetail(int id);
        
        List<AccountStatement> ImportFile();
        new int Create(AccountStatementImport entity);
        AccountStatementImport CreateWithTran(AccountStatementImport entity);

    }
}
