using Budget.DATA.Repositories;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class AccountStatementImportFileService : IAccountStatementImportFileService
    {
        private readonly IAccountStatementImportFileRepository _accountStatementImportFileRepository;

        public AccountStatementImportFileService(IAccountStatementImportFileRepository accountStatementImportFileRepository)
        {
            _accountStatementImportFileRepository = accountStatementImportFileRepository;
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
        public AccountStatementImportFile GetById(int IdAccountStatementImportFile)
        {
            return _accountStatementImportFileRepository.GetById(IdAccountStatementImportFile);
        }
        public List<string> GetDistinctAccountNumber(int idImport)
        {
            return _accountStatementImportFileRepository.GetDistinctAccountNumber(idImport);
        }
        public void Save(List<AccountStatementImportFile> accountStatementImportFiles)
        {

            _accountStatementImportFileRepository.Save(accountStatementImportFiles);
        }

        public int Save(AccountStatementImportFile accountStatementImportFile)
        {

            return _accountStatementImportFileRepository.Save(accountStatementImportFile);
        }

        public AccountStatementImportFile InitForImport()
        {
            var accountStatementImportFile = new AccountStatementImportFile();
            accountStatementImportFile.IdAccount = (int)EnumAccount.Inconnu;
            accountStatementImportFile.IdOperation = (int)EnumOperation.Inconnu;
            accountStatementImportFile.IdOperationMethod = (int)EnumOperationMethod.Inconnu;
            accountStatementImportFile.IdOperationPlace = (int)EnumOperationPlace.Inconnu;
            return accountStatementImportFile;
        }

        //public List<AccountStatementImportFile> GetById(int IdImport, int idAccount)
        //{
        //    return _accountStatementImportFileRepository.GetById(IdImport, idAccount);
        //}

        public List<AccountStatementImportFile> GetAccountStatementImportFileFull(int idImport, int idAccount)
        {
            return _accountStatementImportFileRepository.GetAccountStatementImportFileFull(idImport, idAccount);
        }

        public List<AccountStatementImportFile> GetAccountStatementImportFileComplete(int idImport, int idAccount)
        {
            return _accountStatementImportFileRepository.GetAccountStatementImportFileComplete(idImport, idAccount);

        }

        public List<AccountStatementImportFile> GetAccountStatementImportFileMethodLess(int idImport, int idAccount)
        {
            return _accountStatementImportFileRepository.GetAccountStatementImportFileMethodLess(idImport, idAccount);
        }

        public List<AccountStatementImportFile> GetAccountStatementImportFileOperationLess(int idImport, int idAccount)
        {
            return _accountStatementImportFileRepository.GetAccountStatementImportFileOperationLess(idImport, idAccount);
        }

        public bool HasAccountStatementImportFileWihoutPlace(int IdImport, int idAccount)
        {
            return _accountStatementImportFileRepository.HasAccountStatementImportFileWihoutPlace(IdImport, idAccount);
        }
    }
}
