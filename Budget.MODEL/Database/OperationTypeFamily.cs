using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("OPERATION_TYPE_FAMILY")]
    public class OperationTypeFamily
    {
        [Column("ID")]
        //[Index("IX_OTF_Id_IdMovement", 1, IsUnique = true)]
        public int Id { get; set; }

        [Column("LABEL")]
        [StringLength(50)]
        public string Label { get; set; }

        //[Index("IX_OTF_Id_IdMovement", 2, IsUnique = true)]
        [Column("ID_MOVEMENT")]
        public int IdMovement { get; set; }

        [Column("LOGO_CLASS_NAME")]
        [StringLength(30)]
        public string LogoClassName { get; set; }

    }

    public enum EnumOperationTypeFamily
    {
        //InconnuCredit = 1,
        //InconnuDebit = 24
        Inconnu = 1
    }

    public enum EnumMouvement
    {
        Credit = 1,
        Debit = 2
    }
}
