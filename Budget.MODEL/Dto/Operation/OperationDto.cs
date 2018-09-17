using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    public class OperationTmpDto
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public string Reference { get; set; }
        public int IdOperationMethod { get; set; }
        public OperationMethod OperationMethod { get; set; }
        public int IdOperationType { get; set; }
        public OperationType OperationType { get; set; }
        public string Keyword { get; set; }
    }
}
