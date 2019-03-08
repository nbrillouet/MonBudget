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
        private readonly ReferentialService _referentialService;
        //private readonly IOperationTypeFamilyService _operationTypeFamilyService;



        public FilterService(
            IMapper mapper,
            IAccountStatementImportService accountStatementImportService,
            IAccountStatementImportFileService accountStatementImportFileService,
            ReferentialService referentialService

            )
        {
            _mapper = mapper;
            _accountStatementImportService = accountStatementImportService;
            _accountStatementImportFileService = accountStatementImportFileService;
            _referentialService = referentialService;

        }

        public FilterAsTable GetFilterAsTable(FilterAsTableSelected filter)
        {
            FilterAsTable filterAsTable = new FilterAsTable();
            filterAsTable.Selected = filter;
            filterAsTable.Selected.Pagination = new Pagination();

            var operationMethods = _referentialService.OperationMethodService.GetSelectList(EnumSelectType.Empty);
            filterAsTable.OperationMethods = operationMethods;
            filterAsTable.Selected.OperationMethods = filter.OperationMethods==null ? null : filter.OperationMethods;

            var operationTypeFamilies = _referentialService.OperationTypeFamilyService.GetSelectGroup();
            filterAsTable.OperationTypeFamilies = operationTypeFamilies;
            filterAsTable.Selected.OperationTypeFamilies = filter.OperationTypeFamilies == null ? null : filter.OperationTypeFamilies;

            var operationTypes = _referentialService.OperationTypeService.GetSelectList(filterAsTable.Selected.OperationTypeFamilies);
            filterAsTable.OperationTypes = operationTypes;
            filterAsTable.Selected.OperationTypes = filter.OperationTypes == null ? null : filter.OperationTypes;

            var operations = _referentialService.OperationService.GetSelectList(filterAsTable.Selected.OperationTypes);
            filterAsTable.Operations = operations;
            filterAsTable.Selected.Operations = filter.Operations == null ? null : filter.Operations;

            return filterAsTable;

        }

        public FilterAsiTable GetFilterAsiTable(FilterAsiTableSelected filter)
        {
            FilterAsiTable filterAsiTable = new FilterAsiTable();
            filterAsiTable.Selected = filter;

            var Banks = _accountStatementImportService.GetDistinctBank(filter.IdUser.Value);
            var BanksDto = _mapper.Map<List<SelectColorDto>>(Banks);
            filterAsiTable.Banks = BanksDto;

            filterAsiTable.Selected.IdBank = filter.IdBank==null ? BanksDto[0].Id : filter.IdBank;

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
            filterAsifTable.Selected.Account = filter.Account == null ? accounts[0] : filter.Account;

            var asifStates = _accountStatementImportFileService.GetAsifStates(filter.IdImport.Value, filterAsifTable.Selected.Account.Id);

            filterAsifTable.Selected.AsifState = filter.AsifState == null ? asifStates[0] : filter.AsifState;
            filterAsifTable.Accounts = accounts;
            filterAsifTable.AsifStates = asifStates;

            return filterAsifTable;

        }

        //public List<SelectDto> GetOperationMethodSelectList(EnumSelectType enumSelectType)
        //{
        //    return _operationMethodService.GetSelectList(enumSelectType);
        //}

        public FilterUserTable GetFilterUserTable(FilterUserTableSelected filter)
        {
            FilterUserTable filterUserTable = new FilterUserTable();
            filterUserTable.Selected = filter;

            return filterUserTable;

        }




    }

}
