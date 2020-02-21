using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Filter
{
    public class FilterAsTableSelected : FilterAccountMonthYear
    {
        public UserForGroupDto User { get; set; }
        public List<SelectDto> OperationMethod { get; set; }
        public List<SelectDto> OperationTypeFamily { get; set; }
        public List<SelectDto> OperationType { get; set; }
        public List<SelectDto> Operation { get; set; }
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
        public List<SelectDto> OperationMethod { get; set; }
        public List<SelectGroupDto> OperationTypeFamily { get; set; }
        public List<SelectGroupDto> OperationType { get; set; }
        public List<SelectDto> Operation { get; set; }

        public FilterAsTableSelection()
        {
        }
    }

    public class FilterAsDetail
    {
        public int? IdAs { get; set; }
        public UserForGroupDto User { get; set; }
    }

    public class FilterAsNotInPlan
    {
        public int Year { get; set; }
        public int IdInternalTransfert { get; set; }
        public List<int> AsInPlan { get; set; }
        public List<int> Accounts { get; set; }

    }
    
}
