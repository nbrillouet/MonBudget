using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    public class BankAccountsDto
    {
        public int Id { get; set; }
        public string LabelBankShort { get; set; }
        public string LabelBankLong { get; set; }
        public List<AccountForLabelDto> Accounts { get; set; }
    }
}
