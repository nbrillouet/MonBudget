using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Filter
{


    public class FilterAsifTableSelected: FilterTableSelected
    {
        public int? IdImport { get; set; }
        public int? IndexTabAsifState { get; set; }
        public SelectDto Account { get; set; }
        public SelectDto AsifState { get; set; }

        public List<SelectDto> OperationMethod { get; set; }
        public List<SelectDto> OperationTypeFamily { get; set; }
        public List<SelectDto> OperationType { get; set; }
        public List<SelectDto> Operation { get; set; }
        public FilterDateRange DateIntegration { get; set; }
        public FilterNumberRange AmountOperation { get; set; }

        public FilterAsifTableSelected()
        {
            this.EnumFilterTableSelectedType = EnumFilterTableSelectedType.ASIF;
        }

    }

    public class FilterAsifTable
    {
        public string AsiBankAgencyLabel { get; set; }
        public DateTime AsiDateImport { get; set; }
        public List<SelectDto> Account { get; set; }
        public List<SelectDto> AsifState { get; set; }
        public FilterAsifTableSelected Selected { get; set; }

        public FilterAsifTable()
        {
            Selected = new FilterAsifTableSelected();
        }
    }

    public class FilterAsifDetail
    {
        public int? IdAsif { get; set; }
        public UserForGroupDto User { get; set; }
    }


    //public class FilterAccountStatementImportFile : Pagination
    //{
    //    public int? IdImport { get; set; }
    //    public int? IdAccount { get; set; }
    //    public int? IdAsifState { get; set; }
    //}
}
