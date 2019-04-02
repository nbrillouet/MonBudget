using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("GMAP_TYPE_LANGUAGE", Schema = "gmap")]
    public class GMapTypeLanguage
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("ID_GMAP_TYPE")]
        public int IdGMapType { get; set; }

        [ForeignKey("IdGMapType")]
        public GMapType GMapType { get; set; }

        [Required]
        [Column("LANGUAGE_CODE")]
        public string CountryCode { get; set; }

        [Column("LABEL")]
        public string Label { get; set; }

    }
}
