(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["referential-account-account-module"],{

/***/ "./src/app/main/_models/generics/select.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/_models/generics/select.model.ts ***!
  \*******************************************************/
/*! exports provided: SelectYear, EnumSelectType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectYear", function() { return SelectYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumSelectType", function() { return EnumSelectType; });
var SelectYear = /** @class */ (function () {
    function SelectYear() {
    }
    return SelectYear;
}());

var EnumSelectType;
(function (EnumSelectType) {
    EnumSelectType[EnumSelectType["empty"] = 0] = "empty";
    EnumSelectType[EnumSelectType["inconnu"] = 1] = "inconnu";
    EnumSelectType[EnumSelectType["inconnue"] = 11] = "inconnue";
    EnumSelectType[EnumSelectType["tous"] = 2] = "tous";
    EnumSelectType[EnumSelectType["toutes"] = 22] = "toutes";
    EnumSelectType[EnumSelectType["aucun"] = 3] = "aucun";
    EnumSelectType[EnumSelectType["aucune"] = 33] = "aucune";
})(EnumSelectType || (EnumSelectType = {}));


/***/ }),

/***/ "./src/app/main/apps/referential/account/account-detail/account-detail.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/apps/referential/account/account-detail/account-detail.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"product\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n  <!-- TOP BACKGROUND -->\n  <div class=\"top-bg mat-accent-bg\"></div>\n  <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n    \n        <div *ngIf='accountForm'>\n            <!-- HEADER -->\n            <div class=\"header white-fg\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n                <!-- APP TITLE -->\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <button class=\"mr-0 mr-sm-16\" mat-icon-button\n                        [routerLink]=\"'/apps/referential/accounts'\"\n                        >\n                        <mat-icon>arrow_back</mat-icon>\n                    </button>\n\n                    <div class=\"product-image mr-8 mr-sm-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n                        <mat-icon>account_balance</mat-icon>  \n                        <!-- <img *ngIf=\"user.avatarUrl\" [src]=\"user.avatarUrl\">\n                        <img *ngIf=\"!user.avatarUrl\" [src]=\"'assets/images/avatars/profile.jpg'\"> -->\n                    </div>\n\n                    <div fxLayout=\"column\" fxLayoutAlign=\"start start\"\n                        *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\n                        <div class=\"h2\" *ngIf=\"pageType ==='edit'\">\n                            {{account.number}}  {{account.label}}\n                        </div>\n                        <div class=\"h2\" *ngIf=\"pageType ==='new'\">\n                            Nouveau compte\n                        </div>\n                        <div class=\"subtitle secondary-text\">\n                            <span>Details compte bancaire</span>\n                        </div>\n                    </div>\n                </div>\n\n                <button mat-raised-button\n                        class=\"save-product-button mat-white-bg mt-16 mt-sm-0\"\n                        [disabled]=\"accountForm.invalid\"\n                        *ngIf=\"pageType ==='new'\" (click)=\"create(accountForm)\">\n                    <span>AJOUTER</span>\n                </button>\n\n                <button mat-raised-button\n                        class=\"save-product-button mat-white-bg mt-16 mt-sm-0\"\n                        [disabled]=\"accountForm.invalid || accountForm.pristine\"\n                        *ngIf=\"pageType ==='edit'\" (click)=\"update(accountForm)\">\n                    <span>SAUVEGARDER</span>\n                </button>\n            </div>\n            <!-- / HEADER -->\n\n      <!-- CONTENT CARD -->\n      <div class=\"content-card mat-white-bg\">\n\n          <!-- CONTENT -->\n          <div class=\"content\">\n              <form name=\"accountForm\" [formGroup]=\"accountForm\" class=\"product w-100-p\" fxLayout=\"column\" fxFlex>\n                    <mat-tab-group>\n\n                      <mat-tab label=\"Informations\">\n                          <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            \n                            <mat-form-field class=\"w-100-p\" >\n                                <mat-select formControlName=\"bankAgency\" placeholder=\"Banque\" [compareWith]=\"compareObjects\" >\n                                    <mat-option *ngFor=\"let item of bankAgencies\" [value]=\"item\">\n                                        {{ item.label }}\n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n\n                            <mat-form-field class=\"w-100-p\" >\n                                <mat-select formControlName=\"accountType\" placeholder=\"Type de compte\" [compareWith]=\"compareObjects\" >\n                                    <mat-option *ngFor=\"let item of accountTypes\" [value]=\"item\">\n                                        {{ item.label }}\n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                <!-- <mat-icon class=\"mr-12 mt-12\">account_circle</mat-icon> -->\n                                <mat-form-field class=\"w-100-p\">\n                                    <input matInput\n                                        name=\"label\"\n                                        formControlName=\"label\"\n                                        placeholder=\"Nom\"\n                                    >\n                                </mat-form-field>\n                            </div>\n\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                <!-- <mat-icon class=\"mr-12 mt-12\">account_circle</mat-icon> -->\n                                <mat-form-field class=\"w-100-p\">\n                                    <input matInput\n                                        name=\"number\"\n                                        formControlName=\"number\"\n                                        placeholder=\"Numéro de compte\"\n                                    >\n                                </mat-form-field>\n                            </div>\n                            <!-- <mat-divider></mat-divider> -->\n                            \n                            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                <mat-form-field class=\"w-100-p\">\n                                    <input matInput\n                                        type=\"number\"\n                                        name=\"startAmount\"\n                                        formControlName=\"startAmount\"\n                                        placeholder=\"Montant de départ\"\n                                    >\n                                </mat-form-field>\n\n                                <mat-form-field class=\"w-100-p\">\n                                    <input matInput\n                                        type=\"number\"\n                                        name=\"alertThreshold\"\n                                        formControlName=\"alertThreshold\"\n                                        placeholder=\"Seuil d'alerte\"\n                                    >\n                                </mat-form-field>\n                            </div>\n                            \n                            <!-- <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                \n                            </div> -->\n\n                          </div>\n                      </mat-tab>\n                  </mat-tab-group>\n              </form>\n\n          </div>\n      </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/main/apps/referential/account/account-detail/account-detail.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/apps/referential/account/account-detail/account-detail.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXBwcy9yZWZlcmVudGlhbC9hY2NvdW50L2FjY291bnQtZGV0YWlsL2FjY291bnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/apps/referential/account/account-detail/account-detail.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/apps/referential/account/account-detail/account-detail.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AccountDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailComponent", function() { return AccountDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_models_generics_select_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/_models/generics/select.model */ "./src/app/main/_models/generics/select.model.ts");
/* harmony import */ var app_main_services_Referential_referential_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/_services/Referential/referential.service */ "./src/app/main/_services/Referential/referential.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountDetailComponent = /** @class */ (function () {
    function AccountDetailComponent(_activatedRoute, _formBuilder, _referentialService, _notificationService) {
        var _this = this;
        this._activatedRoute = _activatedRoute;
        this._formBuilder = _formBuilder;
        this._referentialService = _referentialService;
        this._notificationService = _notificationService;
        this._activatedRoute.data.subscribe(function (data) {
            _this.account = data['account'];
            _this.pageType = _this.account.id == 0 ? 'new' : 'edit';
            _this.accountForm = _this.createAccountForm();
            _this.loadBankAgencyList();
            _this.loadAccountTypeList();
        });
    }
    AccountDetailComponent.prototype.ngOnInit = function () {
    };
    AccountDetailComponent.prototype.createAccountForm = function () {
        return this._formBuilder.group({
            id: [this.account.id],
            number: [this.account.number],
            label: [this.account.label],
            bankAgency: [this.account.bankAgency],
            startAmount: [this.account.startAmount],
            accountType: [this.account.accountType],
            alertThreshold: [this.account.alertThreshold]
        });
    };
    AccountDetailComponent.prototype.loadBankAgencyList = function () {
        var _this = this;
        this._referentialService.bankAgencyService.GetSelectList(-1)
            .subscribe(function (response) {
            _this.bankAgencies = response;
        });
    };
    AccountDetailComponent.prototype.loadAccountTypeList = function () {
        var _this = this;
        this._referentialService.accountTypeService.GetSelectList(app_main_models_generics_select_model__WEBPACK_IMPORTED_MODULE_5__["EnumSelectType"].aucun)
            .subscribe(function (response) {
            _this.accountTypes = response;
        });
    };
    AccountDetailComponent.prototype.update = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.bindAccount(value);
        this._referentialService.accountService.update(this.account)
            .subscribe(function (next) {
            _this.accountForm.reset(_this.account);
            _this._notificationService.success('Sauvegarde réussi', 'Compte enregistré');
        }, function (error) {
            _this._notificationService.error('Echec sauvegarde', error);
        });
    };
    AccountDetailComponent.prototype.create = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.bindAccount(value);
        var user = JSON.parse(localStorage.getItem('user'));
        this._referentialService.accountService.create(user.id, this.account)
            .subscribe(function (next) {
            _this.accountForm.reset(_this.account);
            _this._notificationService.success('Sauvegarde réussi', 'Compte enregistré');
        }, function (error) {
            _this._notificationService.error('Echec sauvegarde', error);
        });
    };
    AccountDetailComponent.prototype.bindAccount = function (value) {
        this.account.id = value.id;
        this.account.bankAgency = value.bankAgency;
        this.account.accountType = value.accountType;
        this.account.label = value.label;
        this.account.number = value.number;
        this.account.startAmount = value.startAmount;
        this.account.alertThreshold = value.alertThreshold;
    };
    AccountDetailComponent.prototype.compareObjects = function (o1, o2) {
        if (o1.label == o2.label && o1.id == o2.id)
            return true;
        else
            return false;
    };
    AccountDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'account-detail',
            template: __webpack_require__(/*! ./account-detail.component.html */ "./src/app/main/apps/referential/account/account-detail/account-detail.component.html"),
            styles: [__webpack_require__(/*! ./account-detail.component.scss */ "./src/app/main/apps/referential/account/account-detail/account-detail.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            app_main_services_Referential_referential_service__WEBPACK_IMPORTED_MODULE_6__["ReferentialService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"]])
    ], AccountDetailComponent);
    return AccountDetailComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/referential/account/account-detail/account-detail.resolver.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/apps/referential/account/account-detail/account-detail.resolver.ts ***!
  \*****************************************************************************************/
