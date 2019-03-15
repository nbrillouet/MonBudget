using Budget.MODEL.Dto.Chart;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Dto.Finance
{
    [NotMapped]
    public class AsEvolutionDto
    {
        [Key]
        public int Id { get; set; }
        public string Month { get; set; }
        public int Year { get; set; }
        public double Credit { get; set; }
        public double Debit { get; set; }
        public double Balance { get; set; }
    }

    public class AsChartEvolutionCdb
    {
        public WidgetCardChartBar Debit { get; set; }
        public WidgetCardChartBar Credit { get; set; }
        public WidgetCardChartBar Balance { get; set; }
    }

    //public class AsChartEvolutionNoIntTransfer
    //{
    //    public WidgetCardChartBar Debit { get; set; }
    //    public WidgetCardChartBar Credit { get; set; }
    //    public WidgetCardChartBar Balance { get; set; }
    //}

    public class AsChartEvolution
    {
        public AsChartEvolutionCdb Brut { get; set; }
        public AsChartEvolutionCdb NoIntTransfer { get; set; }
    }

    public class AsChart
    {
        public AsChartEvolution AsChartEvolution { get; set; }

    }
}
