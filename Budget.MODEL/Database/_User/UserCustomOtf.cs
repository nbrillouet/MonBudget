using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("USER_CUSTOM_OTF", Schema = "user")]
    public class UserCustomOtf
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("ID_USER")]
        public int IdUser { get; set; }
        [ForeignKey("IdUser")]
        public User User { get; set; }

        [Column("ID_ACCOUNT")]
        public int? IdAccount { get; set; }
        [ForeignKey("IdAccount")]
        public Account Account { get; set; }

        [Column("ID_OPERATION_TYPE_FAMILY")]
        public int IdOperationTypeFamily { get; set; }
        [ForeignKey("IdOperationTypeFamily")]
        public OperationTypeFamily OperationTypeFamily { get; set; }
    }
}
