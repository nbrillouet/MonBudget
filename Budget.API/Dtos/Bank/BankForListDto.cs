using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Budget.API.Dtos
{
    public class BankForListDto
    {
        public int Id { get; set; }
        public string LabelBankShort { get; set; }
        public string LabelBankLong { get; set; }
        public string AddressBank { get; set; }
        public int PostalCodeBank { get; set; }
        public string AdviserFirstName { get; set; }
        public string AdviserLastName { get; set; }
        public string AdviserMail { get; set; }
        public string AdviserFixedPhone { get; set; }
        public string AdviserMobilePhone { get; set; }
        public string LogoClassName { get; set; }
        public string FolderFileSave { get; set; }
    }
}
