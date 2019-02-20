using Budget.DATA.Repositories;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;
using Budget.MODEL.Dto;
using AutoMapper;
using System.Linq;
using Budget.MODEL;
using Budget.MODEL.Filter;
using System.Threading.Tasks;
using Budget.SERVICE.GMap;
using Budget.SERVICE._Helpers;

namespace Budget.SERVICE
{
    public class AccountStatementImportFileService : IAccountStatementImportFileService
    {
        private readonly IAccountStatementImportFileRepository _accountStatementImportFileRepository;
        private readonly IMapper _mapper;
        private readonly IAccountService _accountService;
        private readonly IAccountStatementService _accountStatementService;
        private readonly IOperationDetailService _operationDetailService;
        private readonly IGMapAddressService _gMapAddressService;
        private readonly IGMapAddressTypeService _gMapAddressTypeService;
        private readonly IGMapTypeService _gMapTypeService;
        //private readonly 
        


        public AccountStatementImportFileService(IAccountStatementImportFileRepository accountStatementImportFileRepository,
            IAccountService accountService,
            IMapper mapper,
            IAccountStatementService accountStatementService,
            IOperationDetailService operationDetailService,
            IGMapAddressService gMapAddressService,
            IGMapAddressTypeService gMapAddressTypeService,
            IGMapTypeService gMapTypeService)
        {
            _accountStatementImportFileRepository = accountStatementImportFileRepository;
            _accountService = accountService;
            _mapper = mapper;
            _accountStatementService = accountStatementService;
            _operationDetailService = operationDetailService;
            _gMapAddressService = gMapAddressService;
            _gMapAddressTypeService = gMapAddressTypeService;
            _gMapTypeService = gMapTypeService;
        }

        ///// <summary>
        ///// Nettoie le label operation provenant d'un fichier
        ///// </summary>
        ///// <param name="operationLabel"></param>
        ///// <returns></returns>
        //public string GetOperationWork(string operationLabel)
        //{
        //    string trimOperationLabel = operationLabel.ToUpper();
        //    trimOperationLabel = trimOperationLabel.Replace("'", "");
        //    trimOperationLabel = trimOperationLabel.Replace("*", "");
        //    trimOperationLabel = trimOperationLabel.Replace("-", "");
        //    trimOperationLabel = trimOperationLabel.Replace("/", "");

        //    return trimOperationLabel;
        //}
        public PagedList1<AsifForTableDto> GetAsifTable(FilterAsifTableSelected filter)
        {
            if (filter.Pagination == null)
            {
                filter.Pagination = new Pagination1
                {
                    CurrentPage = 0,
                    ItemsPerPage = 15,
                    SortColumn = "id",
                    SortDirection = "asc"
                };
            }
            var pagedList = _accountStatementImportFileRepository.GetAsifTable(filter);

            var result = new PagedList1<AsifForTableDto>(_mapper.Map<List<AsifForTableDto>>(pagedList.Datas), pagedList.Pagination);

            return result;
        }

        public AccountStatementImportFile GetById(int IdAccountStatementImportFile)
        {
            return _accountStatementImportFileRepository.GetById(IdAccountStatementImportFile);
        }
        public List<string> GetDistinctAccountNumber(int idImport)
        {
            return _accountStatementImportFileRepository.GetDistinctAccountNumber(idImport);
        }

        public void SaveWithTran(List<AccountStatementImportFile> accountStatementImportFiles)
        {
            _accountStatementImportFileRepository.SaveWithTran(accountStatementImportFiles);
        }

        //public int Save(AccountStatementImportFile accountStatementImportFile)
        //{

        //    return _accountStatementImportFileRepository.Save(accountStatementImportFile);
        //}

        public AccountStatementImportFile InitForImport()
        {
            var accountStatementImportFile = new AccountStatementImportFile();
            accountStatementImportFile.IdAccount = (int)EnumAccount.Inconnu;
            accountStatementImportFile.IdOperation = (int)EnumOperation.Inconnu;
            accountStatementImportFile.IdOperationMethod = (int)EnumOperationMethod.Inconnu;
            accountStatementImportFile.IdOperationDetail = (int)EnumOperationMethod.Inconnu;
            return accountStatementImportFile;
        }

        /// <summary>
        /// Nettoie le label operation provenant dun fichier
        /// </summary>
        /// <param name="operationLabel"></param>
        /// <returns></returns>
        public string GetOperationLabelWork(string operationLabel)
        {
            string trimOperationLabel = operationLabel.ToUpper();

            trimOperationLabel = FileHelper.ExcludeForbiddenChars(trimOperationLabel);
            trimOperationLabel = trimOperationLabel.Replace(" ", "");

            return trimOperationLabel;
        }

