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

            var operationMethods = _referentialService.OperationMethodService.GetSelectList(EnumSelectType.Empty);
            filterAsTable.OperationMethod = operationMethods;
            //filterAsTable.Selected.OperationMethod = filter.OperationMethod == null ? null : filter.OperationMethod;

            var operationTypeFamilies = _referentialService.OperationTypeFamilyService.GetSelectGroup(filter.User.IdUserGroup);
            filterAsTable.OperationTypeFamily = operationTypeFamilies;
            //filterAsTable.Selected.OperationTypeFamily = filter.OperationTypeFamily == null ? null : filter.OperationTypeFamily;

            var operationTypes = _referentialService.OperationTypeService.GetSelectGroup(filter.User.IdUserGroup, filterAsTable.Selected.OperationTypeFamily);
            filterAsTable.OperationType = operationTypes;
            //filterAsTable.Selected.OperationType = filter.OperationType == null ? null : filter.OperationType;

            var operations = _referentialService.OperationService.GetSelectList(filter.User.IdUserGroup, filterAsTable.Selected.OperationMethod, filterAsTable.Selected.OperationTypeFamily, filterAsTable.Selected.OperationType);
            filterAsTable.Operation = operations;
            //filterAsTable.Selected.Operation = filter.Operation == null ? null : filter.Operation;

            return filterAsTable;

        }

        public FilterAsiTable GetFilterAsiTable(FilterAsiTableSelected filter)
        {
            FilterAsiTable filterAsiTable = new FilterAsiTable();
            filterAsiTable.Selected = filter;

            var BankAgencies = _accountStatementImportService.GetDistinctBankAgencies(filter.IdUser.Value);
            var BankAgenciesDto = _mapper.Map<List<BankAgencyDto>>(BankAgencies);
            filterAsiTable.BankAgencies = BankAgenciesDto;

            filterAsiTable.Selected.IdBankAgency = BankAgenciesDto.Count==0 ? null : filter.IdBankAgency == null ? BankAgenciesDto[0].Id : filter.IdBankAgency;

            return filterAsiTable;
        }
        
        public FilterAsifTable GetFilterAsifTable(FilterAsifTableSelected filter)
        {
            FilterAsifTable filterAsifTable = new FilterAsifTable();
            filterAsifTable.Selected = filter;

            var asi = _accountStatementImportService.GetForDetailById(filter.IdImport.Value);
            filterAsifTable.AsiBankAgencyLabel = asi.BankAgency.Label;
            filterAsifTable.AsiDateImport = asi.DateImport;

            var accounts = _accountStatementImportFileService.GetAccountSelectListByIdImport(filter.IdImport.Value);
            filterAsifTable.Selected.Account = filter.Account == null ? accounts[0] : filter.Account;

            var asifStates = _accountStatementImportFileService.GetAsifStates(filter.IdImport.Value, filterAsifTable.Selected.Account.Id);

            filterAsifTable.Selected.AsifState = filter.AsifState == null ? asifStates[0] : filter.AsifState;
            filterAsifTable.Account = accounts;
            filterAsifTable.AsifState = asifStates;

            return filterAsifTable;

        }

        public FilterUserTable GetFilterUserTable(FilterUserTableSelected filter)
        {
            FilterUserTable filterUserTable = new FilterUserTable();
            filterUserTable.Selected = filter;

            return filterUserTable;
        }

        public FilterOtfTable GetFilterOtfTable(FilterOtfTableSelected filter)
        {
            FilterOtfTable filterOtfTable = new FilterOtfTable
            {
                Selected = filter
            };
            var Movements = _referentialService.MovementService.GetSelectList(EnumSelectType.Empty);

            filterOtfTable.Movements = Movements;

            return filterOtfTable;
        }

        public FilterOtTable GetFilterOtTable(FilterOtTableSelected filter)
        {
            FilterOtTable filterOtTable = new FilterOtTable
            {
                Selected = filter
            };
            var Otfs = _referentialService.OperationTypeFamilyService.GetSelectList(filter.User.IdUserGroup, EnumSelectType.Empty);

            filterOtTable.Otfs = Otfs;

            return filterOtTable;
        }

        public FilterOperationTable GetFilterOperationTable(FilterOperationTableSelected filter)
        {
            FilterOperationTable filterOperationTable = new FilterOperationTable
            {
                Selected = filter
            };

            filterOperationTable.OperationMethods = _referentialService.OperationMethodService.GetSelectList(EnumSelectType.Empty);
            filterOperationTable.OperationTypes = _referentialService.OperationTypeService.GetSelectGroup(filter.User.IdUserGroup);

            return filterOperationTable;
        }

    }

}
