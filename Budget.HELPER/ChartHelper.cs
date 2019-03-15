using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Budget.HELPER
{
    public static class ChartHelper
    {
        public static string GetChartColor(string Color)
        {
            switch (Color)
            {
                case "Red":
                    return "#DC2C18";
                case "Green":
                    return "#4CAF50";
                default:
                    return "#DEE1E6";
            }
        }
    }
}
