using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Filter
{
    public class FilterPlanPosteTableSelected
    {
        //public UserForGroupDto User { get; set; }
        public int IdPlan { get; set; }
        public int IdPoste { get; set; }
        public string Label { get; set; }
        public Pagination Pagination { get; set; }
    }

    public class FilterPlanPosteTableSelection
    {
        //public List<int> Year { get; set; }

        public FilterPlanPosteTableSelection()
        {
        }
    }
}
