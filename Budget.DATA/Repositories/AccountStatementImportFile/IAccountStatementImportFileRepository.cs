using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IAccountStatementImportFileRepository : IBaseRepository<AccountStatementImportFile>
    {
        void Save(List<AccountStatementImportFile> accountStatementImportFiles);
        int Save(AccountStatementImportFile accountStatementImportFile);
        List<string> GetDistinctAccountNumber(int idImport);
        //List<AccountStatementImportFile> GetById(int IdImport, int idAccount);
        List<AccountStatementImportFile> GetAccountStatementImportFileFull(int idImport, int idAccount);
        List<AccountStatementImportFile> GetAccountStatementImportFileComplete(int idImport, int idAccount);
        List<AccountStatementImportFile> GetAccountStatementImportFileMethodLess(int idImport, int idAccount);
        List<AccountStatementImportFile> GetAccountStatementImportFileOperationLess(int idImport, int idAccount);
        bool HasAccountStatementImportFileWihoutPlace(int IdImport, int idAccount);

    }
}
