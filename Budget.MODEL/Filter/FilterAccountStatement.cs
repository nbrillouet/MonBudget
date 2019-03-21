using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Filter
{
    public class FilterAsTableSelected
    {
        public int? IdUser { get; set; }
        public int? IdAccount { get; set; }
        public List<SelectDto> OperationMethods { get; set; }
        public List<SelectDto> OperationTypeFamilies { get; set; }
        public List<SelectDto> OperationTypes { get; set; }
        public List<SelectDto> Operations { get; set; }
        public DateTime? DateIntegrationMin { get; set; }
        public DateTime? DateIntegrationMax { get; set; }
        public double? AmountMin { get; set; }
        public double? AmountMax { get; set; }
        public MonthYear MonthYear { get; set; }
        public bool IsWithITransfer { get; set; }
        public Pagination Pagination { get; set; }

        public FilterAsTableSelected()
        {
            Pagination = new Pagination();
        }

    }

    public class FilterAsTable
    {
        public List<SelectDto> OperationMethods { get; set; }
        public List<SelectGroupDto> OperationTypeFamilies { get; set; }
        public List<SelectDto> OperationTypes { get; set; }
        public List<SelectDto> Operations { get; set; }

        public FilterAsTableSelected Selected { get; set; }

        public FilterAsTable()
        {
            Selected = new FilterAsTableSelected();
        }
    }

    //public class FilterAccountStatement
    //{
    //    public int? IdAccount { get; set; }
    //    public List<SelectDto> OperationSelected { get; set; }
    //    public List<SelectDto> OperationMethodSelected { get; set; }
    //    public List<SelectDto> OperationTypeFamilySelected { get; set; }
    //    public List<SelectDto> OperationTypeSelected { get; set; }
    //    public DateTime? DateIntegrationMin { get; set; }
    //    public DateTime? DateIntegrationMax { get; set; }
    //    public double? AmountMin { get; set; }
    //    public double? AmountMax { get; set; }
    //    public MonthYear MonthYearSelected { get; set; }
    //    public Pagination Pagination { get; set; }
    //    public bool IsWithITransfer {get;set;}

    //    public FilterAccountStatement()
    //    {

    //    }

    //}

    public class MonthYear
    {
        public SelectDto Month { get; set; }
        public int Year { get; set; }
    }

    //public class Month
    //{
    //    public int Id { get; set; }
    //    public string label { get; set; }
    //}


}