        public AsifGroupByAccounts GetListDto(int idImport)
        {
            AsifGroupByAccounts asifGroupByAccounts = new AsifGroupByAccounts
            {
                IdImport = idImport,
                Accounts = GetAccounts(idImport)
            };
            //asifGroupByAccounts.IdImport = idImport;
            
            ////selectionner les account number distincts dans l'import
            //var accountNumbers = GetDistinctAccountNumber(idImport);
            //foreach (string accountNumber in accountNumbers)
            //{
            //    AsifGroupByAccounts asifGroups = new AsifGroupByAccount();
            //    asifGroups.Account = _accountService.GetAccountByNumber(accountNumber);

            //    //asifGroups.AsifGroup = DispatchAccountStatements(idImport, asifGroups.Account.Id);

            //    //asifsGroupByAccount.AsifGroupByAccountList.Add(asifGroups);
            //}

            return asifGroupByAccounts;
        }

        private List<Account> GetAccounts(int idImport)
        {
            //selectionner les account number distincts dans l'import
            List<Account> accounts = new List<Account>();
            var accountNumbers = GetDistinctAccountNumber(idImport);
            foreach (string accountNumber in accountNumbers)
            {
                accounts.Add(_accountService.GetByNumber(accountNumber));
            }

            return accounts;
        }

        public List<SelectDto> GetAccountSelectListByIdImport(int idImport)
        {
            List<SelectDto> accounts = new List<SelectDto>();
            var accountNumbers = GetDistinctAccountNumber(idImport);
            foreach (string accountNumber in accountNumbers)
            {
                accounts.Add(_mapper.Map<SelectDto>(_accountService.GetByNumber(accountNumber)));
            }

            return accounts;
        }

        public List<SelectDto> GetAsifStates(int idImport, int idAccount)
        {
            return _accountStatementImportFileRepository.GetAsifStates(idImport, idAccount);
        }

        public Task<PagedList<AccountStatementImportFile>> GetAsync(FilterAccountStatementImportFile filter)
        {
            return _accountStatementImportFileRepository.GetAsync(filter);
        }

        public async Task<AsifDetailDto> GetForDetailByIdAsync(int id)
        {
            var accountStatementImportFile = await _accountStatementImportFileRepository.GetForDetailByIdAsync(id);
            var asifDetailDto = _mapper.Map<AsifDetailDto>(accountStatementImportFile);
            
            //recherche de la gMapAddress

           // asifDetailDto.OperationDetail = accountStatementImportFile.OperationDetail; 

            return asifDetailDto;
        }

        public bool SaveInAccountStatement(int idImport)
        {
            //Mise à jour des state et des duplicate
            _accountStatementImportFileRepository.UpdateAsifStates(idImport);

            //controler si tous les enregistrements sont complets
            if (!IsSaveableInAccountStatement(idImport))
                throw new Exception("Il existe des opérations en erreur dans le relevé");

            //recuperer les accountStatementImportFiles
            var accountStatementImportFiles = GetAsifsWithoutDuplicate(idImport);

            //sauvegarder dans accountStatement
            var accountStatements = _mapper.Map <IEnumerable<AccountStatement>>(accountStatementImportFiles).ToList();
            return _accountStatementService.Save(accountStatements);

        }

        /// <summary>
        /// renvoie les lignes a sauvegarder dans accountStatement (pas de doublons)
        /// </summary>
        /// <param name="idImport"></param>
        /// <returns></returns>
        private List<AccountStatementImportFile> GetAsifsWithoutDuplicate(int idImport)
        {
            var accountStatementImports = _accountStatementImportFileRepository.GetAsifsWithoutDuplicate(idImport);

            return accountStatementImports;
        }

        /// <summary>
        /// controler si tous les enregistrements sont complets
        /// </summary>
        /// <param name="idImport"></param>
        /// <returns></returns>
        public bool IsSaveableInAccountStatement(int idImport)
        {
            return _accountStatementImportFileRepository.IsAccountStatementSaveable(idImport);
        }

