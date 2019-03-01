using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class OperationTransverseAsifRepository : BaseRepository<OperationTransverseAsif>, IOperationTransverseAsifRepository
    {
        public OperationTransverseAsifRepository(BudgetContext context) : base(context)
        {
        }

        public List<OperationTransverse> GetOperationTransverseList(int IdAccountStatementFile)
        {
            var results = Context.OperationTransverseAsif
                .Where(x => x.IdAccountStatementImportFile == IdAccountStatementFile)
                .Select(x=>x.OperationTransverse)
                .ToList();

            return results;
        }

    }


}
