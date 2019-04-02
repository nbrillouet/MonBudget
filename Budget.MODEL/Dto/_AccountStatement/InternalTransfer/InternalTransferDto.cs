using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    public class InternalTransferDto
    {
        public AsForTableDto asFirst { get; set; }
        public AsForTableDto asSecond { get; set; }
    }
}
