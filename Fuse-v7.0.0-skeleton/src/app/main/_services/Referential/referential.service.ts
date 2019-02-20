import { Injectable, Injector } from "@angular/core";
import { OperationMethodService } from "./operation-method.service";
import { OperationTypeFamilyService } from "./operation-type-family.service";
import { OperationTypeService } from "./operation-type.service";
import { AccountTypeService } from "./account-type.service";
import { AccountService } from "./account.service";
import { BankService } from "./bank.service";
import { OperationService } from "./operation.service";
// import { OperationService } from "./operation.service";

//FACADE
@Injectable()
export class ReferentialService {
    //AccountTypeService
    private _accountTypeService: AccountTypeService;
    public get accountTypeService(): AccountTypeService {
      if(!this._accountTypeService){
        this._accountTypeService = this.injector.get(AccountTypeService);
      }
      return this._accountTypeService;
    }

    //AccountService
    private _accountService: AccountService;
    public get accountService(): AccountService {
      if(!this._accountService){
        this._accountService = this.injector.get(AccountService);
      }
      return this._accountService;
    }
  
    //BankService
    private _bankService: BankService;
    public get bankService(): BankService {
        if(!this._bankService){
        this._bankService = this.injector.get(BankService);
        }
        return this._bankService;
    }

    //Operation
    private _operationService: OperationService;
    public get operationService(): OperationService {
        if(!this._operationService){
        this._operationService = this.injector.get(OperationService);
        }
        return this._operationService;
    }

    //OperationMethodService
    private _operationMethodService: OperationMethodService;
    public get operationMethodService(): OperationMethodService {
        if(!this._operationMethodService){
        this._operationMethodService = this.injector.get(OperationMethodService);
        }
        return this._operationMethodService;
    }
  
    //OperationTypeFamilyService
    private _operationTypeFamilyService: OperationTypeFamilyService;
    public get operationTypeFamilyService(): OperationTypeFamilyService {
        if(!this._operationTypeFamilyService){
        this._operationTypeFamilyService = this.injector.get(OperationTypeFamilyService);
        }
        return this._operationTypeFamilyService;
    }

    //OperationTypeService
    private _operationTypeService: OperationTypeService;
    public get operationTypeService(): OperationTypeService {
        if(!this._operationTypeService){
        this._operationTypeService = this.injector.get(OperationTypeService);
        }
        return this._operationTypeService;
    }

    constructor(private injector: Injector) {  }


}