using Budget.HELPER;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Filter;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Budget.DATA.Repositories
{
    public class AccountStatementRepository : BaseRepository<AccountStatement>, IAccountStatementRepository
    {
        public AccountStatementRepository(BudgetContext context) : base(context)
        {
        }

        public AccountStatement GetForDetailById(int id)
        {
            var accountStatement = Context.AccountStatement
                .Include(x => x.Operation)
                .Include(x => x.OperationMethod)
                .Include(x => x.OperationType)
                    .ThenInclude(x => x.OperationTypeFamily)
                .Where(x => x.Id == id)
                .FirstOrDefault();

            return accountStatement;

        }

        public PagedList1<AccountStatement> Get(FilterAccountStatement filter)
        {
            var accountStatements = Context.AccountStatement
                .Include(x => x.Operation)
                .Include(x => x.OperationMethod)
                .Include(x => x.OperationType)
                .Include(x => x.OperationType.OperationTypeFamily)
                .AsQueryable();

            if (filter.IdAccount != null)
            {
                accountStatements = accountStatements.Where(x => x.IdAccount == filter.IdAccount);
            }

            if (filter.OperationMethodSelected != null && filter.OperationMethodSelected.Count>0)
            {
                var idOperationMethods = filter.OperationMethodSelected.Select(x => x.Id).ToList();

                accountStatements = accountStatements.Where(x => idOperationMethods.Contains(x.IdOperationMethod));
            }

            if (filter.OperationSelected != null && filter.OperationSelected.Count > 0)
            {
                var idOperations = filter.OperationSelected.Select(x => x.Id).ToList();

                accountStatements = accountStatements.Where(x => idOperations.Contains(x.IdOperation));
            }

            if (filter.OperationTypeFamilySelected != null && filter.OperationTypeFamilySelected.Count > 0)
            {
                var idOperationTypeFamilies = filter.OperationTypeFamilySelected.Select(x => x.Id).ToList();

                accountStatements = accountStatements.Where(x => idOperationTypeFamilies.Contains(x.IdOperationTypeFamily));
            }

            if (filter.OperationTypeSelected != null && filter.OperationTypeSelected.Count > 0)
            {
                var idOperationTypes = filter.OperationTypeSelected.Select(x => x.Id).ToList();

                accountStatements = accountStatements.Where(x => idOperationTypes.Contains(x.IdOperationType));
            }

            if (filter.DateIntegrationMin != null)
            {
                accountStatements = accountStatements
                    .Where(x => x.DateIntegration>= filter.DateIntegrationMin);

                if (filter.DateIntegrationMax != null)
                {
                    accountStatements = accountStatements
                        .Where(x => x.DateIntegration <= filter.DateIntegrationMax);
                }
            }
            else if(filter.MonthYearSelected!=null)
            {
                var date = Convert.ToDateTime($"01/{filter.MonthYearSelected.Month.Id}/{filter.MonthYearSelected.Year}");
                var dateMin = DateHelper.GetFirstDayOfMonth(date);
                var dateMax = DateHelper.GetLastDayOfMonth(date);

                accountStatements = accountStatements
                        .Where(x => x.DateIntegration >= dateMin && x.DateIntegration<= dateMax);

            }
            if (filter.AmountMin != null)
            {
                accountStatements = accountStatements
                    .Where(x => x.AmountOperation>= filter.AmountMin);
            }
            if (filter.AmountMax != null)
            {
                accountStatements = accountStatements
                    .Where(x => x.AmountOperation <= filter.AmountMax);
            }

            string columnSorted;
            if (filter.Pagination.SortColumn.Contains("operationTypeFamily"))
            {
                columnSorted=$"OperationType.{filter.Pagination.SortColumn}.Label";
            }
            else
                columnSorted = filter.Pagination.SortColumn.Contains("operation") ? $"{filter.Pagination.SortColumn}.Label" : filter.Pagination.SortColumn;

            if (filter.Pagination.SortDirection == "asc")
            {
                //filter.Pagination.SortColumn
                accountStatements = accountStatements.OrderBy(columnSorted);
            }
            else
            {
                //filter.Pagination.SortColumn
                accountStatements = accountStatements.OrderByDescending(columnSorted);
            }
            var results= PagedListRepository<AccountStatement>.Create(accountStatements, filter.Pagination);
            return results;
        }

        public async Task<PagedList<AccountStatement>> GetAsync(FilterAccountStatement filter)
        {
            var accountStatements = Context.AccountStatement
                .Include(x => x.Operation)
                .Include(x => x.OperationMethod)
                .Include(x => x.OperationType)
                .Include(x => x.OperationType.OperationTypeFamily)
                .AsQueryable();

            if (filter.IdAccount != null)
            {
                accountStatements = accountStatements.Where(x => x.IdAccount == filter.IdAccount);
            }
            
            if (filter.Pagination.SortDirection == "asc")
                accountStatements = accountStatements.OrderBy(filter.Pagination.SortColumn);
            else
                accountStatements = accountStatements.OrderByDescending(filter.Pagination.SortColumn);

            return await PagedListRepository<AccountStatement>.CreateAsync(accountStatements, filter.Pagination.CurrentPage, filter.Pagination.ItemsPerPage);
        }

        public Boolean Save(List<AccountStatement> accountStatements)
        {
            //Enregistrement si la ligne d'operation n'existe pas deja en base
            foreach (var item in accountStatements)
            {
                var duplicate = Context.AccountStatement
                    .Where(x => x.DateOperation == item.DateOperation
                    && x.IdAccount == item.IdAccount
                    && x.IdMovement == item.IdMovement
                    && x.IdOperation == item.IdOperation
                    && x.IdOperationMethod == item.IdOperationMethod
                    && x.DateIntegration == item.DateIntegration
                    && x.LabelOperation == item.LabelOperation
                    && x.AmountOperation == item.AmountOperation).FirstOrDefault();

                if (duplicate == null)
                {
                    Create(item);
                }
            }

            return true;
        }

        //public double GetSum(DateTime startDate, DateTime endDate, int idMovement, int idAccount)
        //{
        //    var startDateParameter = new SqlParameter("@startDate", startDate);
        //    var endDateParameter = new SqlParameter("@endDate", endDate);
        //    var idMovementParameter = new SqlParameter("@idMovement", idMovement);
        //    var idAccountParameter = new SqlParameter("@idAccount", idAccount);

        //    var returnValue = new SqlParameter("@total", SqlDbType.Decimal)
        //    {
        //        Direction = ParameterDirection.Output,
        //        Precision = 30,
        //        Scale = 2
        //    };
        //    object[] parameters =
        //    {
        //        startDateParameter,
        //        endDateParameter,
        //        idMovementParameter,
        //        idAccountParameter,
        //        returnValue
        //    };

        //    string command = string.Format("exec spGetAccountStatementSum @startDate,@endDate,@idMovement,@idAccount,@total OUTPUT");
        //    Context.Database.ExecuteSqlCommand(command, parameters);
        //    //var toto = Context.Database.SqlQuery<decimal>(command, parameters); 
        //    double value;
        //    bool result = double.TryParse(returnValue.Value.ToString(), out value);
        //    if (!result)
        //        value = 0;

        //    return Convert.ToDouble(value);
        //}


    }
}
