using Budget.MODEL.Database;
using System.Collections.Generic;


namespace Budget.MODEL.Dto
{
    public class PlanPosteDto
    {
        public Select Poste { get; set; }
        public List<PlanPosteForTableDto> List { get; set; }

        public PlanPosteDto()
        {
            List = new List<PlanPosteForTableDto>();
        }
    }
       

    public class PlanPosteForTableDto
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
        public Select Poste { get; set; }
        public ComboSimple<Select> ReferenceTable { get; set; }
        public List<PlanPosteUserForDetailDto> PlanPosteUser {get;set;}
        public ComboMultiple<SelectGroupDto> PlanPosteReference { get; set; }
        public List<PlanPosteFrequencyForDetailDto> PlanPosteFrequencies { get; set; }

        public PlanPosteForDetailDto()
        {
            ReferenceTable = new ComboSimple<Select>();
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

    
}
