using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Budget.MODEL
{
    [Table("USER")]
    public class User
    {
        [Key]
        [Column("ID")]
        public int Id { get; set; }
        [Column("USER_NAME")]
        public string UserName { get; set; }
        [Column("LAST_NAME")]
        public string LastName { get; set; }
        [Column("FIRST_NAME")]
        public string FirstName { get; set; }
        [Column("PASSWORD_HASH")]
        public byte[] PasswordHash { get; set; }
        [Column("PASSWORD_SALT")]
        public byte[] PasswordSalt { get; set; }
        [Column("GENDER")]
        public string Gender { get; set; }
        [Column("BIRTH_DATE")]
        public DateTime DateOfBirth { get; set; }
        [Column("CREATION_DATE")]
        public DateTime DateCreated { get; set; }
        [Column("LAST_ACTIVE_DATE")]
        public DateTime DateLastActive { get; set; }

        [Column("ID_GMAP_ADDRESS")]
        public int? IdGMapAddress { get; set; }
        [ForeignKey("IdGMapAddress")]
        public GMapAddress GMapAddress { get; set; }


        //[Column("COUNTRY")]
        //public string Country { get; set; }
        //[Column("CITY")]
        //public string City { get; set; }
        //[Column("POSTAL_CODE")]
        //public int PostalCode { get; set; }
        [Column("AVATAR_URL")]
        public string AvatarUrl { get; set;}
        [Column("ID_AVATAR_CLOUD")]
        public string IdAvatarCloud { get; set; }
        public List<Shortcut> Shortcuts { get; set; }
        public virtual List<UserAccount> UserAccounts { get; set; }

        public User()
        {
            Shortcuts = new List<Shortcut>();
            UserAccounts = new List<UserAccount>();
        }
        
    }
}
