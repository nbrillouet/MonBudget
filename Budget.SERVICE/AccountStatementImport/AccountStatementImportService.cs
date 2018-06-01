using Budget.DATA.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using Budget.MODEL;
using Budget.MODEL.Database;
using System.IO;
using System.Threading.Tasks;
using System.Linq;
using System.Globalization;

namespace Budget.SERVICE
{
    public class AccountStatementImportService : IAccountStatementImportService
    {
        private readonly IAccountStatementImportRepository _accountStatementImportRepository;
        private readonly IBankFileDefinitionService _bankFileDefinitionService;
        private readonly IAccountStatementImportFileService _accountStatementImportFileService;
        private readonly IAccountStatementService _accountStatementService;
        private readonly IBankService _bankService;
        private readonly IAccountService _accountService;
        private readonly IOperationMethodService _operationMethodService;
        private readonly IOperationService _operationService;
        private readonly IOperationTypeService _operationTypeService;
        private readonly IOperationPlaceService _operationPlaceService;
        private readonly IParameterService _parameterService;

        public AccountStatementImportService(IAccountStatementImportRepository accountStatementImportRepository,
            IBankFileDefinitionService bankFileDefinitionService,
            IBankService bankService,
            IAccountStatementImportFileService accountStatementImportFileService,
            IAccountStatementService accountStatementService,
            IAccountService accountService,
            IOperationMethodService operationMethodService,
            IOperationService operationService,
            IOperationTypeService operationTypeService,
            IOperationPlaceService operationPlaceService,
            IParameterService parameterService)
        {
            _accountStatementImportRepository = accountStatementImportRepository;
            _bankFileDefinitionService = bankFileDefinitionService;
            _bankService = bankService;
            _accountStatementImportFileService = accountStatementImportFileService;
            _accountStatementService = accountStatementService;
            _accountService = accountService;
            _operationMethodService = operationMethodService;
            _operationService = operationService;
            _operationTypeService = operationTypeService;
            _operationPlaceService = operationPlaceService;
            _parameterService = parameterService;
        }

        public Task<PagedList<AccountStatementImport>> GetAsync(FilterAccountStatementImport filter)
        {
            var results = _accountStatementImportRepository.GetAsync(filter);
            return results;
        }

        public Task<List<Bank>> GetDistinctBankAsync(int idUser)
        {
            return _accountStatementImportRepository.GetDistinctBankAsync(idUser);
        }








        //private readonly IBankFileDefinitionService _bankFileDefinitionService;
        //private readonly IOperationMethodService _operationMethodService;
        //private readonly IOperationService _operationService;
        //private readonly IOperationPlaceService _operationPlaceService;
        //private readonly IOperationPlaceLinkService _operationPlaceLinkService;
        //private readonly IAccountStatementService _accountStatementService;
        //private readonly IOperationTypeService _operationTypeService;
        //private readonly IParameterService _parameterService;
        //private readonly IAccountStatementImportFileService _accountStatementImportFileService;

        //public AccountStatementImportService(IAccountStatementImportRepository accountStatementImportRepository,
        //                                        IBankService bankService,
        //                                        IBankFileDefinitionService bankFileDefinitionService,
        //                                        IAccountService accountService,
        //                                        IOperationMethodService operationMethodService,
        //                                        IOperationService operationService,
        //                                        IOperationPlaceService operationPlaceService,
        //                                        IOperationPlaceLinkService operationPlaceLinkService,
        //                                        IAccountStatementService accountStatementService,
        //                                        IOperationTypeService operationTypeService,
        //                                        IParameterService parameterService,
        //                                        IAccountStatementImportFileService accountStatementImportFileService)
        //{
        //    _accountStatementImportRepository = accountStatementImportRepository;
        //    _operationMethodService = operationMethodService;
        //    _operationService = operationService;
        //    _bankService = bankService;
        //    _bankFileDefinitionService = bankFileDefinitionService;
        //    _accountService = accountService;
        //    _operationPlaceService = operationPlaceService;
        //    _operationPlaceLinkService = operationPlaceLinkService;
        //    _accountStatementService = accountStatementService;
        //    _operationTypeService = operationTypeService;
        //    _parameterService = parameterService;
        //    _accountStatementImportFileService = accountStatementImportFileService;
        //}

