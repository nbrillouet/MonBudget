﻿using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Budget.DATA.Repositories
{
    //public class PagedList<T> : List<T>
    //{
    //    public int CurrentPage { get; set; }
    //    public int TotalPages { get; set; }
    //    public int PageSize { get; set; }
    //    public int TotalCount { get; set; }

    //    public PagedList(List<T> items, int count, int pageNumber, int pageSize)
    //    {
    //        TotalCount = count;
    //        PageSize = pageSize;
    //        CurrentPage = pageNumber;
    //        TotalPages = (int)Math.Ceiling(count / (double)pageSize);
    //        this.AddRange(items);
    //    }

    public class PagedListRepository<T> : List<T>
    {
        public static async Task<PagedList<T>> CreateAsync(IQueryable<T> source, int pageNumber, int pageSize)
        {
            var count = await source.CountAsync();
            var items = await source.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();

            return new PagedList<T>(items, count, pageNumber, pageSize);
        }

    }
}