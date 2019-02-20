using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL
{
    public class FilterAccountStatementImport : Pagination
    {
        public int? idUser { get; set; }
        public int? idBank { get; set; }
    }

    public class FilterAsiTable
    {
        public List<SelectColorDto> Banks { get; set; }
        public FilterAsiTableSelected Selected { get; set; }

        public FilterAsiTable()
        {
            Selected = new FilterAsiTableSelected();
        }
    }

    public class FilterAsiTableSelected
    {
        public int? IdUser { get; set; }
        public int? IdBank { get; set; }
        public int? IndexTabBank { get; set; }
        public Pagination1 Pagination { get; set; }

        public FilterAsiTableSelected()
        {

        }
    }
}
