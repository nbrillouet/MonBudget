using Budget.MODEL.Database;
using Budget.MODEL.Dto.OperationDetail;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{

    public class AsifGridDto
    {
        public int Id { get; set; }
        public SelectDto Operation { get; set; }
        public SelectDto OperationMethod { get; set; }
        public SelectDto OperationType { get; set; }
        public SelectDto OperationTypeFamily { get; set; }
        //public SelectDto OperationPlace { get; set; }
        public DateTime? DateIntegration { get; set; }
        public double AmountOperation { get; set; }
        public string LabelOperation { get; set; }
        public bool IsDuplicated { get; set; }
    }

    public class AsifDetailDto : AsifGridDto
    {
        public int IdMovement { get; set; }
        public string OperationKeywordTemp { get; set; }
        public string OperationLabelTemp { get; set; }
        public string LogoName { get; set; }
        public string PlaceKeywordTemp { get; set; }
        public string PlaceLabelTemp { get; set; }
        public bool isLocalisable { get; set; }
        public OperationDetailDto OperationDetail { get; set; }
        //public GMapAddressDto GMapAddress { get; set; }
    }

}
