using Budget.DATA.Repositories;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.SERVICE
{
    public class AccountStatementService : IAccountStatementService
    {
        private readonly IAccountStatementRepository _accountStatementRepository;

        public AccountStatementService(IAccountStatementRepository accountStatementRepository)
        {
            _accountStatementRepository = accountStatementRepository;
        }

        /// <summary>
        /// Nettoie le label operation provenant dun fichier
        /// </summary>
        /// <param name="operationLabel"></param>
        /// <returns></returns>
        public string GetOperationWork(string operationLabel)
        {
            string trimOperationLabel = operationLabel.ToUpper();
            trimOperationLabel = trimOperationLabel.Replace("'", "");
            trimOperationLabel = trimOperationLabel.Replace("*", "");
            trimOperationLabel = trimOperationLabel.Replace("-", "");
            trimOperationLabel = trimOperationLabel.Replace("/", "");

            return trimOperationLabel;
        }

        public List<AccountStatement> Save(List<AccountStatement> accountStatements)
        {

            return _accountStatementRepository.Save(accountStatements);
        }

        public AccountStatement InitForImport()
        {
            var accountStatement = new AccountStatement();
            accountStatement.IdAccount = (int)EnumAccount.Inconnu;
            accountStatement.IdOperation = (int)EnumOperation.Inconnu;
            accountStatement.IdOperationMethod = (int)EnumOperationMethod.Inconnu;
            accountStatement.IdOperationPlace = (int)EnumOperationPlace.Inconnu;
            return accountStatement;
        }


        public List<AccountStatement> GetAccountStatementsFull(List<AccountStatement> accountStatements, int idAccount)
        {
            return accountStatements.Where(x => x.Account.Id == idAccount).OrderBy(x => x.DateOperation).ToList();
        }

        public List<AccountStatement> GetAccountStatementsComplete(List<AccountStatement> accountStatements, int idAccount)
        {
            return accountStatements.Where(x => x.IdOperation != 1 && x.IdOperationMethod != 1 && x.Account.Id == idAccount).OrderBy(x => x.DateOperation).ToList();
        }

        public List<AccountStatement> GetAccountStatementsMethodLess(List<AccountStatement> accountStatements, int idAccount)
        {
            return accountStatements.Where(x => x.IdOperationMethod == 1 && x.Account.Id == idAccount).OrderBy(x => x.DateOperation).ToList();
        }

        public List<AccountStatement> GetAccountStatementsOperationLess(List<AccountStatement> accountStatements, int idAccount)
        {
            return accountStatements.Where(x => x.IdOperation == 1 && x.Account.Id == idAccount).OrderBy(x => x.DateOperation).ToList();
        }

        public double GetSum(DateTime startDate, DateTime endDate, int idMovement, int idAccount)
        {
            return _accountStatementRepository.GetSum(startDate, endDate, idMovement, idAccount);
        }


    }
}
