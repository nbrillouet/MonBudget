using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class FilterService : IFilterService
    {
        public IFilterDetailService FilterDetailService { get; }
        public IFilterTableService FilterTableService { get; }

        public FilterService(
            IFilterDetailService filterDetailService,
            IFilterTableService filterTableService
            )
        {
            FilterDetailService = filterDetailService;
            FilterTableService = filterTableService;
        }
    }
}
