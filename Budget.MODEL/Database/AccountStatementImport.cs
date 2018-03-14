using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("ACCOUNT_STATEMENT_IMPORT")]
    public class AccountStatementImport
    {
        [Column("ID")]
        public int Id { get; set; }
        [Column("ID_USER")]
        public int IdUser { get; set; }
        [ForeignKey("IdUser")]
        public User User { get; set; }

        [Column("ID_BANK")]
        public int IdBank { get; set; }

        [ForeignKey("IdBank")]
        public Bank Bank { get; set; }

        [Column("FILE_IMPORT")]
        public string FileImport { get; set; }

        [Column("DATE_IMPORT")]
        public DateTime DateImport { get; set; }

        [NotMapped]
        public StreamReader File { get; set; }

        //public virtual List<AccountStatementImportFile> AccountStatementImportFiles { get; set; }

        //public AccountStatementImport()
        //{
        //    AccountStatementImportFiles = new List<AccountStatementImportFile>();
        //}
    }
}
