using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL
{
    public class UserEventDto
    {
        public string Section { get; set; }
        public string Category { get; set; }
        public string Title { get; set; }
        public string SubTitle { get; set; }
        public string Content { get; set; }
        public string Link { get; set; }
    }

    public enum EnumUserCategory
    {
        Referential = 0,
        AccountStatement = 1,
        Plan = 2
    }

    public enum EnumUserSection
    {
        UserInformation = 0,
        AccountNoAccount = 1,
        AsInternalTransferOrphan = 2,
        AsLast = 3
    }
}
