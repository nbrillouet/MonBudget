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
        
        private readonly IMapper _mapper;
        private readonly IAccountService _accountService;
        private readonly IAccountStatementService _accountStatementService;
        private readonly IOperationTransverseAsifService _operationTransverseAsifService;
        private readonly IOperationTransverseAsService _operationTransverseAsService;
        private readonly ReferentialService _referentialService;

        private readonly IAccountStatementImportFileRepository _accountStatementImportFileRepository;

        public AccountStatementImportFileService(
            IAccountStatementImportFileRepository accountStatementImportFileRepository,
            IAccountService accountService,
            IMapper mapper,
            IAccountStatementService accountStatementService,
            IOperationTransverseAsifService operationTransverseAsifService,
            IOperationTransverseAsService operationTransverseAsService,
            ReferentialService referentialService
            )
        {
            _accountStatementImportFileRepository = accountStatementImportFileRepository;
            _mapper = mapper;
            _accountService = accountService;
            _accountStatementService = accountStatementService;
            _operationTransverseAsifService = operationTransverseAsifService;
            _operationTransverseAsService = operationTransverseAsService;
            _referentialService = referentialService;
        }

        public PagedList<AsifForTableDto> GetAsifTable(FilterAsifTableSelected filter)
        {
            var pagedList = _accountStatementImportFileRepository.GetAsifTable(filter);

            var result = new PagedList<AsifForTableDto>(_mapper.Map<List<AsifForTableDto>>(pagedList.Datas), pagedList.Pagination);

            return result;
        }

        public AsifDetailDto GetAsifDetail(FilterAsifDetail filter)
        {
            var asif = _accountStatementImportFileRepository.GetAsifDetail(filter.IdAsif.Value);
            var asifDetailDto = _mapper.Map<AsifDetailDto>(asif);

            asifDetailDto.OperationMethod = new ComboSimple<SelectDto>
            {
                List = _referentialService.OperationMethodService.GetSelectList(EnumSelectType.Inconnu),
                Selected = new SelectDto { Id = asif.OperationMethod.Id, Label = asif.OperationMethod.Label }
            };
            asifDetailDto.OperationTypeFamily = new ComboSimple<SelectDto>
            {
                List = _referentialService.OperationTypeFamilyService.GetSelectList(filter.User.IdUserGroup, (EnumMovement)asifDetailDto.IdMovement, EnumSelectType.Inconnu),
                Selected = new SelectDto { Id = asif.OperationTypeFamily.Id, Label = asif.OperationTypeFamily.Label }
            };
            asifDetailDto.OperationType = new ComboSimple<SelectDto>
            {
                List = _referentialService.OperationTypeService.GetSelectList(asif.OperationTypeFamily.Id, EnumSelectType.Empty),
                Selected = new SelectDto { Id = asif.OperationType.Id, Label = asif.OperationType.Label }
            };

            asifDetailDto.Operation = new ComboSimple<SelectDto>
            {
                List = _referentialService.OperationService.GetSelectList(filter.User.IdUserGroup, asif.OperationMethod.Id, asif.OperationType.Id, EnumSelectType.Inconnu),
                Selected = new SelectDto { Id = asif.Operation.Id, Label = asif.Operation.Label }
            };

            asifDetailDto.OperationTransverse = new ComboMultiple<SelectDto>
            {
                List = _referentialService.OperationTransverseService.GetSelectList(filter.User.Id, EnumSelectType.Empty),
                ListSelected = _operationTransverseAsifService.GetOperationTransverseSelectList(filter.IdAsif.Value, EnumSelectType.Empty)
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
            
            return asifDetailDto;
        }

        public AccountStatementImportFile GetById(int IdAccountStatementImportFile)
        {
            return _accountStatementImportFileRepository.GetById(IdAccountStatementImportFile);
        }

        public List<AccountStatementImportFile> GetByIdImport(int idImport)
        {
            return _accountStatementImportFileRepository.GetByIdImport(idImport);
        }

        public List<string> GetDistinctAccountNumber(int idImport)
        {
            return _accountStatementImportFileRepository.GetDistinctAccountNumber(idImport);
        }

        public void SaveWithTran(List<AccountStatementImportFile> accountStatementImportFiles)
        {
            _accountStatementImportFileRepository.SaveWithTran(accountStatementImportFiles);
        }

        public AccountStatementImportFile InitForImport(int idUserGroup)
        {
            var accountStatementImportFile = new AccountStatementImportFile();
            UnknownId unknownId = GetUnknownIds(idUserGroup);
            accountStatementImportFile.UnknownId = unknownId;

            accountStatementImportFile.IdAccount = unknownId.IdAccount;
            accountStatementImportFile.IdOperationMethod = unknownId.IdOperationMethod;
            accountStatementImportFile.IdOperation = unknownId.IdOperation;
            accountStatementImportFile.IdOperationDetail = unknownId.IdOperationDetail;
            accountStatementImportFile.IdOperationTypeFamily = unknownId.IdOperationTypeFamily;
            accountStatementImportFile.IdOperationType = unknownId.IdOperationType;

            return accountStatementImportFile;
        }

        private UnknownId GetUnknownIds(int idUserGroup)
        {
            return new UnknownId
            {
                IdAccount = (int)EnumAccount.Inconnu,
                IdOperationMethod = (int)EnumOperationMethod.Inconnu,
                IdOperation = _referentialService.OperationService.GetUnknown(idUserGroup).Id,
                IdOperationDetail = _referentialService.OperationDetailService.GetUnknown(idUserGroup).Id,
                IdOperationTypeFamily = _referentialService.OperationTypeFamilyService.GetByCodeUserGroupForSelect(EnumCodeOtf.INCO, idUserGroup).Id,
                IdOperationType = _referentialService.OperationTypeService.GetUnknown(idUserGroup).Id
            };
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

        public async Task<AsifDetailDto> GetForDetailByIdAsync(int id)
        {
            var accountStatementImportFile = await _accountStatementImportFileRepository.GetForDetailByIdAsync(id);
            var asifDetailDto = _mapper.Map<AsifDetailDto>(accountStatementImportFile);

            return asifDetailDto;
        }

        public bool SaveInAccountStatement(int idImport)
        {
            //Chargement des AccountStatementFile
            var asifs = GetByIdImport(idImport);
            
            if(asifs!=null && asifs.Count>0)
            {
                var unknownId = GetUnknownIds(asifs[0].AccountStatementImport.User.IdUserGroup);
                foreach(var asif in asifs)
                {
                    asif.UnknownId = unknownId;
                    //Mise à jour des state et des duplicate
                    _accountStatementImportFileRepository.UpdateAsifStates(asif);
                }
            

            ////Mise à jour des state et des duplicate
            //_accountStatementImportFileRepository.UpdateAsifStates(idImport);

            //controler si tous les enregistrements sont complets
            if (!IsSaveableInAccountStatement(idImport))
                throw new Exception("Il existe des opérations en erreur dans le relevé");

            //recuperer les accountStatementImportFiles
            var accountStatementImportFiles = GetAsifsWithoutDuplicate(idImport);

            foreach(var accountStatementImportFile in accountStatementImportFiles)
            {
                var accountStatement = _mapper.Map<AccountStatement>(accountStatementImportFile);
                accountStatement = _accountStatementService.Save(accountStatement);
                if(accountStatement.Id!=0)
                {
                    //Recherche si operation transverse a enregistrer
                    var operationTranserveAsifs = _operationTransverseAsifService.GetByIdAsif(accountStatementImportFile.Id);
                    foreach(var operationTranserveAsif in operationTranserveAsifs)
                    {
                        var operationTransverseAs = new OperationTransverseAs
                        {
                            Id = 0,
                            IdAccountStatement = accountStatement.Id,
                            IdOperationTransverse = operationTranserveAsif.IdOperationTransverse
                        };
                        _operationTransverseAsService.Save(operationTransverseAs);

                    }
                }
                

                //var accountStatements = _mapper.Map<IEnumerable<AccountStatement>>(accountStatementImportFiles).ToList();
            }
                //sauvegarder dans accountStatement
                return true;
            }

            return false;

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
            asif.DateIntegration = asifDetailDto.DateIntegration.Value.Date;
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

            var idOdUnknown =_referentialService.OperationDetailService.GetUnknown(asifDetailDto.User.IdUserGroup).Id;
            //Recherche si operation detail existe déjà, sinon creation
            OperationDetail operationDetail = new OperationDetail
            {
                Id = asifDetailDto.OperationDetail.Id== idOdUnknown ? 0 : asifDetailDto.OperationDetail.Id,
                IdUserGroup = asifDetailDto.User.IdUserGroup,
                IdOperation = asifDetailDto.Operation.Selected.Id,
                IdGMapAddress = asifDetailDto.OperationDetail.GMapAddress.Id,
                KeywordOperation = asifDetailDto.OperationDetail.KeywordOperation,
                KeywordPlace = asifDetailDto.OperationDetail.KeywordPlace
            };
            operationDetail = _referentialService.OperationDetailService.GetOrCreate(operationDetail);
            asif.IdOperationDetail = operationDetail.Id;


            //Mise à jour de l'operationTransverse
            _operationTransverseAsifService.Update(asifDetailDto.OperationTransverse.ListSelected, asifDetailDto.Id);

            //Mise à jour de l'asifState et du duplicate
            asif = _accountStatementImportFileRepository.UpdateAsifState(asif);

            //update de accountStatementFile
            _accountStatementImportFileRepository.Update(asif);

            return true;

        }

        public OperationDetail GetOperationDetail(int idUserGroup, AccountStatementImportFile accountStatementImportFile)
        {
            OperationDetail operationDetail = null;
            if (accountStatementImportFile.IsLocalisable)
            {
                operationDetail = _referentialService.OperationDetailService.GetByKeywords(idUserGroup, accountStatementImportFile.LabelOperationWork, accountStatementImportFile.IdOperationMethod, (EnumMovement)accountStatementImportFile.IdMovement);
            }
            else
            {
                operationDetail = _referentialService.OperationDetailService.GetByKeywordOperation(idUserGroup,accountStatementImportFile.LabelOperationWork, accountStatementImportFile.IdOperationMethod, (EnumMovement)accountStatementImportFile.IdMovement);
            }

            return operationDetail;
        }




    }
}
