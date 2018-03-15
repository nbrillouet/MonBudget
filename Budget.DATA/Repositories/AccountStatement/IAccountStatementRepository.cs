using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IAccountStatementRepository : IBaseRepository<AccountStatement>
    {
        List<AccountStatement> Save(List<AccountStatement> accountStatementImportFiles);
        double GetSum(DateTime startDate, DateTime endDate, int idMovement, int idAccount);


    }
}
