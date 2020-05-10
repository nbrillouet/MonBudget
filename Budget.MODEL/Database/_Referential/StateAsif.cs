using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("STATE_ASIF", Schema = "ref")]
    public class StateAsif
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("LABEL")]
        public string Label { get; set; }
    }

    public enum EnumStateAsif
    {
        Complete = 1,
        MethodLess = 2,
        OperationLess = 3
    }
}
