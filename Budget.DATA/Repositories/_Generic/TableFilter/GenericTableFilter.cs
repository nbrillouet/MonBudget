using Budget.HELPER;
using Budget.MODEL;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace Budget.DATA.Repositories
{
    public static class GenericTableFilter
    {
        public static IQueryable<T> GetGenericFilters<T, F>(IQueryable<T> context, F filter)
        {
            var list = filter.GetType().GetProperties();
            var accountStatement = Activator.CreateInstance(typeof(T));// new T();
            var asProperties = accountStatement.GetType().GetProperties();

            foreach (var item in list)
            {
                var value = item.GetValue(filter);
                if (value != null)
                {
                    var reference = asProperties.Where(x => x.Name == item.Name).FirstOrDefault();
                    if (reference != null)
                    {

                        if (value is int || value is int?)
                            context = context.Where(x => (int)x.GetValueByName(item.Name) == (int)value);
                        if (value is List<Select>)
                        {
                            List<Select> t = (List<Select>)value;
                            if (t != null && t.Count > 0)
                            {
                                var ids = t.Select(x => x.Id).ToList();
                                context = context.Where(x => ids.Contains((int)x.GetValueByName($"Id{item.Name}")));
                            }
                        }
                        if (value is FilterDateRange)
                        {
                            FilterDateRange filterDateRange = (FilterDateRange)value;
                            if (filterDateRange.DateMin != null)
                            {
                                context = context.Where(x => (DateTime)x.GetValueByName(item.Name) >= filterDateRange.DateMin);
                            }
                            if (filterDateRange.DateMax != null)
                            {
                                context = context.Where(x => (DateTime)x.GetValueByName(item.Name) <= filterDateRange.DateMax);
                            }
                        }
                        if (value is FilterNumberRange)
                        {
                            FilterNumberRange filterNumberRange = (FilterNumberRange)value;
                            if (filterNumberRange.NumberMin != null)
                            {
                                context = context.Where(x => (Double)x.GetValueByName(item.Name) >= filterNumberRange.NumberMin);
                            }
                            if (filterNumberRange.NumberMax != null)
                            {
                                context = context.Where(x => (Double)x.GetValueByName(item.Name) <= filterNumberRange.NumberMax);
                            }
                        }
                        if(value is MonthYear)
                        {
                            MonthYear monthYear = (MonthYear)value;
                            var date = Convert.ToDateTime($"01/{monthYear.Month.Id}/{monthYear.Year}");
                                var dateMin = DateHelper.GetFirstDayOfMonth(date);
                                var dateMax = DateHelper.GetLastDayOfMonth(date);

                            context = context.Where(x => (DateTime)x.GetValueByName("DateIntegration") >= dateMin && (DateTime)x.GetValueByName("DateIntegration") <= dateMax);
                        }
                        if (value is string)
                        {
                            string label = value.ToString().ToUpper();
                            context = context.Where(x => x.GetValueByName(item.Name).ToString().ToUpper().Contains(label)); //.ToString().Contains(label));
                        }

                    }
                    if (value is Pagination)
                    {
                        Pagination pagination = (Pagination)value;
                        var fieldsSorted = pagination.SortColumn.Split('-');
                        var columnSorted = String.Join(".", fieldsSorted.Select(o => o.ToString()).ToArray());
                        if (pagination.SortDirection == "asc")
                        {
                            context = context.OrderBy(columnSorted);
                        }
                        else
                        {
                            context = context.OrderByDescending(columnSorted);
                        }
                    }
                }

                //PropertyInfo p = type.GetProperty(item.Name);

            }

            //var fieldsSorted = filter.Pagination.SortColumn.Split('-');
            //var columnSorted = String.Join(".", fieldsSorted.Select(o => o.ToString()).ToArray());
            //if (filter.Pagination.SortDirection == "asc")
            //{
            //    accountStatements = accountStatements.OrderBy(columnSorted);
            //}
            //else
            //{
            //    accountStatements = accountStatements.OrderByDescending(columnSorted);
            //}

            return context;
        }
    }
}
