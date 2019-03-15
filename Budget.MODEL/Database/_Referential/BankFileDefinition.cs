using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("BANK_FILE_DEFINITION", Schema = "ref")]
    public class BankFileDefinition
    {
        [Column("ID")]
        public int Id { get; set; }
        [Column("ID_BANK_FAMILY")]
        public int IdBankFamily { get; set; }
        //[ForeignKey("IdBank")]
        //public Bank Bank { get; set; }
        [Column("LABEL_FIELD")]
        [StringLength(50)]
        public string LabelField { get; set; }
        [Column("LABEL_ORDER")]
        public int LabelOrder { get; set; }
    }

    //public enum EnumFileBankType
    //{
    //    Inconnu,
    //    BanquePopulaire,
    //    CreditAgricole
    //}
}
