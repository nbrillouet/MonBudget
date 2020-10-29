﻿using System;
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

        [Column("ID_POSTE_CATEGORY")]
        public int? IdCategory { get; set; }

        [ForeignKey("IdCategory")]
        public PosteCategory Category { get; set; }
    }
}
