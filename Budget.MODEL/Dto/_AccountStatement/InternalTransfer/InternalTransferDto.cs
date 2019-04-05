using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    public class InternalTransferDto
    {
        public AsForTableDto AsFirst { get; set; }
        public AsForTableDto AsSecond { get; set; }
    }
}
