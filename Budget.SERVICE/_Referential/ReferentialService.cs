using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class ReferentialService
    {
        public IOperationMethodService OperationMethodService { get; }
        public IOperationTypeFamilyService OperationTypeFamilyService { get; }
        public IOperationTypeService OperationTypeService { get; }
        public IOperationService OperationService { get; }
        public IOperationTransverseService OperationTransverseService {get;}
        public IAccountService AccountService { get; }

        public ReferentialService(
            IOperationMethodService operationMethodService,
            IOperationTypeFamilyService operationTypeFamilyService,
            IOperationTypeService operationTypeService,
            IOperationService operationService,
            IOperationTransverseService operationTransverseService,
            IAccountService accountService
            )
        {
            OperationMethodService = operationMethodService;
            OperationTypeFamilyService = operationTypeFamilyService;
            OperationTypeService = operationTypeService;
            OperationService = operationService;
            OperationTransverseService = operationTransverseService;
            AccountService = accountService;
        }

    }
}
