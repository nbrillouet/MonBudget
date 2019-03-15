using Budget.MODEL.Dto.Chart;
using Budget.MODEL.Dto.Finance;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public interface IAccountStatementChartService
    {
        AsChartEvolutionCdb GetAsChartEvolutionBrut(FilterAsTableSelected filterAsTableSelected);
        AsChartEvolutionCdb GetAsChartEvolutionNoIntTransfer(FilterAsTableSelected filterAsTableSelected);
    }
}
