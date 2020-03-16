using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
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

        public FilterOtTableSelection()
        {

        }
    }

    public class FilterOtForDetail
    {
        public List<SelectGroupDto> OperationTypeFamily { get; set; }
    }

}
