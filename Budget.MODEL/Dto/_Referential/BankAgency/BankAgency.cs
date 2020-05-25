using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    public class BankGenericDto
    {
        public int Id { get; set; }
        public string LabelShort { get; set; }
        public string LabelLong { get; set; }
        public string LogoClassName { get; set; }
    }

    public class BankAgencyDto
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public BankGenericDto BankSubFamily {get;set;}
        public BankGenericDto BankFamily { get; set; }
    }

    public class BankAgencyWithAccountsDto : BankAgencyDto
    {
        public List<AccountForDetail> Accounts { get; set; }
    }

    public class BankAgencyForListDto: BankAgencyDto
    {

    }

    public class BankAgencyForDetail: Select
    {
        //public int Id { get; set; }
        //public string Label { get; set; }
        public BankSubFamilyForDetail BankSubFamily { get; set; }
        //public BankGenericDto BankFamily { get; set; }
    }

}
