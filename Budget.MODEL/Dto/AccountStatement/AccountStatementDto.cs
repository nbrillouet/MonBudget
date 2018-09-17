using Budget.MODEL.Dto.OperationDetail;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    public class AsGridDto
    {
        public int Id { get; set; }
        public SelectDto Operation { get; set; }
        public SelectDto OperationMethod { get; set; }
        public SelectDto OperationType { get; set; }
        public SelectDto OperationTypeFamily { get; set; }
        public DateTime? DateIntegration { get; set; }
        public double AmountOperation { get; set; }
        public string LabelOperation { get; set; }
    }

    public class AsDetailDto : AsGridDto
    {
        public int IdMovement { get; set; }
        public string LogoName { get; set; }
        public bool isLocalisable { get; set; }
        public OperationDetailDto OperationDetail { get; set; }
    }
}
