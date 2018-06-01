using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Filter
{
    public class FilterAccountStatementImportFile : Pagination
    {
        public int? IdImport { get; set; }
        public int? IdAccount { get; set; }
        public int? IdAsifState { get; set; }
    }
}
