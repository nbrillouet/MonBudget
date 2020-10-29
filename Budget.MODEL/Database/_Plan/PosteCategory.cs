using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("POSTE_CATEGORY", Schema = "plan")]
    public class PosteCategory
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("LABEL")]
        public string Label { get; set; }
    }

}
