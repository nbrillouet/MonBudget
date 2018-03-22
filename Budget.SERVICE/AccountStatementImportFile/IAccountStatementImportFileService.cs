using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

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
        AsifForListDto GetListDto(int idImport);
        //List<AccountStatementImportFile> GetAccountStatementImportFileFull(int IdImport, int idAccount);
        //List<AccountStatementImportFile> GetAccountStatementImportFileComplete(int IdImport, int idAccount);
        //List<AccountStatementImportFile> GetAccountStatementImportFileMethodLess(int IdImport, int idAccount);
        //List<AccountStatementImportFile> GetAccountStatementImportFileOperationLess(int IdImport, int idAccount);
        bool HasAccountStatementImportFileWihoutPlace(int IdImport, int idAccount);


    }
}
