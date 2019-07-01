using Budget.MODEL.Database;
using Budget.MODEL.Dto.Select;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{
    public class PlanPosteDto
    {
        public SelectDto Poste { get; set; }
        public List<PlanPosteForListDto> List { get; set; }

        public PlanPosteDto()
        {
            List = new List<PlanPosteForListDto>();
        }
    }
       

    public class PlanPosteForListDto
    {
        public int Id { get; set; }
        public int IdPlan { get; set; }
        public int IdPoste { get; set; }
        public string Label { get; set; }
    }

    public class PlanPosteForDetailDto
    {
        public int Id { get; set; }
        public int IdPlan { get; set; }
        public int IdPoste { get; set; }
        public string Label { get; set; }
        public SelectDto Poste { get; set; }
        public ComboSimple<SelectDto> ReferenceTable { get; set; }
        public List<PlanPosteUserForDetailDto> PlanPosteUser {get;set;}
        public ComboMultiple<SelectGroupDto> PlanPosteReference { get; set; }
        //public ComboMultiple<SelectGroupDto> Accounts { get; set; }
        public List<PlanPosteFrequencyForDetailDto> PlanPosteFrequencies { get; set; }
        //public List<SelectDto> Frequencies { get; set; }

        public PlanPosteForDetailDto()
        {
            ReferenceTable = new ComboSimple<SelectDto>();
        }
    }
    
    public class PlanPosteUserForDetailDto
    {
        public int Id { get; set; }
        public int IdPlanUser { get; set; }
        public UserForLabelDto User { get; set; }
        public bool IsSalaryEstimatedPart { get; set; }
        public int Percentage { get; set; }
    }

    public class PlanPosteFrequencyForDetailDto
    {
        public int Id { get; set; }
        public Month Frequency { get; set; }
        public double PreviewAmount { get; set; }
    }

    //public class FrequencyDto
    //{
    //    public int Id { get; set; }
    //    public int MonthNumber { get; set; }
    //    public string monthLabel { get; set; }
    //    public string monthLabelShort {
    //        get {
    //            if (monthLabel == null)
    //                return null;
    //            if (monthLabel.Length >= 4)
    //                return monthLabel.Substring(0, 4);
    //            else
    //                return monthLabel;
                 
    //            }
            
    //    }
    //}
}
