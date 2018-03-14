using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Budget.API.Dtos
{
    public class AccountStatementImportForListDto
    {

        public int Id { get; set; }
        public int IdUser { get; set; }
        public User User { get; set; }
        public int IdBank { get; set; }
        public Bank Bank { get; set; }
        public string FileImport { get; set; }
        public DateTime DateImport { get; set; }

    }
}
