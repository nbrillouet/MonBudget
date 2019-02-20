using AutoMapper;
using Budget.DATA.Repositories;
using Budget.HELPER;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
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
        

        public AccountStatementService(
            IMapper mapper,
            IGMapAddressService gMapAddressService,
            IAccountStatementRepository accountStatementRepository,
            IAccountStatementPlanService accountStatementPlanService
            )
        {
            _mapper = mapper;
            _gMapAddressService = gMapAddressService;
            _accountStatementRepository = accountStatementRepository;
            _accountStatementPlanService = accountStatementPlanService;
        }

        public AsDetailDto GetForDetailById(int id)
        {
            var accountStatement = _accountStatementRepository.GetForDetailById(id);
            var asDetailDto = _mapper.Map<AsDetailDto>(accountStatement);

            return asDetailDto;
        }

        public async Task<PagedList<AccountStatement>> GetAsync(FilterAccountStatement filter)
        {
            var accountStatements = await _accountStatementRepository.GetAsync(filter);
            return accountStatements;
        }


        public PagedList1<AsGridDto> Get(FilterAccountStatement filter)
        {
            var pagedList = _accountStatementRepository.Get(filter);

            var result = new PagedList1<AsGridDto>(_mapper.Map<List<AsGridDto>>(pagedList.Datas), pagedList.Pagination);

            foreach (var data in result.Datas)
            {
                data.Plans=_accountStatementPlanService.GetPlansByIdAccountStatement(data.Id,data.DateIntegration.Value.Year);
            }

            
            return result;
        }

        public Boolean Save(List<AccountStatement> accountStatements)
        {

            return _accountStatementRepository.Save(accountStatements);
        }

        public SoldeDto GetSolde(int idAccount,DateTime dateMin,DateTime dateMax,bool isWithITransfer)
        {
            return _accountStatementRepository.GetSolde(idAccount,dateMin, dateMax, isWithITransfer);
        }

        public SoldeDto GetSolde(FilterAccountStatement filter)
        {
            var date = Convert.ToDateTime($"01/{filter.MonthYearSelected.Month.Id}/{filter.MonthYearSelected.Year}");
            var dateMin = DateHelper.GetFirstDayOfMonth(date);
            var dateMax = DateHelper.GetLastDayOfMonth(date);

            return GetSolde(filter.IdAccount.Value, dateMin, dateMax, filter.IsWithITransfer);
        }

        


    }
}
