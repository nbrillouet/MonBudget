using Budget.MODEL;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;
//FilterAsi
namespace Budget.SERVICE
{
    public interface IFilterService
    {
        FilterAsiTable GetFilterAsiTable(FilterAsiTableSelected filter);
        FilterAsifTable GetFilterAsifTable(FilterAsifTableSelected filter);


    }

}
