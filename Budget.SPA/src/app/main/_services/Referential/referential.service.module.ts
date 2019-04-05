import { OperationTypeService } from "./operation-type.service";
import { OperationTypeFamilyService } from "./operation-type-family.service";
import { OperationMethodService } from "./operation-method.service";
import { AccountService } from "./account.service";
import { AccountTypeService } from "./account-type.service";
import { NgModule } from "@angular/core";
import { OperationService } from "./operation.service";
import { ReferentialService } from "./referential.service";
import { OperationTransverseService } from "./operation-tranverse.service";
import { BankAgencyService } from "./bank.service";

@NgModule({
    imports: [

    ],
    declarations: [

    ],
    providers : [
        ReferentialService,
        OperationService,
        OperationTypeService,
        OperationTypeFamilyService,
        OperationMethodService,
        BankAgencyService,
        AccountService,
        AccountTypeService,
        OperationTransverseService
    ]

  })

  export class ReferentialServiceModule { }