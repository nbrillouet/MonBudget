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
        PagedList<AccountStatementImportFile> GetAsifTable(FilterAsifTableSelected filter);
        AccountStatementImportFile GetAsifDetail(int id);
        bool IsAccountStatementSaveable(int idImport);

        int Save(AccountStatementImportFile accountStatementImportFile);
        AccountStatementImportFile UpdateAsifState(AccountStatementImportFile item);
        void UpdateAsifStates(AccountStatementImportFile asif);
        bool SaveWithTran(List<AccountStatementImportFile> accountStatementImportFiles);



        List<string> GetDistinctAccountNumber(int idImport);
        List<SelectDto> GetAsifStates(int idImport, int idAccount);
        List<AccountStatementImportFile> GetByIdImport(int IdImport);

        Task<AccountStatementImportFile> GetForDetailByIdAsync(int id);
        List<AccountStatementImportFile> GetAsifsWithoutDuplicate(int idImport);

        bool HasOperation(int idOperation);

    }
}
