using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto.Chart
{
    public class WidgetCardChartBar
    {
        public BaseChart Chart { get; set; }
        public WidgetCardChartBarTitle Title { get; set; }
        public bool IsLoaded { get; set; }

        public WidgetCardChartBar()
        {
            Chart = new BaseChart();
            Title = new WidgetCardChartBarTitle();
            IsLoaded = false;
        }
    }

    public class WidgetCardChartBarTitle
    {
        public string Label { get; set; }
        public double AverageAmount { get; set; }
        public double RatioAmount { get; set; }
        public string RatioLabel { get; set; }
    }


}
