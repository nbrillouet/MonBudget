using Budget.MODEL.Database;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.DATA.Repositories
{
    public class AccountStatementImportFileRepository : BaseRepository<AccountStatementImportFile>, IAccountStatementImportFileRepository
    {
        public AccountStatementImportFileRepository(BudgetContext context) : base(context)
        {
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
        //public List<AccountStatementImportFile> GetById(int IdImport, int idAccount)
        //{
        //    return Context.AccountStatementImportFile.Where(x => x.IdImport == IdImport && x.IdAccount == idAccount).OrderBy(x=>x.DateOperation).ToList();
        //}
        public List<AccountStatementImportFile> GetAsifFull(int idImport, int idAccount)
        {
          
            var tat = Context.AccountStatementImport.Where(x => x.Id == 160);
            var toto =
             Context.AccountStatementImportFile
                .Where(x => x.IdImport == idImport &&
                x.IdAccount == idAccount)
                //.Include(x => x.AccountStatementImport)
                //.Include(x => x.OperationType.OperationTypeFamily)
                //.Include(x => x.Operation)
                //.Include(x => x.OperationMethod)
                //.Include(x => x.OperationPlace)
                .OrderBy(x => x.DateOperation).ToList();

            return toto;

        }
        public List<AccountStatementImportFile> GetAsifComplete(int idImport, int idAccount)
        {
            return Context.AccountStatementImportFile
                .Where(x => x.IdImport == idImport &&
                x.IdAccount == idAccount &&
                x.EnumAccountStatementImportFileState == EnumAccountStatementImportFileState.Complete)
                //.Include(x => x.AccountStatementImport)
                .Include(x => x.OperationType.OperationTypeFamily)
                .Include(x => x.Operation)
                .Include(x => x.OperationMethod)
                .Include(x => x.OperationPlace)
                .OrderBy(x => x.DateOperation).ToList();
        }
        public List<AccountStatementImportFile> GetAsifMethodLess(int idImport, int idAccount)
        {
            return Context.AccountStatementImportFile
                .Where(x => x.IdImport == idImport &&
                x.IdAccount == idAccount &&
                x.EnumAccountStatementImportFileState == EnumAccountStatementImportFileState.MethodLess)
                //.Include(x => x.AccountStatementImport)
                .Include(x => x.OperationType.OperationTypeFamily)
                .Include(x => x.Operation)
                .Include(x => x.OperationMethod)
                .Include(x => x.OperationPlace)
                .OrderBy(x => x.DateOperation).ToList();
        }
        public List<AccountStatementImportFile> GetAsifOperationLess(int idImport, int idAccount)
        {
            return Context.AccountStatementImportFile
                .Where(x => x.IdImport == idImport &&
                x.IdAccount == idAccount &&
                x.EnumAccountStatementImportFileState == EnumAccountStatementImportFileState.OperationLess)
                //.Include(x => x.AccountStatementImport)
                .Include(x => x.OperationType.OperationTypeFamily)
                .Include(x => x.Operation)
                .Include(x => x.OperationMethod)
                .Include(x => x.OperationPlace)
                .OrderBy(x => x.DateOperation).ToList();
        }
        public bool HasAccountStatementImportFileWihoutPlace(int IdImport, int idAccount)
        {
            return Context.AccountStatementImportFile
                .Where(x => x.IdImport == IdImport
                && x.IdAccount == idAccount
                && x.IdOperationPlace == (int)EnumOperation.Inconnu
                && (x.IdOperationMethod == (int)EnumOperationMethod.PaiementCarte || x.IdOperationMethod == (int)EnumOperationMethod.RetraitCarte)).Any();
        }
        public new int Create(AccountStatementImportFile accountStatementImportFile)
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
            if (accountStatementImportFile.OperationPlace != null)
                Context.OperationPlace.Attach(accountStatementImportFile.OperationPlace);

            Context.AccountStatementImportFile.Add(accountStatementImportFile);

            Context.SaveChanges();

            return accountStatementImportFile.Id;
        }

        public void Save(List<AccountStatementImportFile> accountStatementImportFiles)
        {

            foreach (AccountStatementImportFile item in accountStatementImportFiles)
            {
                AccountStatementImportFile accountStatementImportFile = item;
                accountStatementImportFile = GetFlag(item);

                Create(accountStatementImportFile);

            }

            //return accountStatementImportFiles;
        }

        public int Save(AccountStatementImportFile accountStatementImportFile)
        {
            accountStatementImportFile = GetFlag(accountStatementImportFile);

            Update(accountStatementImportFile);
            return accountStatementImportFile.Id;
        }

        private AccountStatementImportFile GetFlag(AccountStatementImportFile item)
        {
            //Flager la ligne d'operation si elle existe deja dans la table AccountStatement
            var duplicate = Context.AccountStatement
                .Where(x => x.DateOperation == item.DateOperation
                && x.IdAccount == item.IdAccount
                //&& x.IdMovement==item.IdMovement
                //&& x.IdOperation==item.IdOperation
                //&& x.IdOperationMethod==item.IdOperationMethod
                && x.DateIntegration == item.DateIntegration
                && x.LabelOperation == item.LabelOperation
                && x.AmountOperation == item.AmountOperation).FirstOrDefault();

            if (duplicate != null)
            {
                item.IsDuplicated = true;
            }

            //determination du State
            if (item.IdOperation != 1 && item.IdOperationMethod != 1)
                item.EnumAccountStatementImportFileState = EnumAccountStatementImportFileState.Complete;
            else if (item.IdOperationMethod == 1)
                item.EnumAccountStatementImportFileState = EnumAccountStatementImportFileState.MethodLess;
            else if (item.IdOperation == 1)
                item.EnumAccountStatementImportFileState = EnumAccountStatementImportFileState.OperationLess;

            if (item.IdOperationPlace == (int)EnumOperationPlace.Inconnu && (item.IdOperationMethod == (int)EnumOperationMethod.PaiementCarte || item.IdOperationMethod == (int)EnumOperationMethod.RetraitCarte))
                item.EnumAccountStatementImportFileState = EnumAccountStatementImportFileState.OperationLess;

            return item;
        }
    }
}
