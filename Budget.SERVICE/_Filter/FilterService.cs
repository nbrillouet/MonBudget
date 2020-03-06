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
        private readonly IPlanService _planService;
        private readonly ReferentialService _referentialService;


        public FilterService(
            IMapper mapper,
            IAccountStatementImportService accountStatementImportService,
            IAccountStatementImportFileService accountStatementImportFileService,
            ReferentialService referentialService,
            IPlanService planService

            )
        {
            _mapper = mapper;
            _accountStatementImportService = accountStatementImportService;
            _accountStatementImportFileService = accountStatementImportFileService;
            _referentialService = referentialService;
            _planService = planService;

        }

        public FilterAsTableSelection GetFilterAsTable(FilterAsTableSelected filter)
        {
            FilterAsTableSelection filterAsTable = new FilterAsTableSelection();
            //filterAsTable.Selected = filter;

            var operationMethods = _referentialService.OperationMethodService.GetSelectList(EnumSelectType.Empty);
            filterAsTable.OperationMethod = operationMethods;
            //filterAsTable.Selected.OperationMethod = filter.OperationMethod == null ? null : filter.OperationMethod;

            var operationTypeFamilies = _referentialService.OperationTypeFamilyService.GetSelectGroup(filter.User.IdUserGroup);
            filterAsTable.OperationTypeFamily = operationTypeFamilies;
            //filterAsTable.Selected.OperationTypeFamily = filter.OperationTypeFamily == null ? null : filter.OperationTypeFamily;

            var operationTypes = _referentialService.OperationTypeService.GetSelectGroup(filter.User.IdUserGroup, filter.OperationTypeFamily);
            filterAsTable.OperationType = operationTypes;
            //filterAsTable.Selected.OperationType = filter.OperationType == null ? null : filter.OperationType;

            var operations = _referentialService.OperationService.GetSelectList(filter.User.IdUserGroup, filter.OperationMethod, filter.OperationTypeFamily, filter.OperationType);
            filterAsTable.Operation = operations;
            //filterAsTable.Selected.Operation = filter.Operation == null ? null : filter.Operation;

            return filterAsTable;

        }

        public FilterAsiTableSelection GetFilterAsiTable(FilterAsiTableSelected filter)
        {
            FilterAsiTableSelection filterAsiTable = new FilterAsiTableSelection();
            //filterAsiTable.Selected = filter;

            var BankAgencies = _accountStatementImportService.GetDistinctBankAgencies(filter.IdUser.Value);
            var BankAgenciesDto = _mapper.Map<List<BankAgencyDto>>(BankAgencies);
            filterAsiTable.BankAgencies = BankAgenciesDto;

            //filterAsiTable.Selected.IdBankAgency = BankAgenciesDto.Count==0 ? null : filter.IdBankAgency == null ? BankAgenciesDto[0].Id : filter.IdBankAgency;

            return filterAsiTable;
        }
        
        public FilterAsifTableSelection GetFilterAsifTable(FilterAsifTableSelected filter)
        {
            FilterAsifTableSelection filterAsifTable = new FilterAsifTableSelection();

            var accounts = _accountStatementImportFileService.GetAccountSelectListByIdImport(filter.IdImport.Value);
            filterAsifTable.Account = accounts;

            var account = filter.Account == null ? accounts[0] : filter.Account;
            var asifStates = _accountStatementImportFileService.GetAsifStates(filter.IdImport.Value, account.Id);
            filterAsifTable.AsifState = asifStates;

            var operationMethods = _referentialService.OperationMethodService.GetSelectList(EnumSelectType.Empty);
            filterAsifTable.OperationMethod = operationMethods;
            
            var operationTypeFamilies = _referentialService.OperationTypeFamilyService.GetSelectGroup(filter.User.IdUserGroup);
            filterAsifTable.OperationTypeFamily = operationTypeFamilies;
            
            var operationTypes = _referentialService.OperationTypeService.GetSelectGroup(filter.User.IdUserGroup, filter.OperationTypeFamily);
            filterAsifTable.OperationType = operationTypes;
            
            var operations = _referentialService.OperationService.GetSelectList(filter.User.IdUserGroup, filter.OperationMethod, filter.OperationTypeFamily, filter.OperationType);
            filterAsifTable.Operation = operations;

            return filterAsifTable;

        }

        public FilterUserTableSelection GetFilterUserTable(FilterUserTableSelected filter)
        {
            FilterUserTableSelection filterUserTable = new FilterUserTableSelection();
            //filterUserTable.Selected = filter;

            return filterUserTable;
        }

        public FilterOtfTableSelection GetFilterOtfTable(FilterOtfTableSelected filter)
        {
            FilterOtfTableSelection filterOtfTable = new FilterOtfTableSelection();
            //{
            //    Selected = filter
            //};
            var Movements = _referentialService.MovementService.GetSelectList(EnumSelectType.Empty);

            filterOtfTable.Movement = Movements;

            return filterOtfTable;
        }

        public FilterOtTableSelection GetFilterOtTable(FilterOtTableSelected filter)
        {
            FilterOtTableSelection filterOtTable = new FilterOtTableSelection();

            var Otfs = _referentialService.OperationTypeFamilyService.GetSelectList(filter.User.IdUserGroup, EnumSelectType.Empty);

            filterOtTable.OperationTypeFamily = Otfs;

            return filterOtTable;
        }

        public FilterOperationTableSelection GetFilterOperationTable(FilterOperationTableSelected filter)
        {
            FilterOperationTableSelection filterOperationTable = new FilterOperationTableSelection();

            filterOperationTable.OperationMethod = _referentialService.OperationMethodService.GetSelectList(EnumSelectType.Empty);
            filterOperationTable.OperationType = _referentialService.OperationTypeService.GetSelectGroup(filter.User.IdUserGroup);

            return filterOperationTable;
        }

        public FilterPlanTableSelection GetFilterPlanTable(FilterPlanTableSelected filter)
        {
            FilterPlanTableSelection filterPlanTable = new FilterPlanTableSelection();
            filterPlanTable.Year = _planService.GetDistinctYears();
            return filterPlanTable;
        }

        public FilterPlanPosteTableSelection GetFilterPlanPosteTable(FilterPlanPosteTableSelected filter)
        {
            FilterPlanPosteTableSelection filterPlanPosteTable = new FilterPlanPosteTableSelection();

            return filterPlanPosteTable;
        }

        public FilterPlanNotAsTableSelection GetFilterPlanNotAsTable(FilterPlanNotAsTableSelected filter)
        {
            FilterAsTableSelection filterAsTableSelection = GetFilterAsTable(filter);

            return _mapper.Map<FilterPlanNotAsTableSelection>(filterAsTableSelection);
        }
        

    }

}
