using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.MODEL.Dto
{

    public class PlanForTableComboFilter
    {
        public ComboSimple<SelectDto> Years { get; set; }
    }

    public class PlanForDetailDto
    {
        public Plan Plan { get; set; }
        public ComboMultiple<SelectDto> Users { get; set; }
        public List<PlanPosteDto> PlanPostes { get; set; }

        public PlanForDetailDto()
        {
            Users = new ComboMultiple<SelectDto>();
            PlanPostes = new List<PlanPosteDto>();
            //Postes = new PostesDto();
        }
    }
}
