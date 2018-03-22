using Budget.DATA.Repositories;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;
using Budget.MODEL.Dto;

namespace Budget.SERVICE
{
    public class AccountStatementImportFileService : IAccountStatementImportFileService
    {
        private readonly IAccountStatementImportFileRepository _accountStatementImportFileRepository;

        private readonly IAccountService _accountService;

        public AccountStatementImportFileService(IAccountStatementImportFileRepository accountStatementImportFileRepository,
            IAccountService accountService)
        {
            _accountStatementImportFileRepository = accountStatementImportFileRepository;
            _accountService = accountService;
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

        public AsifForListDto GetListDto(int idImport)
        {
            AsifForListDto asifForListDto = new AsifForListDto();
            asifForListDto.IdImport = idImport;
            
            //selectionner les account number distincts dans l'import
            var accountNumbers = GetDistinctAccountNumber(idImport);
            foreach (string accountNumber in accountNumbers)
            {
                AsifGroupByAccount asifGroups = new AsifGroupByAccount();
                asifGroups.Account = _accountService.GetAccountByNumber(accountNumber);

                asifGroups.AsifGroup = DispatchAccountStatements(idImport, asifGroups.Account.Id);

                asifForListDto.AsifGroupByAccountList.Add(asifGroups);
            }

            return asifForListDto;
        }

        private AsifGroup DispatchAccountStatements(int idImport, int idAccount)
        {
            //List<AccountStatementImportFile> accountStatementImportFiles = _accountStatementImportFileService.GetById(idAccountStatementImport, idAccount);
            AsifGroup asifGroup = new AsifGroup();

            asifGroup.AccountStatementsFull = GetAsifFull(idImport, idAccount);
            //accountStatementImportViewModels.AccountStatementsFull.AccountStatementType = EnumAccountStatementType.Full;

            asifGroup.AccountStatementsComplete = GetAsifComplete(idImport, idAccount);
            //accountStatementImportViewModels.AccountStatementsComplete.AccountStatementType = EnumAccountStatementType.Complete;

            asifGroup.AccountStatementsMethodLess = GetAsifMethodLess(idImport, idAccount);
            //accountStatementImportViewModels.AccountStatementsMethodLess.AccountStatementType = EnumAccountStatementType.MethodLess;

            asifGroup.AccountStatementsOperationLess = GetAsifOperationLess(idImport, idAccount);
            //accountStatementImportViewModels.AccountStatementsOperationLess.AccountStatementType = EnumAccountStatementType.OperationLess;

            return asifGroup;

        }

        private List<AccountStatementImportFile> GetAsifFull(int idImport, int idAccount)
        {
            return _accountStatementImportFileRepository.GetAsifFull(idImport, idAccount);
        }

        private List<AccountStatementImportFile> GetAsifComplete(int idImport, int idAccount)
        {
            return _accountStatementImportFileRepository.GetAsifComplete(idImport, idAccount);
        }

        private List<AccountStatementImportFile> GetAsifMethodLess(int idImport, int idAccount)
        {
            return _accountStatementImportFileRepository.GetAsifMethodLess(idImport, idAccount);
        }

        private List<AccountStatementImportFile> GetAsifOperationLess(int idImport, int idAccount)
        {
            return _accountStatementImportFileRepository.GetAsifOperationLess(idImport, idAccount);
        }

        public bool HasAccountStatementImportFileWihoutPlace(int IdImport, int idAccount)
        {
            return _accountStatementImportFileRepository.HasAccountStatementImportFileWihoutPlace(IdImport, idAccount);
        }
    }
}
