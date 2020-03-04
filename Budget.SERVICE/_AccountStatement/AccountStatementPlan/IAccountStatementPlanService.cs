using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IAccountStatementPlanService
    {
        List<AccountStatementPlan> GetByIdPlan(int IdPlan);
        void SaveByIdPlan(int idPlan);
        List<SelectValueDto<string>> GetPlansByIdAccountStatement(int idAccountStatement, int year);
    }
}
