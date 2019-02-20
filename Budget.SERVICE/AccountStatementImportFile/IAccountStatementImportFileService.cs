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
        PagedList1<AsifForTableDto> GetAsifTable(FilterAsifTableSelected filter);
        List<SelectDto> GetAccountSelectListByIdImport(int idImport);
        AccountStatementImportFile GetById(int IdAccountStatementImportFile);
        AccountStatementImportFile InitForImport();
        AsifGroupByAccounts GetListDto(int idImport);
        List<SelectDto> GetAsifStates(int idImport, int idAccount);
        Task<PagedList<AccountStatementImportFile>> GetAsync(FilterAccountStatementImportFile filter);
        Task<AsifDetailDto> GetForDetailByIdAsync(int id);
        string GetOperationLabelWork(string operationLabel);
        OperationDetail GetOperationDetail(AccountStatementImportFile accountStatementImportFile);

        bool IsSaveableInAccountStatement(int idImport);

        bool Update(AsifDetailDto asifDetailDto);
        void SaveWithTran(List<AccountStatementImportFile> accountStatementImportFiles);
        bool SaveInAccountStatement(int idImport);

        //List<AccountStatementImportFile> GetAccountStatementImportFileFull(int IdImport, int idAccount);
        //List<AccountStatementImportFile> GetAccountStatementImportFileComplete(int IdImport, int idAccount);
        //List<AccountStatementImportFile> GetAccountStatementImportFileMethodLess(int IdImport, int idAccount);
        //List<AccountStatementImportFile> GetAccountStatementImportFileOperationLess(int IdImport, int idAccount);
        //bool HasAccountStatementImportFileWihoutPlace(int IdImport, int idAccount);
        //string GetOperationWork(string operationLabel);
        //
        //int Save(AccountStatementImportFile accountStatementImportFile);
        //List<string> GetDistinctAccountNumber(int idImport);


    }
}