        //public int Create(AccountStatementImport entity)
        //{
        //    return _accountStatementImportRepository.Create(entity);
        //}

        public AccountStatementImport ImportFile(StreamReader reader, User user)
        {
            Boolean firstLine = true;

            //verifier en tete fichier selon banque: rejet ou definit la banque
            while (!reader.EndOfStream)
            {
                var line = reader.ReadLine();
                var values = line.Split(';');

                if (firstLine)
                {
                    if (isBPVFFile(values))
                    {
                        return ImportFileBPVF(reader, user);
                    }
                }
                else
                {
                    throw new Exception("Type de fichier incorrect");
                }
                firstLine = false;
            }
            return null;
        }

        private Boolean isBPVFFile(string[] header)
        {
            List<BankFileDefinition> bankFileDefinitions = _bankFileDefinitionService.GetByIdBank((int)EnumBank.BPVF);
            if (header.Length == bankFileDefinitions.Count)
            {
                for (int i = 0; i < bankFileDefinitions.Count; i++)
                {
                    if (header[i] != bankFileDefinitions[i].LabelField)
                        return false;
                }
            }
            else
                return false;

            return true;
        }

        private AccountStatementImport ImportFileBPVF(StreamReader reader, User user)
        {
            Bank bank = _bankService.GetById((int)EnumBank.BPVF);
            AccountStatementImport accountStatementImport = new AccountStatementImport
            {
                Bank = _bankService.GetById((int)EnumBank.BPVF),
                IdBank = (int)EnumBank.BPVF,
                FileImport = String.Format("{0}_{1}.csv", DateTime.Now.ToString("yyyyMMdd"), bank.LabelBankShort),
                DateImport = DateTime.Now,
                File = reader,
                IdUser = user.Id,
                User = user
            };

            List<AccountStatementImportFile> accountStatementImportFiles = new List<AccountStatementImportFile>();
            int currentLineNumber = 0;
            while (!reader.EndOfStream)
            {
                var line = reader.ReadLine();
                var values = line.Split(';');

                AccountStatementImportFile accountStatementImportFile = _accountStatementImportFileService.InitForImport();
                accountStatementImportFile.Id = currentLineNumber;
                accountStatementImportFile.IdImport = accountStatementImport.Id;
                accountStatementImportFile.Reference = values[4].ToString();
                accountStatementImportFile.LabelOperation = values[3].ToString();
                accountStatementImportFile.LabelOperationWork = _accountStatementService.GetOperationWork(accountStatementImportFile.LabelOperation);
                accountStatementImportFile.LabelOperationWork = accountStatementImportFile.LabelOperationWork.ToString().Replace(" ", "");
                accountStatementImportFile.AmountOperation = double.Parse(values[6].Replace(",", ".").ToString(), CultureInfo.InvariantCulture);
                accountStatementImportFile.DateIntegration = Convert.ToDateTime(values[1].ToString());
                accountStatementImportFile.IdMovement = accountStatementImportFile.AmountOperation > 0 ? 1 : 2;
                accountStatementImportFile.Account = _accountService.GetAccountByNumber(values[0].ToString());
                if (accountStatementImportFile.Account != null)
                    accountStatementImportFile.IdAccount = accountStatementImportFile.Account.Id;

                accountStatementImportFile.OperationMethod = _operationMethodService.GetOperationMethodByFileLabel(accountStatementImportFile.LabelOperationWork, (int)EnumBank.BPVF);
                if (accountStatementImportFile.OperationMethod != null)
                {
                    accountStatementImportFile.IdOperationMethod = accountStatementImportFile.OperationMethod.Id;

                    accountStatementImportFile.Operation = _operationService.GetOperationByFileLabel(accountStatementImportFile.LabelOperationWork, accountStatementImportFile.Reference, EnumBank.BPVF, accountStatementImportFile.OperationMethod, accountStatementImportFile.IdMovement);
                    if (accountStatementImportFile.Operation != null)
                    {
                        accountStatementImportFile.IdOperationType = accountStatementImportFile.Operation.OperationType.Id;
                        accountStatementImportFile.IdOperationTypeFamily = accountStatementImportFile.Operation.OperationType.IdOperationTypeFamily;
                        accountStatementImportFile.IdOperation = accountStatementImportFile.Operation.Id;
                        accountStatementImportFile.OperationType = _operationTypeService.GetByIdWithOperationTypeFamily(accountStatementImportFile.Operation.IdOperationType);
                    }

                    //operation place
                    if (accountStatementImportFile.OperationMethod != null)
                    {
                        if (accountStatementImportFile.OperationMethod.Id == (int)EnumOperationMethod.PaiementCarte || accountStatementImportFile.OperationMethod.Id == (int)EnumOperationMethod.RetraitCarte)
                        {
                            accountStatementImportFile.OperationPlace = _operationPlaceService.GetByFileLabel(accountStatementImportFile.LabelOperationWork);
                        }
                    }
                    if (accountStatementImportFile.OperationMethod != null && accountStatementImportFile.OperationMethod.Id == (int)EnumOperationMethod.PaiementCarte)
                    {
                        accountStatementImportFile.DateOperation = _operationService.GetDateOperationByFileLabel(accountStatementImportFile.LabelOperationWork, accountStatementImportFile.OperationMethod);

                        //OperationPlaceLink operationPlaceLink = _operationPlaceLinkService.GetByIdOperationIdPlace((int)accountStatement.IdOperation, operationPlace.Id);
                        if (accountStatementImportFile.OperationPlace != null)
                            accountStatementImportFile.IdOperationPlace = accountStatementImportFile.OperationPlace.Id;
                        else
                            accountStatementImportFile.IdOperationPlace = (int)EnumOperation.Inconnu;
                    }
                }
                else
                {
                    accountStatementImportFile.OperationMethod = new OperationMethod { Id = (int)EnumOperationMethod.Inconnu };
                }
                accountStatementImportFiles.Add(accountStatementImportFile);
                currentLineNumber++;
            }

            //rechercher les operations inconnus par parsage du libellé operation
            List<AccountStatementImportFile> accountStatementImportFileUnknownOperations =
                accountStatementImportFiles
                .Where(x => x.IdAccount != (int)EnumAccount.Inconnu && x.IdOperationMethod != (int)EnumOperationMethod.Inconnu && x.IdOperation == (int)EnumOperation.Inconnu)
                .ToList();

            for (int i = 0; i < accountStatementImportFileUnknownOperations.Count; i++)
            {
                accountStatementImportFileUnknownOperations[i].LabelOperationWork = _accountStatementService.GetOperationWork(accountStatementImportFileUnknownOperations[i].LabelOperation);

                accountStatementImportFileUnknownOperations[i].Operation = _operationService.GetOperationByParsingLabel(accountStatementImportFileUnknownOperations[i]);
                if (accountStatementImportFileUnknownOperations[i].Operation != null)
                {
                    accountStatementImportFileUnknownOperations[i].OperationLabelTemp = accountStatementImportFileUnknownOperations[i].Operation.Label;
                    accountStatementImportFileUnknownOperations[i].OperationKeywordTemp = accountStatementImportFileUnknownOperations[i].Operation.Keyword;
                    accountStatementImportFileUnknownOperations[i].OperationReferenceTemp = accountStatementImportFileUnknownOperations[i].Operation.Reference;
                }
                accountStatementImportFileUnknownOperations[i].Operation = _operationService.GetById((int)EnumOperation.Inconnu);

                accountStatementImportFileUnknownOperations[i].OperationType = _operationTypeService.GetByIdWithOperationTypeFamily(accountStatementImportFileUnknownOperations[i].AmountOperation > 0 ? (int)EnumOperationType.InconnuCredit : (int)EnumOperationType.InconnuDebit);
                accountStatementImportFileUnknownOperations[i].IdOperationType = accountStatementImportFileUnknownOperations[i].OperationType.Id;
                accountStatementImportFileUnknownOperations[i].IdOperationTypeFamily = accountStatementImportFileUnknownOperations[i].OperationType.IdOperationTypeFamily;
            }

            // Rechercher le lieu pour les operations retraits et paiement carte
            List<AccountStatementImportFile> accountStatementImportFileOperationLieux =
                accountStatementImportFiles
                .Where(x => x.IdAccount != (int)EnumAccount.Inconnu && x.IdOperationPlace == (int)EnumOperation.Inconnu && (x.IdOperationMethod == (int)EnumOperationMethod.PaiementCarte || x.IdOperationMethod == (int)EnumOperationMethod.RetraitCarte))
                .ToList();
            for (int i = 0; i < accountStatementImportFileOperationLieux.Count; i++)
            {
                accountStatementImportFileOperationLieux[i].LabelOperationWork = _accountStatementService.GetOperationWork(accountStatementImportFileOperationLieux[i].LabelOperation);

                accountStatementImportFileOperationLieux[i].OperationPlace = _operationPlaceService.GetOperationPlaceByParsingLabel(accountStatementImportFileOperationLieux[i]);
                if (accountStatementImportFileOperationLieux[i].OperationPlace != null)
                {
                    accountStatementImportFileOperationLieux[i].OperationPlaceCityTemp = accountStatementImportFileOperationLieux[i].OperationPlace.City;
                    accountStatementImportFileOperationLieux[i].OperationPlaceDepartmentTemp = accountStatementImportFileOperationLieux[i].OperationPlace.Department;
                    accountStatementImportFileOperationLieux[i].OperationPlaceKeywordTemp = accountStatementImportFileOperationLieux[i].OperationPlace.Keyword;
                }
                accountStatementImportFileOperationLieux[i].OperationPlace = _operationPlaceService.GetById((int)EnumOperation.Inconnu);
            }
            //Save accountStatementImport
            Save(accountStatementImport);
            //accountStatementImport = _accountStatementImportRepository.GetById(accountStatementImport.Id);
            //Save AccountStatementImportFiles
            foreach (var item in accountStatementImportFiles)
            {
                item.AccountStatementImport = accountStatementImport;
                item.IdImport = accountStatementImport.Id;
                item.DateImport = DateTime.Now;
            }
            _accountStatementImportFileService.Save(accountStatementImportFiles);

            //accountStatementImport.AccountStatementImportFiles = accountStatementImportFiles;
            return accountStatementImport;
            //return accountStatements;
        }

        public int Save(AccountStatementImport accountStatementImport)
        {
            if (accountStatementImport.Id == 0)
            {
                //Enregistrement
                int id = _accountStatementImportRepository.Create(accountStatementImport);
                accountStatementImport = _accountStatementImportRepository.GetById(id);

                //Enregistrement du fichier
                //chemin d'enregistrement
                string dir = _parameterService.GetImportFileDir(accountStatementImport.User.Id);
                dir = dir + accountStatementImport.Bank.LabelBankShort + "\\";
                accountStatementImport.File.DiscardBufferedData();

                accountStatementImport.File.BaseStream.Seek(0, SeekOrigin.Begin);
                using (var writer = new StreamWriter(dir + accountStatementImport.FileImport, append: false, encoding: Encoding.GetEncoding(1252)))
                {
                    writer.Write(accountStatementImport.File.ReadToEnd());
                }

                //_accountStatementImportRepository.Create(accountStatementImport);
            }
            else
                _accountStatementImportRepository.Update(accountStatementImport);

            return accountStatementImport.Id;


        }
    }
}
