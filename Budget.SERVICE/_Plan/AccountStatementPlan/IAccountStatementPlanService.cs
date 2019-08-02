using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IAccountStatementPlanService
    {
        void SaveByIdPlan(int idPlan);
        List<SelectValueDto<string>> GetPlansByIdAccountStatement(int idAccountStatement,int year);
        List<AsForTableDto> GetAsNotInPlan(int idPlan, int idUserGroup);
    }

}
