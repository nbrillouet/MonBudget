using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL
{
    [Table("MOVEMENT", Schema = "ref")]
    public class Movement
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("LABEL")]
        [StringLength(50)]
        public string Label { get; set; }

    }

    public enum EnumMovement
    {
        Credit = 1,
        Debit = 2,
        TwoWays = 3
    }
}
