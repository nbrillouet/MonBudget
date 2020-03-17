using Budget.MODEL.Database;
using Budget.MODEL.Dto.GMap;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    public class AsifForTableDto
    {
        public int Id { get; set; }
        public Select Operation { get; set; }
        public Select OperationMethod { get; set; }
        public Select OperationType { get; set; }
        public Select OperationTypeFamily { get; set; }
        public DateTime? DateIntegration { get; set; }
        public double AmountOperation { get; set; }
        public string LabelOperation { get; set; }
        public bool IsDuplicated { get; set; }
    }


    //public class AsifGridDto
    //{
    //    public int Id { get; set; }
    //    public Select Operation { get; set; }
    //    public Select OperationMethod { get; set; }
    //    public Select OperationType { get; set; }
    //    public Select OperationTypeFamily { get; set; }
    //    public DateTime? DateIntegration { get; set; }
    //    public double AmountOperation { get; set; }
    //    public string LabelOperation { get; set; }
    //    public bool IsDuplicated { get; set; }
    //}

    public class AsifDetailDto
    {
        public int Id { get; set; }
        public UserForGroupDto User { get; set; }
        public ComboSimple<Select> Operation { get; set; }
        public ComboSimple<Select> OperationMethod { get; set; }
        public ComboSimple<Select> OperationType { get; set; }
        public ComboSimple<Select> OperationTypeFamily { get; set; }
        public ComboSimple<Select> OperationPlace { get; set; }
        public ComboMultiple<Select> OperationTransverse { get; set; }

        public double AmountOperation { get; set; }
        public string LabelOperation { get; set; }
        public DateTime? DateIntegration { get; set; }
        public bool IsDuplicated { get; set; }

        public int IdMovement { get; set; }
        public SelectCode Asset { get; set; }
        public string OperationKeywordTemp { get; set; }
        public string OperationLabelTemp { get; set; }
        public string PlaceLabelTemp { get; set; }
        public string PlaceKeywordTemp { get; set; }
        public bool IsLocalisable { get; set; }
        public OperationDetailDto OperationDetail { get; set; }
        public GMapSearchInfoDto GMapSearchInfo { get; set; }

    }

}
