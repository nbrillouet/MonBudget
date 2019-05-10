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
        public SelectDto Otf { get; set; }
        public Pagination Pagination { get; set; }

        public FilterOtTableSelected()
        {
            Pagination = new Pagination();
        }

    }

    public class FilterOtTable
    {
        public List<SelectDto> Otfs { get; set; }

        public FilterOtTableSelected Selected { get; set; }

        public FilterOtTable()
        {
            Selected = new FilterOtTableSelected();
        }
    }

}
