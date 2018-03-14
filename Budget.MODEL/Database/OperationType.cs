using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("OPERATION_TYPE")]
    public class OperationType
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("LABEL")]
        [StringLength(50)]
        public string Label { get; set; }

        [Column("ID_OPERATION_TYPE_FAMILY")]
        public int IdOperationTypeFamily { get; set; }

        [ForeignKey("IdOperationTypeFamily")]
        public OperationTypeFamily OperationTypeFamily { get; set; }
    }

    public enum EnumOperationType
    {
        InconnuCredit = 1,
        InconnuDebit = 114

    }
}
