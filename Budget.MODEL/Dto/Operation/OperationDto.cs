using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    public class OperationDto
    {
        public int Id { get; set; }
        public int IdOperationMethod { get; set; }
        public int IdOperationType { get; set; }
        public string Keyword { get; set; }
        public string Label { get; set; }
        public string Reference { get; set; }
    }

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

    public class OperationInformation
    {
        //public int IdOperation { get; set; }
        //public int IdOperationMethod { get; set; }
        public string OperationLabel { get; set; }
        public string OperationKeyword { get; set; }
        public string PlaceLabel { get; set; }
        public string PlaceKeyword { get; set; }
    }


}
