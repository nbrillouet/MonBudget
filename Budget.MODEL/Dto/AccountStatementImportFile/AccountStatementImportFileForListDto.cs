using Budget.MODEL.Database;
using System.Collections.Generic;

namespace Budget.MODEL.Dto
{
    public class AsifGroup
    {
        public List<AccountStatementImportFile> AccountStatementsFull { get; set; }
        public List<AccountStatementImportFile> AccountStatementsComplete { get; set; }
        public List<AccountStatementImportFile> AccountStatementsMethodLess { get; set; }
        public List<AccountStatementImportFile> AccountStatementsOperationLess { get; set; }
    }

    public class AsifGroupByAccount
    {
        public Account Account { get; set; }
        public AsifGroup AsifGroup { get; set; }
        public AsifGroupByAccount()
        {
            AsifGroup = new AsifGroup();
        }
    }

    public class AsifForListDto
    {
        public List<AsifGroupByAccount> AsifGroupByAccountList { get; set; }
        public int IdImport { get; set; }

        public AsifForListDto()
        {
            AsifGroupByAccountList = new List<AsifGroupByAccount>();
        }
    }

}
