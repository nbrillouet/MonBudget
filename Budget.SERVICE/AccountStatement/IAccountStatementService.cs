using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IAccountStatementService
    {
        string GetOperationWork(string operationLabel);
        List<AccountStatement> Save(List<AccountStatement> accountStatements);
        AccountStatement InitForImport();
        List<AccountStatement> GetAccountStatementsFull(List<AccountStatement> accountStatements, int idAccount);
        List<AccountStatement> GetAccountStatementsComplete(List<AccountStatement> accountStatements, int idAccount);
        List<AccountStatement> GetAccountStatementsMethodLess(List<AccountStatement> accountStatements, int idAccount);
        List<AccountStatement> GetAccountStatementsOperationLess(List<AccountStatement> accountStatements, int idAccount);

        double GetSum(DateTime startDate, DateTime endDate, int idMovement, int idAccount);

    }
}
