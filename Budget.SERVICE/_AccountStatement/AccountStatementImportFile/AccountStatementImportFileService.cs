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
using Budget.MODEL.Dto.GMap;

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
        private readonly IOperationTransverseAsifService _operationTransverseAsifService;
        private readonly ReferentialService _referentialService;

        public AccountStatementImportFileService(
            IAccountStatementImportFileRepository accountStatementImportFileRepository,
            IAccountService accountService,
            IMapper mapper,
            IAccountStatementService accountStatementService,
            IOperationDetailService operationDetailService,
            IGMapAddressService gMapAddressService,
            IGMapAddressTypeService gMapAddressTypeService,
            IGMapTypeService gMapTypeService,
            IOperationTransverseAsifService operationTransverseAsifService,
            ReferentialService referentialService
            //IFilterService filterService
            )
        {
            _accountStatementImportFileRepository = accountStatementImportFileRepository;
            _accountService = accountService;
            _mapper = mapper;
            _accountStatementService = accountStatementService;
            _operationDetailService = operationDetailService;
            _gMapAddressService = gMapAddressService;
            _gMapAddressTypeService = gMapAddressTypeService;
            _gMapTypeService = gMapTypeService;
            _operationTransverseAsifService = operationTransverseAsifService;
            _referentialService = referentialService;
            //_referentialService = referentialService;
            //_filterService = filterService;
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
        public PagedList<AsifForTableDto> GetAsifTable(FilterAsifTableSelected filter)
        {
            //if (filter.Pagination == null)
            //{
            //    filter.Pagination = new Pagination1
            //    {
            //        CurrentPage = 0,
            //        ItemsPerPage = 15,
            //        SortColumn = "id",
            //        SortDirection = "asc"
            //    };
            //}
            var pagedList = _accountStatementImportFileRepository.GetAsifTable(filter);

            var result = new PagedList<AsifForTableDto>(_mapper.Map<List<AsifForTableDto>>(pagedList.Datas), pagedList.Pagination);

            return result;
        }

        public AsifDetailDto GetAsifDetail(int idAsif, int idUser)
        {
            var asif = _accountStatementImportFileRepository.GetAsifDetail(idAsif);
            var asifDetailDto = _mapper.Map<AsifDetailDto>(asif);

            asifDetailDto.OperationMethod = new ComboSimple<SelectDto>
            {
                List = _referentialService.OperationMethodService.GetSelectList(EnumSelectType.Inconnu),
                Selected = new SelectDto { Id = asif.OperationMethod.Id, Label = asif.OperationMethod.Label }
            };
            asifDetailDto.OperationTypeFamily = new ComboSimple<SelectDto>
            {
                List = _referentialService.OperationTypeFamilyService.GetSelectList((EnumMovement)asifDetailDto.IdMovement, EnumSelectType.Inconnu),
                Selected = new SelectDto { Id = asif.OperationTypeFamily.Id, Label = asif.OperationTypeFamily.Label }
            };
            asifDetailDto.OperationType = new ComboSimple<SelectDto>
            {
                List = _referentialService.OperationTypeService.GetSelectList(asif.OperationTypeFamily.Id, EnumSelectType.Empty),
                Selected = new SelectDto { Id = asif.OperationType.Id, Label = asif.OperationType.Label }
            };

            asifDetailDto.Operation = new ComboSimple<SelectDto>
            {
                List = _referentialService.OperationService.GetSelectList(asif.OperationMethod.Id, asif.OperationType.Id, EnumSelectType.Inconnu),
                Selected = new SelectDto { Id = asif.Operation.Id, Label = asif.Operation.Label }
            };

            asifDetailDto.OperationTransverse = new ComboMultiple<SelectDto>
            {
                List = _referentialService.OperationTransverseService.GetSelectList(idUser, EnumSelectType.Empty),
                ListSelected = _operationTransverseAsifService.GetOperationTransverseSelectList(idAsif, EnumSelectType.Empty)
            };

            List<SelectDto> operationDetailList = null;
            if (!asifDetailDto.IsLocalisable)
            {
                operationDetailList = new List<SelectDto> { new SelectDto { Id = 2, Label = "N/A" } };
                asifDetailDto.OperationPlace = new ComboSimple<SelectDto>
                {
                    List = operationDetailList,
                    Selected = operationDetailList[0]
                };
            }
            else
            {
                operationDetailList = new List<SelectDto> { new SelectDto { Id = 1, Label = "INCONNU" }, new SelectDto { Id = 3, Label = "INTERNET" }, new SelectDto { Id = 4, Label = "AUTRES" } };
                var operationDetailSelected = asifDetailDto.OperationDetail.GMapAddress.Id == 1 ? operationDetailList[0]
                        : asifDetailDto.OperationDetail.GMapAddress.Id == 3 ? operationDetailList[1]
                        : operationDetailList[2];
                asifDetailDto.OperationPlace = new ComboSimple<SelectDto>
                {
                    List = operationDetailList,
                    Selected = operationDetailSelected
                };

                if (operationDetailSelected.Id == 4)
                {
                    asifDetailDto.GMapSearchInfo = new GMapSearchInfoDto
                    {
                        IdGMapAddress = asifDetailDto.OperationDetail.GMapAddress.Id,
                        OperationPositionSearch = asifDetailDto.OperationLabelTemp,
                        OperationPlaceSearch = asifDetailDto.PlaceLabelTemp
                    };
                }
            }
            
            

            //var asifDetailDto = new AsifDetailDto
            //{
            //    Id = asif.Id,
            //    Operation = new ComboSimple<SelectDto>
            //    {
            //        List = null,
            //        Selected = new SelectDto { Id = asif.Operation.Id, Label = asif.Operation.Label }
            //    },
            //    OperationMethod =new ComboSimple<SelectDto>
            //    {
            //        List = null,
            //        Selected = new SelectDto { Id = asif.OperationMethod.Id, Label = asif.OperationMethod.Label }
            //    },
            //    OperationType = new ComboSimple<SelectDto>
            //    {
            //        List = null,
            //        Selected = new SelectDto { Id = asif.OperationType.Id, Label = asif.OperationType.Label }
            //    },
            //    OperationTypeFamily = new ComboSimple<SelectDto>
            //    {
            //        List = null,
            //        Selected = new SelectDto { Id = asif.OperationTypeFamily.Id, Label = asif.OperationTypeFamily.Label }
            //    },
            //    OperationPlace = new ComboSimple<SelectDto>
            //    {
            //        List = new List<SelectDto> { new SelectDto { Id=1,Label="INCONNU"},new SelectDto { Id=3,Label="INTERNET"},new SelectDto { Id=4,Label="Autres"} }
            //        Selected = null
            //    },
            //    AmountOperation = asif.AmountOperation,
            //    LabelOperation = asif.LabelOperation,
            //    DateIntegration = asif.DateIntegration,
            //    IsDuplicated = asif.IsDuplicated,
            //    IdMovement = asif.IdMovement,
            //    LogoName = asif.LogoName,
            //    LogoUrl = null,
            //    OperationKeywordTemp = asif.OperationKeywordTemp,
            //    OperationLabelTemp = asif.OperationLabelTemp,
            //    PlaceLabelTemp = asif.PlaceLabelTemp,
            //    PlaceKeywordTemp = asif.PlaceKeywordTemp,
            //    IsLocalisable = asif.IsLocalisable,
            //    OperationDetail = asif.OperationDetail

            //}




            return asifDetailDto;
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

        //public Task<PagedList<AccountStatementImportFile>> GetAsync(FilterAccountStatementImportFile filter)
        //{
        //    return _accountStatementImportFileRepository.GetAsync(filter);
        //}

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
            asif.IdOperation = asifDetailDto.Operation.Selected.Id;
            asif.IdOperationMethod = asifDetailDto.OperationMethod.Selected.Id;
            asif.IdOperationType = asifDetailDto.OperationType.Selected.Id;
            asif.IdOperationTypeFamily = asifDetailDto.OperationTypeFamily.Selected.Id;
            asif.OperationKeywordTemp = asifDetailDto.OperationKeywordTemp;
            asif.PlaceKeywordTemp = asifDetailDto.PlaceKeywordTemp;

            switch(asifDetailDto.OperationPlace.Selected.Id)
            {
                case 2:
                    asifDetailDto.OperationDetail.GMapAddress.Id = 2;
                    asifDetailDto.OperationDetail.KeywordOperation = asifDetailDto.OperationKeywordTemp;
                    asifDetailDto.OperationDetail.KeywordPlace = null;
                    break;
                case 3:
                    asifDetailDto.OperationDetail.GMapAddress.Id = 3;
                    asifDetailDto.OperationDetail.KeywordOperation = asifDetailDto.OperationKeywordTemp;
                    asifDetailDto.OperationDetail.KeywordPlace = "--INTERNET--";
                    break;
                default:
                    asifDetailDto.OperationDetail.KeywordOperation = asifDetailDto.OperationKeywordTemp;
                    asifDetailDto.OperationDetail.KeywordPlace = asifDetailDto.PlaceKeywordTemp;
                    break;
            }

            //Recherche si operation detail existe déjà, sinon creation
            OperationDetail operationDetail = new OperationDetail
            {
                Id = 0,
                IdOperation = asifDetailDto.Operation.Selected.Id,
                IdGMapAddress = asifDetailDto.OperationDetail.GMapAddress.Id,
                KeywordOperation = asifDetailDto.OperationDetail.KeywordOperation,
                KeywordPlace = asifDetailDto.OperationDetail.KeywordPlace
            };
            operationDetail = _operationDetailService.GetOrCreate(operationDetail);
            asif.IdOperationDetail = operationDetail.Id;


            //Mise à jour de l'operationTransverse
            _operationTransverseAsifService.Update(asifDetailDto.OperationTransverse.ListSelected, asifDetailDto.Id);

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
                operationDetail = _operationDetailService.GetByKeywords(accountStatementImportFile.LabelOperationWork, accountStatementImportFile.IdOperationMethod, (EnumMovement)accountStatementImportFile.IdMovement);
            }
            else
            {
                operationDetail = _operationDetailService.GetByKeywordOperation(accountStatementImportFile.LabelOperationWork, accountStatementImportFile.IdOperationMethod, (EnumMovement)accountStatementImportFile.IdMovement);
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
