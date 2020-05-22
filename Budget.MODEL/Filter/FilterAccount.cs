using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Filter
{
    public class FilterAccountTableSelected
    {
        public UserForGroupDto User { get; set; }
        public string AccountNumber { get; set; }
        public string AccountName { get; set; }
        public Pagination Pagination { get; set; }

        public FilterAccountTableSelected()
        {
            Pagination = new Pagination();
        }
    }

    public class FilterAccountTableSelection
    {
        public string AccountNumber { get; set; }
        public string AccountName { get; set; }

        public FilterAccountTableSelection()
        {
        }
    }

}
