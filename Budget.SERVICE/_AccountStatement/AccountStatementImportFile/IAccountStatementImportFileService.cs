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
        PagedList<AsifForTableDto> GetAsifTable(FilterAsifTableSelected filter);
        AsifDetailDto GetAsifDetail(int idAsif,int idUserGroup);
        List<SelectDto> GetAccountSelectListByIdImport(int idImport);
        AccountStatementImportFile GetById(int IdAccountStatementImportFile);
        AccountStatementImportFile InitForImport(int idUserGroup);
        AsifGroupByAccounts GetListDto(int idImport);
        List<SelectDto> GetAsifStates(int idImport, int idAccount);
        Task<AsifDetailDto> GetForDetailByIdAsync(int id);
        string GetOperationLabelWork(string operationLabel);
        OperationDetail GetOperationDetail(int idUserGroup, AccountStatementImportFile accountStatementImportFile);
        bool IsSaveableInAccountStatement(int idImport);


        bool Update(AsifDetailDto asifDetailDto);
        void SaveWithTran(List<AccountStatementImportFile> accountStatementImportFiles);
        bool SaveInAccountStatement(int idImport);



    }
}
