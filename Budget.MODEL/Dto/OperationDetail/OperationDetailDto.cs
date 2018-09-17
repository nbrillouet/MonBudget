using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto.OperationDetail
{
    public class OperationDetailDto
    {
        public int Id { get; set; }
        public string KeywordOperation { get; set; }
        public string KeywordPlace { get; set; }
        public GMapAddressDto GMapAddress { get; set; }
    }
}
