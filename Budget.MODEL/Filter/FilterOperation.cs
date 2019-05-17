using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Filter
{
    public class FilterOperationTableSelected
    {
        public UserForGroupDto User { get; set; }
        public string Label { get; set; }
        public List<SelectDto> OperationMethods { get; set; }
        public List<SelectDto> OperationTypes { get; set; }
        public Pagination Pagination { get; set; }

        public FilterOperationTableSelected()
        {
            Pagination = new Pagination();
        }

    }

    public class FilterOperationTable
    {
        public List<SelectDto> OperationMethods { get; set; }
        public List<SelectGroupDto> OperationTypes { get; set; }

        public FilterOperationTableSelected Selected { get; set; }

        public FilterOperationTable()
        {
            Selected = new FilterOperationTableSelected();
        }
    }
   
}
