using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("OPERATION_PLACE")]
    public class OperationPlace
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("DEPARTMENT")]
        [StringLength(10)]
        public string Department { get; set; }

        [Column("CITY")]
        [StringLength(50)]
        public string City { get; set; }

        [Column("KEYWORD")]
        [StringLength(60)]
        public string Keyword { get; set; }
    }

    public enum EnumOperationPlace
    {
        Inconnu = 1
    }
}
