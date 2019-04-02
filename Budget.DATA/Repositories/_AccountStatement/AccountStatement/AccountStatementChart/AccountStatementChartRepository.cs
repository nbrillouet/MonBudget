using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;


namespace Budget.DATA.Repositories
{
    public class AccountStatementChartRepository : BaseRepository<AccountStatement>, IAccountStatementChartRepository
    {
        public AccountStatementChartRepository(BudgetContext context) : base(context)
        {

        }

        public List<AsEvolutionCdbDto> GetAsChartEvolutionBrut(int? idAccount, DateTime dateMin, DateTime dateMax)
        {
            return Context.Set<AsEvolutionCdbDto>()
                .FromSql("[as].spGetAsChartEvolutionBrut @idAccount,@dateMin,@dateMax",
                    new SqlParameter("@idAccount", idAccount ?? (object)DBNull.Value),
                    new SqlParameter("@dateMin", dateMin),
                    new SqlParameter("@dateMax", dateMax))
                .ToList();
        }

        public List<AsEvolutionCdbDto> GetAsChartEvolutionNoIntTransfer(int? idAccount, DateTime dateMin, DateTime dateMax)
        {
            return Context.Set<AsEvolutionCdbDto>()
                .FromSql("[as].spGetAsChartEvolutionNoIntTransfer @idAccount,@dateMin,@dateMax",
                    new SqlParameter("@idAccount", idAccount ?? (object)DBNull.Value),
                    new SqlParameter("@dateMin", dateMin),
                    new SqlParameter("@dateMax", dateMax))
                .ToList();
        }

        public List<BaseChartData> GetAsChartEvolutionCustomOtf(int? idAccount,int idOperationTypeFamily, DateTime dateMin, DateTime dateMax)
        {
            return Context.Set<BaseChartData>()
                .FromSql("[as].spGetAsChartEvolutionCustomOtf @idAccount,@idOperationTypeFamily,@dateMin,@dateMax",
                    new SqlParameter("@idAccount", idAccount ?? (object)DBNull.Value),
                    new SqlParameter("@idOperationTypeFamily", idOperationTypeFamily),
                    new SqlParameter("@dateMin", dateMin),
                    new SqlParameter("@dateMax", dateMax))
                .ToList();
        }



    }

}
