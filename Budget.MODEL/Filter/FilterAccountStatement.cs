using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Filter
{
    public class FilterAsTableSelected
    {
        public UserForGroupDto User { get; set; }
        public int? IdAccount { get; set; }
        public List<SelectDto> OperationMethod { get; set; }
        public List<SelectDto> OperationTypeFamily { get; set; }
        public List<SelectDto> OperationType { get; set; }
        public List<SelectDto> Operation { get; set; }
        public FilterDateRange DateIntegration { get; set; }
        //public DateTime? DateIntegrationMax { get; set; }
        public FilterNumberRange Amount { get; set; }
        //public double? AmountMax { get; set; }
        public MonthYear MonthYear { get; set; }
        public bool IsWithITransfer { get; set; }
        public Pagination Pagination { get; set; }

        public FilterAsTableSelected()
        {
            Pagination = new Pagination();
        }

    }

    public class FilterAsTable
    {
        public List<SelectDto> OperationMethod { get; set; }
        public List<SelectGroupDto> OperationTypeFamily { get; set; }
        public List<SelectGroupDto> OperationType { get; set; }
        public List<SelectDto> Operation { get; set; }

        public FilterAsTableSelected Selected { get; set; }

        public FilterAsTable()
        {
            Selected = new FilterAsTableSelected();
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
