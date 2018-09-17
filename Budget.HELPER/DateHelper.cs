using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Budget.HELPER
{
    public static class DateHelper
    {
        public static DateTime GetFirstDayOfMonth(DateTime date)
        {
            return new DateTime(date.Year, date.Month, 1);
        }

        public static DateTime GetLastDayOfMonth(DateTime date)
        {
            DateTime firstDayOfNextMonth = new DateTime(date.Year, date.Month, 1).AddMonths(1);
            return firstDayOfNextMonth.AddDays(-1);
        }
    }
}
