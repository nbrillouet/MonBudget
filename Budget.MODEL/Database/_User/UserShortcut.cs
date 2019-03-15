using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL
{
    [Table("USER_SHORTCUT", Schema = "user")]
    public class UserShortcut
    {
        [Key]
        [Column("ID")]
        public int Id { get; set; }
        [Column("TITLE")]
        public string Title { get; set; }
        [Column("TYPE")]
        public string Type { get; set; }
        [Column("ICON")]
        public string Icon { get; set; }
        [Column("URL")]
        public string Url { get; set; }

        [ForeignKey("IdUser")]
        public User User { get; set; }
        [Column("ID_USER")]
        public int IdUser { get; set; }
    }
}
