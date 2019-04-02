using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL
{

    public class FilterAsiTable
    {
        public List<SelectColorDto> BankAgencies { get; set; }
        public FilterAsiTableSelected Selected { get; set; }

        public FilterAsiTable()
        {
            Selected = new FilterAsiTableSelected();
        }
    }

    public class FilterAsiTableSelected
    {
        public int? IdUser { get; set; }
        public int? IdBankAgency { get; set; }
        public int? IndexTabBankAgency { get; set; }
        public Pagination Pagination { get; set; }

        public FilterAsiTableSelected()
        {

        }
    }
}
