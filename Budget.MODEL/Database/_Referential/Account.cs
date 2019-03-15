using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("ACCOUNT", Schema = "ref")]
    public class Account
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("NUMBER")]
        [StringLength(50)]
        //[Index("IX_AccountNumber", 1, IsUnique = true)]
        public string Number { get; set; }

        [Column("LABEL")]
        [StringLength(50)]
        public string Label { get; set; }

        [Column("ID_BANK")]
        public int IdBank { get; set; }

        [ForeignKey("IdBank")]
        public Bank Bank { get; set; }

        [Column("START_AMOUNT")]
        public double StartAmount { get; set; }

        [Column("ID_ACCOUNT_TYPE")]
        public int IdAccountType { get; set; }

        [ForeignKey("IdAccountType")]
        public AccountType AccountType { get; set; }

        [Column("ALERT_THRESHOLD")]
        public double AlertThreshold { get; set; }

        public virtual List<UserAccount> UserAccounts { get; set; }

        public Account()
        {
            UserAccounts = new List<UserAccount>();
        }
    }

    public enum EnumAccount
    {
        Inconnu = 1
    }
}
