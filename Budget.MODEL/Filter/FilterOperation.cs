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
        public List<SelectDto> OperationMethod { get; set; }
        public List<SelectDto> OperationType { get; set; }
        public Pagination Pagination { get; set; }

        public FilterOperationTableSelected()
        {
            Pagination = new Pagination();
        }

    }

    public class FilterOperationTableSelection
    {
        public List<SelectDto> OperationMethod { get; set; }
        public List<SelectGroupDto> OperationType { get; set; }

        //public FilterOperationTableSelected Selected { get; set; }

        public FilterOperationTableSelection()
        {
            //Selected = new FilterOperationTableSelected();
        }
    }
   
}