/*! exports provided: AccountDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailResolver", function() { return AccountDetailResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_main_services_Referential_referential_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/_services/Referential/referential.service */ "./src/app/main/_services/Referential/referential.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { IAccountForDetail } from "../../../../../_models/account.model";
// import { Observable } from "../../../../../../../../node_modules/rxjs/Observable";



// import { ReferentialTestService } from "app/main/_services/Referential/referential.service";
// import { AccountService } from "../../../../../_services/Referential/account.service";
var AccountDetailResolver = /** @class */ (function () {
    function AccountDetailResolver(
    // private accountService: AccountService,
    _referentialService, router, notificationService) {
        this._referentialService = _referentialService;
        this.router = router;
        this.notificationService = notificationService;
    }
    AccountDetailResolver.prototype.resolve = function (route) {
        var _this = this;
        if (route.params['idAccount'] == 'new') {
            var account_1 = this.createAccount();
            var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                // observable execution
                observer.next(account_1);
                observer.complete();
            });
            return observable;
        }
        else {
            return this._referentialService.accountService.GetForDetailById(route.params['idAccount'])
                .catch(function (error) {
                _this.notificationService.error('Erreur de retour de données', error);
                _this.router.navigate(['/apps']);
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(null);
            });
        }
    };
    AccountDetailResolver.prototype.createAccount = function () {
        return {
            id: 0,
            number: null,
            label: null,
            bankAgency: { id: 1, label: 'INCONNU' },
            accountType: { id: 1, label: 'INCONNU' },
            alertThreshold: 0,
            startAmount: 0,
            linkedUsers: null
        };
    };
    AccountDetailResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_main_services_Referential_referential_service__WEBPACK_IMPORTED_MODULE_4__["ReferentialService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]])
    ], AccountDetailResolver);
    return AccountDetailResolver;
}());



