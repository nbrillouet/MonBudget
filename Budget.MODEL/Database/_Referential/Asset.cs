using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("ASSET", Schema = "ref")]
    public class Asset
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("PATH")]
        [StringLength(100)]
        public string Path { get; set; }

        [Column("NAME")]
        [StringLength(100)]
        public string Name { get; set; }

        [Column("EXTENSION")]
        [StringLength(100)]
        public string Extension { get; set; }

        [Column("ID_FAMILY")]
        public int IdFamily { get; set; }

    }

    public enum EnumAssetFamily
    {
        OTF = 1
    }
}
