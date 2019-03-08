using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL.Dto.Finance;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class AccountStatementChartService : IAccountStatementChartService
    {
        private readonly IMapper _mapper;
        private readonly IAccountStatementChartRepository _accountStatementChartRepository;


        public AccountStatementChartService(
            IMapper mapper,
            IAccountStatementChartRepository accountStatementChartRepository
            )
        {
            _mapper = mapper;
            _accountStatementChartRepository = accountStatementChartRepository;
        }

        public List<AsEvolutionDto> GetAsChartEvolutionBrut(FilterAsTableSelected filterAsTableSelected)
        {
            return null;
        }
    }
}
