using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Finance;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class AccountStatementChartRepository : BaseRepository<AccountStatement>, IAccountStatementChartRepository
    {
        public AccountStatementChartRepository(BudgetContext context) : base(context)
        {

        }

        public List<AsEvolutionDto> GetAsChartEvolutionBrut(int idAccount, DateTime dateMin, DateTime dateMax)
        {
            //return Context.Set<AsEvolutionDto>()
            //    .FromSql("spGetSolde @idAccount,@dateStart,@dateEnd,@isWithITransfer",
            //        new SqlParameter("@idAccount", idAccount),
            //        new SqlParameter("@dateStart", dateMin),
            //        new SqlParameter("@dateEnd", dateMax))
            //    .ToListAsync();

            //var isWithITransfer = true;
            //return Context.Set<SoldeDto>()
            //   .FromSql("spGetSolde @idAccount,@dateStart,@dateEnd,@isWithITransfer",
            //       new SqlParameter("@idAccount", idAccount),
            //       new SqlParameter("@dateStart", dateMin),
            //       new SqlParameter("@dateEnd", dateMax),
            //       new SqlParameter("@isWithITransfer", isWithITransfer))
            //   .FirstOrDefault();
            return null;
        }

        



    }

}
