using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("OPERATION")]
    public class Operation
    {
        [Column("ID")]
        public int Id { get; set; }

        [Required]
        [Column("LABEL")]
        [StringLength(255)]
        //[Index("IX_OperationLabel", 1, IsUnique = true)]
        public string Label { get; set; }

        [Column("REFERENCE")]
        [StringLength(20)]
        public string Reference { get; set; }

        [Column("ID_OPERATION_METHOD")]
        public int IdOperationMethod { get; set; }

        [ForeignKey("IdOperationMethod")]
        public OperationMethod OperationMethod { get; set; }

        [Column("ID_OPERATION_TYPE")]
        public int IdOperationType { get; set; }

        [ForeignKey("IdOperationType")]
        public OperationType OperationType { get; set; }

        //[Column("ID_OPERATION_PLACE")]
        //public int IdOperationPlace { get; set; }

        [Required]
        [Column("KEYWORD")]
        [StringLength(255)]
        //[Index("IX_OperationKeyword", 1, IsUnique = true)]
        public string Keyword { get; set; }


        //[ForeignKey("IdOperationPlace")]
        //public OperationPlace OperationPlace { get; set; }
        //[Column("OPERATION_PLACE_POSTAL_CODE")]
        //public int? OperationPlacePostalCode { get; set; }

        //[Column("OPERATION_PLACE_LABEL")]
        //[StringLength(100)]
        //public string OperationPlaceLabel { get; set; }

    }

    public enum EnumOperation
    {
        Inconnu = 1,
        RemiseCheque = 2,
        RetraitDab = 3,

    }
}
