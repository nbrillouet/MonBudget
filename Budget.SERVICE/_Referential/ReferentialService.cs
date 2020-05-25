using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class ReferentialService
    {
        public IBankFileDefinitionService BankFileDefinitionService { get; }
        public IOperationMethodService OperationMethodService { get; }
        public IOperationTransverseService OperationTransverseService {get;}
        public IAccountService AccountService { get; }
        public IOperationService OperationService { get; }
        public IOperationDetailService OperationDetailService { get; }
        public IOperationTypeService OperationTypeService { get; }
        public IOperationTypeFamilyService OperationTypeFamilyService { get; }
        public IMovementService MovementService { get; }
        public IAssetService AssetService { get; }
        public IUserAccountService UserAccountService { get; }
        public IBankAgencyService BankAgencyService { get; }
        public IBankFamilyService BankFamilyService { get; }
        public IAccountTypeService AccountTypeService { get; }
        public IBankSubFamilyService BankSubFamilyService { get; }
        
        public ReferentialService(
            IBankFileDefinitionService bankFileDefinitionService,
            IOperationMethodService operationMethodService,
            IOperationDetailService operationDetailService,
            IOperationTypeService operationTypeService,
            IOperationTransverseService operationTransverseService,
            IAccountService accountService,
            IOperationService operationService,
            IOperationTypeFamilyService operationTypeFamilyService,
            IMovementService movementService,
            IAssetService assetService,
            IUserAccountService userAccountService,
            IBankAgencyService bankAgencyService,
            IBankFamilyService bankFamilyService,
            IAccountTypeService accountTypeService,
            IBankSubFamilyService bankSubFamilyService
            )
        {
            BankFileDefinitionService = bankFileDefinitionService;
            OperationMethodService = operationMethodService;
            OperationDetailService = operationDetailService;
            OperationTypeService = operationTypeService;
            OperationTransverseService = operationTransverseService;
            AccountService = accountService;
            OperationService = operationService;
            OperationTypeFamilyService = operationTypeFamilyService;
            MovementService = movementService;
            AssetService = assetService;
            UserAccountService = userAccountService;
            BankAgencyService = bankAgencyService;
            BankFamilyService = bankFamilyService;
            AccountTypeService = accountTypeService;
            BankSubFamilyService = bankSubFamilyService;
        }

    }
}
