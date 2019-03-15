using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE._Helpers
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

        public static int CalculateAge(this DateTime theDateTime)
        {
            var age = DateTime.Today.Year - theDateTime.Year;
            if (theDateTime.AddYears(age) > DateTime.Today)
                age--;

            return age;
        }

        public static string GetLabelMonthShort(string monthNumber)
        {
            switch (monthNumber)
            {
                case "01":
                    return "Jan";
                case "02":
                    return "Fev";
                case "03":
                    return "Mar";
                case "04":
                    return "Avr";
                case "05":
                    return "Mai";
                case "06":
                    return "Jui";
                case "07":
                    return "Juil";
                case "08":
                    return "Aou";
                case "09":
                    return "Sep";
                case "10":
                    return "Oct";
                case "11":
                    return "Nov";
                case "12":
                    return "Dec";
                default:
                    throw new Exception("No Month for this");
            }
        }
    }
}
