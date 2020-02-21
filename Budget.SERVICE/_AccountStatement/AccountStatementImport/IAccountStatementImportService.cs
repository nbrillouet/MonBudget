using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace Budget.SERVICE
{
    public interface IAccountStatementImportService
    {
        List<BankAgency> GetDistinctBankAgencies(int idUser);
        PagedList<AsiForTableDto> GetAsiTable(FilterAsiTableSelected filter);
        Task<AccountStatementImport> GetByIdAsync(int idImport);
        AsiForTableDto GetByIdForData(int idImport);
        //AccountStatementImport GetById(int idImport);
        AsiForListDto GetForDetailById(int idImport);
        AccountStatementImport ImportFile(StreamReader reader, User user);
        AccountStatementImport SaveWithTran(AccountStatementImport accountStatementImport);
    }
}
