using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Finance;
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

        public List<AsEvolutionDto> GetAsChartEvolutionBrut(int idAccount, DateTime dateMin, DateTime dateMax)
        {
            return Context.Set<AsEvolutionDto>()
                .FromSql("[as].spGetAsChartEvolutionBrut @idAccount,@dateMin,@dateMax",
                    new SqlParameter("@idAccount", idAccount),
                    new SqlParameter("@dateMin", dateMin),
                    new SqlParameter("@dateMax", dateMax))
                .ToList();
        }

        public List<AsEvolutionDto> GetAsChartEvolutionNoIntTransfer(int idAccount, DateTime dateMin, DateTime dateMax)
        {
            return Context.Set<AsEvolutionDto>()
                .FromSql("[as].spGetAsChartEvolutionNoIntTransfer @idAccount,@dateMin,@dateMax",
                    new SqlParameter("@idAccount", idAccount),
                    new SqlParameter("@dateMin", dateMin),
                    new SqlParameter("@dateMax", dateMax))
                .ToList();
        }
        

    }

}
