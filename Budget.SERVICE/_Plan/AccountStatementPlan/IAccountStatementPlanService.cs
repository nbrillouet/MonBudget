using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IAccountStatementPlanService
    {
        void SaveByIdPlan(int idPlan);
        List<SelectColorDto> GetPlansByIdAccountStatement(int idAccountStatement,int year);
    }

}
