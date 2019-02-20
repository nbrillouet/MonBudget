using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IPlanPosteFrequencyService
    {
        List<PlanPosteFrequency> GetBaseByIdPlanPoste(int idPlanPoste);
        List<PlanPosteFrequencyForDetailDto> GetByIdPlanPoste(int idPlanPoste);
        List<PlanPosteFrequencyForDetailDto> InitForCreation();

        void DeleteByIdPlanPoste(int idPlanPoste);
        void Create(PlanPosteFrequency planPosteFrequency);
    }

}
