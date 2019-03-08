using Budget.MODEL.Dto.Finance;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IAccountStatementChartService
    {
        List<AsEvolutionDto> GetAsChartEvolutionBrut(FilterAsTableSelected filterAsTableSelected);
    }
}