        public bool Update(AsifDetailDto asifDetailDto)
        {
            //chargement du accountStatementFile
            var asif = _accountStatementImportFileRepository.GetById(asifDetailDto.Id);

            //mise à jour des données
            asif.AmountOperation = asifDetailDto.AmountOperation;
            asif.DateIntegration = asifDetailDto.DateIntegration;
            asif.LabelOperation = asifDetailDto.LabelOperation;
            asif.IdOperation = asifDetailDto.Operation.Id;
            asif.IdOperationMethod = asifDetailDto.OperationMethod.Id;
            asif.IdOperationType = asifDetailDto.OperationType.Id;
            asif.IdOperationTypeFamily = asifDetailDto.OperationTypeFamily.Id;
            asif.OperationKeywordTemp = asifDetailDto.OperationKeywordTemp;
            asif.PlaceKeywordTemp = asifDetailDto.PlaceKeywordTemp;

            asif.IdOperationDetail = asifDetailDto.OperationDetail.Id;
            //mise à jour des données GMapAddress
            //if (asifDetailDto.OperationDetail.Id==0 || asifDetailDto.OperationDetail.Id==2)
            //{
            //    throw new Exception("l'adresse ne peut être vide ou inconnu");
            //}
            if (asifDetailDto.OperationDetail.GMapAddress.Id == 3)
            {
                asifDetailDto.PlaceKeywordTemp = "--INTERNET--";
            }

            //Recherche si operation detail existe déjà, sinon creation
            OperationDetail operationDetail = new OperationDetail
            {
                Id = 0,
                IdOperation = asifDetailDto.Operation.Id,
                IdGMapAddress = asifDetailDto.OperationDetail.GMapAddress.Id,
                KeywordOperation = asifDetailDto.OperationKeywordTemp,
                KeywordPlace = asifDetailDto.PlaceKeywordTemp
            };
            operationDetail = _operationDetailService.GetOrCreate(operationDetail);
            asif.IdOperationDetail = operationDetail.Id;


            //Mise à jour de l'asifState et du duplicate
            asif = _accountStatementImportFileRepository.UpdateAsifState(asif);

            //update de accountStatementFile
            _accountStatementImportFileRepository.Update(asif);

            return true;

        }

        public OperationDetail GetOperationDetail(AccountStatementImportFile accountStatementImportFile)
        {
            OperationDetail operationDetail = null;
            if (accountStatementImportFile.IsLocalisable)
            {
                operationDetail = _operationDetailService.GetByKeywords(accountStatementImportFile.LabelOperationWork, accountStatementImportFile.IdOperationMethod, accountStatementImportFile.IdMovement);
            }
            else
            {
                operationDetail = _operationDetailService.GetByKeywordOperation(accountStatementImportFile.LabelOperationWork, accountStatementImportFile.IdOperationMethod, accountStatementImportFile.IdMovement);
            }

            return operationDetail;
        }
        //private AsifGroup DispatchAccountStatements(int idImport, int idAccount)
        //{
        //    //List<AccountStatementImportFile> accountStatementImportFiles = _accountStatementImportFileService.GetById(idAccountStatementImport, idAccount);
        //    AsifGroup asifGroup = new AsifGroup();

        //    List<AccountStatementImportFile> asifs = GetAsifFull(idImport, idAccount);
        //    asifGroup.AccountStatementsFull = _mapper.Map<IEnumerable<AsifForListDto>>(asifs).ToList();
        //    //accountStatementImportViewModels.AccountStatementsFull.AccountStatementType = EnumAccountStatementType.Full;

        //    asifs = GetAsifComplete(idImport, idAccount);
        //    asifGroup.AccountStatementsComplete = _mapper.Map<IEnumerable<AsifForListDto>>(asifs).ToList();
        //    //accountStatementImportViewModels.AccountStatementsComplete.AccountStatementType = EnumAccountStatementType.Complete;

        //    asifs = GetAsifMethodLess(idImport, idAccount);
        //    asifGroup.AccountStatementsMethodLess = _mapper.Map<IEnumerable<AsifForListDto>>(asifs).ToList();
        //    //accountStatementImportViewModels.AccountStatementsMethodLess.AccountStatementType = EnumAccountStatementType.MethodLess;

        //    asifs = GetAsifOperationLess(idImport, idAccount);
        //    asifGroup.AccountStatementsOperationLess = _mapper.Map<IEnumerable<AsifForListDto>>(asifs).ToList();
        //    //accountStatementImportViewModels.AccountStatementsOperationLess.AccountStatementType = EnumAccountStatementType.OperationLess;

        //    return asifGroup;

        //}

        //private List<AccountStatementImportFile> GetAsifFull(int idImport, int idAccount)
        //{
        //    return _accountStatementImportFileRepository.GetAsifFull(idImport, idAccount);
        //}

        //private List<AccountStatementImportFile> GetAsifComplete(int idImport, int idAccount)
        //{
        //    return _accountStatementImportFileRepository.GetAsifComplete(idImport, idAccount);
        //}

        //private List<AccountStatementImportFile> GetAsifMethodLess(int idImport, int idAccount)
        //{
        //    return _accountStatementImportFileRepository.GetAsifMethodLess(idImport, idAccount);
        //}

        //private List<AccountStatementImportFile> GetAsifOperationLess(int idImport, int idAccount)
        //{
        //    return _accountStatementImportFileRepository.GetAsifOperationLess(idImport, idAccount);
        //}

        //public bool HasAccountStatementImportFileWihoutPlace(int IdImport, int idAccount)
        //{
        //    return _accountStatementImportFileRepository.HasAccountStatementImportFileWihoutPlace(IdImport, idAccount);
        //}


    }
}
