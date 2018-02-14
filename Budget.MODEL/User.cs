using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Budget.MODEL
{
    [Table("USER")]
    public class User
    {
        [Column("ID")]
        public int Id { get; set; }
        [Column("USER_NAME")]
        public string UserName { get; set; }
        [Column("PASSWORD_HASH")]
        public byte[] PasswordHash { get; set; }
        [Column("PASSWORD_SALT")]
        public byte[] PasswordSalt { get; set; }
    }
}
