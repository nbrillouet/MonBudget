using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("MONTH", Schema = "gen")]
    public class Month
    {
        [Column("ID")]
        public int Id { get; set; }
        [Column("NUMBER")]
        public string Number { get; set; }
        [Column("LANGUAGE_CODE")]
        public string LanguageCode { get; set; }
        [Column("LABEL_LONG")]
        public string LabelLong { get; set; }
        [Column("LABEL_SHORT")]
        public string LabelShort { get; set; }

    }
}
