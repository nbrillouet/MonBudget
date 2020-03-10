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
        //private readonly IPlanNotAsService _planNotAsService;
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

        public PagedList<AsForTableDto> GetTable(FilterAsTableSelected filter)
        {
            var pagedList = _accountStatementRepository.GetAsTable(filter);

            var result = new PagedList<AsForTableDto>(_mapper.Map<List<AsForTableDto>>(pagedList.Datas), pagedList.Pagination);

            foreach (var data in result.Datas)
            {
                data.Plans = _accountStatementPlanService.GetPlansByIdAccountStatement(data.Id, data.DateIntegration.Value.Year);
            }

            return result;
        }

        public PagedList<AsForTableDto> GetPlanNotAsTable(FilterPlanNotAsTableGroupSelected filter)
        {
            var pagedList = _accountStatementRepository.GetPlanNotAsTable(filter);
            var result = new PagedList<AsForTableDto>(_mapper.Map<List<AsForTableDto>>(pagedList.Datas), pagedList.Pagination);
            return result;
        }

        public int GetPlanNotAsCount(FilterFixedPlanNotAsTableSelected filterFixed)
        {
            return _accountStatementRepository.GetPlanNotAsCount(filterFixed);
        }


        public AsDetailDto GetAsDetail(FilterAsDetail filter)
        {
            var accountStatement = _accountStatementRepository.GetAsDetail(filter.IdAs.Value);
            var asDetailDto = _mapper.Map<AsDetailDto>(accountStatement);

            asDetailDto.OperationMethod = new ComboSimple<SelectDto>
            {
                List = _referentialService.OperationMethodService.GetSelectList(EnumSelectType.Inconnu),
                Selected = new SelectDto { Id = accountStatement.OperationMethod.Id, Label = accountStatement.OperationMethod.Label }
            };
            asDetailDto.OperationTypeFamily = new ComboSimple<SelectDto>
            {
                List = _referentialService.OperationTypeFamilyService.GetSelectList(filter.User.IdUserGroup, (EnumMovement)asDetailDto.IdMovement, EnumSelectType.Inconnu),
                Selected = new SelectDto { Id = accountStatement.OperationTypeFamily.Id, Label = accountStatement.OperationTypeFamily.Label }
            };
            asDetailDto.OperationType = new ComboSimple<SelectDto>
            {
                List = _referentialService.OperationTypeService.GetSelectList(accountStatement.OperationTypeFamily.Id, EnumSelectType.Empty),
                Selected = new SelectDto { Id = accountStatement.OperationType.Id, Label = accountStatement.OperationType.Label }
            };

            asDetailDto.Operation = new ComboSimple<SelectDto>
            {
                List = _referentialService.OperationService.GetSelectList(filter.User.IdUserGroup, accountStatement.OperationMethod.Id, accountStatement.OperationType.Id, EnumSelectType.Inconnu),
                Selected = new SelectDto { Id = accountStatement.Operation.Id, Label = accountStatement.Operation.Label }
            };

            asDetailDto.OperationTransverse = new ComboMultiple<SelectDto>
            {
                List = _referentialService.OperationTransverseService.GetSelectList(filter.User.Id, EnumSelectType.Empty),
                ListSelected = _operationTransverseAsService.GetOperationTransverseSelectList(filter.IdAs.Value, EnumSelectType.Empty)
            };

            List<SelectDto> operationDetailList = null;
            if (!asDetailDto.IsLocalisable)
            {
                operationDetailList = new List<SelectDto> { new SelectDto { Id = 2, Label = "N/A" } };
                asDetailDto.OperationPlace = new ComboSimple<SelectDto>
                {
                    List = operationDetailList,
                    Selected = operationDetailList[0]
                };
            }
            else
            {
                operationDetailList = new List<SelectDto> { new SelectDto { Id = 1, Label = "INCONNU" }, new SelectDto { Id = 3, Label = "INTERNET" }, new SelectDto { Id = 4, Label = "AUTRES" } };
                var operationDetailSelected = asDetailDto.OperationDetail.GMapAddress.Id == 1 ? operationDetailList[0]
                        : asDetailDto.OperationDetail.GMapAddress.Id == 3 ? operationDetailList[1]
                        : operationDetailList[2];
                asDetailDto.OperationPlace = new ComboSimple<SelectDto>
                {
                    List = operationDetailList,
                    Selected = operationDetailSelected
                };

                if (operationDetailSelected.Id == 4)
                {
                    asDetailDto.GMapSearchInfo = new GMapSearchInfoDto
                    {
                        IdGMapAddress = asDetailDto.OperationDetail.GMapAddress.Id,
                        OperationPositionSearch = asDetailDto.OperationDetail.KeywordOperation,
                        OperationPlaceSearch = asDetailDto.OperationDetail.KeywordPlace
                    };
                }
            }

            return asDetailDto;
        }

        public List<AsForTableDto> GetByPlanPosteReferences(List<PlanPosteReference> planPosteReferences,MonthYear monthYear)
        {
            DateTime minDate = monthYear.Month.Id == (int)EnumMonth.BalanceSheetYear 
                ? Convert.ToDateTime($"01/01/{monthYear.Year}")
                : Convert.ToDateTime($"01/{monthYear.Month.Id}/{monthYear.Year}");
            
            DateTime maxDate = monthYear.Month.Id == (int)EnumMonth.BalanceSheetYear
                ? Convert.ToDateTime($"31/12/{monthYear.Year}")
                : DateHelper.GetLastDayOfMonth(minDate);
            
            var accountStatements = _accountStatementRepository.GetByDatePlanPosteReferenceList(planPosteReferences, minDate, maxDate);

            return _mapper.Map<List<AsForTableDto>>(accountStatements);
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

        public SoldeDto GetSolde(FilterAsTableSelected filter)
        {
            var date = Convert.ToDateTime($"01/{filter.MonthYear.Month.Id}/{filter.MonthYear.Year}");
            var dateMin = DateHelper.GetFirstDayOfMonth(date);
            var dateMax = DateHelper.GetLastDayOfMonth(date);
            var solde = GetSolde(filter.User.Id, filter.IdAccount, dateMin, dateMax, filter.IsWithITransfer);

            return solde;
        }

        public List<InternalTransferDto> GetAsInternalTransfer(FilterAsTableSelected filter)
        {
            List<InternalTransferDto> internalTransferDtos = new List<InternalTransferDto>();

            var date = Convert.ToDateTime($"01/{filter.MonthYear.Month.Id}/{filter.MonthYear.Year}");
            var dateMin = DateHelper.GetFirstDayOfMonth(date);
            var dateMax = DateHelper.GetLastDayOfMonth(date);

            var accountStatements = _accountStatementRepository.GetAsInternalTransfer(filter.User.IdUserGroup,filter.IdAccount, dateMin, dateMax);
            var asDtos = _mapper.Map<List<AsForTableDto>>(accountStatements);
            foreach(var asDtoFirst in asDtos)
            {
                AsForTableDto asDtoSecond=null; // = new AsForTableDto();
                AccountStatement asCouple = _accountStatementRepository.GetAsInternalTransferCouple(filter.User.IdUserGroup,asDtoFirst.Id);
                if (asCouple != null)
                {
                    var account = _referentialService.AccountService.GetFullById(asCouple.IdAccount);
                    asCouple.Account = account;
                    asDtoSecond = _mapper.Map<AsForTableDto>(asCouple);
                }

                InternalTransferDto internalTransferDto = new InternalTransferDto() {
                    AsFirst= asDtoFirst,
                    AsSecond = asDtoSecond
                };
                internalTransferDtos.Add(internalTransferDto);

            }

            return internalTransferDtos;
        }

        public bool Update(AsDetailDto asDetailDto)
        {
            //chargement du accountStatementFile
            var accountStatement = _accountStatementRepository.GetById(asDetailDto.Id);

            //mise à jour des données
            accountStatement.AmountOperation = asDetailDto.AmountOperation;
            accountStatement.DateIntegration = asDetailDto.DateIntegration.Value.Date;
            accountStatement.LabelOperation = asDetailDto.LabelOperation;
            accountStatement.IdOperation = asDetailDto.Operation.Selected.Id;
            accountStatement.IdOperationMethod = asDetailDto.OperationMethod.Selected.Id;
            accountStatement.IdOperationType = asDetailDto.OperationType.Selected.Id;
            accountStatement.IdOperationTypeFamily = asDetailDto.OperationTypeFamily.Selected.Id;

            switch (asDetailDto.OperationPlace.Selected.Id)
            {
                case 2:
                    asDetailDto.OperationDetail.GMapAddress.Id = 2;
                    asDetailDto.OperationDetail.KeywordPlace = null;
                    break;
                case 3:
                    asDetailDto.OperationDetail.GMapAddress.Id = 3;
                    asDetailDto.OperationDetail.KeywordPlace = "--INTERNET--";
                    break;
                default:
                    break;
            }


            //Recherche si operation detail existe déjà, sinon creation
            var idOdUnknown = _referentialService.OperationDetailService.GetUnknown(asDetailDto.User.IdUserGroup).Id;
            OperationDetail operationDetail = new OperationDetail
            {
                Id = asDetailDto.OperationDetail.Id== idOdUnknown ? 0 : asDetailDto.OperationDetail.Id,
                IdUserGroup = asDetailDto.User.IdUserGroup,
                IdOperation = asDetailDto.Operation.Selected.Id,
                IdGMapAddress = asDetailDto.OperationDetail.GMapAddress.Id,
                KeywordOperation = asDetailDto.OperationDetail.KeywordOperation,
                KeywordPlace = asDetailDto.OperationDetail.KeywordPlace
            };
            operationDetail = _referentialService.OperationDetailService.GetOrCreate(operationDetail);
            accountStatement.IdOperationDetail = operationDetail.Id;

            //Mise à jour de l'operationTransverse
            _operationTransverseAsService.Update(asDetailDto.OperationTransverse.ListSelected, asDetailDto.Id);

            //update de accountStatementFile
            _accountStatementRepository.Update(accountStatement);

            return true;

        }




    }
}
