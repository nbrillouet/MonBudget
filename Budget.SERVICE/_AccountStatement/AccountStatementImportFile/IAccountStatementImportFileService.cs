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
        PagedList<AsifForTable> GetAsifTable(FilterAsifTableSelected filter);
        AsifForDetail GetForDetail(int idAs);
        //AsifDetailDto GetAsifDetail(FilterAsifDetail filter);
        List<Select> GetAccountSelectListByIdImport(int idImport);
        //AccountStatementImportFile GetById(int IdAccountStatementImportFile);
        AccountStatementImportFile InitForImport(int idUserGroup);
        AsifGroupByAccounts GetListDto(int idImport);
        List<Select> GetAsifStates(int idImport, int idAccount);
        //Task<AsifDetailDto> GetForDetailByIdAsync(int id);
        string GetOperationLabelWork(string operationLabel);
        OperationDetail GetOperationDetail(int idUserGroup, AccountStatementImportFile accountStatementImportFile);
        bool IsSaveableInAccountStatement(int idImport);


        bool Update(AsifForDetail asifForDetail);
        void SaveWithTran(List<AccountStatementImportFile> accountStatementImportFiles);
        bool SaveInAccountStatement(int idImport);
        void DeleteByIdImport(int idImport);



    }
}
