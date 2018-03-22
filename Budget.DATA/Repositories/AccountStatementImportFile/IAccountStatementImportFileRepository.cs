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
        List<AccountStatementImportFile> GetAsifFull(int idImport, int idAccount);
        List<AccountStatementImportFile> GetAsifComplete(int idImport, int idAccount);
        List<AccountStatementImportFile> GetAsifMethodLess(int idImport, int idAccount);
        List<AccountStatementImportFile> GetAsifOperationLess(int idImport, int idAccount);
        bool HasAccountStatementImportFileWihoutPlace(int IdImport, int idAccount);

    }
}
