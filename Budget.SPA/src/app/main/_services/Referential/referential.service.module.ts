import { OperationMethodService } from "./operation-method.service";
import { AccountService } from "./account.service";
import { AccountTypeService } from "./account-type.service";
import { NgModule } from "@angular/core";
import { OperationService } from "./operation.service";
import { ReferentialService } from "./referential.service";
import { OperationTransverseService } from "./operation-tranverse.service";
import { BankAgencyService } from "./bank-agency.service";
import { BankSubFamilyService } from "./bank-sub-family.service";
import { OtService } from "./operation-type.service";
import { OtfService } from "./operation-type-family.service";

@NgModule({
    imports: [

    ],
    declarations: [

    ],
    providers : [
        ReferentialService,
        OperationService,
        OtService,
        OtfService,
        OperationMethodService,
        BankAgencyService,
        AccountService,
        AccountTypeService,
        OperationTransverseService,
        BankSubFamilyService
    ]

  })

  export class ReferentialServiceModule { }