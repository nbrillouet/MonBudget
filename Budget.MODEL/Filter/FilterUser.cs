using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Filter
{
    public class FilterUserTableSelected
    {
        public string Keyword { get; set; }
        public Pagination Pagination { get; set; }

        public FilterUserTableSelected()
        {

        }

    }

    public class FilterUserTable
    {
        //public string AsiBankLabel { get; set; }
        //public DateTime AsiDateImport { get; set; }
        //public List<SelectDto> Accounts { get; set; }
        //public List<SelectDto> AsifStates { get; set; }
        public FilterUserTableSelected Selected { get; set; }

        public FilterUserTable()
        {
            Selected = new FilterUserTableSelected();
        }
    }

}
