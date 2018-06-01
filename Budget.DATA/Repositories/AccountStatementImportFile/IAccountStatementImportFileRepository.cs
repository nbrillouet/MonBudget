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
    public interface IAccountStatementImportFileRepository : IBaseRepository<AccountStatementImportFile>
    {
        void Save(List<AccountStatementImportFile> accountStatementImportFiles);
        int Save(AccountStatementImportFile accountStatementImportFile);
        List<string> GetDistinctAccountNumber(int idImport);
        List<AsifState> GetAsifStates(int idImport, int idAccount);
        //List<AccountStatementImportFile> GetById(int IdImport, int idAccount);
        List<AccountStatementImportFile> GetAsifFull(int idImport, int idAccount);
        List<AccountStatementImportFile> GetAsifComplete(int idImport, int idAccount);
        List<AccountStatementImportFile> GetAsifMethodLess(int idImport, int idAccount);
        List<AccountStatementImportFile> GetAsifOperationLess(int idImport, int idAccount);
        bool HasAccountStatementImportFileWihoutPlace(int IdImport, int idAccount);
        Task<PagedList<AccountStatementImportFile>> GetAsync(FilterAccountStatementImportFile filter);

    }
}
