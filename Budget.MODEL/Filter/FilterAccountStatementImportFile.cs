using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Filter
{


    public class FilterAsifTableSelected
    {
        public int? IdImport { get; set; }
        public int? IndexTabAsifState { get; set; }
        public SelectDto Account { get; set; }
        public SelectDto AsifState { get; set; }
        public Pagination Pagination { get; set; }

        public FilterAsifTableSelected()
        {

        }

    }

    public class FilterAsifTable
    {
        public string AsiBankAgencyLabel { get; set; }
        public DateTime AsiDateImport { get; set; }
        public List<SelectDto> Accounts { get; set; }
        public List<SelectDto> AsifStates { get; set; }
        public FilterAsifTableSelected Selected { get; set; }

        public FilterAsifTable()
        {
            Selected = new FilterAsifTableSelected();
        }
    }



    //public class FilterAccountStatementImportFile : Pagination
    //{
    //    public int? IdImport { get; set; }
    //    public int? IdAccount { get; set; }
    //    public int? IdAsifState { get; set; }
    //}
}
