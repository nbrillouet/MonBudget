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
        FilterAsTable GetFilterAsTable(FilterAsTableSelected filter);
        FilterAsiTable GetFilterAsiTable(FilterAsiTableSelected filter);
        FilterAsifTable GetFilterAsifTable(FilterAsifTableSelected filter);
        FilterUserTable GetFilterUserTable(FilterUserTableSelected filter);
        FilterOtfTable GetFilterOtfTable(FilterOtfTableSelected filter);
        FilterOtTable GetFilterOtTable(FilterOtTableSelected filter);
        FilterOperationTable GetFilterOperationTable(FilterOperationTableSelected filter);

    }

}
