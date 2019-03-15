using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto.Chart
{
    public class BaseChart
    {
        public List<DataSet> DataSets { get; set; }
        public List<SelectDto> Labels { get; set; }
        public Options Options { get; set; }
        public List<Color> Colors {get; set; }

        public BaseChart()
        {
            DataSets = new List<DataSet>();
            Labels = new List<SelectDto>();
            Colors = new List<Color>();
            Options = new Options();
        }
    }

    public class DataSet
    {
        public string Label { get; set; }
        public List<double> Data { get; set; }
        public string BackgroundColor { get; set; }
    }
    
    public class Color
    {
        public List<string> BackgroundColor { get; set; }
    }

    public class Options
    {
        public Scales Scales { get; set; }

        public Options()
        {
            Scales = new Scales();
        }
    }

    public class Scales
    {
        public List<YAxe> YAxes { get; set; }

        public Scales()
        {
            YAxes = new List<YAxe>();
        }
    }

    public class YAxe
    {
        public bool Display { get; set; }
        public Tick Ticks { get; set; }

        public YAxe()
        {
            Ticks = new Tick();
            Display = false;
        }
    }

    public class Tick
    {
        public Boolean BeginAtZero { get; set; }
        public Boolean Display { get; set; }
        public double Min { get; set; }
        public double Max { get; set; }
        public double Steps { get; set; }
        public double StepValue { get; set; }

        public Tick ()
        {
            BeginAtZero = true;
            Display = false;
            Min = 0;
            Max = 0;
            Steps = 10000;
            StepValue = 10000;
            
        }
    }

    public enum EnumChartBarColor
    {
        Red = 1,
        Green = 2
    }

    public enum EnumAmountState
    {
        Credit = 1,
        Debit = 2,
        Balance = 3
    }


}
