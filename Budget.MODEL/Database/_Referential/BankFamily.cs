using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("BANK_FAMILY", Schema = "ref")]
    public class BankFamily
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("LABEL_SHORT")]
        [StringLength(50)]
        public string LabelShort { get; set; }

        [Column("LABEL_LONG")]
        [StringLength(50)]
        public string LabelLong { get; set; }

        [Column("LOGO_CLASS_NAME")]
        [StringLength(30)]
        public string LogoClassName { get; set; }
    }
}
