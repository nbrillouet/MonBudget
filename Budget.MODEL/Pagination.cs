using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL
{

    public class Pagination
    {
        public string SortColumn { get; set; }
        public string SortDirection { get; set; }
        public int CurrentPage { get; set; }
        public int TotalPages { get; set; }
        public int TotalItems { get; set; }
        public int NbItemsPerPage { get; set; }
        public List<int> NbItemsPerPageOption { get; set; }

        public Pagination()
        {
            CurrentPage = 0;
            NbItemsPerPage = 15;
            SortColumn = "id";
            SortDirection = EnumSortDirection.asc.ToString();
            TotalItems = 0;
            TotalPages = 0;
            NbItemsPerPageOption = new List<int> { 15, 100, 200 };
        }
    }

    public enum EnumSortDirection {
        asc = 0,
        desc = 1
    }

}
