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
            IAssetService assetService
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
        }

    }
}
