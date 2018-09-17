using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("GMAP_ADMINISTRATIVE_AREA_LEVEL_1")]
    public class GMapAdministrativeAreaLevel1
    {
        [Column("ID")]
        public int Id { get; set; }

        [Required]
        [Column("LABEL")]
        public string Label { get; set; }

    }

}
