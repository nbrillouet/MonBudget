using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    public class PlanForTrackingDto : PlanForTrackingValue
    {
        public Plan Plan { get; set; }
        //public double AmountReal { get; set; }
        //public double AmountPreview { get; set; }

        public List<PosteForTrackingDto> Postes { get; set; }
    }

    public class PlanTrackingAmountStoreDto : PlanForTrackingValue
    {
        public int Id { get; set; }
        public string Label { get; set; }
        //public double Amount { get; set; }
        //public double AmountPreview { get; set; }
    }

    public class PlanPosteForTrackingDto : PlanForTrackingPlanPosteValue
    {
        public int IdPlanPoste { get; set; }
        public string Label { get; set; }
        public List<PlanPosteUserForTrackingDto> PlanPosteUsers { get; set; }
    }

    public class PlanPosteUserForTrackingDto : PlanForTrackingValue
    {
        public string FirstName { get; set; }
        public double PercentagePart { get; set; }
    }

    public class PosteForTrackingDto : PlanForTrackingValue
    {
        public SelectDto Poste { get; set; }
        public List<PlanPosteForTrackingDto> PlanPostes { get; set; }
    }

    public class PlanForTrackingPlanPosteValue : PlanForTrackingValue
    {
        public bool IsAnnualPreview { get; set; }
    }

    public class PlanForTrackingValue
    {
        public double AmountReal { get; set; }
        public double AmountPreview { get; set; }
        public double GaugeValue { get; set; }
    }

    

}
