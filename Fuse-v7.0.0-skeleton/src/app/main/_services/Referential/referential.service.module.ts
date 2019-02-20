// import { ReferentialTestService } from "./referential.service";
import { OperationTypeService } from "./operation-type.service";
import { OperationTypeFamilyService } from "./operation-type-family.service";
import { OperationMethodService } from "./operation-method.service";
import { BankService } from "./bank.service";
import { AccountService } from "./account.service";
import { AccountTypeService } from "./account-type.service";
import { NgModule } from "@angular/core";
import { OperationService } from "./operation.service";
import { ReferentialService } from "./referential.service";

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
        BankService,
        AccountService,
        AccountTypeService

    ]

  })

  export class ReferentialServiceModule { }