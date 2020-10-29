using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("POSTE", Schema = "plan")]
    public class Poste
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("LABEL")]
        public string Label { get; set; }

        [Column("ID_MOVEMENT")]
        public int IdMovement { get; set; }

        [ForeignKey("IdMovement")]
        public Movement Movement { get; set; }
    }
}
