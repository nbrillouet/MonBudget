using Budget.HELPER;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
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

        public PagedList<AccountStatement> GetAsTable(FilterAsTableSelected filter)
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

            if (filter.OperationMethod != null && filter.OperationMethod.Count > 0)
            {
                var idOperationMethods = filter.OperationMethod.Select(x => x.Id).ToList();

                accountStatements = accountStatements.Where(x => idOperationMethods.Contains(x.IdOperationMethod));
            }

            if (filter.Operation != null && filter.Operation.Count > 0)
            {
                var idOperations = filter.Operation.Select(x => x.Id).ToList();

                accountStatements = accountStatements.Where(x => idOperations.Contains(x.IdOperation));
            }

            if (filter.OperationTypeFamily != null && filter.OperationTypeFamily.Count > 0)
            {
                var idOperationTypeFamilies = filter.OperationTypeFamily.Select(x => x.Id).ToList();

                accountStatements = accountStatements.Where(x => idOperationTypeFamilies.Contains(x.IdOperationTypeFamily));
            }

            if (filter.OperationType != null && filter.OperationType.Count > 0)
            {
                var idOperationTypes = filter.OperationType.Select(x => x.Id).ToList();

                accountStatements = accountStatements.Where(x => idOperationTypes.Contains(x.IdOperationType));
            }

            if (filter.DateIntegration != null && filter.DateIntegration.DateMin!=null)
            {
                accountStatements = accountStatements
                    .Where(x => x.DateIntegration >= filter.DateIntegration.DateMin);

                if (filter.DateIntegration != null && filter.DateIntegration.DateMax != null)
                {
                    accountStatements = accountStatements
                        .Where(x => x.DateIntegration <= filter.DateIntegration.DateMax);
                }
            }
            else if (filter.MonthYear != null)
            {
                var date = Convert.ToDateTime($"01/{filter.MonthYear.Month.Id}/{filter.MonthYear.Year}");
                var dateMin = DateHelper.GetFirstDayOfMonth(date);
                var dateMax = DateHelper.GetLastDayOfMonth(date);

                accountStatements = accountStatements
                        .Where(x => x.DateIntegration >= dateMin && x.DateIntegration <= dateMax);

            }
            if (filter.Amount != null && filter.Amount.NumberMin!=null)
            {
                accountStatements = accountStatements
                    .Where(x => x.AmountOperation >= filter.Amount.NumberMin);
            }
            if (filter.Amount != null && filter.Amount.NumberMax != null)
            {
                accountStatements = accountStatements
                    .Where(x => x.AmountOperation <= filter.Amount.NumberMax);
            }

            string columnSorted;
            if (filter.Pagination.SortColumn.Contains("operationTypeFamily"))
            {
                columnSorted = $"OperationType.{filter.Pagination.SortColumn}.Label";
            }
            else
                columnSorted = filter.Pagination.SortColumn.Contains("operation") ? $"{filter.Pagination.SortColumn}.Label" : filter.Pagination.SortColumn;

            if (filter.Pagination.SortDirection == "asc")
            {
                accountStatements = accountStatements.OrderBy(columnSorted);
            }
            else
            {
                accountStatements = accountStatements.OrderByDescending(columnSorted);
            }
            var results = PagedListRepository<AccountStatement>.Create(accountStatements, filter.Pagination);
            return results;
        }
                
        public AccountStatement GetAsDetail(int id)
        {
            var accountStatement = Context.AccountStatement
                .Include(x => x.Operation)
                .Include(x => x.OperationMethod)
                .Include(x => x.OperationType)
                .Include(x => x.OperationTypeFamily)
                .Include(x => x.OperationDetail)
                    .Include(x => x.OperationDetail.GMapAddress.gMapAdministrativeAreaLevel1)
                    .Include(x => x.OperationDetail.GMapAddress.gMapAdministrativeAreaLevel2)
                    .Include(x => x.OperationDetail.GMapAddress.gMapCountry)
                    .Include(x => x.OperationDetail.GMapAddress.gMapLocality)
                    .Include(x => x.OperationDetail.GMapAddress.gMapNeighborhood)
                    .Include(x => x.OperationDetail.GMapAddress.gMapPostalCode)
                    .Include(x => x.OperationDetail.GMapAddress.gMapRoute)
                    .Include(x => x.OperationDetail.GMapAddress.gMapStreetNumber)
                    .Include(x => x.OperationDetail.GMapAddress.gMapSublocalityLevel1)
                    .Include(x => x.OperationDetail.GMapAddress.gMapSublocalityLevel2)
                .Where(x => x.Id == id)
                .FirstOrDefault();

            return accountStatement;
        }

        public List<AccountStatement> GetByDateIdOperationTypeFamilyList(List<int> idOperationtypeFamilyList, DateTime dateMin,DateTime dateMax)
        {
            var results = Context.AccountStatement
                .Where(x => idOperationtypeFamilyList.Contains(x.IdOperationTypeFamily)
                    && x.DateIntegration >= dateMin 
                    && x.DateIntegration <= dateMax)
                .ToList();

            return results;
        }

        public List<AccountStatement> GetByDatePlanPosteReferenceList(List<PlanPosteReference> planPosteReferences, DateTime dateMin, DateTime dateMax)
        {
            var accountStatements = Context.AccountStatement
                .Include(x => x.Operation)
                .Include(x => x.OperationMethod)
                .Include(x => x.OperationType)
                .Include(x => x.OperationType.OperationTypeFamily)
                .AsQueryable();

            // IdReferenceTable
            //case 1: //OPERATION_TYPE_FAMILY
            var idOperationTypeFamilyList = planPosteReferences
                .Where(x => x.IdReferenceTable == 1)
                .Select(x => x.IdReference)
                .ToList();

            var resultOperationTypeFamilies = accountStatements
                .Where(x => idOperationTypeFamilyList.Contains(x.IdOperationTypeFamily)
                    && x.DateIntegration >= dateMin
                    && x.DateIntegration <= dateMax)

                .ToList();

            //case 2: // "OPERATION_TYPE"
            var idOperationTypeList = planPosteReferences
                .Where(x => x.IdReferenceTable == 2)
                .Select(x => x.IdReference)
                .ToList();

            var resultOperationTypes = accountStatements
                .Where(x => idOperationTypeList.Contains(x.IdOperationType)
                    && x.DateIntegration >= dateMin
                    && x.DateIntegration <= dateMax)
                .ToList();

            //case 3: //TODO OPERATION
            var idOperationList = planPosteReferences
               .Where(x => x.IdReferenceTable == 3)
               .Select(x => x.IdReference)
               .ToList();

            var resultOperations = accountStatements
                .Where(x => idOperationList.Contains(x.IdOperation)
                    && x.DateIntegration >= dateMin
                    && x.DateIntegration <= dateMax)
                .ToList();

            resultOperationTypeFamilies.AddRange(resultOperationTypes);
            resultOperationTypeFamilies.AddRange(resultOperations);

            return resultOperationTypeFamilies;
        }

        public Boolean Save(List<AccountStatement> accountStatements)
        {
            //Enregistrement si la ligne d'operation n'existe pas deja en base
            foreach (var item in accountStatements)
            {
                Save(item);
                //var duplicate = Context.AccountStatement
                //    .Where(x => x.DateOperation == item.DateOperation
                //    && x.IdAccount == item.IdAccount
                //    && x.IdMovement == item.IdMovement
                //    && x.IdOperation == item.IdOperation
                //    && x.IdOperationMethod == item.IdOperationMethod
                //    && x.DateIntegration == item.DateIntegration
                //    && x.LabelOperation == item.LabelOperation
                //    && x.AmountOperation == item.AmountOperation).FirstOrDefault();

                //if (duplicate == null)
                //{
                //    Create(item);
                //}
            }

            return true;
        }

        public AccountStatement Save(AccountStatement accountStatement)
        {
            var duplicate = Context.AccountStatement
                    .Where(x => x.DateOperation == accountStatement.DateOperation
                    && x.IdAccount == accountStatement.IdAccount
                    && x.IdMovement == accountStatement.IdMovement
                    && x.IdOperation == accountStatement.IdOperation
                    && x.IdOperationMethod == accountStatement.IdOperationMethod
                    && x.IdOperationDetail == accountStatement.IdOperationDetail
                    && x.DateIntegration == accountStatement.DateIntegration
                    && x.LabelOperation == accountStatement.LabelOperation
                    && x.AmountOperation == accountStatement.AmountOperation).FirstOrDefault();

            if (duplicate == null)
            {
                return Create(accountStatement);
            }

            return accountStatement;
        }

        public SoldeDto GetSolde(int? idUser, int? idAccount, DateTime dateMin, DateTime dateMax, bool isWithITransfer)
        {
            return Context.Set<SoldeDto>()
                .FromSql("[as].spGetSolde @idUser,@idAccount,@dateStart,@dateEnd,@isWithITransfer",
                    new SqlParameter("@idUser", idUser ?? (object)DBNull.Value),
                    new SqlParameter("@idAccount", idAccount ?? (object)DBNull.Value),
                    new SqlParameter("@dateStart", dateMin),
                    new SqlParameter("@dateEnd", dateMax),
                    new SqlParameter("@isWithITransfer", isWithITransfer))
                .FirstOrDefault();
        }

        public List<AccountStatement> GetAsInternalTransfer(int idUserGroup, int? idAccount, DateTime dateMin, DateTime dateMax)
        {
            //Recherche du virement interne dans referentiel
            var virementInterne = Context.OperationType
                .Where(x => x.Label == "Virement interne"
                && x.IdUserGroup == idUserGroup)
                .FirstOrDefault();

            //Recherche des virement internes dans as
            var its = Context.AccountStatement
                .Include(x => x.Operation)
                .Include(x => x.OperationMethod)
                .Include(x => x.OperationType)
                .Include(x => x.OperationType.OperationTypeFamily)
                .Include(x => x.Account.BankAgency)
                .AsQueryable();

            if (idAccount.HasValue)
            {
                its = its.Where(x => x.IdAccount == idAccount.Value);
            }
            its = its.Where(
                x => x.DateIntegration >= dateMin && 
                x.DateIntegration <= dateMax && 
                x.IdOperationType== virementInterne.Id);

            return its.ToList();
        }

        public AccountStatement GetAsInternalTransferCouple(int idUserGroup, int idAccountStatement)
        {
            return Context.Set<AccountStatement>()
               .FromSql("[as].spGetAsInternalTransferCouple @idAccountStatement,@idUserGroup",
                   new SqlParameter("@idAccountStatement", idAccountStatement),
                   new SqlParameter("@idUserGroup", idUserGroup))
               .FirstOrDefault();
        }
    }
}
