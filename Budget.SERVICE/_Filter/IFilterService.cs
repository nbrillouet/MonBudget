using Budget.MODEL;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;
//FilterAsi
namespace Budget.SERVICE
{
    public interface IFilterService
    {
        FilterAsTableSelection GetFilterAsTable(FilterAsTableSelected filter);
        FilterAsiTableSelection GetFilterAsiTable(FilterAsiTableSelected filter);
        FilterAsifTableSelection GetFilterAsifTable(FilterAsifTableSelected filter);
        FilterUserTableSelection GetFilterUserTable(FilterUserTableSelected filter);
        FilterOtfTableSelection GetFilterOtfTable(FilterOtfTableSelected filter);
        FilterOtTableSelection GetFilterOtTable(FilterOtTableSelected filter);
        FilterOperationTableSelection GetFilterOperationTable(FilterOperationTableSelected filter);

    }

}
