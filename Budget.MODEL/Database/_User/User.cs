using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Budget.MODEL
{
    [Table("USER", Schema = "user")]
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
        //public override byte[] PasswordHash { get; set; }
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

        [Column("AVATAR_URL")]
        public string AvatarUrl { get; set;}
        [Column("ID_AVATAR_CLOUD")]
        public string IdAvatarCloud { get; set; }
        [Column("ID_USER_GROUP")]
        public int IdUserGroup { get; set; }

        [Column("MAIL_ADDRESS")]
        public string MailAddress { get; set; }

        [Column("ACTIVATION_CODE")]
        public string ActivationCode { get; set; }

        [Column("IS_MAIL_CONFIRMED")]
        public bool IsMailConfirmed { get; set; }
        [Column("ROLE")]
        public string Role { get; set; }

        public List<UserShortcut> Shortcuts { get; set; }
        public virtual List<UserAccount> UserAccounts { get; set; }

        public User()
        {
            Shortcuts = new List<UserShortcut>();
            UserAccounts = new List<UserAccount>();
        }
        
    }

    public enum EnumRole {
        Admin = 1,
        User = 2
    }

}
