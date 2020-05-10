using Budget.MODEL;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Budget.SERVICE
{
    public interface IBanquePopulaireImportFileService
    {
        //List<String> GetAccountNumbers(StreamReader reader);
        Boolean isBanquePopulaireFile(string[] header);
        List<AccountStatementImportFile> ImportFile(StreamReader reader, AccountStatementImport accountStatementImport, User user);
    }
}
