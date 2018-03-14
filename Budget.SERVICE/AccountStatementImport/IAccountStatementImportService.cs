using Budget.MODEL;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace Budget.SERVICE
{
    public interface IAccountStatementImportService
    {
        Task<PagedList<AccountStatementImport>> GetAsync(FilterAccountStatementImport filter);
        Task<List<Bank>> GetDistinctBankAsync(int idUser);


        AccountStatementImport ImportFile(StreamReader reader, User user);
        int Save(AccountStatementImport accountStatementImport);
    }
}
