
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    [Table("BANK_SUB_FAMILY", Schema = "ref")]
    public class BankSubFamily
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("LABEL_SHORT")]
        [StringLength(50)]
        public string LabelShort { get; set; }

        [Column("LABEL_LONG")]
        [StringLength(50)]
        public string LabelLong { get; set; }

        //[Column("ADDRESS_BANK")]
        //[StringLength(50)]
        //public string AddressBank { get; set; }

        //[Column("POSTAL_CODE_BANK")]
        //public int PostalCodeBank { get; set; }

        //[Column("ADVISER_FIRST_NAME")]
        //[StringLength(50)]
        //public string AdviserFirstName { get; set; }

        //[Column("ADVISER_LAST_NAME")]
        //[StringLength(50)]
        //public string AdviserLastName { get; set; }

        //[Column("ADVISER_MAIL")]
        //[StringLength(50)]
        //public string AdviserMail { get; set; }

        //[Column("ADVISER_FIXED_PHONE")]
        //[StringLength(30)]
        //public string AdviserFixedPhone { get; set; }

        //[Column("ADVISER_MOBILE_PHONE")]
        //[StringLength(30)]
        //public string AdviserMobilePhone { get; set; }

        [Column("LOGO_CLASS_NAME")]
        [StringLength(30)]
        public string LogoClassName { get; set; }

        //[Column("FOLDER_FILE_SAVE")]
        //public string FolderFileSave { get; set; }

        

        //[Column("ID_GMAP_ADDRESS")]
        //public int IdGMapAddress { get; set; }

        //[ForeignKey("IdGMapAddress")]
        //public GMapAddress GMapAddress { get; set; }

        [Column("ID_BANK_FAMILY")]
        public int IdBankFamily { get; set; }

        [ForeignKey("IdBankFamily")]
        public BankFamily BankFamily { get; set; }
        
    }

    public enum EnumBankFamily
    {
        Inconnu = 1,
        BanquePopulaire = 2,
        CreditAgricole = 3
    }
}
