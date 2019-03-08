﻿using Budget.HELPER;
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

        //public AccountStatement GetForDetailById(int id)
        //{
        //    var accountStatement = Context.AccountStatement
        //        .Include(x => x.Operation)
        //        .Include(x => x.OperationMethod)
        //        .Include(x => x.OperationType)
        //            .ThenInclude(x => x.OperationTypeFamily)
        //        .Include(x=>x.OperationDetail)
        //        .Include(x=>x.OperationDetail.GMapAddress.gMapAdministrativeAreaLevel1)
        //        .Include(x => x.OperationDetail.GMapAddress.gMapAdministrativeAreaLevel2)
        //        .Include(x => x.OperationDetail.GMapAddress.gMapCountry)
        //        .Include(x => x.OperationDetail.GMapAddress.gMapLocality)
        //        .Include(x => x.OperationDetail.GMapAddress.gMapNeighborhood)
        //        .Include(x => x.OperationDetail.GMapAddress.gMapPostalCode)
        //        .Include(x => x.OperationDetail.GMapAddress.gMapRoute)
        //        .Include(x => x.OperationDetail.GMapAddress.gMapStreetNumber)
        //        .Include(x => x.OperationDetail.GMapAddress.gMapSublocalityLevel1)
        //        .Include(x => x.OperationDetail.GMapAddress.gMapSublocalityLevel2)
        //        .Where(x => x.Id == id)
        //        .FirstOrDefault();

        //    return accountStatement;

        //}

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

            if (filter.OperationMethods != null && filter.OperationMethods.Count > 0)
            {
                var idOperationMethods = filter.OperationMethods.Select(x => x.Id).ToList();

                accountStatements = accountStatements.Where(x => idOperationMethods.Contains(x.IdOperationMethod));
            }

            if (filter.Operations != null && filter.Operations.Count > 0)
            {
                var idOperations = filter.Operations.Select(x => x.Id).ToList();

                accountStatements = accountStatements.Where(x => idOperations.Contains(x.IdOperation));
            }

            if (filter.OperationTypeFamilies != null && filter.OperationTypeFamilies.Count > 0)
            {
                var idOperationTypeFamilies = filter.OperationTypeFamilies.Select(x => x.Id).ToList();

                accountStatements = accountStatements.Where(x => idOperationTypeFamilies.Contains(x.IdOperationTypeFamily));
            }

            if (filter.OperationTypes != null && filter.OperationTypes.Count > 0)
            {
                var idOperationTypes = filter.OperationTypes.Select(x => x.Id).ToList();

                accountStatements = accountStatements.Where(x => idOperationTypes.Contains(x.IdOperationType));
            }

            if (filter.DateIntegrationMin != null)
            {
                accountStatements = accountStatements
                    .Where(x => x.DateIntegration >= filter.DateIntegrationMin);

                if (filter.DateIntegrationMax != null)
                {
                    accountStatements = accountStatements
                        .Where(x => x.DateIntegration <= filter.DateIntegrationMax);
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
            if (filter.AmountMin != null)
            {
                accountStatements = accountStatements
                    .Where(x => x.AmountOperation >= filter.AmountMin);
            }
            if (filter.AmountMax != null)
            {
                accountStatements = accountStatements
                    .Where(x => x.AmountOperation <= filter.AmountMax);
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

        public SoldeDto GetSolde(int idAccount, DateTime dateMin, DateTime dateMax, bool isWithITransfer)
        {
           // var idAccountParameter = new SqlParameter("@idAccount", soldeDto.IdAccount);
           // var dateStartParameter = new SqlParameter("@dateStart", soldeDto.DateStart);
           // //dateStartParameter.Value = soldeDto.DateStart;
           // var dateEndParameter = new SqlParameter("@dateEnd", soldeDto.DateEnd);
           // //dateEndParameter.Value = soldeDto.DateEnd;
           // var isWithITransferParameter = new SqlParameter("@isWithITransfer", soldeDto.IsWithITransfer);

           // object[] parameters =
           //{
           //     idAccountParameter,
           //     dateStartParameter,
           //     dateEndParameter,
           //     isWithITransferParameter
           // };

            return Context.Set<SoldeDto>()
                //.FromSql("spGetSolde @idAccount,@dateStart,@dateEnd,@isWithITransfer", parameters)
                .FromSql("spGetSolde @idAccount,@dateStart,@dateEnd,@isWithITransfer",
                    //parameters : new[] { idAccount , dateMin , dateMax , isWithITransfer })
                    new SqlParameter("@idAccount", idAccount),
                    new SqlParameter("@dateStart", dateMin),
                    new SqlParameter("@dateEnd", dateMax),
                    new SqlParameter("@isWithITransfer", isWithITransfer))
                .FirstOrDefault();
        }
        //public SoldeDto GetSolde(SoldeDto soldeDto)
        //{
        //    var idAccountParameter = new SqlParameter("@idAccount", soldeDto.IdAccount);
        //    var dateStartParameter = new SqlParameter("@dateStart", soldeDto.DateStart);
        //    //dateStartParameter.Value = soldeDto.DateStart;
        //    var dateEndParameter = new SqlParameter("@dateEnd", soldeDto.DateEnd);
        //    //dateEndParameter.Value = soldeDto.DateEnd;
        //    var isWithITransferParameter = new SqlParameter("@isWithITransfer", soldeDto.IsWithITransfer);

        //    object[] parameters =
        //   {
        //        idAccountParameter,
        //        dateStartParameter,
        //        dateEndParameter,
        //        isWithITransferParameter
        //    };

        //    return Context.SoldeDto
        //        //.FromSql("spGetSolde @idAccount,@dateStart,@dateEnd,@isWithITransfer", parameters)
        //        .FromSql("spGetSolde @idAccount,@dateStart,@dateEnd,@isWithITransfer", 
        //            new SqlParameter("@idAccount", soldeDto.IdAccount),
        //            new SqlParameter("@dateStart", soldeDto.DateStart),
        //            new SqlParameter("@dateEnd", soldeDto.DateEnd),
        //            new SqlParameter("@isWithITransfer", soldeDto.IsWithITransfer))
        //        .FirstOrDefault();

        //}

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
