using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using Budget.MODEL.Dto;

namespace Budget.MODEL
{
    public class PagedList<T> : List<T>
    {
        public int CurrentPage { get; set; }
        public int TotalPages { get; set; }
        public int PageSize { get; set; }
        public int TotalCount { get; set; }

        public PagedList(List<T> items, int count, int pageNumber, int pageSize)
        {
            TotalCount = count;
            PageSize = pageSize;
            CurrentPage = pageNumber;
            TotalPages = (int)Math.Ceiling(count / (double)pageSize);
            this.AddRange(items);
        }

    }

    public class PagedList1<T> 
    {
        public Pagination1 Pagination { get; set; }
        public List<T> Datas { get; set; }
        //public SoldeDto Solde { get; set; }

        public PagedList1(List<T> items, Pagination1 pagination)
        {
            Pagination = pagination;
            Datas = items;
        }

    }

}
