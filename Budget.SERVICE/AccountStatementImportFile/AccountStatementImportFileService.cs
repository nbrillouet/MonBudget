using Budget.DATA.Repositories;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;
using Budget.MODEL.Dto;
using AutoMapper;
using System.Linq;

namespace Budget.SERVICE
{
    public class AccountStatementImportFileService : IAccountStatementImportFileService
    {
        private readonly IAccountStatementImportFileRepository _accountStatementImportFileRepository;
        private readonly IMapper _mapper;

        private readonly IAccountService _accountService;

        public AccountStatementImportFileService(IAccountStatementImportFileRepository accountStatementImportFileRepository,
            IAccountService accountService,
            IMapper mapper)
        {
            _accountStatementImportFileRepository = accountStatementImportFileRepository;
            _accountService = accountService;
            _mapper = mapper;
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

        public AsifsGroupByAccount GetListDto(int idImport)
        {
            AsifsGroupByAccount asifsGroupByAccount = new AsifsGroupByAccount();
            asifsGroupByAccount.IdImport = idImport;
            
            //selectionner les account number distincts dans l'import
            var accountNumbers = GetDistinctAccountNumber(idImport);
            foreach (string accountNumber in accountNumbers)
            {
                AsifGroupByAccount asifGroups = new AsifGroupByAccount();
                asifGroups.Account = _accountService.GetAccountByNumber(accountNumber);

                asifGroups.AsifGroup = DispatchAccountStatements(idImport, asifGroups.Account.Id);

                asifsGroupByAccount.AsifGroupByAccountList.Add(asifGroups);
            }

            return asifsGroupByAccount;
        }

        private AsifGroup DispatchAccountStatements(int idImport, int idAccount)
        {
            //List<AccountStatementImportFile> accountStatementImportFiles = _accountStatementImportFileService.GetById(idAccountStatementImport, idAccount);
            AsifGroup asifGroup = new AsifGroup();

            List<AccountStatementImportFile> asifs = GetAsifFull(idImport, idAccount);
            asifGroup.AccountStatementsFull = _mapper.Map<IEnumerable<AsifForListDto>>(asifs).ToList();
            //accountStatementImportViewModels.AccountStatementsFull.AccountStatementType = EnumAccountStatementType.Full;

            asifs = GetAsifComplete(idImport, idAccount);
            asifGroup.AccountStatementsComplete = _mapper.Map<IEnumerable<AsifForListDto>>(asifs).ToList();
            //accountStatementImportViewModels.AccountStatementsComplete.AccountStatementType = EnumAccountStatementType.Complete;

            asifs = GetAsifMethodLess(idImport, idAccount);
            asifGroup.AccountStatementsMethodLess = _mapper.Map<IEnumerable<AsifForListDto>>(asifs).ToList();
            //accountStatementImportViewModels.AccountStatementsMethodLess.AccountStatementType = EnumAccountStatementType.MethodLess;

            asifs = GetAsifOperationLess(idImport, idAccount);
            asifGroup.AccountStatementsOperationLess = _mapper.Map<IEnumerable<AsifForListDto>>(asifs).ToList();
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
