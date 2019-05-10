using Budget.MODEL.Dto.GMap;
using System;
using System.Collections.Generic;

namespace Budget.MODEL.Dto
{
    public class AsForTableDto
    {
        public int Id { get; set; }
        public SelectDto Operation { get; set; }
        public SelectDto OperationMethod { get; set; }
        public SelectDto OperationType { get; set; }
        public SelectDto OperationTypeFamily { get; set; }
        public DateTime? DateIntegration { get; set; }
        public double AmountOperation { get; set; }
        public string LabelOperation { get; set; }
        public List<SelectColorDto> Plans { get; set; }
        public SelectDto Account { get; set; }
        public SelectDto BankAgency { get; set; }
    }

    public class AsDetailDto
    {
        public int Id { get; set; }
        public UserForGroupDto User { get; set; }
        public ComboSimple<SelectDto> Operation { get; set; }
        public ComboSimple<SelectDto> OperationMethod { get; set; }
        public ComboSimple<SelectDto> OperationType { get; set; }
        public ComboSimple<SelectDto> OperationTypeFamily { get; set; }
        public ComboSimple<SelectDto> OperationPlace { get; set; }
        public ComboMultiple<SelectDto> OperationTransverse { get; set; }

        public double AmountOperation { get; set; }
        public string LabelOperation { get; set; }
        public DateTime? DateIntegration { get; set; }
        public bool IsDuplicated { get; set; }

        public int IdMovement { get; set; }
        public string LogoName { get; set; }
        public string LogoUrl { get; set; }
        public bool IsLocalisable { get; set; }
        public OperationDetailDto OperationDetail { get; set; }
        public GMapSearchInfoDto GMapSearchInfo { get; set; }

    }

}
