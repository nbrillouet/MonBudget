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
    public interface IAccountStatementImportFileService
    {
        string GetOperationWork(string operationLabel);
        void Save(List<AccountStatementImportFile> accountStatementImportFiles);
        int Save(AccountStatementImportFile accountStatementImportFile);
        AccountStatementImportFile InitForImport();
        AccountStatementImportFile GetById(int IdAccountStatementImportFile);
        List<string> GetDistinctAccountNumber(int idImport);
        AsifGroupByAccounts GetListDto(int idImport);
        List<AsifState> GetAsifStates(int idImport, int idAccount);
        //List<AccountStatementImportFile> GetAccountStatementImportFileFull(int IdImport, int idAccount);
        //List<AccountStatementImportFile> GetAccountStatementImportFileComplete(int IdImport, int idAccount);
        //List<AccountStatementImportFile> GetAccountStatementImportFileMethodLess(int IdImport, int idAccount);
        //List<AccountStatementImportFile> GetAccountStatementImportFileOperationLess(int IdImport, int idAccount);
        bool HasAccountStatementImportFileWihoutPlace(int IdImport, int idAccount);
        Task<PagedList<AccountStatementImportFile>> GetAsync(FilterAccountStatementImportFile filter);
        


    }
}
