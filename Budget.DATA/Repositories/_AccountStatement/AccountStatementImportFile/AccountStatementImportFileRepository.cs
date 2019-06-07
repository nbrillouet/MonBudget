using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Budget.DATA.Repositories
{
    public class AccountStatementImportFileRepository : BaseRepository<AccountStatementImportFile>, IAccountStatementImportFileRepository
    {
        public AccountStatementImportFileRepository(BudgetContext context) : base(context)
        {
        }

        public List<AccountStatementImportFile> GetByIdImport(int IdImport)
        {
            var results = Context.AccountStatementImportFile
                .Where(x => x.IdImport == IdImport)
                .Include(x => x.AccountStatementImport.User)
                .ToList();

            return results;

        }

        public AccountStatementImportFile GetAsifDetail(int id)
        {
            var accountStatementImportFile = Context.AccountStatementImportFile
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

            return  accountStatementImportFile;
        }

        public bool IsAccountStatementSaveable(int idImport)
        {
            var result = Context.AccountStatementImportFile
                .Where(x=>x.IdImport== idImport)
                .Where(x => x.EnumAsifState != EnumAsifState.Complete)
                .Any();

            return !result;
        }

        public List<string> GetDistinctAccountNumber(int idImport)
        {
            List<string> accounts = new List<string>();
            var accountList = Context.AccountStatementImportFile.Where(x => x.IdImport == idImport).Select(x => x.Account.Number).Distinct();
            foreach (var account in accountList)
            {
                accounts.Add(account);
            }
            return accounts;
            //Select(x => x.Account.Number)Distinct();
            //accountStatementImport.AccountStatementImportFiles.Select(x => x.Account.Number).Distinct();
        }

        public async Task<AccountStatementImportFile> GetForDetailByIdAsync(int id)
        {
            var accountStatementImportFile = Context.AccountStatementImportFile
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
                .FirstOrDefaultAsync();

            return await accountStatementImportFile;
        }

        public PagedList<AccountStatementImportFile> GetAsifTable(FilterAsifTableSelected filter)
        {
            var accountStatementImportFiles = Context.AccountStatementImportFile
                .Include(x => x.Operation)
                .Include(x => x.OperationMethod)
                .Include(x => x.OperationType)
                .Include(x => x.OperationTypeFamily)
                .AsQueryable();

            if (filter.IdImport != null)
            {
                accountStatementImportFiles = accountStatementImportFiles.Where(x => x.IdImport == filter.IdImport);
            }
            if (filter.Account != null)
            {
                accountStatementImportFiles = accountStatementImportFiles.Where(x => x.IdAccount == filter.Account.Id);
            }
            if (filter.AsifState != null)
            {
                accountStatementImportFiles = accountStatementImportFiles.Where(x => (int)x.EnumAsifState == filter.AsifState.Id);
            }
            if (filter.Pagination.SortDirection == "asc")
                accountStatementImportFiles = accountStatementImportFiles.OrderBy(filter.Pagination.SortColumn);
            else
                accountStatementImportFiles = accountStatementImportFiles.OrderByDescending(filter.Pagination.SortColumn);

            var results = PagedListRepository<AccountStatementImportFile>.Create(accountStatementImportFiles, filter.Pagination);

            return results;
        }

        //public async Task<PagedList<AccountStatementImportFile>> GetAsync(FilterAccountStatementImportFile filter)
        //{
        //    var accountStatementImportFiles = Context.AccountStatementImportFile
        //        .Include(x=>x.Operation)
        //        .Include(x=>x.OperationMethod)
        //        .Include(x=>x.OperationType)
        //        .Include(x => x.OperationTypeFamily)
        //        //.Include(x=> x.GMapAddress)
        //        .AsQueryable();

        //    if (filter.IdImport != null)
        //    {
        //        accountStatementImportFiles = accountStatementImportFiles.Where(x => x.IdImport == filter.IdImport);
        //    }
        //    if (filter.IdAccount != null)
        //    {
        //        accountStatementImportFiles = accountStatementImportFiles.Where(x => x.IdAccount == filter.IdAccount);
        //    }
        //    if (filter.IdAsifState != null)
        //    {
        //        accountStatementImportFiles = accountStatementImportFiles.Where(x => (int)x.EnumAsifState == filter.IdAsifState);
        //    }
        //    if (filter.SortDirection == "asc")
        //        accountStatementImportFiles = accountStatementImportFiles.OrderBy(filter.SortColumn);
        //    else
        //        accountStatementImportFiles = accountStatementImportFiles.OrderByDescending(filter.SortColumn);

        //    return await PagedListRepository<AccountStatementImportFile>.CreateAsync(accountStatementImportFiles, filter.PageNumber, filter.PageSize);
        //}

        public List<SelectDto> GetAsifStates (int idImport, int idAccount)
        {
            List<SelectDto> asifStates = new List<SelectDto>();

            if(HasAsifMethodLess(idImport, idAccount))
            {
                asifStates.Add(new SelectDto { Id = (int)EnumAsifState.MethodLess, Label = "Erreur méthode" });
            }
            if (HasAsifOperationLess(idImport, idAccount))
            {
                asifStates.Add(new SelectDto { Id = (int)EnumAsifState.OperationLess, Label = "Erreur opération" });
            }
            if (HasAsifComplete(idImport, idAccount))
            {
                asifStates.Add(new SelectDto { Id = (int)EnumAsifState.Complete, Label = "complet" });
            }

            return asifStates;
        }

        private Boolean HasAsifComplete(int idImport, int idAccount)
        {
            return Context.AccountStatementImportFile
                .Where(x => x.IdImport == idImport &&
                x.IdAccount == idAccount &&
                x.EnumAsifState == EnumAsifState.Complete)
                .Any();
        }

        private Boolean HasAsifOperationLess(int idImport, int idAccount)
        {
            return Context.AccountStatementImportFile
                .Where(x => x.IdImport == idImport &&
                x.IdAccount == idAccount &&
                x.EnumAsifState == EnumAsifState.OperationLess)
                .Any();
        }

        private Boolean HasAsifMethodLess(int idImport, int idAccount)
        {
            return Context.AccountStatementImportFile
                .Where(x => x.IdImport == idImport &&
                x.IdAccount == idAccount &&
                x.EnumAsifState == EnumAsifState.MethodLess)
                .Any();
        }

        //public List<AccountStatementImportFile> GetAsifFull(int idImport, int idAccount)
        //{
          
        //    var tat = Context.AccountStatementImport.Where(x => x.Id == 160);
        //    var toto =
        //     Context.AccountStatementImportFile
        //        .Where(x => x.IdImport == idImport &&
        //        x.IdAccount == idAccount)
        //        //.Include(x => x.AccountStatementImport)
        //        //.Include(x => x.OperationType.OperationTypeFamily)
        //        //.Include(x => x.Operation)
        //        //.Include(x => x.OperationMethod)
        //        //.Include(x => x.OperationPlace)
        //        .OrderBy(x => x.DateOperation).ToList();

        //    return toto;

        //}

        

        //public List<AccountStatementImportFile> GetAsifComplete(int idImport, int idAccount)
        //{
        //    return Context.AccountStatementImportFile
        //        .Where(x => x.IdImport == idImport &&
        //        x.IdAccount == idAccount &&
        //        x.EnumAsifState == EnumAsifState.Complete)
        //        .Include(x => x.OperationType.OperationTypeFamily)
        //        .Include(x => x.Operation)
        //        .Include(x => x.OperationMethod)
        //        .Include(x => x.GMapAddress)
        //        .OrderBy(x => x.DateOperation).ToList();
        //}
        //public List<AccountStatementImportFile> GetAsifMethodLess(int idImport, int idAccount)
        //{
        //    return Context.AccountStatementImportFile
        //        .Where(x => x.IdImport == idImport &&
        //        x.IdAccount == idAccount &&
        //        x.EnumAsifState == EnumAsifState.MethodLess)
        //        .Include(x => x.OperationType.OperationTypeFamily)
        //        .Include(x => x.Operation)
        //        .Include(x => x.OperationMethod)
        //        //.Include(x => x.GMapAddress)
        //        .OrderBy(x => x.DateOperation).ToList();
        //}
        //public List<AccountStatementImportFile> GetAsifOperationLess(int idImport, int idAccount)
        //{
        //    return Context.AccountStatementImportFile
        //        .Where(x => x.IdImport == idImport &&
        //        x.IdAccount == idAccount &&
        //        x.EnumAsifState == EnumAsifState.OperationLess)
        //        .Include(x => x.OperationType.OperationTypeFamily)
        //        .Include(x => x.Operation)
        //        .Include(x => x.OperationMethod)
        //        .Include(x => x.GMapAddress)
        //        .OrderBy(x => x.DateOperation).ToList();
        //}

        //public bool HasAccountStatementImportFileWihoutPlace(int IdImport, int idAccount)
        //{
        //    return Context.AccountStatementImportFile
        //        .Where(x => x.IdImport == IdImport
        //        && x.IdAccount == idAccount
        //        && x.IdOperationPlace == (int)EnumOperation.Inconnu
        //        && (x.IdOperationMethod == (int)EnumOperationMethod.PaiementCarte || x.IdOperationMethod == (int)EnumOperationMethod.RetraitCarte)).Any();
        //}

        //TODO : enlever les attach
        public new int CreateWithTran(AccountStatementImportFile accountStatementImportFile)
        {
            //var aStatement = accountStatement;
            //aStatement.Account = null;
            //aStatement.OperationType = null;
            //aStatement.OperationMethod = null;
            //aStatement.AccountStatementImport = null;
            //aStatement.Operation = null;
            //aStatement.OperationPlace = null;
            accountStatementImportFile.Id = 0;

            //Context.AccountStatement.Add(aStatement);
            if (accountStatementImportFile.Account != null)
                Context.Account.Attach(accountStatementImportFile.Account);
            if (accountStatementImportFile.OperationType != null)
                Context.OperationType.Attach(accountStatementImportFile.OperationType);
            if (accountStatementImportFile.OperationMethod != null)
                Context.OperationMethod.Attach(accountStatementImportFile.OperationMethod);
            if (accountStatementImportFile.AccountStatementImport != null)
                Context.AccountStatementImport.Attach(accountStatementImportFile.AccountStatementImport);
            if (accountStatementImportFile.Operation != null)
                Context.Operation.Attach(accountStatementImportFile.Operation);
            if (accountStatementImportFile.OperationDetail != null)
                Context.OperationDetail.Attach(accountStatementImportFile.OperationDetail);

            Context.AccountStatementImportFile.Add(accountStatementImportFile);

            //Context.SaveChanges();

            return accountStatementImportFile.Id;
        }

        public bool SaveWithTran(List<AccountStatementImportFile> accountStatementImportFiles)
        {

            foreach (AccountStatementImportFile item in accountStatementImportFiles)
            {
                AccountStatementImportFile accountStatementImportFile = item;
                accountStatementImportFile = UpdateAsifState(item);

                CreateWithTran(accountStatementImportFile);

            }

            return true;
        }

        public int Save(AccountStatementImportFile accountStatementImportFile)
        {
            accountStatementImportFile = UpdateAsifState(accountStatementImportFile);

            Update(accountStatementImportFile);
            return accountStatementImportFile.Id;
        }

        //public void UpdateAsifStates(int idImport)
        //{
        //    var asifs = GetByIdImport(idImport);
        //    foreach(var asif in asifs)
        //    {
        //        UpdateAsifState(asif);
        //        Update(asif);
        //    }

        //}

        public void UpdateAsifStates(AccountStatementImportFile asif)
        {
            UpdateAsifState(asif);
            Update(asif);
        }

        //private List<AccountStatementImportFile> GetByIdImport(int idImport)
        //{
        //    return Context.AccountStatementImportFile
        //        .Where(x => x.IdImport == idImport)
        //        .ToList();
        //}

        public AccountStatementImportFile UpdateAsifState(AccountStatementImportFile item)
        {
            //Flager la ligne d'operation si elle existe deja dans la table AccountStatement
            var duplicate = Context.AccountStatement
                .Where(x => x.DateOperation == item.DateOperation
                    && x.IdAccount == item.IdAccount
                    && x.IdMovement == item.IdMovement
                    && x.IdOperation == item.IdOperation
                    && x.IdOperationMethod == item.IdOperationMethod
                    && x.DateIntegration == item.DateIntegration
                    && x.LabelOperation == item.LabelOperation
                    && x.IdOperationDetail == item.IdOperationDetail
                    && x.AmountOperation == item.AmountOperation)
                .FirstOrDefault();

            //if (duplicate != null)
            //{
            //    item.IsDuplicated = true;
            //}
            item.IsDuplicated = duplicate!=null;

            //determination du State
            if (item.IdOperation != item.UnknownId.IdOperation && item.IdOperationMethod != item.UnknownId.IdOperationMethod && item.IdOperationDetail!= item.UnknownId.IdOperationDetail)
                item.EnumAsifState = EnumAsifState.Complete;
            else if (item.IdOperationMethod == item.UnknownId.IdOperationMethod)
                item.EnumAsifState = EnumAsifState.MethodLess;
            else //if (item.IdOperation == 1)
                item.EnumAsifState = EnumAsifState.OperationLess;

            //if (item.OperationDetail.IdGMapAddress == (int)EnumGMapAddress.Inconnu && (item.IdOperationMethod == (int)EnumOperationMethod.PaiementCarte || item.IdOperationMethod == (int)EnumOperationMethod.RetraitCarte))
            //    item.EnumAsifState = EnumAsifState.OperationLess;

            return item;
        }

        public List<AccountStatementImportFile> GetAsifsWithoutDuplicate(int idImport)
        {
            var results = Context.AccountStatementImportFile
                .Where(x=>x.IdImport== idImport)
                .Where(x => x.IsDuplicated == false)
                .ToList();

            return results;
        }
    }
}
