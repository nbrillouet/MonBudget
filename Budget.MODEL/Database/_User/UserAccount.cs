using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("USER_ACCOUNT", Schema = "user")]
    public class UserAccount
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("ID_USER")]
        public int IdUser { get; set; }

        [ForeignKey("IdUser")]
        public User User { get; set; }

        [Column("ID_ACCOUNT")]
        public int IdAccount { get; set; }

        [ForeignKey("IdAccount")]
        public Account Account { get; set; }

        [Column("ACTIVATION_CODE")]
        public string ActivationCode { get; set; }


    }
}
