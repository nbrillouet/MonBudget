using Budget.MODEL;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Budget.SERVICE
{
    public interface ICreditAgricoleImportFileService
    {
        StreamReader FormatFile(StreamReader reader, User user);
        List<AccountStatementImportFile> ImportFile(StreamReader reader, AccountStatementImport accountStatementImport, User user);
    }

}
