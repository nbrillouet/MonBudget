using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Filter
{
    public class FilterOtTableSelected
    {
        public UserForGroupDto User { get; set; }
        public string Label { get; set; }
        public List<SelectDto> OperationTypeFamily { get; set; }
        public Pagination Pagination { get; set; }

        public FilterOtTableSelected()
        {
            Pagination = new Pagination();
        }

    }

    public class FilterOtTableSelection
    {
        public List<SelectDto> OperationTypeFamily { get; set; }

        //public FilterOtTableSelected Selected { get; set; }

        public FilterOtTableSelection()
        {
            //Selected = new FilterOtTableSelected();
        }
    }

}
