using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    public class BankAgencyWithAccountsDto
    {
        public int Id { get; set; }
        public string LabelShort { get; set; }
        public string LabelLong { get; set; }
        public string LogoClassName { get; set; }
        public List<AccountForDetailDto> Accounts { get; set; }
    }

    public class BankAgencyForListDto
    {
        public int Id { get; set; }
        public string LabelShort { get; set; }
        public string LabelLong { get; set; }
        public string LogoClassName { get; set; }

    }

}
