using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("GMAP_ROUTE")]
    public class GMapRoute
    {
        [Column("ID")]
        public int Id { get; set; }

        [Required]
        [Column("LABEL")]
        public string Label { get; set; }

    }

}
