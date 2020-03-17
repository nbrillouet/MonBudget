using Budget.MODEL.Dto;
using System.Collections.Generic;

namespace Budget.MODEL.Filter
{
    public class FilterAsTableSelected : FilterAccountMonthYear
    {
        public UserForGroupDto User { get; set; }
        public List<Select> OperationMethod { get; set; }
        public List<Select> OperationTypeFamily { get; set; }
        public List<Select> OperationType { get; set; }
        public List<Select> Operation { get; set; }
        public FilterDateRange DateIntegration { get; set; }
        public FilterNumberRange AmountOperation { get; set; }
        
        public bool IsWithITransfer { get; set; }
        public Pagination Pagination { get; set; }

        //public FilterAsTableSelected()
        //{
        //    this.EnumFilterTableSelectedType = EnumFilterTableSelectedType.accountStatement;
        //}

    }

    public class FilterAsTableSelection
    {
        public List<Select> OperationMethod { get; set; }
        public List<SelectGroupDto> OperationTypeFamily { get; set; }
        public List<SelectGroupDto> OperationType { get; set; }
        public List<Select> Operation { get; set; }

        public FilterAsTableSelection()
        {
        }
    }

    public class FilterAsDetail
    {
        public int? IdAs { get; set; }
        public UserForGroupDto User { get; set; }
    }


    
}
