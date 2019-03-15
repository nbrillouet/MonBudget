using Budget.MODEL.Database;
using Budget.MODEL.Dto.Finance;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.DATA.Repositories
{
    public interface IAccountStatementChartRepository : IBaseRepository<AccountStatement>
    {
        List<AsEvolutionDto> GetAsChartEvolutionBrut(int idAccount, DateTime dateMin, DateTime dateMax);
        List<AsEvolutionDto> GetAsChartEvolutionNoIntTransfer(int idAccount, DateTime dateMin, DateTime dateMax);
    }

}
