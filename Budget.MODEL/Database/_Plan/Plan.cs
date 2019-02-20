using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("PLAN")]
    public class Plan
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("LABEL")]
        [StringLength(100)]
        public string Label { get; set; }

        [Column("YEAR")]
        public int Year { get; set; }

        [Column("COLOR")]
        public string Color { get; set; }

    }

 
}
