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
    public interface IAccountStatementService
    {
        AsDetailDto GetForDetailById(int id);
        PagedList1<AsGridDto> Get(FilterAccountStatement filter);
        SoldeDto GetSolde(FilterAccountStatement filter);
        Task<PagedList<AccountStatement>> GetAsync(FilterAccountStatement filter);
        
        Boolean Save(List<AccountStatement> accountStatements);

        SoldeDto GetSolde(int idAccount, DateTime dateMin, DateTime dateMax, bool isWithITransfer);
        //string GetOperationWork(string operationLabel);
        //AccountStatement InitForImport();
        //List<AccountStatement> GetAccountStatementsFull(List<AccountStatement> accountStatements, int idAccount);
        //List<AccountStatement> GetAccountStatementsComplete(List<AccountStatement> accountStatements, int idAccount);
        //List<AccountStatement> GetAccountStatementsMethodLess(List<AccountStatement> accountStatements, int idAccount);
        //List<AccountStatement> GetAccountStatementsOperationLess(List<AccountStatement> accountStatements, int idAccount);

        //double GetSum(DateTime startDate, DateTime endDate, int idMovement, int idAccount);

    }
}
