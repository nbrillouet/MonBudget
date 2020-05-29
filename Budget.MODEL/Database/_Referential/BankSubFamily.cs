
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("BANK_SUB_FAMILY", Schema = "ref")]
    public class BankSubFamily
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("CODE")]
        [StringLength(10)]
        public string Code { get; set; }

        [Column("LABEL")]
        [StringLength(50)]
        public string Label { get; set; }

        [Column("ID_ASSET")]
        public int IdAsset { get; set; }
        [ForeignKey("IdAsset")]
        public Asset Asset { get; set; }

        [Column("ID_BANK_FAMILY")]
        public int IdBankFamily { get; set; }

        [ForeignKey("IdBankFamily")]
        public BankFamily BankFamily { get; set; }
        
    }

    public enum EnumBankFamily
    {
        Inconnu = 1,
        BanquePopulaire = 2,
        CreditAgricole = 3
    }
}
