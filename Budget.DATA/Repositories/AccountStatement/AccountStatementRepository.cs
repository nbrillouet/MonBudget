using Budget.MODEL.Database;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class AccountStatementRepository : BaseRepository<AccountStatement>, IAccountStatementRepository
    {
        public AccountStatementRepository(BudgetContext context) : base(context)
        {
        }

        public new int Create(AccountStatement accountStatement)
        {

            //Context.AccountStatement.Add(aStatement);
            if (accountStatement.Account != null)
                Context.Account.Attach(accountStatement.Account);
            if (accountStatement.OperationType != null)
                Context.OperationType.Attach(accountStatement.OperationType);
            if (accountStatement.OperationMethod != null)
                Context.OperationMethod.Attach(accountStatement.OperationMethod);
            if (accountStatement.AccountStatementImport != null)
                Context.AccountStatementImport.Attach(accountStatement.AccountStatementImport);
            if (accountStatement.Operation != null)
                Context.Operation.Attach(accountStatement.Operation);
            if (accountStatement.OperationPlace != null)
                Context.OperationPlace.Attach(accountStatement.OperationPlace);

            Context.AccountStatement.Add(accountStatement);
            Context.SaveChanges();

            return accountStatement.Id;
        }

        public List<AccountStatement> Save(List<AccountStatement> accountStatements)
        {
            //Enregistrement si la ligne d'operation n'existe pas deja en base, sinon flag duplicate
            foreach (var item in accountStatements)
            {
                var duplicate = Context.AccountStatement
                    .Where(x => x.DateOperation == item.DateOperation
                    && x.IdAccount == item.IdAccount
                    //&& x.IdMovement==item.IdMovement
                    //&& x.IdOperation==item.IdOperation
                    //&& x.IdOperationMethod==item.IdOperationMethod
                    && x.DateIntegration == item.DateIntegration
                    && x.LabelOperation == item.LabelOperation
                    && x.AmountOperation == item.AmountOperation).FirstOrDefault();

                if (duplicate == null)
                {
                    Create(item);
                }
            }

            return accountStatements;
        }

        public double GetSum(DateTime startDate, DateTime endDate, int idMovement, int idAccount)
        {
            var startDateParameter = new SqlParameter("@startDate", startDate);
            var endDateParameter = new SqlParameter("@endDate", endDate);
            var idMovementParameter = new SqlParameter("@idMovement", idMovement);
            var idAccountParameter = new SqlParameter("@idAccount", idAccount);

            var returnValue = new SqlParameter("@total", SqlDbType.Decimal)
            {
                Direction = ParameterDirection.Output,
                Precision = 30,
                Scale = 2
            };
            object[] parameters =
            {
                startDateParameter,
                endDateParameter,
                idMovementParameter,
                idAccountParameter,
                returnValue
            };

            string command = string.Format("exec spGetAccountStatementSum @startDate,@endDate,@idMovement,@idAccount,@total OUTPUT");
            Context.Database.ExecuteSqlCommand(command, parameters);
            //var toto = Context.Database.SqlQuery<decimal>(command, parameters); 
            double value;
            bool result = double.TryParse(returnValue.Value.ToString(), out value);
            if (!result)
                value = 0;

            return Convert.ToDouble(value);
        }


    }
}
