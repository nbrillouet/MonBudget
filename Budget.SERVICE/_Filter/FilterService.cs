using AutoMapper;
using Budget.MODEL;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class FilterService : IFilterService
    {
        private readonly IMapper _mapper;
        private readonly IAccountStatementImportService _accountStatementImportService;
        private readonly IAccountStatementImportFileService _accountStatementImportFileService;

        public FilterService(
            IMapper mapper,
            IAccountStatementImportService accountStatementImportService,
            IAccountStatementImportFileService accountStatementImportFileService
            )
        {
            _mapper = mapper;
            _accountStatementImportService = accountStatementImportService;
            _accountStatementImportFileService = accountStatementImportFileService;
        }

        public FilterAsiTable GetFilterAsiTable(FilterAsiTableSelected filter)
        {
            FilterAsiTable filterAsiTable = new FilterAsiTable();
            filterAsiTable.Selected = filter;

            var Banks = _accountStatementImportService.GetDistinctBank(filter.IdUser.Value);
            var BanksDto = _mapper.Map<List<SelectColorDto>>(Banks);
            filterAsiTable.Banks = BanksDto;
            filterAsiTable.Selected.IdBank = BanksDto[0].Id;

            return filterAsiTable;
        }
        
        public FilterAsifTable GetFilterAsifTable(FilterAsifTableSelected filter)
        {
            FilterAsifTable filterAsifTable = new FilterAsifTable();
            filterAsifTable.Selected = filter;

            var asi = _accountStatementImportService.GetForDetailById(filter.IdImport.Value);
            filterAsifTable.AsiBankLabel = asi.Bank.Label;
            filterAsifTable.AsiDateImport = asi.DateImport;

            var accounts = _accountStatementImportFileService.GetAccountSelectListByIdImport(filter.IdImport.Value);
            if (filter.Account == null)
            {
                filterAsifTable.Selected.Account = accounts[0];
            }
            else
            {
                filterAsifTable.Selected.Account = filter.Account;
            }

            var asifStates = _accountStatementImportFileService.GetAsifStates(filter.IdImport.Value, filterAsifTable.Selected.Account.Id);

            filterAsifTable.Selected.AsifState = asifStates[0];
            filterAsifTable.Accounts = accounts;
            filterAsifTable.AsifStates = asifStates;

            return filterAsifTable;

        }




    }

}