/***/ }),

/***/ "./src/app/main/apps/referential/account/account-list/account-list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/main/apps/referential/account/account-list/account-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"products\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar> -->\n<div id=\"products\" class=\"page-layout carded fullwidth inner-scroll\">\n  <!-- TOP BACKGROUND -->\n  <div class=\"top-bg accent\"></div>\n  <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- HEADER -->\n        <div class=\"header accent\"\n            fxLayout=\"column\" fxLayoutAlign=\"center center\"\n            fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n            <!-- APP TITLE -->\n            <div class=\"logo my-12 m-sm-0\"\n                fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">account_balance</mat-icon>\n                <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Comptes bancaires</span>\n            </div>\n            <!-- / APP TITLE -->\n\n            <button mat-raised-button\n                    class=\"save-product-button white mt-16 mt-sm-0\"\n                    [routerLink]=\"'/apps/referential/accounts/new'\">\n                <span>AJOUTER UN COMPTE</span>\n            </button>\n\n            <!-- SEARCH -->\n            <!-- <div class=\"search-input-wrapper mx-12 m-md-0\"\n                fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <label for=\"search\" class=\"mr-8\">\n                    <mat-icon class=\"secondary-text\">search</mat-icon>\n                </label>\n                <mat-form-field floatPlaceholder=\"never\" fxFlex=\"1 0 auto\">\n                    <input id=\"search\" matInput #filter placeholder=\"Recherche\">\n                </mat-form-field>\n            </div> -->\n\n\n        </div>\n        \n        <!-- / HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div >\n            <!-- <div class=\"px-24 py-8\"  style=\"background-color:#039BE5; \">\n  \n                <div class=\"mail-selection\" fxFlex=\"row\" fxLayoutAlign=\"start center\">\n                    <button mat-icon-button \n                        matTooltip=\"Ajouter un compte\"\n                        [routerLink]=\"'/apps/referential/accounts/new'\" >\n                        <mat-icon style=\"color:white;\">add</mat-icon>\n                    </button>\n\n                    <button mat-icon-button matTooltip=\"Supprimer le(s) compte(s) sélectionné(s)\" *ngIf=\"hasSelectedAccounts\">\n                        <mat-icon style=\"color:white;\">delete</mat-icon>\n                    </button>\n\n                    \n                </div>\n            </div>  -->\n    \n    \n    \n    \n    \n    \n    \n    <div fxLayout='column' class=\"cards\">\n        <div *ngFor=\"let bankAgency of bankAgencies\">\n            <mat-card class=\"example-card\" >\n                <mat-card-header >\n                    <img mat-card-avatar src=\"{{bankAgency.logoClassName}}\"   alt=\"bank agency logo\">\n                    <mat-card-title>{{bankAgency.labelLong}}</mat-card-title>\n                    <mat-card-subtitle>{{bankAgency.labelShort}}</mat-card-subtitle>\n                </mat-card-header>\n                \n                <mat-card-content>\n                    <div fxLayout='column' >\n\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"background-color: #EDEEEF;color: #1F1F1F;\" >\n                            <div fxflex = \"0%\" [hidden]=\"true\"></div>\n                            <div fxFlex = \"20%\">Numéro de compte</div>\n                            <div fxFlex = \"20%\">Nom du compte</div>\n                            <div fxFlex = \"20%\"><mat-icon matTooltip=\"compte joint\">link</mat-icon></div>\n                        </div>\n\n                        <div fxLayout='column' *ngFor=\"let account of bankAgency.accounts;last as last\">\n                            <div fxLayout='row' fxLayoutAlign=\"start center\" >\n                                <div  fxflex = \"0%\" [hidden]=\"true\">{{account.id}}</div>\n                                <div  fxFlex = \"20%\" >{{account.number}}</div>\n                                <div  fxFlex = \"20%\" >{{account.label}}</div>\n                                <div  fxFlex = \"20%\" >\n                                    <mat-icon (mouseover)=\"visualizeLinkedUser(account)\" matTooltip=\"{{linkUserToolTip}}\" *ngIf=\"account.linkedUsers.length>0\">link</mat-icon>\n                                </div>\n                                <div  fxFlex></div>\n                                <div  fxFlex = \"30px\" fxLayoutAlign=\"right center\">\n                                        <button  matTooltip=\"Supprimer\" \n                                            mat-icon-button\n                                            (click)=\"delete(account)\"\n                                        >\n                                            <mat-icon>delete</mat-icon>\n                                        </button>\n                                </div>\n                                <div  fxFlex = \"30px\" fxLayoutAlign=\"right center\">\n                                    <button  \n                                        matTooltip=\"Détail\" \n                                        mat-icon-button\n                                        [routerLink]=\"['/apps/referential/accounts/', account.id]\">\n                                        <mat-icon>more_horiz</mat-icon>\n                                    </button>\n                                </div>\n                            </div>\n                            <div class=\"list-divider\"></div>\n                        </div>\n                    </div>\n                </mat-card-content>\n            </mat-card>\n            <br>\n        </div>\n    </div>\n            \n\n    </div> \n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/apps/referential/account/account-list/account-list.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/main/apps/referential/account/account-list/account-list.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-tooltip {\n  white-space: pre-line    !important; }\n\n.list-divider {\n  border: 1px solid transparent;\n  border-bottom-color: #EDEEEF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcHBzL3JlZmVyZW50aWFsL2FjY291bnQvYWNjb3VudC1saXN0L0M6XFxQcm9qZWN0c1xcQW5ndWxhclxcdWRlbXktYXBwLWZ1c2VcXGJ1ZGdldC5zcGEvc3JjXFxhcHBcXG1haW5cXGFwcHNcXHJlZmVyZW50aWFsXFxhY2NvdW50XFxhY2NvdW50LWxpc3RcXGFjY291bnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFtQyxFQUN0Qzs7QUFFRDtFQUNJLDhCQUE2QjtFQUM3Qiw2QkFBNEIsRUFDL0IiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FwcHMvcmVmZXJlbnRpYWwvYWNjb3VudC9hY2NvdW50LWxpc3QvYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtdG9vbHRpcCAge1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lICAgICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5saXN0LWRpdmlkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjRURFRUVGO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/main/apps/referential/account/account-list/account-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main/apps/referential/account/account-list/account-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AccountListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountListComponent", function() { return AccountListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_main_services_Referential_referential_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/_services/Referential/referential.service */ "./src/app/main/_services/Referential/referential.service.ts");
/* harmony import */ var app_main_ngxs_user_user_detail_user_detail_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/_ngxs/user/user-detail/user-detail.state */ "./src/app/main/_ngxs/user/user-detail/user-detail.state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AccountListComponent = /** @class */ (function () {
    function AccountListComponent(
    // private activatedRoute: ActivatedRoute,
    dialog, 
    // private accountService: AccountService,
    _referentialService, notificationService) {
        var _this = this;
        this.dialog = dialog;
        this._referentialService = _referentialService;
        this.notificationService = notificationService;
        this.checkboxes = [];
        this.hasSelectedAccounts = false;
        this.user$.subscribe(function (user) {
            if (user) {
                _this.bankAgencies = user.bankAgencies;
            }
        });
    }
    AccountListComponent.prototype.ngOnInit = function () {
    };
    AccountListComponent.prototype.onSelectedChange = function ($event, idAccount) {
        if ($event.checked) {
            this.checkboxes.push(idAccount);
        }
        else {
            var index = this.checkboxes.indexOf(idAccount);
            if (index > -1) {
                this.checkboxes.splice(index, 1);
            }
        }
        this.hasSelectedAccounts = this.checkboxes.length > 0;
    };
    AccountListComponent.prototype.delete = function (account) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Etes vous sûr de supprimer ce compte?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var user = JSON.parse(localStorage.getItem('user'));
                _this._referentialService.accountService.delete(user.id, account)
                    .subscribe(function (next) {
                    _this.deleteFromBankAgencies(account.id);
                    _this.notificationService.success('Suppression réussi', 'Compte supprimé');
                }, function (error) {
                    _this.notificationService.error('Echec suppression', error);
                });
            }
            _this.confirmDialogRef = null;
        });
    };
    AccountListComponent.prototype.detail = function (account) {
    };
    AccountListComponent.prototype.visualizeLinkedUser = function (account) {
        var label = 'Utilisateur(s) associé(s) à ce compte:\n';
        for (var _i = 0, _a = account.linkedUsers; _i < _a.length; _i++) {
            var linkedUser = _a[_i];
            label = label + (linkedUser.label + " \n");
        }
        this.linkUserToolTip = label;
    };
    AccountListComponent.prototype.deleteFromBankAgencies = function (idAccount) {
        for (var _i = 0, _a = this.bankAgencies; _i < _a.length; _i++) {
            var bankAgency = _a[_i];
            var index = bankAgency.accounts.findIndex(function (x) { return x.id == idAccount; });
            if (index > -1) {
                bankAgency.accounts.splice(index, 1);
                break;
            }
        }
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(app_main_ngxs_user_user_detail_user_detail_state__WEBPACK_IMPORTED_MODULE_8__["UserDetailState"].getUser),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], AccountListComponent.prototype, "user$", void 0);
    AccountListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-list',
            template: __webpack_require__(/*! ./account-list.component.html */ "./src/app/main/apps/referential/account/account-list/account-list.component.html"),
            styles: [__webpack_require__(/*! ./account-list.component.scss */ "./src/app/main/apps/referential/account/account-list/account-list.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            app_main_services_Referential_referential_service__WEBPACK_IMPORTED_MODULE_7__["ReferentialService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]])
    ], AccountListComponent);
    return AccountListComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/referential/account/account.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/apps/referential/account/account.module.ts ***!
  \*****************************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-list/account-list.component */ "./src/app/main/apps/referential/account/account-list/account-list.component.ts");
