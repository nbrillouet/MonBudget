using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("FREQUENCY")]
    public class Frequency
    {
        [Column("ID")]
        public int Id { get; set; }
        [Column("MONTH_NUMBER")]
        public int MonthNumber { get; set; }
        [Column("MONTH_LABEL")]
        public string MonthLabel { get; set; }
    }
}
