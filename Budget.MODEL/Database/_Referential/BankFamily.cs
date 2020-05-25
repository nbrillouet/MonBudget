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

        [Column("CODE")]
        [StringLength(4)]
        public string Code { get; set; }

        [Column("LABEL")]
        [StringLength(50)]
        public string Label { get; set; }
        [Column("ID_ASSET")]
        public int IdAsset { get; set; }
        [ForeignKey("IdAsset")]
        public Asset Asset { get; set; }
    }
}
