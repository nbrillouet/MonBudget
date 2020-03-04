using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Filter
{
    public class FilterPlanTableSelected
    {
        public UserForGroupDto User { get; set; }
        public int Year { get; set; }
        public Pagination Pagination { get; set; }
    }

    public class FilterPlanTableSelection
    {
        public List<int> Year { get; set; }

        public FilterPlanTableSelection()
        {
        }
    }

}