/* harmony import */ var _account_detail_account_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-detail/account-detail.component */ "./src/app/main/apps/referential/account/account-detail/account-detail.component.ts");
/* harmony import */ var _account_detail_account_detail_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-detail/account-detail.resolver */ "./src/app/main/apps/referential/account/account-detail/account-detail.resolver.ts");
/* harmony import */ var app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { SharedModule } from '../../../../../core/modules/shared.module';


// import { AuthGuard } from '../../../../../_guards/auth.guard';
// import { AccountListResolver } from './account-list/account-list.resolver';




var routes = [
    {
        path: '',
        component: _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_3__["AccountListComponent"],
        // resolve  : { banks: AccountListResolver },
        canActivate: [app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: ':idAccount',
        component: _account_detail_account_detail_component__WEBPACK_IMPORTED_MODULE_4__["AccountDetailComponent"],
        resolve: { account: _account_detail_account_detail_resolver__WEBPACK_IMPORTED_MODULE_5__["AccountDetailResolver"] },
        canActivate: [app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }
];
var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_3__["AccountListComponent"],
                _account_detail_account_detail_component__WEBPACK_IMPORTED_MODULE_4__["AccountDetailComponent"]
            ],
            providers: [
                // AccountListResolver,
                _account_detail_account_detail_resolver__WEBPACK_IMPORTED_MODULE_5__["AccountDetailResolver"]
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ })

}]);
//# sourceMappingURL=referential-account-account-module.js.map