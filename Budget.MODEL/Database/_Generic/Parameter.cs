using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Budget.MODEL.Database
{
    [Table("PARAMETER", Schema = "gen")]
    public class Parameter
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("IMPORT_FILE_DIR")]
        [StringLength(100)]
        public string ImportFileDir { get; set; }

        [Column("ID_USER")]
        public int IdUser { get; set; }
        [ForeignKey("IdUser")]
        public User User { get; set; }
    }

    public enum EnumLanguage
    {
        FR =1,
        EN =2
    }
}
