using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("ACCOUNT_STATEMENT_IMPORT_FILE")]
    public class AccountStatementImportFile
    {
        //: AccountStatement
        [Column("ID")]
        public int Id { get; set; }

        [Column("ID_IMPORT")]
        public int IdImport { get; set; }

        [ForeignKey("IdImport")]
        public AccountStatementImport AccountStatementImport { get; set; }

        [Column("ID_ACCOUNT")]
        public int? IdAccount { get; set; }

        [ForeignKey("IdAccount")]
        public Account Account { get; set; }

        [Column("DATE_OPERATION")]
        public DateTime? DateOperation { get; set; }

        [Column("LABEL_OPERATION")]
        [StringLength(500)]
        public string LabelOperation { get; set; }

        //[StringLength(500)]
        //public string LabelOperationWork { get; set; }

        [Column("ID_OPERATION_METHOD")]
        public int? IdOperationMethod { get; set; }

        [ForeignKey("IdOperationMethod")]
        public OperationMethod OperationMethod { get; set; }

        [Column("ID_OPERATION")]
        public int? IdOperation { get; set; }
        [Column("OPERATION_LABEL_TEMP")]
        public string OperationLabelTemp { get; set; }
        [Column("OPERATION_KEYWORD_TEMP")]
        public string OperationKeywordTemp { get; set; }
        [Column("OPERATION_REFERENCE_TEMP")]
        public string OperationReferenceTemp { get; set; }

        [ForeignKey("IdOperation")]
        public Operation Operation { get; set; }


        [Column("ID_OPERATION_PLACE")]
        public int? IdOperationPlace { get; set; }

        [Column("OPERATION_PLACE_DEPARTMENT_TEMP")]
        public string OperationPlaceDepartmentTemp { get; set; }
        [Column("OPERATION_PLACE_CITY_TEMP")]
        public string OperationPlaceCityTemp { get; set; }
        [Column("OPERATION_PLACE_KEYWORD_TEMP")]
        public string OperationPlaceKeywordTemp { get; set; }

        [ForeignKey("IdOperationPlace")]
        public OperationPlace OperationPlace { get; set; }


        [Column("ID_OPERATION_TYPE")]
        public int? IdOperationType { get; set; }
        [ForeignKey("IdOperationType")]
        public OperationType OperationType { get; set; }

        [Column("ID_OPERATION_TYPE_FAMILY")]
        public int? IdOperationTypeFamily { get; set; }

        [ForeignKey("IdOperationTypeFamily")]
        public OperationTypeFamily OperationTypeFamily { get; set; }
        
        [Column("REFERENCE")]
        [StringLength(50)]
        public string Reference { get; set; }

        [Column("DATE_INTEGRATION")]
        public DateTime? DateIntegration { get; set; }

        [Column("AMOUNT_OPERATION")]
        public double AmountOperation { get; set; }

        [Column("ID_MOVEMENT")]
        public int IdMovement { get; set; }

        [Column("DATE_IMPORT")]
        public DateTime DateImport { get; set; }

        [Column("LABEL_OPERATION_WORK")]
        [StringLength(500)]
        public string LabelOperationWork { get; set; }

        [Column("STATE")]
        public EnumAccountStatementImportFileState EnumAccountStatementImportFileState { get; set; }
        [Column("IS_DUPLICATED")]
        public bool IsDuplicated { get; set; }

    }
    public enum EnumAccountStatementImportFileState
    {
        Complete = 1,
        MethodLess = 2,
        OperationLess = 3
    }
}
