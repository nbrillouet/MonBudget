using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL
{
        public class Pagination 
    {
        private const int MaxPageSize = 50;
        public int PageNumber { get; set; } = 1;

        private int pageSize = 10;
        public int PageSize
        {
            get { return pageSize; }
            set { pageSize = (value > MaxPageSize) ? MaxPageSize : value; }
        }

        public string SortColumn { get; set; } = "id";
        public string SortDirection { get; set; } = "desc";


    }

    public class Pagination1
    {
        public int? CurrentPage { get; set; }
        public int? ItemsPerPage { get; set; }
        public string SortColumn { get; set; }
        public string SortDirection { get; set; }
        public int? TotalItems { get; set; }
        public int? TotalPages { get; set; }
        


    }
}
