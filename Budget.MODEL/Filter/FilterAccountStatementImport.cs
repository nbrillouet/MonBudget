using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL
{
    public class FilterAccountStatementImport : Pagination
    {
        public int? idUser { get; set; }
        public int? idBank { get; set; }
    }
}
