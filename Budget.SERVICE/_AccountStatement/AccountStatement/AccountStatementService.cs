using AutoMapper;
using Budget.DATA.Repositories;
using Budget.HELPER;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.GMap;
using Budget.MODEL.Filter;
using Budget.SERVICE.GMap;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Budget.SERVICE
{
    public class AccountStatementService : IAccountStatementService
    {
        private readonly IMapper _mapper;
        private readonly IGMapAddressService _gMapAddressService;
        private readonly IAccountStatementPlanService _accountStatementPlanService;
        private readonly IAccountStatementRepository _accountStatementRepository;
        private readonly IOperationTransverseAsService _operationTransverseAsService;
        private readonly IOperationDetailService _operationDetailService;
        private readonly ReferentialService _referentialService;
        

        public AccountStatementService(
            IMapper mapper,
            IGMapAddressService gMapAddressService,
            IAccountStatementRepository accountStatementRepository,
            //IPlanNotAsService planNotAsService,
            IAccountStatementPlanService accountStatementPlanService,
            IOperationTransverseAsService operationTransverseAsService,
            IOperationDetailService operationDetailService,
            ReferentialService referentialService
            )
        {
            _mapper = mapper;
            _gMapAddressService = gMapAddressService;
            _accountStatementRepository = accountStatementRepository;
            _accountStatementPlanService = accountStatementPlanService;
            //_planNotAsService = planNotAsService;
            _operationTransverseAsService = operationTransverseAsService;
            _operationDetailService = operationDetailService;
            _referentialService = referentialService;
        }

        public PagedList<AsForTable> GetTable(FilterAsTableSelected filter)
        {
            var pagedList = _accountStatementRepository.GetAsTable(filter);

            var result = new PagedList<AsForTable>(_mapper.Map<List<AsForTable>>(pagedList.Datas), pagedList.Pagination);

            foreach (var data in result.Datas)
            {
                data.Plans = _accountStatementPlanService.GetPlansByIdAccountStatement(data.Id, data.DateIntegration.Value.Year);
            }

            return result;
        }

        public PagedList<AsForTable> GetPlanNotAsTable(FilterPlanNotAsTableGroupSelected filter)
        {
            var pagedList = _accountStatementRepository.GetPlanNotAsTable(filter);
            var result = new PagedList<AsForTable>(_mapper.Map<List<AsForTable>>(pagedList.Datas), pagedList.Pagination);
            return result;
        }

        public int GetPlanNotAsCount(FilterFixedPlanNotAsTableSelected filterFixed)
        {
            return _accountStatementRepository.GetPlanNotAsCount(filterFixed);
        }

        public AsForDetail GetForDetail(int idAs)
        {
            //var userForGroup = _userService.GetForUserGroup(idUser);
            AsForDetail asForDetail = GetById(idAs);
            //operationForDetail.User = userForGroup;

            return asForDetail;
        }

        private AsForDetail GetById(int idAs)
        {
            AccountStatement accountStatement = _accountStatementRepository.GetForDetail(idAs);
            var asForDetail = _mapper.Map<AsForDetail>(accountStatement);

            asForDetail.OperationPlace = !asForDetail.IsLocalisable
                ? new Select { Id = 2, Label = "N/A" }
                : asForDetail.OperationDetail.GMapAddress.Id == 1
                    ? new Select { Id = 1, Label = "INCONNU" }
                    : asForDetail.OperationDetail.GMapAddress.Id == 3
                        ? new Select { Id = 3, Label = "INTERNET" }
                        : new Select { Id = 4, Label = "AUTRES" };

            if (asForDetail.OperationPlace.Id == 4)
            {
                asForDetail.GMapSearchInfo = new GMapSearchInfoDto
                {
                    IdGMapAddress = asForDetail.OperationDetail.GMapAddress.Id,
                    OperationPositionSearch = asForDetail.OperationDetail.KeywordOperation,
                    OperationPlaceSearch = asForDetail.OperationDetail.KeywordPlace
                };
            }

            asForDetail.OperationTransverse = _operationTransverseAsService.GetOperationTransverseSelectList(idAs, EnumSelectType.Empty);

            return asForDetail;
        }

        //public AsDetailDto GetAsDetail(FilterAsDetail filter)
        //{
        //    var accountStatement = _accountStatementRepository.GetAsDetail(filter.IdAs.Value);
        //    var asDetailDto = _mapper.Map<AsDetailDto>(accountStatement);
        //    asDetailDto.Asset = _mapper.Map<SelectCode>(accountStatement.OperationTypeFamily.Asset);

        //    asDetailDto.OperationMethod = new ComboSimple<Select>
        //    {
        //        List = _referentialService.OperationMethodService.GetSelectList(EnumSelectType.Inconnu),
        //        Selected = new Select { Id = accountStatement.OperationMethod.Id, Label = accountStatement.OperationMethod.Label }
        //    };
        //    asDetailDto.OperationTypeFamily = new ComboSimple<Select>
        //    {
        //        List = _referentialService.OperationTypeFamilyService.GetSelectList(filter.User.IdUserGroup, (EnumMovement)asDetailDto.IdMovement, EnumSelectType.Inconnu),
        //        Selected = new Select { Id = accountStatement.OperationTypeFamily.Id, Label = accountStatement.OperationTypeFamily.Label }
        //    };
        //    asDetailDto.OperationType = new ComboSimple<Select>
        //    {
        //        List = _referentialService.OperationTypeService.GetSelectList(accountStatement.OperationTypeFamily.Id, EnumSelectType.Empty),
        //        Selected = new Select { Id = accountStatement.OperationType.Id, Label = accountStatement.OperationType.Label }
        //    };

        //    asDetailDto.Operation = new ComboSimple<Select>
        //    {
        //        List = _referentialService.OperationService.GetSelectList(filter.User.IdUserGroup, accountStatement.OperationMethod.Id, accountStatement.OperationType.Id, EnumSelectType.Inconnu),
        //        Selected = new Select { Id = accountStatement.Operation.Id, Label = accountStatement.Operation.Label }
        //    };

        //    asDetailDto.OperationTransverse = new ComboMultiple<Select>
        //    {
        //        List = _referentialService.OperationTransverseService.GetSelectList(filter.User.Id, EnumSelectType.Empty),
        //        ListSelected = _operationTransverseAsService.GetOperationTransverseSelectList(filter.IdAs.Value, EnumSelectType.Empty)
        //    };

        //    List<Select> operationDetailList = null;
        //    if (!asDetailDto.IsLocalisable)
        //    {
        //        operationDetailList = new List<Select> { new Select { Id = 2, Label = "N/A" } };
        //        asDetailDto.OperationPlace = new ComboSimple<Select>
        //        {
        //            List = operationDetailList,
        //            Selected = operationDetailList[0]
        //        };
        //    }
        //    else
        //    {
        //        operationDetailList = new List<Select> { new Select { Id = 1, Label = "INCONNU" }, new Select { Id = 3, Label = "INTERNET" }, new Select { Id = 4, Label = "AUTRES" } };
        //        var operationDetailSelected = asDetailDto.OperationDetail.GMapAddress.Id == 1 ? operationDetailList[0]
        //                : asDetailDto.OperationDetail.GMapAddress.Id == 3 ? operationDetailList[1]
        //                : operationDetailList[2];
        //        asDetailDto.OperationPlace = new ComboSimple<Select>
        //        {
        //            List = operationDetailList,
        //            Selected = operationDetailSelected
        //        };

        //        if (operationDetailSelected.Id == 4)
        //        {
        //            asDetailDto.GMapSearchInfo = new GMapSearchInfoDto
        //            {
        //                IdGMapAddress = asDetailDto.OperationDetail.GMapAddress.Id,
        //                OperationPositionSearch = asDetailDto.OperationDetail.KeywordOperation,
        //                OperationPlaceSearch = asDetailDto.OperationDetail.KeywordPlace
        //            };
        //        }
        //    }

        //    return asDetailDto;
        //}

        public List<AsForTable> GetByPlanPosteReferences(List<PlanPosteReference> planPosteReferences,MonthYear monthYear)
        {
            DateTime minDate = monthYear.Month.Id == (int)EnumMonth.BalanceSheetYear 
                ? Convert.ToDateTime($"01/01/{monthYear.Year}")
                : Convert.ToDateTime($"01/{monthYear.Month.Id}/{monthYear.Year}");
            
            DateTime maxDate = monthYear.Month.Id == (int)EnumMonth.BalanceSheetYear
                ? Convert.ToDateTime($"31/12/{monthYear.Year}")
                : DateHelper.GetLastDayOfMonth(minDate);
            
            var accountStatements = _accountStatementRepository.GetByDatePlanPosteReferenceList(planPosteReferences, minDate, maxDate);

            return _mapper.Map<List<AsForTable>>(accountStatements);
        }

        public Boolean Save(List<AccountStatement> accountStatements)
        {

            return _accountStatementRepository.Save(accountStatements);
        }

        public AccountStatement Save(AccountStatement accountStatement)
        {
            return _accountStatementRepository.Save(accountStatement);
        }

        private SoldeDto GetSolde(int? idUser, int? idAccount,DateTime dateMin,DateTime dateMax,bool isWithITransfer)
        {
            return _accountStatementRepository.GetSolde(idUser,idAccount, dateMin, dateMax, isWithITransfer);
        }

        public Solde GetSolde(FilterAsTableSelected filter)
        {
            var date = Convert.ToDateTime($"01/{filter.MonthYear.Month.Id}/{filter.MonthYear.Year}");
            var dateMin = DateHelper.GetFirstDayOfMonth(date);
            var dateMax = DateHelper.GetLastDayOfMonth(date);
            SoldeDto soldeDto = GetSolde(filter.User.Id, filter.IdAccount, dateMin, dateMax, filter.IsWithITransfer);
            Solde solde = _mapper.Map<Solde>(soldeDto);
            solde.Account = _referentialService.AccountService.GetSelectById(filter.IdAccount.Value);
            solde.DateMax = dateMax;

            //solde.Account = _referentialService.AccountService.GetSelectById(filter.IdAccount.Value);
            return solde;
        }

        public List<InternalTransferDto> GetAsInternalTransfer(FilterAsTableSelected filter)
        {
            List<InternalTransferDto> internalTransferDtos = new List<InternalTransferDto>();

            var date = Convert.ToDateTime($"01/{filter.MonthYear.Month.Id}/{filter.MonthYear.Year}");
            var dateMin = DateHelper.GetFirstDayOfMonth(date);
            var dateMax = DateHelper.GetLastDayOfMonth(date);

            var accountStatements = _accountStatementRepository.GetAsInternalTransfer(filter.User.IdUserGroup,filter.IdAccount, dateMin, dateMax);
            var asDtos = _mapper.Map<List<AsForTable>>(accountStatements);
            foreach(var asDtoFirst in asDtos)
            {
                AsForTable asDtoSecond=null; // = new AsForTableDto();
                AccountStatement asCouple = _accountStatementRepository.GetAsInternalTransferCouple(filter.User.IdUserGroup,asDtoFirst.Id);
                if (asCouple != null)
                {
                    var account = _referentialService.AccountService.GetFullById(asCouple.IdAccount);
                    asCouple.Account = account;
                    asDtoSecond = _mapper.Map<AsForTable>(asCouple);
                }

                InternalTransferDto internalTransferDto = new InternalTransferDto() {
                    AsFirst= asDtoFirst,
                    AsSecond = asDtoSecond
                };
                internalTransferDtos.Add(internalTransferDto);

            }

            return internalTransferDtos;
        }

        public List<AsForTable> GetAsInternalTransferOrphan(int idUserGroup)
        {
            List<AccountStatement> asOrphans = _accountStatementRepository.GetAsInternalTransferOrphan(idUserGroup);


            return _mapper.Map<List<AsForTable>>(asOrphans);
        }

        public bool Update(AsForDetail asForDetail)
        {
            //chargement du accountStatementFile
            var accountStatement = _accountStatementRepository.GetById(asForDetail.Id);

            //mise à jour des données
            accountStatement.AmountOperation = asForDetail.AmountOperation;
            accountStatement.DateIntegration = asForDetail.DateIntegration.Value.Date;
            accountStatement.LabelOperation = asForDetail.LabelOperation;
            accountStatement.IdOperation = asForDetail.Operation.Id;
            accountStatement.IdOperationMethod = asForDetail.OperationMethod.Id;
            accountStatement.IdOperationType = asForDetail.OperationType.Id;
            accountStatement.IdOperationTypeFamily = asForDetail.OperationTypeFamily.Id;

            switch (asForDetail.OperationPlace.Id)
            {
                case 2:
                    asForDetail.OperationDetail.GMapAddress.Id = 2;
                    asForDetail.OperationDetail.KeywordPlace = null;
                    break;
                case 3:
                    asForDetail.OperationDetail.GMapAddress.Id = 3;
                    asForDetail.OperationDetail.KeywordPlace = "--INTERNET--";
                    break;
                default:
                    break;
            }


            //Recherche si operation detail existe déjà, sinon creation
            var idOdUnknown = _referentialService.OperationDetailService.GetUnknown(asForDetail.User.IdUserGroup).Id;
            OperationDetail operationDetail = new OperationDetail
            {
                Id = asForDetail.OperationDetail.Id == idOdUnknown ? 0 : asForDetail.OperationDetail.Id,
                IdUserGroup = asForDetail.User.IdUserGroup,
                IdOperation = asForDetail.Operation.Id,
                IdGMapAddress = asForDetail.OperationDetail.GMapAddress.Id,
                KeywordOperation = asForDetail.OperationDetail.KeywordOperation,
                KeywordPlace = asForDetail.OperationDetail.KeywordPlace
            };
            operationDetail = _referentialService.OperationDetailService.GetOrCreate(operationDetail);
            accountStatement.IdOperationDetail = operationDetail.Id;

            //Mise à jour de l'operationTransverse
            if(asForDetail.OperationTransverse!=null)
                _operationTransverseAsService.Update(asForDetail.OperationTransverse, asForDetail.Id);

            //update de accountStatementFile
            _accountStatementRepository.Update(accountStatement);

            return true;

        }




    }
}
