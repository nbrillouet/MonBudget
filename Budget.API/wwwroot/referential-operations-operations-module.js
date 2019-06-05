(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["referential-operations-operations-module"],{

/***/ "./src/app/main/_models/filters/operation-type-family.filter.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/_models/filters/operation-type-family.filter.ts ***!
  \**********************************************************************/
/*! exports provided: FilterOtfTableSelected, FilterOtfTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterOtfTableSelected", function() { return FilterOtfTableSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterOtfTable", function() { return FilterOtfTable; });
/* harmony import */ var _pagination_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pagination.model */ "./src/app/main/_models/pagination.model.ts");

var FilterOtfTableSelected = /** @class */ (function () {
    function FilterOtfTableSelected() {
        this.user = null;
        this.label = null;
        this.movement = null;
        this.pagination = new _pagination_model__WEBPACK_IMPORTED_MODULE_0__["Pagination"]();
    }
    return FilterOtfTableSelected;
}());

var FilterOtfTable = /** @class */ (function () {
    function FilterOtfTable() {
        this.selected = new FilterOtfTableSelected();
    }
    return FilterOtfTable;
}());



/***/ }),

/***/ "./src/app/main/_models/filters/operation-type.filter.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/_models/filters/operation-type.filter.ts ***!
  \***************************************************************/
/*! exports provided: FilterOtTableSelected, FilterOtTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterOtTableSelected", function() { return FilterOtTableSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterOtTable", function() { return FilterOtTable; });
/* harmony import */ var _pagination_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pagination.model */ "./src/app/main/_models/pagination.model.ts");

var FilterOtTableSelected = /** @class */ (function () {
    function FilterOtTableSelected() {
        this.user = null;
        this.label = null;
        this.otf = null;
        this.pagination = new _pagination_model__WEBPACK_IMPORTED_MODULE_0__["Pagination"]();
    }
    return FilterOtTableSelected;
}());

var FilterOtTable = /** @class */ (function () {
    function FilterOtTable() {
        this.selected = new FilterOtTableSelected();
    }
    return FilterOtTable;
}());



/***/ }),

/***/ "./src/app/main/_models/filters/operation.filter.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/_models/filters/operation.filter.ts ***!
  \**********************************************************/
/*! exports provided: FilterOperation, FilterOperationTableSelected, FilterOperationTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterOperation", function() { return FilterOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterOperationTableSelected", function() { return FilterOperationTableSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterOperationTable", function() { return FilterOperationTable; });
/* harmony import */ var _pagination_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pagination.model */ "./src/app/main/_models/pagination.model.ts");

var FilterOperation = /** @class */ (function () {
    function FilterOperation() {
    }
    return FilterOperation;
}());

var FilterOperationTableSelected = /** @class */ (function () {
    function FilterOperationTableSelected() {
        this.user = null;
        this.label = null;
        this.operationMethods = null;
        this.operationTypes = null;
        this.pagination = new _pagination_model__WEBPACK_IMPORTED_MODULE_0__["Pagination"]();
    }
    return FilterOperationTableSelected;
}());

var FilterOperationTable = /** @class */ (function () {
    function FilterOperationTable() {
        this.selected = new FilterOperationTableSelected();
    }
    return FilterOperationTable;
}());



/***/ }),

/***/ "./src/app/main/_models/generics/detail-info.model.ts":
/*!************************************************************!*\
  !*** ./src/app/main/_models/generics/detail-info.model.ts ***!
  \************************************************************/
/*! exports provided: DetailInfo, DataInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailInfo", function() { return DetailInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataInfo", function() { return DataInfo; });
/* harmony import */ var _loading_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-info.model */ "./src/app/main/_models/generics/loading-info.model.ts");

var DetailInfo = /** @class */ (function () {
    function DetailInfo() {
        this.dataInfos = new DataInfo();
    }
    return DetailInfo;
}());

var DataInfo = /** @class */ (function () {
    function DataInfo() {
        this.datas = null;
        this.loadingInfo = new _loading_info_model__WEBPACK_IMPORTED_MODULE_0__["LoadingInfo"]();
    }
    return DataInfo;
}());



/***/ }),

/***/ "./src/app/main/_models/generics/filter.info.model.ts":
/*!************************************************************!*\
  !*** ./src/app/main/_models/generics/filter.info.model.ts ***!
  \************************************************************/
/*! exports provided: FilterInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterInfo", function() { return FilterInfo; });
/* harmony import */ var _loading_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-info.model */ "./src/app/main/_models/generics/loading-info.model.ts");

// interface NoParamConstructor<T> {
//     new (): T;
// }
// export class FilterInfo<T> {
//     filters: T;
//     loadingInfo : LoadingInfo;
//     constructor(filters: NoParamConstructor<T>){
//         this.filters = new filters();
//         this.loadingInfo = new LoadingInfo();
//     }
// }
var FilterInfo = /** @class */ (function () {
    function FilterInfo(TCreator) {
        this.filters = new TCreator();
        this.loadingInfo = new _loading_info_model__WEBPACK_IMPORTED_MODULE_0__["LoadingInfo"]();
    }
    return FilterInfo;
}());



/***/ }),

/***/ "./src/app/main/_models/generics/loading-info.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/_models/generics/loading-info.model.ts ***!
  \*************************************************************/
/*! exports provided: LoadingInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInfo", function() { return LoadingInfo; });
var LoadingInfo = /** @class */ (function () {
    function LoadingInfo() {
        this.loading = false;
        this.loaded = false;
    }
    return LoadingInfo;
}());



/***/ }),

/***/ "./src/app/main/_models/generics/table-info.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/_models/generics/table-info.model.ts ***!
  \***********************************************************/
/*! exports provided: TableInfo, DataInfos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableInfo", function() { return TableInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataInfos", function() { return DataInfos; });
/* harmony import */ var _loading_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-info.model */ "./src/app/main/_models/generics/loading-info.model.ts");

var TableInfo = /** @class */ (function () {
    function TableInfo() {
        this.dataInfos = new DataInfos();
    }
    return TableInfo;
}());

var DataInfos = /** @class */ (function () {
    function DataInfos() {
        this.datas = null;
        this.loadingInfo = new _loading_info_model__WEBPACK_IMPORTED_MODULE_0__["LoadingInfo"]();
    }
    return DataInfos;
}());



/***/ }),

/***/ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-detail/operation-type-family-detail.action.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-detail/operation-type-family-detail.action.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: OTF_DETAIL_LOAD, OTF_DETAIL_LOAD_SUCCESS, OTF_DETAIL_CLEAR, LoadOtfDetail, LoadOtfDetailSuccess, ClearOtfDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTF_DETAIL_LOAD", function() { return OTF_DETAIL_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTF_DETAIL_LOAD_SUCCESS", function() { return OTF_DETAIL_LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTF_DETAIL_CLEAR", function() { return OTF_DETAIL_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOtfDetail", function() { return LoadOtfDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOtfDetailSuccess", function() { return LoadOtfDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearOtfDetail", function() { return ClearOtfDetail; });
var OTF_DETAIL_LOAD = 'otf-detail-load';
var OTF_DETAIL_LOAD_SUCCESS = 'otf-detail-load-success';
var OTF_DETAIL_CLEAR = 'otf-detail-clear';
var LoadOtfDetail = /** @class */ (function () {
    function LoadOtfDetail(payload) {
        this.payload = payload;
    }
    LoadOtfDetail.type = OTF_DETAIL_LOAD;
    return LoadOtfDetail;
}());

var LoadOtfDetailSuccess = /** @class */ (function () {
    function LoadOtfDetailSuccess(payload) {
        this.payload = payload;
    }
    LoadOtfDetailSuccess.type = OTF_DETAIL_LOAD_SUCCESS;
    return LoadOtfDetailSuccess;
}());

var ClearOtfDetail = /** @class */ (function () {
    function ClearOtfDetail() {
    }
    ClearOtfDetail.type = OTF_DETAIL_CLEAR;
    return ClearOtfDetail;
}());



/***/ }),

/***/ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-detail/operation-type-family-detail.state.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-detail/operation-type-family-detail.state.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: OtfDetailStateModel, OtfDetailState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtfDetailStateModel", function() { return OtfDetailStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtfDetailState", function() { return OtfDetailState; });
/* harmony import */ var app_main_models_generics_detail_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/_models/generics/detail-info.model */ "./src/app/main/_models/generics/detail-info.model.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var app_main_services_Referential_referential_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/_services/Referential/referential.service */ "./src/app/main/_services/Referential/referential.service.ts");
/* harmony import */ var _operation_type_family_detail_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operation-type-family-detail.action */ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-detail/operation-type-family-detail.action.ts");
/* harmony import */ var app_main_apps_referential_operations_operation_type_family_operation_type_family_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/referential/operations/operation-type-family/operation-type-family.service */ "./src/app/main/apps/referential/operations/operation-type-family/operation-type-family.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OtfDetailStateModel = /** @class */ (function (_super) {
    __extends(OtfDetailStateModel, _super);
    function OtfDetailStateModel() {
        return _super.call(this) || this;
    }
    return OtfDetailStateModel;
}(app_main_models_generics_detail_info_model__WEBPACK_IMPORTED_MODULE_0__["DataInfo"]));

var otfDetailStateModel = new OtfDetailStateModel();
var OtfDetailState = /** @class */ (function () {
    function OtfDetailState(_otfService, _referentialService
    // private _store: Store
    ) {
        this._otfService = _otfService;
        this._referentialService = _referentialService;
    }
    OtfDetailState.get = function (state) {
        return state;
    };
    OtfDetailState.prototype.loadOtfDetail = function (context, action) {
        var state = context.getState();
        state.loadingInfo.loaded = false;
        state.loadingInfo.loading = true;
        state.datas = null;
        context.patchState(state);
        this._otfService.getOtfDetail(action.payload)
            .subscribe(function (result) {
            context.dispatch(new _operation_type_family_detail_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtfDetailSuccess"](result));
        });
    };
    OtfDetailState.prototype.loadSuccess = function (context, action) {
        var state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload;
        context.patchState(state);
    };
    OtfDetailState.prototype.clear = function (context) {
        return context.setState(new OtfDetailStateModel());
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_operation_type_family_detail_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtfDetail"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_type_family_detail_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtfDetail"]]),
        __metadata("design:returntype", void 0)
    ], OtfDetailState.prototype, "loadOtfDetail", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_operation_type_family_detail_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtfDetailSuccess"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_type_family_detail_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtfDetailSuccess"]]),
        __metadata("design:returntype", void 0)
    ], OtfDetailState.prototype, "loadSuccess", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_operation_type_family_detail_action__WEBPACK_IMPORTED_MODULE_3__["ClearOtfDetail"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OtfDetailState.prototype, "clear", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [OtfDetailStateModel]),
        __metadata("design:returntype", void 0)
    ], OtfDetailState, "get", null);
    OtfDetailState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: 'OtfDetail',
            defaults: otfDetailStateModel
        }),
        __metadata("design:paramtypes", [app_main_apps_referential_operations_operation_type_family_operation_type_family_service__WEBPACK_IMPORTED_MODULE_4__["OtfService"],
            app_main_services_Referential_referential_service__WEBPACK_IMPORTED_MODULE_2__["ReferentialService"]
            // private _store: Store
        ])
    ], OtfDetailState);
    return OtfDetailState;
}());



/***/ }),

/***/ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list-filter/operation-type-family-list-filter.action.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list-filter/operation-type-family-list-filter.action.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: OTF_TABLE_FILTER_LOAD, OTF_TABLE_FILTER_LOAD_SUCCESS, OTF_TABLE_FILTER_CHANGE, OTF_TABLE_FILTER_UPDATE_PAGINATION, LoadOtfTableFilter, LoadOtfTableFilterSuccess, ChangeOtfTableFilter, UpdatePaginationOtfTableFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTF_TABLE_FILTER_LOAD", function() { return OTF_TABLE_FILTER_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTF_TABLE_FILTER_LOAD_SUCCESS", function() { return OTF_TABLE_FILTER_LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTF_TABLE_FILTER_CHANGE", function() { return OTF_TABLE_FILTER_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTF_TABLE_FILTER_UPDATE_PAGINATION", function() { return OTF_TABLE_FILTER_UPDATE_PAGINATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOtfTableFilter", function() { return LoadOtfTableFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOtfTableFilterSuccess", function() { return LoadOtfTableFilterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeOtfTableFilter", function() { return ChangeOtfTableFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePaginationOtfTableFilter", function() { return UpdatePaginationOtfTableFilter; });
// import { Pagination } from "app/main/_models/pagination.model";
// import { FilterAsTable, FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";
var OTF_TABLE_FILTER_LOAD = 'otf-table-filter-load';
var OTF_TABLE_FILTER_LOAD_SUCCESS = 'otf-table-filter-load-success';
var OTF_TABLE_FILTER_CHANGE = 'otf-table-filter-change';
var OTF_TABLE_FILTER_UPDATE_PAGINATION = 'otf-table-filter-update-pagination';
var LoadOtfTableFilter = /** @class */ (function () {
    function LoadOtfTableFilter(payload) {
        this.payload = payload;
    }
    LoadOtfTableFilter.type = OTF_TABLE_FILTER_LOAD;
    return LoadOtfTableFilter;
}());

var LoadOtfTableFilterSuccess = /** @class */ (function () {
    function LoadOtfTableFilterSuccess(payload) {
        this.payload = payload;
    }
    LoadOtfTableFilterSuccess.type = OTF_TABLE_FILTER_LOAD_SUCCESS;
    return LoadOtfTableFilterSuccess;
}());

var ChangeOtfTableFilter = /** @class */ (function () {
    function ChangeOtfTableFilter(payload) {
        this.payload = payload;
    }
    ChangeOtfTableFilter.type = OTF_TABLE_FILTER_CHANGE;
    return ChangeOtfTableFilter;
}());

var UpdatePaginationOtfTableFilter = /** @class */ (function () {
    function UpdatePaginationOtfTableFilter(payload) {
        this.payload = payload;
    }
    UpdatePaginationOtfTableFilter.type = OTF_TABLE_FILTER_UPDATE_PAGINATION;
    return UpdatePaginationOtfTableFilter;
}());



/***/ }),

/***/ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list-filter/operation-type-family-list-filter.state.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list-filter/operation-type-family-list-filter.state.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: OtfTableFilterStateModel, OtfTableFilterState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtfTableFilterStateModel", function() { return OtfTableFilterStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtfTableFilterState", function() { return OtfTableFilterState; });
/* harmony import */ var app_main_models_filters_operation_type_family_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/_models/filters/operation-type-family.filter */ "./src/app/main/_models/filters/operation-type-family.filter.ts");
/* harmony import */ var app_main_models_generics_filter_info_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/main/_models/generics/filter.info.model */ "./src/app/main/_models/generics/filter.info.model.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _operation_type_family_list_filter_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operation-type-family-list-filter.action */ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list-filter/operation-type-family-list-filter.action.ts");
/* harmony import */ var _operation_type_family_list_operation_type_family_list_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operation-type-family-list/operation-type-family-list.action */ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list/operation-type-family-list.action.ts");
/* harmony import */ var app_main_apps_referential_operations_operation_type_family_operation_type_family_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/referential/operations/operation-type-family/operation-type-family.service */ "./src/app/main/apps/referential/operations/operation-type-family/operation-type-family.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OtfTableFilterStateModel = /** @class */ (function (_super) {
    __extends(OtfTableFilterStateModel, _super);
    function OtfTableFilterStateModel() {
        return _super.call(this, app_main_models_filters_operation_type_family_filter__WEBPACK_IMPORTED_MODULE_0__["FilterOtfTable"]) || this;
    }
    return OtfTableFilterStateModel;
}(app_main_models_generics_filter_info_model__WEBPACK_IMPORTED_MODULE_1__["FilterInfo"]));

var otfTableFilterStateModel = new OtfTableFilterStateModel();
var OtfTableFilterState = /** @class */ (function () {
    function OtfTableFilterState(_otfService, _store) {
        this._otfService = _otfService;
        this._store = _store;
    }
    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    //   }
    OtfTableFilterState.get = function (state) {
        return state;
    };
    // @Selector()
    // static getFilter(state: PlanTableComboFilterStateModel) {
    //     return state.filter;
    // }
    OtfTableFilterState.prototype.loadOtfTableFilter = function (context, action) {
        var state = context.getState();
        state.loadingInfo.loaded = false;
        state.loadingInfo.loading = true;
        state.filters = null;
        context.patchState(state);
        this._otfService.getOtfTableFilter(action.payload.selected)
            .subscribe(function (result) {
            context.dispatch(new _operation_type_family_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtfTableFilterSuccess"](result));
        });
    };
    OtfTableFilterState.prototype.loadSuccess = function (context, action) {
        //conserver le payload
        var payload = JSON.parse(JSON.stringify(action.payload.selected));
        var state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.filters = action.payload;
        context.patchState(state);
        context.dispatch(new _operation_type_family_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["ChangeOtfTableFilter"](payload));
    };
    // this.delay(3000).then(any=>{
    OtfTableFilterState.prototype.changeFilter = function (context, action) {
        this._store.dispatch(new _operation_type_family_list_operation_type_family_list_action__WEBPACK_IMPORTED_MODULE_4__["LoadOtfTableDatas"](action.payload));
    };
    OtfTableFilterState.prototype.UpdatePaginationOtfTableFilter = function (context, action) {
        var state = context.getState();
        state.filters.selected.pagination = action.payload;
        // this.delay(3000).then(any=>{
        context.patchState(state);
        // });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_operation_type_family_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtfTableFilter"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_type_family_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtfTableFilter"]]),
        __metadata("design:returntype", void 0)
    ], OtfTableFilterState.prototype, "loadOtfTableFilter", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_operation_type_family_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtfTableFilterSuccess"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_type_family_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtfTableFilterSuccess"]]),
        __metadata("design:returntype", void 0)
    ], OtfTableFilterState.prototype, "loadSuccess", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_operation_type_family_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["ChangeOtfTableFilter"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_type_family_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["ChangeOtfTableFilter"]]),
        __metadata("design:returntype", void 0)
    ], OtfTableFilterState.prototype, "changeFilter", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_operation_type_family_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["UpdatePaginationOtfTableFilter"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_type_family_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["UpdatePaginationOtfTableFilter"]]),
        __metadata("design:returntype", void 0)
    ], OtfTableFilterState.prototype, "UpdatePaginationOtfTableFilter", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [OtfTableFilterStateModel]),
        __metadata("design:returntype", void 0)
    ], OtfTableFilterState, "get", null);
    OtfTableFilterState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
            name: 'OtfTableFilter',
            defaults: otfTableFilterStateModel
        }),
        __metadata("design:paramtypes", [app_main_apps_referential_operations_operation_type_family_operation_type_family_service__WEBPACK_IMPORTED_MODULE_5__["OtfService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], OtfTableFilterState);
    return OtfTableFilterState;
}());



/***/ }),

/***/ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list/operation-type-family-list.action.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list/operation-type-family-list.action.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: OTF_TABLE_LOAD, OTF_TABLE_LOAD_SUCCESS, OTF_TABLE_FILTER_CHANGE, OTF_TABLE_CLEAR, LoadOtfTableDatas, LoadOtfTableDatasSuccess, ClearOtfTableDatas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTF_TABLE_LOAD", function() { return OTF_TABLE_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTF_TABLE_LOAD_SUCCESS", function() { return OTF_TABLE_LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTF_TABLE_FILTER_CHANGE", function() { return OTF_TABLE_FILTER_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTF_TABLE_CLEAR", function() { return OTF_TABLE_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOtfTableDatas", function() { return LoadOtfTableDatas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOtfTableDatasSuccess", function() { return LoadOtfTableDatasSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearOtfTableDatas", function() { return ClearOtfTableDatas; });
var OTF_TABLE_LOAD = 'otf-table-load';
var OTF_TABLE_LOAD_SUCCESS = 'otf-table-load-success';
var OTF_TABLE_FILTER_CHANGE = 'otf-table-filter-change';
var OTF_TABLE_CLEAR = 'otf-table-clear';
var LoadOtfTableDatas = /** @class */ (function () {
    function LoadOtfTableDatas(payload) {
        this.payload = payload;
    }
    LoadOtfTableDatas.type = OTF_TABLE_LOAD;
    return LoadOtfTableDatas;
}());

var LoadOtfTableDatasSuccess = /** @class */ (function () {
    function LoadOtfTableDatasSuccess(payload) {
        this.payload = payload;
    }
    LoadOtfTableDatasSuccess.type = OTF_TABLE_LOAD_SUCCESS;
    return LoadOtfTableDatasSuccess;
}());

// export class ChangeAsifTableFilter {
//     static readonly type = ASIF_TABLE_FILTER_CHANGE;
//     constructor(public payload: FilterAsifTableSelected) { }
// }
var ClearOtfTableDatas = /** @class */ (function () {
    function ClearOtfTableDatas() {
    }
    ClearOtfTableDatas.type = OTF_TABLE_CLEAR;
    return ClearOtfTableDatas;
}());



/***/ }),

/***/ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list/operation-type-family-list.state.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list/operation-type-family-list.state.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: OtfTableStateModel, OtfTableState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtfTableStateModel", function() { return OtfTableStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtfTableState", function() { return OtfTableState; });
/* harmony import */ var app_main_models_generics_table_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/_models/generics/table-info.model */ "./src/app/main/_models/generics/table-info.model.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _operation_type_family_list_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operation-type-family-list.action */ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list/operation-type-family-list.action.ts");
/* harmony import */ var _operation_type_family_list_filter_operation_type_family_list_filter_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operation-type-family-list-filter/operation-type-family-list-filter.action */ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list-filter/operation-type-family-list-filter.action.ts");
/* harmony import */ var app_main_apps_referential_operations_operation_type_family_operation_type_family_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/referential/operations/operation-type-family/operation-type-family.service */ "./src/app/main/apps/referential/operations/operation-type-family/operation-type-family.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OtfTableStateModel = /** @class */ (function (_super) {
    __extends(OtfTableStateModel, _super);
    function OtfTableStateModel() {
        return _super.call(this) || this;
    }
    return OtfTableStateModel;
}(app_main_models_generics_table_info_model__WEBPACK_IMPORTED_MODULE_0__["DataInfos"]));

var tableInfo = new OtfTableStateModel();
var OtfTableState = /** @class */ (function () {
    function OtfTableState(_otfService, _store
    // private _notification: NotificationsService
    ) {
        this._otfService = _otfService;
        this._store = _store;
    }
    OtfTableState.get = function (state) {
        return state;
    };
    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    //   }
    OtfTableState.prototype.loadGrid = function (context, action) {
        var state = context.getState();
        state.loadingInfo.loaded = false;
        state.loadingInfo.loading = true;
        // state.datas = action.payload;
        state.datas = null;
        context.patchState(state);
        // this.delay(3000).then(any=>{
        this._otfService.getOtfTable(action.payload)
            .subscribe(function (result) {
            context.dispatch(new _operation_type_family_list_action__WEBPACK_IMPORTED_MODULE_2__["LoadOtfTableDatasSuccess"](result));
        });
        // });
    };
    OtfTableState.prototype.loadSuccess = function (context, action) {
        var state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload.datas;
        // state.pagination = action.payload.pagination;
        context.patchState(state);
        this._store.dispatch(new _operation_type_family_list_filter_operation_type_family_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["UpdatePaginationOtfTableFilter"](action.payload.pagination));
    };
    OtfTableState.prototype.clear = function (context) {
        return context.setState(new OtfTableStateModel());
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_operation_type_family_list_action__WEBPACK_IMPORTED_MODULE_2__["LoadOtfTableDatas"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_type_family_list_action__WEBPACK_IMPORTED_MODULE_2__["LoadOtfTableDatas"]]),
        __metadata("design:returntype", void 0)
    ], OtfTableState.prototype, "loadGrid", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_operation_type_family_list_action__WEBPACK_IMPORTED_MODULE_2__["LoadOtfTableDatasSuccess"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_type_family_list_action__WEBPACK_IMPORTED_MODULE_2__["LoadOtfTableDatasSuccess"]]),
        __metadata("design:returntype", void 0)
    ], OtfTableState.prototype, "loadSuccess", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_operation_type_family_list_action__WEBPACK_IMPORTED_MODULE_2__["ClearOtfTableDatas"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OtfTableState.prototype, "clear", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [OtfTableStateModel]),
        __metadata("design:returntype", void 0)
    ], OtfTableState, "get", null);
    OtfTableState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: 'OtfTable',
            defaults: tableInfo
        }),
        __metadata("design:paramtypes", [app_main_apps_referential_operations_operation_type_family_operation_type_family_service__WEBPACK_IMPORTED_MODULE_4__["OtfService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
            // private _notification: NotificationsService
        ])
    ], OtfTableState);
    return OtfTableState;
}());



/***/ }),

/***/ "./src/app/main/_ngxs/referential/operation-type/operation-type-detail/operation-type-detail.action.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/_ngxs/referential/operation-type/operation-type-detail/operation-type-detail.action.ts ***!
  \*************************************************************************************************************/
/*! exports provided: OT_DETAIL_LOAD, OT_DETAIL_LOAD_SUCCESS, OT_DETAIL_CLEAR, LoadOtDetail, LoadOtDetailSuccess, ClearOtDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OT_DETAIL_LOAD", function() { return OT_DETAIL_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OT_DETAIL_LOAD_SUCCESS", function() { return OT_DETAIL_LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OT_DETAIL_CLEAR", function() { return OT_DETAIL_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOtDetail", function() { return LoadOtDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOtDetailSuccess", function() { return LoadOtDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearOtDetail", function() { return ClearOtDetail; });
var OT_DETAIL_LOAD = 'ot-detail-load';
var OT_DETAIL_LOAD_SUCCESS = 'ot-detail-load-success';
var OT_DETAIL_CLEAR = 'ot-detail-clear';
var LoadOtDetail = /** @class */ (function () {
    function LoadOtDetail(payload) {
        this.payload = payload;
    }
    LoadOtDetail.type = OT_DETAIL_LOAD;
    return LoadOtDetail;
}());

var LoadOtDetailSuccess = /** @class */ (function () {
    function LoadOtDetailSuccess(payload) {
        this.payload = payload;
    }
    LoadOtDetailSuccess.type = OT_DETAIL_LOAD_SUCCESS;
    return LoadOtDetailSuccess;
}());

var ClearOtDetail = /** @class */ (function () {
    function ClearOtDetail() {
    }
    ClearOtDetail.type = OT_DETAIL_CLEAR;
    return ClearOtDetail;
}());



/***/ }),

/***/ "./src/app/main/_ngxs/referential/operation-type/operation-type-detail/operation-type-detail.state.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/main/_ngxs/referential/operation-type/operation-type-detail/operation-type-detail.state.ts ***!
  \************************************************************************************************************/
/*! exports provided: OtDetailStateModel, OtDetailState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtDetailStateModel", function() { return OtDetailStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtDetailState", function() { return OtDetailState; });
/* harmony import */ var app_main_models_generics_detail_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/_models/generics/detail-info.model */ "./src/app/main/_models/generics/detail-info.model.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var app_main_services_Referential_referential_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/_services/Referential/referential.service */ "./src/app/main/_services/Referential/referential.service.ts");
/* harmony import */ var _operation_type_detail_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operation-type-detail.action */ "./src/app/main/_ngxs/referential/operation-type/operation-type-detail/operation-type-detail.action.ts");
/* harmony import */ var app_main_apps_referential_operations_operation_type_operation_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/referential/operations/operation-type/operation-type.service */ "./src/app/main/apps/referential/operations/operation-type/operation-type.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OtDetailStateModel = /** @class */ (function (_super) {
    __extends(OtDetailStateModel, _super);
    function OtDetailStateModel() {
        return _super.call(this) || this;
    }
    return OtDetailStateModel;
}(app_main_models_generics_detail_info_model__WEBPACK_IMPORTED_MODULE_0__["DataInfo"]));

var otDetailStateModel = new OtDetailStateModel();
var OtDetailState = /** @class */ (function () {
    function OtDetailState(_otService, _referentialService) {
        this._otService = _otService;
        this._referentialService = _referentialService;
    }
    OtDetailState.get = function (state) {
        return state;
    };
    OtDetailState.prototype.loadOtDetail = function (context, action) {
        var state = context.getState();
        state.loadingInfo.loaded = false;
        state.loadingInfo.loading = true;
        state.datas = null;
        context.patchState(state);
        this._otService.getOtDetail(action.payload)
            .subscribe(function (result) {
            context.dispatch(new _operation_type_detail_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtDetailSuccess"](result));
        });
    };
    OtDetailState.prototype.loadSuccess = function (context, action) {
        var state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload;
        context.patchState(state);
    };
    OtDetailState.prototype.clear = function (context) {
        return context.setState(new OtDetailStateModel());
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_operation_type_detail_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtDetail"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_type_detail_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtDetail"]]),
        __metadata("design:returntype", void 0)
    ], OtDetailState.prototype, "loadOtDetail", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_operation_type_detail_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtDetailSuccess"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_type_detail_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtDetailSuccess"]]),
        __metadata("design:returntype", void 0)
    ], OtDetailState.prototype, "loadSuccess", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_operation_type_detail_action__WEBPACK_IMPORTED_MODULE_3__["ClearOtDetail"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OtDetailState.prototype, "clear", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [OtDetailStateModel]),
        __metadata("design:returntype", void 0)
    ], OtDetailState, "get", null);
    OtDetailState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: 'OtDetail',
            defaults: otDetailStateModel
        }),
        __metadata("design:paramtypes", [app_main_apps_referential_operations_operation_type_operation_type_service__WEBPACK_IMPORTED_MODULE_4__["OtService"],
            app_main_services_Referential_referential_service__WEBPACK_IMPORTED_MODULE_2__["ReferentialService"]])
    ], OtDetailState);
    return OtDetailState;
}());



/***/ }),

/***/ "./src/app/main/_ngxs/referential/operation-type/operation-type-list-filter/operation-type-list-filter.action.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/main/_ngxs/referential/operation-type/operation-type-list-filter/operation-type-list-filter.action.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: OT_TABLE_FILTER_LOAD, OT_TABLE_FILTER_LOAD_SUCCESS, OT_TABLE_FILTER_CHANGE, OT_TABLE_FILTER_UPDATE_PAGINATION, LoadOtTableFilter, LoadOtTableFilterSuccess, ChangeOtTableFilter, UpdatePaginationOtTableFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OT_TABLE_FILTER_LOAD", function() { return OT_TABLE_FILTER_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OT_TABLE_FILTER_LOAD_SUCCESS", function() { return OT_TABLE_FILTER_LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OT_TABLE_FILTER_CHANGE", function() { return OT_TABLE_FILTER_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OT_TABLE_FILTER_UPDATE_PAGINATION", function() { return OT_TABLE_FILTER_UPDATE_PAGINATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOtTableFilter", function() { return LoadOtTableFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOtTableFilterSuccess", function() { return LoadOtTableFilterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeOtTableFilter", function() { return ChangeOtTableFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePaginationOtTableFilter", function() { return UpdatePaginationOtTableFilter; });
var OT_TABLE_FILTER_LOAD = 'ot-table-filter-load';
var OT_TABLE_FILTER_LOAD_SUCCESS = 'ot-table-filter-load-success';
var OT_TABLE_FILTER_CHANGE = 'ot-table-filter-change';
var OT_TABLE_FILTER_UPDATE_PAGINATION = 'ot-table-filter-update-pagination';
var LoadOtTableFilter = /** @class */ (function () {
    function LoadOtTableFilter(payload) {
        this.payload = payload;
    }
    LoadOtTableFilter.type = OT_TABLE_FILTER_LOAD;
    return LoadOtTableFilter;
}());

var LoadOtTableFilterSuccess = /** @class */ (function () {
    function LoadOtTableFilterSuccess(payload) {
        this.payload = payload;
    }
    LoadOtTableFilterSuccess.type = OT_TABLE_FILTER_LOAD_SUCCESS;
    return LoadOtTableFilterSuccess;
}());

var ChangeOtTableFilter = /** @class */ (function () {
    function ChangeOtTableFilter(payload) {
        this.payload = payload;
    }
    ChangeOtTableFilter.type = OT_TABLE_FILTER_CHANGE;
    return ChangeOtTableFilter;
}());

var UpdatePaginationOtTableFilter = /** @class */ (function () {
    function UpdatePaginationOtTableFilter(payload) {
        this.payload = payload;
    }
    UpdatePaginationOtTableFilter.type = OT_TABLE_FILTER_UPDATE_PAGINATION;
    return UpdatePaginationOtTableFilter;
}());



/***/ }),

/***/ "./src/app/main/_ngxs/referential/operation-type/operation-type-list-filter/operation-type-list-filter.state.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/main/_ngxs/referential/operation-type/operation-type-list-filter/operation-type-list-filter.state.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: OtTableFilterStateModel, OtTableFilterState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtTableFilterStateModel", function() { return OtTableFilterStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtTableFilterState", function() { return OtTableFilterState; });
/* harmony import */ var app_main_models_generics_filter_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/_models/generics/filter.info.model */ "./src/app/main/_models/generics/filter.info.model.ts");
/* harmony import */ var app_main_models_filters_operation_type_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/main/_models/filters/operation-type.filter */ "./src/app/main/_models/filters/operation-type.filter.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _operation_type_list_filter_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operation-type-list-filter.action */ "./src/app/main/_ngxs/referential/operation-type/operation-type-list-filter/operation-type-list-filter.action.ts");
/* harmony import */ var _operation_type_list_operation_type_list_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operation-type-list/operation-type-list.action */ "./src/app/main/_ngxs/referential/operation-type/operation-type-list/operation-type-list.action.ts");
/* harmony import */ var app_main_apps_referential_operations_operation_type_operation_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/referential/operations/operation-type/operation-type.service */ "./src/app/main/apps/referential/operations/operation-type/operation-type.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OtTableFilterStateModel = /** @class */ (function (_super) {
    __extends(OtTableFilterStateModel, _super);
    function OtTableFilterStateModel() {
        return _super.call(this, app_main_models_filters_operation_type_filter__WEBPACK_IMPORTED_MODULE_1__["FilterOtTable"]) || this;
    }
    return OtTableFilterStateModel;
}(app_main_models_generics_filter_info_model__WEBPACK_IMPORTED_MODULE_0__["FilterInfo"]));

var otTableFilterStateModel = new OtTableFilterStateModel();
var OtTableFilterState = /** @class */ (function () {
    function OtTableFilterState(_otService, _store) {
        this._otService = _otService;
        this._store = _store;
    }
    OtTableFilterState.get = function (state) {
        return state;
    };
    OtTableFilterState.prototype.loadOtfTableFilter = function (context, action) {
        var state = context.getState();
        state.loadingInfo.loaded = false;
        state.loadingInfo.loading = true;
        state.filters = null;
        context.patchState(state);
        this._otService.getOtTableFilter(action.payload.selected)
            .subscribe(function (result) {
            context.dispatch(new _operation_type_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtTableFilterSuccess"](result));
        });
    };
    OtTableFilterState.prototype.loadSuccess = function (context, action) {
        //conserver le payload
        var payload = JSON.parse(JSON.stringify(action.payload.selected));
        var state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.filters = action.payload;
        context.patchState(state);
        context.dispatch(new _operation_type_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["ChangeOtTableFilter"](payload));
    };
    OtTableFilterState.prototype.changeFilter = function (context, action) {
        this._store.dispatch(new _operation_type_list_operation_type_list_action__WEBPACK_IMPORTED_MODULE_4__["LoadOtTableDatas"](action.payload));
    };
    OtTableFilterState.prototype.UpdatePaginationOtTableFilter = function (context, action) {
        var state = context.getState();
        state.filters.selected.pagination = action.payload;
        context.patchState(state);
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_operation_type_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtTableFilter"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_type_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtTableFilter"]]),
        __metadata("design:returntype", void 0)
    ], OtTableFilterState.prototype, "loadOtfTableFilter", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_operation_type_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtTableFilterSuccess"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_type_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["LoadOtTableFilterSuccess"]]),
        __metadata("design:returntype", void 0)
    ], OtTableFilterState.prototype, "loadSuccess", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_operation_type_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["ChangeOtTableFilter"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_type_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["ChangeOtTableFilter"]]),
        __metadata("design:returntype", void 0)
    ], OtTableFilterState.prototype, "changeFilter", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_operation_type_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["UpdatePaginationOtTableFilter"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_type_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["UpdatePaginationOtTableFilter"]]),
        __metadata("design:returntype", void 0)
    ], OtTableFilterState.prototype, "UpdatePaginationOtTableFilter", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [OtTableFilterStateModel]),
        __metadata("design:returntype", void 0)
    ], OtTableFilterState, "get", null);
    OtTableFilterState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
            name: 'OtTableFilter',
            defaults: otTableFilterStateModel
        }),
        __metadata("design:paramtypes", [app_main_apps_referential_operations_operation_type_operation_type_service__WEBPACK_IMPORTED_MODULE_5__["OtService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], OtTableFilterState);
    return OtTableFilterState;
}());



/***/ }),

/***/ "./src/app/main/_ngxs/referential/operation-type/operation-type-list/operation-type-list.action.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/_ngxs/referential/operation-type/operation-type-list/operation-type-list.action.ts ***!
  \*********************************************************************************************************/
/*! exports provided: OT_TABLE_LOAD, OT_TABLE_LOAD_SUCCESS, OT_TABLE_FILTER_CHANGE, OT_TABLE_CLEAR, LoadOtTableDatas, LoadOtTableDatasSuccess, ClearOtTableDatas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OT_TABLE_LOAD", function() { return OT_TABLE_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OT_TABLE_LOAD_SUCCESS", function() { return OT_TABLE_LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OT_TABLE_FILTER_CHANGE", function() { return OT_TABLE_FILTER_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OT_TABLE_CLEAR", function() { return OT_TABLE_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOtTableDatas", function() { return LoadOtTableDatas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOtTableDatasSuccess", function() { return LoadOtTableDatasSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearOtTableDatas", function() { return ClearOtTableDatas; });
var OT_TABLE_LOAD = 'ot-table-load';
var OT_TABLE_LOAD_SUCCESS = 'ot-table-load-success';
var OT_TABLE_FILTER_CHANGE = 'ot-table-filter-change';
var OT_TABLE_CLEAR = 'ot-table-clear';
var LoadOtTableDatas = /** @class */ (function () {
    function LoadOtTableDatas(payload) {
        this.payload = payload;
    }
    LoadOtTableDatas.type = OT_TABLE_LOAD;
    return LoadOtTableDatas;
}());

var LoadOtTableDatasSuccess = /** @class */ (function () {
    function LoadOtTableDatasSuccess(payload) {
        this.payload = payload;
    }
    LoadOtTableDatasSuccess.type = OT_TABLE_LOAD_SUCCESS;
    return LoadOtTableDatasSuccess;
}());

var ClearOtTableDatas = /** @class */ (function () {
    function ClearOtTableDatas() {
    }
    ClearOtTableDatas.type = OT_TABLE_CLEAR;
    return ClearOtTableDatas;
}());



/***/ }),

/***/ "./src/app/main/_ngxs/referential/operation-type/operation-type-list/operation-type-list.state.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/_ngxs/referential/operation-type/operation-type-list/operation-type-list.state.ts ***!
  \********************************************************************************************************/
/*! exports provided: OtTableStateModel, OtTableState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtTableStateModel", function() { return OtTableStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtTableState", function() { return OtTableState; });
/* harmony import */ var app_main_models_generics_table_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/_models/generics/table-info.model */ "./src/app/main/_models/generics/table-info.model.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _operation_type_list_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operation-type-list.action */ "./src/app/main/_ngxs/referential/operation-type/operation-type-list/operation-type-list.action.ts");
/* harmony import */ var _operation_type_list_filter_operation_type_list_filter_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operation-type-list-filter/operation-type-list-filter.action */ "./src/app/main/_ngxs/referential/operation-type/operation-type-list-filter/operation-type-list-filter.action.ts");
/* harmony import */ var app_main_apps_referential_operations_operation_type_operation_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/referential/operations/operation-type/operation-type.service */ "./src/app/main/apps/referential/operations/operation-type/operation-type.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OtTableStateModel = /** @class */ (function (_super) {
    __extends(OtTableStateModel, _super);
    function OtTableStateModel() {
        return _super.call(this) || this;
    }
    return OtTableStateModel;
}(app_main_models_generics_table_info_model__WEBPACK_IMPORTED_MODULE_0__["DataInfos"]));

var tableInfo = new OtTableStateModel();
var OtTableState = /** @class */ (function () {
    function OtTableState(_otService, _store) {
        this._otService = _otService;
        this._store = _store;
    }
    OtTableState.get = function (state) {
        return state;
    };
    OtTableState.prototype.loadGrid = function (context, action) {
        var state = context.getState();
        state.loadingInfo.loaded = false;
        state.loadingInfo.loading = true;
        state.datas = null;
        context.patchState(state);
        this._otService.getOtTable(action.payload)
            .subscribe(function (result) {
            context.dispatch(new _operation_type_list_action__WEBPACK_IMPORTED_MODULE_2__["LoadOtTableDatasSuccess"](result));
        });
    };
    OtTableState.prototype.loadSuccess = function (context, action) {
        var state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload.datas;
        context.patchState(state);
        this._store.dispatch(new _operation_type_list_filter_operation_type_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["UpdatePaginationOtTableFilter"](action.payload.pagination));
    };
    OtTableState.prototype.clear = function (context) {
        return context.setState(new OtTableStateModel());
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_operation_type_list_action__WEBPACK_IMPORTED_MODULE_2__["LoadOtTableDatas"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_type_list_action__WEBPACK_IMPORTED_MODULE_2__["LoadOtTableDatas"]]),
        __metadata("design:returntype", void 0)
    ], OtTableState.prototype, "loadGrid", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_operation_type_list_action__WEBPACK_IMPORTED_MODULE_2__["LoadOtTableDatasSuccess"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_type_list_action__WEBPACK_IMPORTED_MODULE_2__["LoadOtTableDatasSuccess"]]),
        __metadata("design:returntype", void 0)
    ], OtTableState.prototype, "loadSuccess", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_operation_type_list_action__WEBPACK_IMPORTED_MODULE_2__["ClearOtTableDatas"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OtTableState.prototype, "clear", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [OtTableStateModel]),
        __metadata("design:returntype", void 0)
    ], OtTableState, "get", null);
    OtTableState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: 'OtTable',
            defaults: tableInfo
        }),
        __metadata("design:paramtypes", [app_main_apps_referential_operations_operation_type_operation_type_service__WEBPACK_IMPORTED_MODULE_4__["OtService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], OtTableState);
    return OtTableState;
}());



/***/ }),

/***/ "./src/app/main/_ngxs/referential/operation/operation-detail/operation-detail.action.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/_ngxs/referential/operation/operation-detail/operation-detail.action.ts ***!
  \**********************************************************************************************/
/*! exports provided: OPERATION_FOR_DETAIL_LOAD, OPERATION_FOR_DETAIL_LOAD_SUCCESS, OPERATION_FOR_DETAIL_CLEAR, LoadOperationForDetail, LoadOperationForDetailSuccess, ClearOperationForDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATION_FOR_DETAIL_LOAD", function() { return OPERATION_FOR_DETAIL_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATION_FOR_DETAIL_LOAD_SUCCESS", function() { return OPERATION_FOR_DETAIL_LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATION_FOR_DETAIL_CLEAR", function() { return OPERATION_FOR_DETAIL_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOperationForDetail", function() { return LoadOperationForDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOperationForDetailSuccess", function() { return LoadOperationForDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearOperationForDetail", function() { return ClearOperationForDetail; });
var OPERATION_FOR_DETAIL_LOAD = 'operation-for-detail-load';
var OPERATION_FOR_DETAIL_LOAD_SUCCESS = 'operaion-for-detail-load-success';
var OPERATION_FOR_DETAIL_CLEAR = 'operation-for-detail-clear';
var LoadOperationForDetail = /** @class */ (function () {
    function LoadOperationForDetail(payload) {
        this.payload = payload;
    }
    LoadOperationForDetail.type = OPERATION_FOR_DETAIL_LOAD;
    return LoadOperationForDetail;
}());

var LoadOperationForDetailSuccess = /** @class */ (function () {
    function LoadOperationForDetailSuccess(payload) {
        this.payload = payload;
    }
    LoadOperationForDetailSuccess.type = OPERATION_FOR_DETAIL_LOAD_SUCCESS;
    return LoadOperationForDetailSuccess;
}());

var ClearOperationForDetail = /** @class */ (function () {
    function ClearOperationForDetail() {
    }
    ClearOperationForDetail.type = OPERATION_FOR_DETAIL_CLEAR;
    return ClearOperationForDetail;
}());



/***/ }),

/***/ "./src/app/main/_ngxs/referential/operation/operation-detail/operation-detail.state.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/_ngxs/referential/operation/operation-detail/operation-detail.state.ts ***!
  \*********************************************************************************************/
/*! exports provided: OperationForDetailStateModel, OperationForDetailState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationForDetailStateModel", function() { return OperationForDetailStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationForDetailState", function() { return OperationForDetailState; });
/* harmony import */ var app_main_models_generics_detail_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/_models/generics/detail-info.model */ "./src/app/main/_models/generics/detail-info.model.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var app_main_services_Referential_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/_services/Referential/operation.service */ "./src/app/main/_services/Referential/operation.service.ts");
/* harmony import */ var app_main_services_Referential_referential_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/_services/Referential/referential.service */ "./src/app/main/_services/Referential/referential.service.ts");
/* harmony import */ var _operation_detail_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operation-detail.action */ "./src/app/main/_ngxs/referential/operation/operation-detail/operation-detail.action.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OperationForDetailStateModel = /** @class */ (function (_super) {
    __extends(OperationForDetailStateModel, _super);
    function OperationForDetailStateModel() {
        return _super.call(this) || this;
    }
    return OperationForDetailStateModel;
}(app_main_models_generics_detail_info_model__WEBPACK_IMPORTED_MODULE_0__["DataInfo"]));

var operationForDetailStateModel = new OperationForDetailStateModel();
var OperationForDetailState = /** @class */ (function () {
    function OperationForDetailState(_OperationService, _referentialService) {
        this._OperationService = _OperationService;
        this._referentialService = _referentialService;
    }
    OperationForDetailState.get = function (state) {
        return state;
    };
    OperationForDetailState.prototype.loadOperationForDetail = function (context, action) {
        var state = context.getState();
        state.loadingInfo.loaded = false;
        state.loadingInfo.loading = true;
        state.datas = null;
        context.patchState(state);
        this._OperationService.getDetail(action.payload)
            .subscribe(function (result) {
            context.dispatch(new _operation_detail_action__WEBPACK_IMPORTED_MODULE_4__["LoadOperationForDetailSuccess"](result));
        });
    };
    OperationForDetailState.prototype.loadSuccess = function (context, action) {
        var state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload;
        context.patchState(state);
    };
    OperationForDetailState.prototype.clear = function (context) {
        return context.setState(new OperationForDetailStateModel());
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_operation_detail_action__WEBPACK_IMPORTED_MODULE_4__["LoadOperationForDetail"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_detail_action__WEBPACK_IMPORTED_MODULE_4__["LoadOperationForDetail"]]),
        __metadata("design:returntype", void 0)
    ], OperationForDetailState.prototype, "loadOperationForDetail", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_operation_detail_action__WEBPACK_IMPORTED_MODULE_4__["LoadOperationForDetailSuccess"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_detail_action__WEBPACK_IMPORTED_MODULE_4__["LoadOperationForDetailSuccess"]]),
        __metadata("design:returntype", void 0)
    ], OperationForDetailState.prototype, "loadSuccess", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_operation_detail_action__WEBPACK_IMPORTED_MODULE_4__["ClearOperationForDetail"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OperationForDetailState.prototype, "clear", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [OperationForDetailStateModel]),
        __metadata("design:returntype", void 0)
    ], OperationForDetailState, "get", null);
    OperationForDetailState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: 'OperationForDetail',
            defaults: operationForDetailStateModel
        }),
        __metadata("design:paramtypes", [app_main_services_Referential_operation_service__WEBPACK_IMPORTED_MODULE_2__["OperationService"],
            app_main_services_Referential_referential_service__WEBPACK_IMPORTED_MODULE_3__["ReferentialService"]])
    ], OperationForDetailState);
    return OperationForDetailState;
}());



/***/ }),

/***/ "./src/app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.action.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.action.ts ***!
  \********************************************************************************************************/
/*! exports provided: OPERATION_TABLE_FILTER_LOAD, OPERATION_TABLE_FILTER_LOAD_SUCCESS, OPERATION_TABLE_FILTER_CHANGE, OPERATION_TABLE_FILTER_UPDATE_PAGINATION, LoadOperationTableFilter, LoadOperationTableFilterSuccess, ChangeOperationTableFilter, UpdatePaginationOperationTableFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATION_TABLE_FILTER_LOAD", function() { return OPERATION_TABLE_FILTER_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATION_TABLE_FILTER_LOAD_SUCCESS", function() { return OPERATION_TABLE_FILTER_LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATION_TABLE_FILTER_CHANGE", function() { return OPERATION_TABLE_FILTER_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATION_TABLE_FILTER_UPDATE_PAGINATION", function() { return OPERATION_TABLE_FILTER_UPDATE_PAGINATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOperationTableFilter", function() { return LoadOperationTableFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOperationTableFilterSuccess", function() { return LoadOperationTableFilterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeOperationTableFilter", function() { return ChangeOperationTableFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePaginationOperationTableFilter", function() { return UpdatePaginationOperationTableFilter; });
var OPERATION_TABLE_FILTER_LOAD = 'operation-table-filter-load';
var OPERATION_TABLE_FILTER_LOAD_SUCCESS = 'operation-table-filter-load-success';
var OPERATION_TABLE_FILTER_CHANGE = 'operation-table-filter-change';
var OPERATION_TABLE_FILTER_UPDATE_PAGINATION = 'operation-table-filter-update-pagination';
var LoadOperationTableFilter = /** @class */ (function () {
    function LoadOperationTableFilter(payload) {
        this.payload = payload;
    }
    LoadOperationTableFilter.type = OPERATION_TABLE_FILTER_LOAD;
    return LoadOperationTableFilter;
}());

var LoadOperationTableFilterSuccess = /** @class */ (function () {
    function LoadOperationTableFilterSuccess(payload) {
        this.payload = payload;
    }
    LoadOperationTableFilterSuccess.type = OPERATION_TABLE_FILTER_LOAD_SUCCESS;
    return LoadOperationTableFilterSuccess;
}());

var ChangeOperationTableFilter = /** @class */ (function () {
    function ChangeOperationTableFilter(payload) {
        this.payload = payload;
    }
    ChangeOperationTableFilter.type = OPERATION_TABLE_FILTER_CHANGE;
    return ChangeOperationTableFilter;
}());

var UpdatePaginationOperationTableFilter = /** @class */ (function () {
    function UpdatePaginationOperationTableFilter(payload) {
        this.payload = payload;
    }
    UpdatePaginationOperationTableFilter.type = OPERATION_TABLE_FILTER_UPDATE_PAGINATION;
    return UpdatePaginationOperationTableFilter;
}());



/***/ }),

/***/ "./src/app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.state.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.state.ts ***!
  \*******************************************************************************************************/
/*! exports provided: OperationTableFilterStateModel, OperationTableFilterState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationTableFilterStateModel", function() { return OperationTableFilterStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationTableFilterState", function() { return OperationTableFilterState; });
/* harmony import */ var app_main_models_generics_filter_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/_models/generics/filter.info.model */ "./src/app/main/_models/generics/filter.info.model.ts");
/* harmony import */ var app_main_models_filters_operation_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/main/_models/filters/operation.filter */ "./src/app/main/_models/filters/operation.filter.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var app_main_services_Referential_operation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/_services/Referential/operation.service */ "./src/app/main/_services/Referential/operation.service.ts");
/* harmony import */ var _operation_list_filter_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operation-list-filter.action */ "./src/app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.action.ts");
/* harmony import */ var _operation_list_operation_list_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../operation-list/operation-list.action */ "./src/app/main/_ngxs/referential/operation/operation-list/operation-list.action.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OperationTableFilterStateModel = /** @class */ (function (_super) {
    __extends(OperationTableFilterStateModel, _super);
    function OperationTableFilterStateModel() {
        return _super.call(this, app_main_models_filters_operation_filter__WEBPACK_IMPORTED_MODULE_1__["FilterOperationTable"]) || this;
    }
    return OperationTableFilterStateModel;
}(app_main_models_generics_filter_info_model__WEBPACK_IMPORTED_MODULE_0__["FilterInfo"]));

var operationTableFilterStateModel = new OperationTableFilterStateModel();
var OperationTableFilterState = /** @class */ (function () {
    function OperationTableFilterState(_operationService, _store) {
        this._operationService = _operationService;
        this._store = _store;
    }
    OperationTableFilterState.get = function (state) {
        return state;
    };
    OperationTableFilterState.prototype.loadOperationfTableFilter = function (context, action) {
        var state = context.getState();
        state.loadingInfo.loaded = false;
        state.loadingInfo.loading = true;
        state.filters = null;
        context.patchState(state);
        this._operationService.getTableFilter(action.payload.selected)
            .subscribe(function (result) {
            context.dispatch(new _operation_list_filter_action__WEBPACK_IMPORTED_MODULE_4__["LoadOperationTableFilterSuccess"](result));
        });
    };
    OperationTableFilterState.prototype.loadSuccess = function (context, action) {
        //conserver le payload
        var payload = JSON.parse(JSON.stringify(action.payload.selected));
        var state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.filters = action.payload;
        context.patchState(state);
        context.dispatch(new _operation_list_filter_action__WEBPACK_IMPORTED_MODULE_4__["ChangeOperationTableFilter"](payload));
    };
    OperationTableFilterState.prototype.changeFilter = function (context, action) {
        this._store.dispatch(new _operation_list_operation_list_action__WEBPACK_IMPORTED_MODULE_5__["LoadOperationTableDatas"](action.payload));
    };
    OperationTableFilterState.prototype.UpdatePaginationOperationTableFilter = function (context, action) {
        var state = context.getState();
        state.filters.selected.pagination = action.payload;
        context.patchState(state);
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_operation_list_filter_action__WEBPACK_IMPORTED_MODULE_4__["LoadOperationTableFilter"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_list_filter_action__WEBPACK_IMPORTED_MODULE_4__["LoadOperationTableFilter"]]),
        __metadata("design:returntype", void 0)
    ], OperationTableFilterState.prototype, "loadOperationfTableFilter", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_operation_list_filter_action__WEBPACK_IMPORTED_MODULE_4__["LoadOperationTableFilterSuccess"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_list_filter_action__WEBPACK_IMPORTED_MODULE_4__["LoadOperationTableFilterSuccess"]]),
        __metadata("design:returntype", void 0)
    ], OperationTableFilterState.prototype, "loadSuccess", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_operation_list_filter_action__WEBPACK_IMPORTED_MODULE_4__["ChangeOperationTableFilter"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_list_filter_action__WEBPACK_IMPORTED_MODULE_4__["ChangeOperationTableFilter"]]),
        __metadata("design:returntype", void 0)
    ], OperationTableFilterState.prototype, "changeFilter", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_operation_list_filter_action__WEBPACK_IMPORTED_MODULE_4__["UpdatePaginationOperationTableFilter"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_list_filter_action__WEBPACK_IMPORTED_MODULE_4__["UpdatePaginationOperationTableFilter"]]),
        __metadata("design:returntype", void 0)
    ], OperationTableFilterState.prototype, "UpdatePaginationOperationTableFilter", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [OperationTableFilterStateModel]),
        __metadata("design:returntype", void 0)
    ], OperationTableFilterState, "get", null);
    OperationTableFilterState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
            name: 'OperationTableFilter',
            defaults: operationTableFilterStateModel
        }),
        __metadata("design:paramtypes", [app_main_services_Referential_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], OperationTableFilterState);
    return OperationTableFilterState;
}());



/***/ }),

/***/ "./src/app/main/_ngxs/referential/operation/operation-list/operation-list.action.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/_ngxs/referential/operation/operation-list/operation-list.action.ts ***!
  \******************************************************************************************/
/*! exports provided: OPERATION_TABLE_LOAD, OPERATION_TABLE_LOAD_SUCCESS, OPERATION_TABLE_FILTER_CHANGE, OPERATION_TABLE_CLEAR, LoadOperationTableDatas, LoadOperationTableDatasSuccess, ClearOperationTableDatas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATION_TABLE_LOAD", function() { return OPERATION_TABLE_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATION_TABLE_LOAD_SUCCESS", function() { return OPERATION_TABLE_LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATION_TABLE_FILTER_CHANGE", function() { return OPERATION_TABLE_FILTER_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATION_TABLE_CLEAR", function() { return OPERATION_TABLE_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOperationTableDatas", function() { return LoadOperationTableDatas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOperationTableDatasSuccess", function() { return LoadOperationTableDatasSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearOperationTableDatas", function() { return ClearOperationTableDatas; });
var OPERATION_TABLE_LOAD = 'operation-table-load';
var OPERATION_TABLE_LOAD_SUCCESS = 'operation-table-load-success';
var OPERATION_TABLE_FILTER_CHANGE = 'operation-table-filter-change';
var OPERATION_TABLE_CLEAR = 'operation-table-clear';
var LoadOperationTableDatas = /** @class */ (function () {
    function LoadOperationTableDatas(payload) {
        this.payload = payload;
    }
    LoadOperationTableDatas.type = OPERATION_TABLE_LOAD;
    return LoadOperationTableDatas;
}());

var LoadOperationTableDatasSuccess = /** @class */ (function () {
    function LoadOperationTableDatasSuccess(payload) {
        this.payload = payload;
    }
    LoadOperationTableDatasSuccess.type = OPERATION_TABLE_LOAD_SUCCESS;
    return LoadOperationTableDatasSuccess;
}());

var ClearOperationTableDatas = /** @class */ (function () {
    function ClearOperationTableDatas() {
    }
    ClearOperationTableDatas.type = OPERATION_TABLE_CLEAR;
    return ClearOperationTableDatas;
}());



/***/ }),

/***/ "./src/app/main/_ngxs/referential/operation/operation-list/operation-list.state.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/_ngxs/referential/operation/operation-list/operation-list.state.ts ***!
  \*****************************************************************************************/
/*! exports provided: OperationTableStateModel, OperationTableState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationTableStateModel", function() { return OperationTableStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationTableState", function() { return OperationTableState; });
/* harmony import */ var app_main_models_generics_table_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/_models/generics/table-info.model */ "./src/app/main/_models/generics/table-info.model.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var app_main_services_Referential_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/_services/Referential/operation.service */ "./src/app/main/_services/Referential/operation.service.ts");
/* harmony import */ var _operation_list_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operation-list.action */ "./src/app/main/_ngxs/referential/operation/operation-list/operation-list.action.ts");
/* harmony import */ var _operation_list_filter_operation_list_filter_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operation-list-filter/operation-list-filter.action */ "./src/app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.action.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OperationTableStateModel = /** @class */ (function (_super) {
    __extends(OperationTableStateModel, _super);
    function OperationTableStateModel() {
        return _super.call(this) || this;
    }
    return OperationTableStateModel;
}(app_main_models_generics_table_info_model__WEBPACK_IMPORTED_MODULE_0__["DataInfos"]));

var tableInfo = new OperationTableStateModel();
var OperationTableState = /** @class */ (function () {
    function OperationTableState(_operationService, _store) {
        this._operationService = _operationService;
        this._store = _store;
    }
    OperationTableState.get = function (state) {
        return state;
    };
    OperationTableState.prototype.loadGrid = function (context, action) {
        var state = context.getState();
        state.loadingInfo.loaded = false;
        state.loadingInfo.loading = true;
        state.datas = null;
        context.patchState(state);
        this._operationService.getTable(action.payload)
            .subscribe(function (result) {
            context.dispatch(new _operation_list_action__WEBPACK_IMPORTED_MODULE_3__["LoadOperationTableDatasSuccess"](result));
        });
    };
    OperationTableState.prototype.loadSuccess = function (context, action) {
        var state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload.datas;
        context.patchState(state);
        this._store.dispatch(new _operation_list_filter_operation_list_filter_action__WEBPACK_IMPORTED_MODULE_4__["UpdatePaginationOperationTableFilter"](action.payload.pagination));
    };
    OperationTableState.prototype.clear = function (context) {
        return context.setState(new OperationTableStateModel());
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_operation_list_action__WEBPACK_IMPORTED_MODULE_3__["LoadOperationTableDatas"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_list_action__WEBPACK_IMPORTED_MODULE_3__["LoadOperationTableDatas"]]),
        __metadata("design:returntype", void 0)
    ], OperationTableState.prototype, "loadGrid", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_operation_list_action__WEBPACK_IMPORTED_MODULE_3__["LoadOperationTableDatasSuccess"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _operation_list_action__WEBPACK_IMPORTED_MODULE_3__["LoadOperationTableDatasSuccess"]]),
        __metadata("design:returntype", void 0)
    ], OperationTableState.prototype, "loadSuccess", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_operation_list_action__WEBPACK_IMPORTED_MODULE_3__["ClearOperationTableDatas"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OperationTableState.prototype, "clear", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [OperationTableStateModel]),
        __metadata("design:returntype", void 0)
    ], OperationTableState, "get", null);
    OperationTableState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: 'OperationTable',
            defaults: tableInfo
        }),
        __metadata("design:paramtypes", [app_main_services_Referential_operation_service__WEBPACK_IMPORTED_MODULE_2__["OperationService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], OperationTableState);
    return OperationTableState;
}());



/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation-type-family/operation-type-family-detail/operation-type-family-detail.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation-type-family/operation-type-family-detail/operation-type-family-detail.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"product\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- HEADER -->\n        <div class=\"header accent\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n            <!-- APP TITLE -->\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <!-- (click)=\"movePrevious()\" -->\n                <button class=\"mr-0 mr-sm-16\" mat-icon-button \n                    [routerLink]=\"['/apps/referential/operations/operation-type-families']\">\n                    <mat-icon>arrow_back</mat-icon>\n                </button>\n\n                <div class=\"product-image mr-8 mr-sm-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n                    <img *ngIf=\"formLoaded && otfDetail\" [src]=\"'assets/images/Otf/'+otfDetail.logoClassName.selected.label+'_128.png'\">\n                </div>\n\n                <div fxLayout=\"column\" fxLayoutAlign=\"start start\"\n                     *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\n                    <div class=\"h2\" *ngIf=\"formLoaded && otfDetail && idOperationTypeFamily!=-1\" >\n                        {{otfDetail.label}}\n                    </div>\n                    <div class=\"h2\" *ngIf=\"formLoaded && otfDetail && idOperationTypeFamily==-1\" >\n                            Nouvelle catégorie d'opération\n                    </div>\n                    <div class=\"subtitle secondary-text\">\n                        <span>Détail de la catégorie d'opérations</span>\n                    </div>\n                </div>\n            </div>\n            <!-- / APP TITLE -->\n            <button mat-raised-button *ngIf=\"formLoaded && otfDetail\"\n                class=\"save-product-button mat-white-bg mt-16 mt-sm-0\"\n                [disabled]= \"otfDetailForm.invalid || otfDetailForm.pristine\"\n                (click)=\"saveOtf()\"\n            >\n                <span>ENREGISTRER</span>\n            </button>\n        </div>\n        <!-- / HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card white\">\n\n            <form *ngIf=\"formLoaded && otfDetail\" \n                name=\"otfDetailForm\" \n                [formGroup]=\"otfDetailForm\" \n                class=\"product w-100-p\" \n                fxLayout=\"column\" fxFlex\n            >\n                <div class=\"example-container tab-content p-24\" >\n\n                    <mat-form-field appearance=\"outline\" floatLabel=\"always\" class=\"w-100-p\">\n                        <mat-label>Libellé catégorie opération</mat-label>\n                        <input matInput\n                            name=\"label\"\n                            formControlName=\"label\"\n                            placeholder=\"Libellé catégorie opération\">\n                    </mat-form-field>\n\n                    <mat-form-field appearance=\"outline\" floatLabel=\"always\" class=\"w-100-p\" >\n                        <mat-label>Mouvement</mat-label>\n                        <mat-select formControlName=\"movement\" placeholder=\"Mouvement\" [compareWith]=\"compareObjects\" >\n                            <mat-option *ngFor=\"let item of otfDetail.movement.list\" [value]=\"item\">\n                                {{ item.label }}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n\n                    <mat-form-field appearance=\"outline\" floatLabel=\"always\" class=\"w-100-p\" >\n                        <mat-label>Icône</mat-label>\n                        <mat-select formControlName=\"logoClassName\" placeholder=\"Icône\" [compareWith]=\"compareObjects\" >\n                            <mat-option *ngFor=\"let item of otfDetail.logoClassName.list\" [value]=\"item\">\n                                <img [src]=\"'assets/images/Otf/'+item.label+'_32.png'\">\n                                {{ item.label }}\n                            </mat-option>\n                        </mat-select>\n                        \n                        \n                        <!-- <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                            <input matInput>\n                            <img *ngFor=\"let item of otfDetail.logoClassName.list\" [src]=\"'assets/images/Otf/'+item.label+'_32.png'\">\n                            \n                        </div> -->\n                    </mat-form-field>\n                </div>\n\n                </form> \n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation-type-family/operation-type-family-detail/operation-type-family-detail.component.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation-type-family/operation-type-family-detail/operation-type-family-detail.component.scss ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto !important; }\n\n#product .header .product-image {\n  overflow: hidden;\n  width: 56px;\n  height: 56px;\n  border: 3px solid rgba(0, 0, 0, 0.12); }\n\n#product .header .product-image img {\n    height: 100%;\n    width: auto;\n    max-width: none; }\n\n#product .header .subtitle {\n  margin: 6px 0 0 0; }\n\n#product .content .mat-tab-group,\n#product .content .mat-tab-body-wrapper,\n#product .content .tab-content {\n  flex: 1 1 auto;\n  max-width: 100%; }\n\n#product .content .mat-tab-body-content {\n  display: flex; }\n\n#product .content .mat-tab-label {\n  height: 64px; }\n\n#product .content .product-image {\n  overflow: hidden;\n  width: 128px;\n  height: 128px;\n  margin-right: 16px;\n  margin-bottom: 16px;\n  border: 3px solid rgba(0, 0, 0, 0.12); }\n\n#product .content .product-image img {\n    height: 100%;\n    width: auto;\n    max-width: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcHBzL3JlZmVyZW50aWFsL29wZXJhdGlvbnMvb3BlcmF0aW9uLXR5cGUtZmFtaWx5L29wZXJhdGlvbi10eXBlLWZhbWlseS1kZXRhaWwvQzpcXFByb2plY3RzXFxBbmd1bGFyXFx1ZGVteS1hcHAtZnVzZVxcQnVkZ2V0LlNQQS9zcmNcXGFwcFxcbWFpblxcYXBwc1xccmVmZXJlbnRpYWxcXG9wZXJhdGlvbnNcXG9wZXJhdGlvbi10eXBlLWZhbWlseVxcb3BlcmF0aW9uLXR5cGUtZmFtaWx5LWRldGFpbFxcb3BlcmF0aW9uLXR5cGUtZmFtaWx5LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsNEJBQTJCLEVBQzFCOztBQUdMO0VBS1ksaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxhQUFZO0VBQ1osc0NBQXFDLEVBT3hDOztBQWZUO0lBV2dCLGFBQVk7SUFDWixZQUFXO0lBQ1gsZ0JBQWUsRUFDbEI7O0FBZGI7RUFrQlksa0JBQWlCLEVBQ3BCOztBQW5CVDs7O0VBMkJZLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUE3QlQ7RUFnQ1ksY0FBYSxFQUNoQjs7QUFqQ1Q7RUFvQ1ksYUFBWSxFQUNmOztBQXJDVDtFQXdDWSxpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLHNDQUFxQyxFQU94Qzs7QUFwRFQ7SUFnRGdCLGFBQVk7SUFDWixZQUFXO0lBQ1gsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FwcHMvcmVmZXJlbnRpYWwvb3BlcmF0aW9ucy9vcGVyYXRpb24tdHlwZS1mYW1pbHkvb3BlcmF0aW9uLXR5cGUtZmFtaWx5LWRldGFpbC9vcGVyYXRpb24tdHlwZS1mYW1pbHktZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuXHJcbiNwcm9kdWN0IHtcclxuXHJcbiAgICAuaGVhZGVyIHtcclxuXHJcbiAgICAgICAgLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB3aWR0aDogNTZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3VidGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweCAwIDAgMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG5cclxuICAgICAgICAubWF0LXRhYi1ncm91cCxcclxuICAgICAgICAubWF0LXRhYi1ib2R5LXdyYXBwZXIsXHJcbiAgICAgICAgLnRhYi1jb250ZW50e1xyXG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hdC10YWItYm9keS1jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYXQtdGFiLWxhYmVsIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB3aWR0aDogMTI4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation-type-family/operation-type-family-detail/operation-type-family-detail.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation-type-family/operation-type-family-detail/operation-type-family-detail.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: OperationTypeFamilyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationTypeFamilyDetailComponent", function() { return OperationTypeFamilyDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_ngxs_referential_operation_type_family_operation_type_family_detail_operation_type_family_detail_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type-family/operation-type-family-detail/operation-type-family-detail.state */ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-detail/operation-type-family-detail.state.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_main_ngxs_referential_operation_type_family_operation_type_family_detail_operation_type_family_detail_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type-family/operation-type-family-detail/operation-type-family-detail.action */ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-detail/operation-type-family-detail.action.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _operation_type_family_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../operation-type-family.service */ "./src/app/main/apps/referential/operations/operation-type-family/operation-type-family.service.ts");
/* harmony import */ var app_main_ngxs_referential_operation_type_family_operation_type_family_list_operation_type_family_list_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type-family/operation-type-family-list/operation-type-family-list.action */ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list/operation-type-family-list.action.ts");
/* harmony import */ var app_main_ngxs_referential_operation_type_family_operation_type_family_list_filter_operation_type_family_list_filter_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type-family/operation-type-family-list-filter/operation-type-family-list-filter.state */ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list-filter/operation-type-family-list-filter.state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var OperationTypeFamilyDetailComponent = /** @class */ (function () {
    function OperationTypeFamilyDetailComponent(_activatedRoute, _store, _formBuilder, _notificationService, _otfService) {
        var _this = this;
        this._activatedRoute = _activatedRoute;
        this._store = _store;
        this._formBuilder = _formBuilder;
        this._notificationService = _notificationService;
        this._otfService = _otfService;
        this.firstLoad = true;
        this.otfTableFilter$.subscribe(function (otfTableFilter) {
            _this.filterOtf = JSON.parse(JSON.stringify(otfTableFilter.filters));
        });
        this.otfDetail$.subscribe(function (otfDetail) {
            if (otfDetail.loadingInfo.loaded) {
                _this.otfDetail = JSON.parse(JSON.stringify(otfDetail.datas));
                if (_this.firstLoad) {
                    //creation du formulaire
                    _this.createForms();
                    _this.firstLoad = false;
                }
                _this.formLoaded = true;
            }
        });
    }
    OperationTypeFamilyDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (routeParams) {
            _this.idOperationTypeFamily = routeParams['idOperationTypeFamily'] == 'new' ? -1 : routeParams['idOperationTypeFamily'];
            _this._store.dispatch(new app_main_ngxs_referential_operation_type_family_operation_type_family_detail_operation_type_family_detail_action__WEBPACK_IMPORTED_MODULE_6__["LoadOtfDetail"](_this.idOperationTypeFamily));
        });
    };
    OperationTypeFamilyDetailComponent.prototype.ngOnDestroy = function () {
        this._store.dispatch(new app_main_ngxs_referential_operation_type_family_operation_type_family_detail_operation_type_family_detail_action__WEBPACK_IMPORTED_MODULE_6__["ClearOtfDetail"]());
    };
    OperationTypeFamilyDetailComponent.prototype.createForms = function () {
        var _this = this;
        this.otfDetailForm = this._formBuilder.group({
            label: [this.otfDetail.label, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            logoClassName: [this.otfDetail.logoClassName.selected, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            movement: [this.otfDetail.movement.selected, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
        });
        this.otfDetailForm.valueChanges.subscribe(function (val) {
            _this.otfDetail.label = val.label;
            _this.otfDetail.logoClassName.selected = val.logoClassName;
            _this.otfDetail.movement.selected = val.movement;
            _this._store.dispatch(new app_main_ngxs_referential_operation_type_family_operation_type_family_detail_operation_type_family_detail_action__WEBPACK_IMPORTED_MODULE_6__["LoadOtfDetailSuccess"](_this.otfDetail));
        });
    };
    OperationTypeFamilyDetailComponent.prototype.saveOtf = function () {
        var _this = this;
        this._otfService.saveOtfDetail(this.otfDetail)
            .subscribe(function (resp) {
            if (resp) {
                _this._notificationService.success('Enregistrement effectué', "La cat\u00E9gorie d'op\u00E9ration est enregistr\u00E9e");
                _this._store.dispatch(new app_main_ngxs_referential_operation_type_family_operation_type_family_list_operation_type_family_list_action__WEBPACK_IMPORTED_MODULE_10__["LoadOtfTableDatas"](_this.filterOtf.selected));
            }
            else {
                _this._notificationService.error('Echec de l\'enregistrement');
            }
        });
    };
    OperationTypeFamilyDetailComponent.prototype.compareObjects = function (o1, o2) {
        if (o1.label == o2.label && o1.id == o2.id)
            return true;
        else
            return false;
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(app_main_ngxs_referential_operation_type_family_operation_type_family_detail_operation_type_family_detail_state__WEBPACK_IMPORTED_MODULE_4__["OtfDetailState"].get),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], OperationTypeFamilyDetailComponent.prototype, "otfDetail$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(app_main_ngxs_referential_operation_type_family_operation_type_family_list_filter_operation_type_family_list_filter_state__WEBPACK_IMPORTED_MODULE_11__["OtfTableFilterState"].get),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], OperationTypeFamilyDetailComponent.prototype, "otfTableFilter$", void 0);
    OperationTypeFamilyDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'operation-type-family-detail',
            template: __webpack_require__(/*! ./operation-type-family-detail.component.html */ "./src/app/main/apps/referential/operations/operation-type-family/operation-type-family-detail/operation-type-family-detail.component.html"),
            styles: [__webpack_require__(/*! ./operation-type-family-detail.component.scss */ "./src/app/main/apps/referential/operations/operation-type-family/operation-type-family-detail/operation-type-family-detail.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_8__["NotificationsService"],
            _operation_type_family_service__WEBPACK_IMPORTED_MODULE_9__["OtfService"]])
    ], OperationTypeFamilyDetailComponent);
    return OperationTypeFamilyDetailComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation-type-family/operation-type-family-list/operation-type-family-list.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation-type-family/operation-type-family-list/operation-type-family-list.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n    \n    <mat-table class=\"mat-table\"\n        #table [dataSource]=\"dataSource\"\n        [@animateStagger]=\"{value:'50'}\"\n        matSort matSortActive=\"id\" matSortDirection=\"asc\" matSortDisableClear \n        (matSortChange)=\"onSortChangeEvent($event)\"\n    >\n\n        <!-- id -->\n        <ng-container matColumnDef=\"id\">\n            <mat-header-cell style=\"flex:0 0 70px;\" *matHeaderCellDef mat-sort-header>Id</mat-header-cell>\n            <mat-cell style=\"flex:0 0 70px;\" *matCellDef=\"let data\">\n                <p class=\"text-truncate\">{{data.id}}</p>\n            </mat-cell>\n        </ng-container>\n\n        <!-- logoClassName -->\n        <ng-container cdkColumnDef=\"logoClassName\" >\n            <mat-header-cell *cdkHeaderCellDef mat-sort-header style=\"flex:0 0 70px;\">icône</mat-header-cell>\n            <mat-cell *cdkCellDef=\"let data\" style=\"flex:0 0 70px;\">\n                <img class=\"logo\" *ngIf=\"data.logoClassName\" [src]=\"'assets/images/Otf/'+data.logoClassName+'_32.png'\">\n                <!-- <img class=\"avatar\" *ngIf=\"!user.avatarUrl\" [src]=\"'assets/images/avatars/profile.jpg'\"> -->\n            </mat-cell>\n        </ng-container>\n\n        <!-- Label -->\n        <ng-container matColumnDef=\"label\" >\n            <mat-header-cell style=\"flex: 0 0 40%;\"  *matHeaderCellDef >\n                <div mat-sort-header >Libellé</div>\n                \n                <div (click)=\"templateFor='col2'\" [matMenuTriggerFor]=\"menuLabel\" \n                    style=\"cursor: pointer;\" fxFlex fxLayoutAlign=\"end start\"   >\n                    <mat-icon color=\"warn\" *ngIf=\"hasFilterData('label')\">filter_list</mat-icon>\n                    <mat-icon color=\"primary\" *ngIf=\"!hasFilterData('label')\">filter_list</mat-icon>\n                </div>\n                <mat-menu #menuLabel=\"matMenu\" [overlapTrigger]=\"false\">\n                    <filter-label *ngIf=\"templateFor==='col2' && (otfTableFilter$ | async).loadingInfo.loaded\"\n                        [label]=\"(otfTableFilter$ | async).filters.selected.label\"\n                        (applyLabelFilter)=\"applyFilterLabel($event)\"\n                    ></filter-label>\n                </mat-menu>\n            </mat-header-cell >\n            <mat-cell style=\"flex: 0 0 40%;\" *matCellDef=\"let data\">\n                <p class=\"text-truncate\">{{data.label}}</p>\n            </mat-cell>\n        </ng-container>\n\n        <!-- Movement -->\n        <ng-container matColumnDef=\"movement\" >\n            <mat-header-cell style=\"flex: 0 0 15%;\" *matHeaderCellDef >\n                <div mat-sort-header >Sens</div>\n        \n                <div (click)=\"templateFor='col3'\" [matMenuTriggerFor]=\"menuMovement\"\n                    fxFlex fxLayoutAlign=\"end start\" style=\"cursor: pointer;\">\n                    <mat-icon color=\"warn\" *ngIf=\"hasFilterData('movement')\">filter_list</mat-icon>\n                    <mat-icon color=\"primary\" *ngIf=\"!hasFilterData('movement')\">filter_list</mat-icon>\n                </div>\n        \n                <mat-menu #menuMovement=\"matMenu\" [overlapTrigger]=\"false\">\n                <filter-movement *ngIf=\"templateFor==='col3' && filterMovement\"\n                    [movement]=\"filterMovement\"\n                    (applyFilterMovement)=\"applyFilterMovement($event)\"\n                >\n                </filter-movement>\n                </mat-menu>\n            </mat-header-cell>\n            <mat-cell style=\"flex: 0 0 15%;\" *matCellDef=\"let data\">\n                <p class=\"text-truncate\">{{data.movement.label}}</p>\n            </mat-cell>\n        </ng-container>\n        \n        <!-- Delete -->\n        <!-- style=\"flex:0 0 25%;\" -->\n        <ng-container matColumnDef=\"buttonDelete\" >\n            <mat-header-cell style=\"flex:0 0 30%;\"  *matHeaderCellDef ></mat-header-cell>\n            <mat-cell style=\"flex:0 0 30%;justify-content: flex-end\"  *matCellDef=\"let data\">\n                <button *ngIf=\"!data.isMandatory\" matTooltip=\"Supprimer\" mat-icon-button (click)=\"delete(data)\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n                <button *ngIf=\"!data.isMandatory\" matTooltip=\"Détail\" mat-icon-button (click)=\"detail(data)\">\n                        <mat-icon>more_horiz</mat-icon>\n                    </button>\n            </mat-cell>\n        </ng-container> \n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky:true\"></mat-header-row>\n        \n        <mat-row \n            *cdkRowDef=\"let data; columns: displayedColumns;\"\n            matRipple\n            [@animate]=\"{value:'*',params:{y:'100%'}}\"\n            class=\"element-row\" \n        >\n\n        </mat-row>\n\n    </mat-table>\n\n    <div *ngIf=\"(otfTable$ | async).loadingInfo.loading\"\n        class=\"h-96 w-100-p\"\n        fxLayout=\"column\"\n        fxLayoutAlign=\"center center\">\n        <mat-spinner diameter=\"40\" color=\"accent\" fxLayout=\"row\"></mat-spinner>\n        <div style=\"color:#4285F3\" fxLayout=\"row\">chargement...</div>\n    </div> \n\n    \n    <p class=\"empty-result\" \n        *ngIf=\"(otfTable$ | async).loadingInfo.loaded \n            && (otfTable$ | async).datas.length==0\"\n    >\n        Aucun résultat\n    </p>\n</div>\n\n<mat-paginator *ngIf=\"(otfTableFilter$ | async).loadingInfo.loaded\"\n    (page)=\"onPageChangeEvent($event)\"\n    [length]=\"(otfTableFilter$ | async).filters.selected.pagination.totalItems\" \n    [pageSize]=\"(otfTableFilter$ | async).filters.selected.pagination.nbItemsPerPage\"\n    [pageSizeOptions]=\"[15, 100, 200]\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation-type-family/operation-type-family-list/operation-type-family-list.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation-type-family/operation-type-family-list/operation-type-family-list.component.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto !important;\n  max-height: calc(100% - 50px) !important; }\n\n.mat-table {\n  width: 100% !important;\n  height: 100%; }\n\n.element-row {\n  position: relative; }\n\n.element-row:not(.expanded) {\n  cursor: pointer; }\n\n.element-row:not(.expanded):hover {\n  background: #f5f5f5; }\n\n.element-row.expanded {\n  border-bottom-color: red;\n  background: #f5f5f5; }\n\n.ng-trigger-detailExpand {\n  background: #f5f5f5; }\n\n.mat-row {\n  min-height: 36px;\n  max-height: 36px;\n  padding-top: 0px;\n  padding-right: 6px;\n  padding-bottom: 0px;\n  padding-left: 6px;\n  width: 100%; }\n\n.mat-header-row {\n  min-height: 40px;\n  max-height: 40px;\n  padding-top: 0px;\n  padding-right: 6px;\n  padding-bottom: 0px;\n  padding-left: 6px;\n  width: 100%; }\n\n.red-icon {\n  color: #F44336; }\n\n.text-green {\n  color: #09D261; }\n\n.text-red {\n  color: #F44336; }\n\n.empty-result {\n  text-align: center;\n  color: #4285F3; }\n\n.mat-paginator {\n  position: fixed !important;\n  background-color: transparent !important;\n  bottom: 0px;\n  right: 20px; }\n\n.mat-paginator .mat-paginator-container {\n    min-height: 50px !important;\n    max-height: 50px !important; }\n\n.mat-paginator .mat-paginator-page-size {\n    min-height: 50px !important;\n    max-height: 50px !important;\n    align-items: center !important; }\n\n.dot {\n  height: 25px;\n  width: 25px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  text-align: center;\n  color: white;\n  padding-top: 5px; }\n\n.logo {\n  height: 22px;\n  width: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcHBzL3JlZmVyZW50aWFsL29wZXJhdGlvbnMvb3BlcmF0aW9uLXR5cGUtZmFtaWx5L29wZXJhdGlvbi10eXBlLWZhbWlseS1saXN0L0M6XFxQcm9qZWN0c1xcQW5ndWxhclxcdWRlbXktYXBwLWZ1c2VcXEJ1ZGdldC5TUEEvc3JjXFxhcHBcXG1haW5cXGFwcHNcXHJlZmVyZW50aWFsXFxvcGVyYXRpb25zXFxvcGVyYXRpb24tdHlwZS1mYW1pbHlcXG9wZXJhdGlvbi10eXBlLWZhbWlseS1saXN0XFxvcGVyYXRpb24tdHlwZS1mYW1pbHktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsNEJBQTJCO0VBQzNCLHlDQUF1QyxFQUN0Qzs7QUFXRDtFQUNFLHVCQUFzQjtFQUN0QixhQUFXLEVBR1o7O0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLHlCQUF3QjtFQUN4QixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGlCQUFlO0VBQ2YsbUJBQWlCO0VBQ2pCLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsWUFBVyxFQUNaOztBQUVEO0VBR0UsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixpQkFBZTtFQUNmLG1CQUFpQjtFQUNqQixvQkFBbUI7RUFDbkIsa0JBQWlCO0VBQ2pCLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGVBQWMsRUFDZjs7QUFNRDtFQUNFLGVBQWMsRUFDZjs7QUFDRDtFQUNFLGVBQWMsRUFDZjs7QUFFRDtFQUNFLG1CQUFpQjtFQUNqQixlQUFhLEVBQ2Q7O0FBRUQ7RUFDRSwyQkFBMEI7RUFDMUIseUNBQXdDO0VBQ3hDLFlBQVc7RUFDWCxZQUFXLEVBWVo7O0FBaEJEO0lBT0ksNEJBQTJCO0lBQzNCLDRCQUEyQixFQUM1Qjs7QUFUSDtJQVlJLDRCQUEyQjtJQUMzQiw0QkFBMkI7SUFDM0IsK0JBQThCLEVBQy9COztBQUdIO0VBQ0UsYUFBWTtFQUNaLFlBQVc7RUFDWCx1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsYUFBVztFQUNYLGlCQUFlLEVBQ2hCOztBQUVEO0VBQ0ksYUFBVztFQUNYLFlBQVUsRUFDYiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXBwcy9yZWZlcmVudGlhbC9vcGVyYXRpb25zL29wZXJhdGlvbi10eXBlLWZhbWlseS9vcGVyYXRpb24tdHlwZS1mYW1pbHktbGlzdC9vcGVyYXRpb24tdHlwZS1mYW1pbHktbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OmNhbGMoMTAwJSAtIDUwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIC5zY3JvbGxhYmxlLXNtYWxsIHtcclxuICAgICAgICBcclxuICAgIC8vICAgbWF4LWhlaWdodDo2NXZoO1xyXG4gICAgLy8gfVxyXG4gIFxyXG4gICAgLy8gLnNjcm9sbGFibGUtbGFyZ2Uge1xyXG4gICAgLy8gICBtYXgtaGVpZ2h0Ojg2dmg7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC5tYXQtdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgLy8gbWF4LWhlaWdodDo2NXZoO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmVsZW1lbnQtcm93IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZWxlbWVudC1yb3c6bm90KC5leHBhbmRlZCkge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5lbGVtZW50LXJvdzpub3QoLmV4cGFuZGVkKTpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5lbGVtZW50LXJvdy5leHBhbmRlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJlZDtcclxuICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIH1cclxuICBcclxuICAgIC5uZy10cmlnZ2VyLWRldGFpbEV4cGFuZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWF0LXJvdyB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOjBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDo2cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgICAvLyAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAvLyB0b3A6IDA7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOjBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDo2cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5yZWQtaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjRjQ0MzM2O1xyXG4gICAgfVxyXG4gICAgLy8gLmhpZ2hsaWdodHtcclxuICAgIC8vICAgYmFja2dyb3VuZDogI0ZDQzdDMztcclxuICAgIC8vICAgLy8gb3BhY2l0eTogMC4zO1xyXG4gICAgLy8gfVxyXG4gIFxyXG4gICAgLnRleHQtZ3JlZW4ge1xyXG4gICAgICBjb2xvcjogIzA5RDI2MTtcclxuICAgIH1cclxuICAgIC50ZXh0LXJlZCB7XHJcbiAgICAgIGNvbG9yOiAjRjQ0MzM2O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmVtcHR5LXJlc3VsdCB7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICBjb2xvcjojNDI4NUYzO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1hdC1wYWdpbmF0b3Ige1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIHJpZ2h0OiAyMHB4O1xyXG5cclxuICAgICAgLm1hdC1wYWdpbmF0b3ItY29udGFpbmVyIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kb3Qge1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgcGFkZGluZy10b3A6NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBoZWlnaHQ6MjJweDtcclxuICAgICAgICB3aWR0aDoyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC5tYXQtcGFnaW5hdG9yIHtcclxuICAgIC8vICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLy8gICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgLy8gICBib3R0b206IDBweDtcclxuICAgIC8vICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyAgIC8vIGxlZnQ6IDBweDtcclxuICAgIC8vICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAvLyAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIC8vIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation-type-family/operation-type-family-list/operation-type-family-list.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation-type-family/operation-type-family-list/operation-type-family-list.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: OperationTypeFamilyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationTypeFamilyComponent", function() { return OperationTypeFamilyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_main_models_filters_operation_type_family_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/_models/filters/operation-type-family.filter */ "./src/app/main/_models/filters/operation-type-family.filter.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_main_ngxs_referential_operation_type_family_operation_type_family_list_filter_operation_type_family_list_filter_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type-family/operation-type-family-list-filter/operation-type-family-list-filter.state */ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list-filter/operation-type-family-list-filter.state.ts");
/* harmony import */ var app_main_ngxs_referential_operation_type_family_operation_type_family_list_operation_type_family_list_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type-family/operation-type-family-list/operation-type-family-list.state */ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list/operation-type-family-list.state.ts");
/* harmony import */ var app_main_ngxs_referential_operation_type_family_operation_type_family_list_filter_operation_type_family_list_filter_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type-family/operation-type-family-list-filter/operation-type-family-list-filter.action */ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list-filter/operation-type-family-list-filter.action.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _operation_type_family_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../operation-type-family.service */ "./src/app/main/apps/referential/operations/operation-type-family/operation-type-family.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var app_main_ngxs_referential_operation_type_family_operation_type_family_list_operation_type_family_list_action__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type-family/operation-type-family-list/operation-type-family-list.action */ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list/operation-type-family-list.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var OperationTypeFamilyComponent = /** @class */ (function () {
    function OperationTypeFamilyComponent(_store, dialog, _router, _otfService, _notificationService) {
        var _this = this;
        this._store = _store;
        this.dialog = dialog;
        this._router = _router;
        this._otfService = _otfService;
        this._notificationService = _notificationService;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.selectedIndex = 0;
        this.displayedColumns = ['id', 'logoClassName', 'label', 'movement', 'buttonDelete'];
        this.filterOtf = new app_main_models_filters_operation_type_family_filter__WEBPACK_IMPORTED_MODULE_2__["FilterOtfTable"]();
        this._store.dispatch(new app_main_ngxs_referential_operation_type_family_operation_type_family_list_filter_operation_type_family_list_filter_action__WEBPACK_IMPORTED_MODULE_8__["LoadOtfTableFilter"](this.filterOtf));
        this.otfTable$.subscribe(function (asifTable) {
            _this.dataSource.data = asifTable.datas;
        });
    }
    OperationTypeFamilyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.otfTableFilter$.subscribe(function (otfTableFilter) {
            if (otfTableFilter.loadingInfo.loaded) {
                _this.filterOtf = otfTableFilter.filters;
                _this.filterMovement = { list: otfTableFilter.filters.movements, selected: otfTableFilter.filters.selected.movement };
            }
        });
    };
    // ngOnChanges(changes: SimpleChanges) {
    //   this.headerPanelIsVisible = changes.headerPanelIsVisible.currentValue;
    // }
    OperationTypeFamilyComponent.prototype.onPageChangeEvent = function (event) {
        this.filterOtf.selected.pagination.currentPage = this.paginator.pageIndex;
        this.loadPage();
    };
    OperationTypeFamilyComponent.prototype.onSortChangeEvent = function (event) {
        this.filterOtf.selected.pagination.currentPage = 0;
        this.loadPage();
    };
    OperationTypeFamilyComponent.prototype.loadPage = function () {
        this.filterOtf.selected.pagination.nbItemsPerPage = this.paginator.pageSize;
        this.filterOtf.selected.pagination.sortColumn = this.sort.active;
        this.filterOtf.selected.pagination.sortDirection = this.sort.direction;
        this._store.dispatch(new app_main_ngxs_referential_operation_type_family_operation_type_family_list_filter_operation_type_family_list_filter_action__WEBPACK_IMPORTED_MODULE_8__["ChangeOtfTableFilter"](this.filterOtf.selected));
    };
    OperationTypeFamilyComponent.prototype.hasFilterData = function (filter) {
        if (!this.filterOtf)
            return false;
        if (filter == 'label')
            return this.filterOtf.selected != null && this.filterOtf.selected.label != null && this.filterOtf.selected.label != '';
        if (filter == 'movement') {
            return this.filterOtf.selected != null && this.filterOtf.selected.movement != null;
        }
    };
    OperationTypeFamilyComponent.prototype.delete = function (data) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Etes vous sûr de supprimer cette catégorie d\'opération? Tous les types d\'opérations associés et les opérations seront supprimés';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._otfService.deleteOtfDetail(data.id)
                    .subscribe(function (resp) {
                    _this._store.dispatch(new app_main_ngxs_referential_operation_type_family_operation_type_family_list_operation_type_family_list_action__WEBPACK_IMPORTED_MODULE_13__["LoadOtfTableDatas"](_this.filterOtf.selected));
                    _this._notificationService.success('Suppression réussi', 'La catégorie d\'opération est supprimé');
                }, function (error) {
                    _this._notificationService.error('Echec suppression', error);
                });
            }
            _this.confirmDialogRef = null;
        });
    };
    OperationTypeFamilyComponent.prototype.detail = function (data) {
        this._router.navigate(["/apps/referential/operations/operation-type-families/" + data.id]);
        // [routerLink]="['/apps/referential/operations/operation-type-families', data.id]"
    };
    OperationTypeFamilyComponent.prototype.applyFilterLabel = function (data) {
        // this.filterOtf.selected.pagination.currentPage=0;
        this.filterOtf.selected.label = data;
        // this._store.dispatch(new LoadOtfTableFilter(this.filterOtf));
        this.applyFilter();
    };
    OperationTypeFamilyComponent.prototype.applyFilterMovement = function (data) {
        this.filterOtf.selected.movement = data;
        this.applyFilter();
    };
    OperationTypeFamilyComponent.prototype.applyFilter = function () {
        this.filterOtf.selected.pagination.currentPage = 0;
        this._store.dispatch(new app_main_ngxs_referential_operation_type_family_operation_type_family_list_filter_operation_type_family_list_filter_action__WEBPACK_IMPORTED_MODULE_8__["LoadOtfTableFilter"](this.filterOtf));
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(app_main_ngxs_referential_operation_type_family_operation_type_family_list_filter_operation_type_family_list_filter_state__WEBPACK_IMPORTED_MODULE_6__["OtfTableFilterState"].get),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], OperationTypeFamilyComponent.prototype, "otfTableFilter$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(app_main_ngxs_referential_operation_type_family_operation_type_family_list_operation_type_family_list_state__WEBPACK_IMPORTED_MODULE_7__["OtfTableState"].get),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], OperationTypeFamilyComponent.prototype, "otfTable$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], OperationTypeFamilyComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], OperationTypeFamilyComponent.prototype, "sort", void 0);
    OperationTypeFamilyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'operation-type-family-list',
            template: __webpack_require__(/*! ./operation-type-family-list.component.html */ "./src/app/main/apps/referential/operations/operation-type-family/operation-type-family-list/operation-type-family-list.component.html"),
            styles: [__webpack_require__(/*! ./operation-type-family-list.component.scss */ "./src/app/main/apps/referential/operations/operation-type-family/operation-type-family-list/operation-type-family-list.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_9__["fuseAnimations"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _operation_type_family_service__WEBPACK_IMPORTED_MODULE_11__["OtfService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_12__["NotificationsService"]])
    ], OperationTypeFamilyComponent);
    return OperationTypeFamilyComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation-type-family/operation-type-family.service.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation-type-family/operation-type-family.service.ts ***!
  \*********************************************************************************************************/
/*! exports provided: OtfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtfService", function() { return OtfService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OtfService = /** @class */ (function () {
    function OtfService(http) {
        this.http = http;
        this.baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.userForGroup = this.user != null ? { id: this.user.id, idUserGroup: this.user.idUserGroup } : null;
    }
    OtfService.prototype.getOtfTable = function (filter) {
        filter.user = this.userForGroup;
        console.log('filter.user', filter.user);
        return this.http
            .post(this.baseUrl + "referential/operation-type-families/filter", filter)
            .map(function (response) {
            return response;
        });
    };
    OtfService.prototype.getOtfTableFilter = function (filter) {
        filter.user = this.userForGroup;
        return this.http
            .post(this.baseUrl + "referential/operation-type-families/table-filter", filter)
            .map(function (response) {
            return response;
        });
    };
    OtfService.prototype.getOtfDetail = function (idOperationTypeFamily) {
        // console.log('idOperationTypeFamily',idOperationTypeFamily);
        return this.http
            .get(this.baseUrl + "referential/operation-type-families/" + idOperationTypeFamily + "/detail")
            .map(function (response) { return response; });
    };
    OtfService.prototype.saveOtfDetail = function (otfDetail) {
        otfDetail.user = this.userForGroup;
        return this.http
            .post(this.baseUrl + "referential/operation-type-families/save", otfDetail)
            .map(function (response) {
            return response;
        });
    };
    OtfService.prototype.deleteOtfDetail = function (idOtf) {
        return this.http
            .delete(this.baseUrl + "referential/operation-type-families/" + idOtf + "/delete")
            .map(function (response) {
            return response;
        });
    };
    OtfService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OtfService);
    return OtfService;
}());



/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation-type/operation-type-detail/operation-type-detail.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation-type/operation-type-detail/operation-type-detail.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"product\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- HEADER -->\n        <div class=\"header accent\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n            <!-- APP TITLE -->\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <!-- (click)=\"movePrevious()\" -->\n                <button class=\"mr-0 mr-sm-16\" mat-icon-button \n                    [routerLink]=\"['/apps/referential/operations/operation-types']\">\n                    <mat-icon>arrow_back</mat-icon>\n                </button>\n\n                <div fxLayout=\"column\" fxLayoutAlign=\"start start\"\n                     *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\n                    <div class=\"h2\" *ngIf=\"formLoaded && otDetail && idOperationType!=-1\" >\n                        {{otDetail.label}}\n                    </div>\n                    <div class=\"h2\" *ngIf=\"formLoaded && otDetail && idOperationType==-1\" >\n                            Nouveau type d'opération\n                    </div>\n                    <div class=\"subtitle secondary-text\">\n                        <span>Détail du type d'opérations</span>\n                    </div>\n                </div>\n            </div>\n            <!-- / APP TITLE -->\n            <button mat-raised-button *ngIf=\"formLoaded && otDetail\"\n                class=\"save-product-button mat-white-bg mt-16 mt-sm-0\"\n                [disabled]= \"otDetailForm.invalid || otDetailForm.pristine\"\n                (click)=\"saveOt()\"\n            >\n                <span>ENREGISTRER</span>\n            </button>\n        </div>\n        <!-- / HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card white\">\n\n            <form *ngIf=\"formLoaded && otDetail\" \n                name=\"otDetailForm\" \n                [formGroup]=\"otDetailForm\" \n                class=\"product w-100-p\" \n                fxLayout=\"column\" fxFlex\n            >\n                <div class=\"example-container tab-content p-24\" >\n\n                    <mat-form-field appearance=\"outline\" floatLabel=\"always\" class=\"w-100-p\">\n                        <mat-label>Libellé type opération</mat-label>\n                        <input matInput\n                            name=\"label\"\n                            formControlName=\"label\"\n                            placeholder=\"Libellé type opération\">\n                    </mat-form-field>\n\n                    <mat-form-field appearance=\"outline\" floatLabel=\"always\" class=\"w-100-p\" >\n                        <mat-label>catégorie d'opérations</mat-label>\n                        <mat-select formControlName=\"operationTypeFamily\" placeholder=\"catégorie d'opérations\" [compareWith]=\"compareObjects\" >\n                            <mat-option *ngFor=\"let item of otDetail.operationTypeFamily.list\" [value]=\"item\">\n                                {{ item.label }}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n\n                </div>\n\n                </form> \n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation-type/operation-type-detail/operation-type-detail.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation-type/operation-type-detail/operation-type-detail.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto !important; }\n\n#product .header .product-image {\n  overflow: hidden;\n  width: 56px;\n  height: 56px;\n  border: 3px solid rgba(0, 0, 0, 0.12); }\n\n#product .header .product-image img {\n    height: 100%;\n    width: auto;\n    max-width: none; }\n\n#product .header .subtitle {\n  margin: 6px 0 0 0; }\n\n#product .content .mat-tab-group,\n#product .content .mat-tab-body-wrapper,\n#product .content .tab-content {\n  flex: 1 1 auto;\n  max-width: 100%; }\n\n#product .content .mat-tab-body-content {\n  display: flex; }\n\n#product .content .mat-tab-label {\n  height: 64px; }\n\n#product .content .product-image {\n  overflow: hidden;\n  width: 128px;\n  height: 128px;\n  margin-right: 16px;\n  margin-bottom: 16px;\n  border: 3px solid rgba(0, 0, 0, 0.12); }\n\n#product .content .product-image img {\n    height: 100%;\n    width: auto;\n    max-width: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcHBzL3JlZmVyZW50aWFsL29wZXJhdGlvbnMvb3BlcmF0aW9uLXR5cGUvb3BlcmF0aW9uLXR5cGUtZGV0YWlsL0M6XFxQcm9qZWN0c1xcQW5ndWxhclxcdWRlbXktYXBwLWZ1c2VcXEJ1ZGdldC5TUEEvc3JjXFxhcHBcXG1haW5cXGFwcHNcXHJlZmVyZW50aWFsXFxvcGVyYXRpb25zXFxvcGVyYXRpb24tdHlwZVxcb3BlcmF0aW9uLXR5cGUtZGV0YWlsXFxvcGVyYXRpb24tdHlwZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLDRCQUEyQixFQUMxQjs7QUFHTDtFQUtZLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsYUFBWTtFQUNaLHNDQUFxQyxFQU94Qzs7QUFmVDtJQVdnQixhQUFZO0lBQ1osWUFBVztJQUNYLGdCQUFlLEVBQ2xCOztBQWRiO0VBa0JZLGtCQUFpQixFQUNwQjs7QUFuQlQ7OztFQTJCWSxlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBN0JUO0VBZ0NZLGNBQWEsRUFDaEI7O0FBakNUO0VBb0NZLGFBQVksRUFDZjs7QUFyQ1Q7RUF3Q1ksaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixzQ0FBcUMsRUFPeEM7O0FBcERUO0lBZ0RnQixhQUFZO0lBQ1osWUFBVztJQUNYLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hcHBzL3JlZmVyZW50aWFsL29wZXJhdGlvbnMvb3BlcmF0aW9uLXR5cGUvb3BlcmF0aW9uLXR5cGUtZGV0YWlsL29wZXJhdGlvbi10eXBlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcblxyXG4jcHJvZHVjdCB7XHJcblxyXG4gICAgLmhlYWRlciB7XHJcblxyXG4gICAgICAgIC5wcm9kdWN0LWltYWdlIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgd2lkdGg6IDU2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN1YnRpdGxlIHtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHggMCAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuXHJcbiAgICAgICAgLm1hdC10YWItZ3JvdXAsXHJcbiAgICAgICAgLm1hdC10YWItYm9keS13cmFwcGVyLFxyXG4gICAgICAgIC50YWItY29udGVudHtcclxuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYXQtdGFiLWJvZHktY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWF0LXRhYi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9kdWN0LWltYWdlIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation-type/operation-type-detail/operation-type-detail.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation-type/operation-type-detail/operation-type-detail.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: OperationTypeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationTypeDetailComponent", function() { return OperationTypeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var app_main_ngxs_referential_operation_type_operation_type_detail_operation_type_detail_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type/operation-type-detail/operation-type-detail.state */ "./src/app/main/_ngxs/referential/operation-type/operation-type-detail/operation-type-detail.state.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_main_ngxs_referential_operation_type_operation_type_list_filter_operation_type_list_filter_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type/operation-type-list-filter/operation-type-list-filter.state */ "./src/app/main/_ngxs/referential/operation-type/operation-type-list-filter/operation-type-list-filter.state.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _operation_type_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../operation-type.service */ "./src/app/main/apps/referential/operations/operation-type/operation-type.service.ts");
/* harmony import */ var app_main_ngxs_referential_operation_type_operation_type_detail_operation_type_detail_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type/operation-type-detail/operation-type-detail.action */ "./src/app/main/_ngxs/referential/operation-type/operation-type-detail/operation-type-detail.action.ts");
/* harmony import */ var app_main_ngxs_referential_operation_type_operation_type_list_operation_type_list_action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type/operation-type-list/operation-type-list.action */ "./src/app/main/_ngxs/referential/operation-type/operation-type-list/operation-type-list.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var OperationTypeDetailComponent = /** @class */ (function () {
    function OperationTypeDetailComponent(_activatedRoute, _store, _formBuilder, _notificationService, _otService) {
        var _this = this;
        this._activatedRoute = _activatedRoute;
        this._store = _store;
        this._formBuilder = _formBuilder;
        this._notificationService = _notificationService;
        this._otService = _otService;
        this.firstLoad = true;
        this.otTableFilter$.subscribe(function (otTableFilter) {
            _this.filterOt = JSON.parse(JSON.stringify(otTableFilter.filters));
        });
        this.otDetail$.subscribe(function (otDetail) {
            if (otDetail.loadingInfo.loaded) {
                _this.otDetail = JSON.parse(JSON.stringify(otDetail.datas));
                if (_this.firstLoad) {
                    //creation du formulaire
                    _this.createForms();
                    _this.firstLoad = false;
                }
                _this.formLoaded = true;
            }
        });
    }
    OperationTypeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (routeParams) {
            _this.idOperationType = routeParams['idOperationType'] == 'new' ? -1 : routeParams['idOperationType'];
            _this._store.dispatch(new app_main_ngxs_referential_operation_type_operation_type_detail_operation_type_detail_action__WEBPACK_IMPORTED_MODULE_10__["LoadOtDetail"](_this.idOperationType));
        });
    };
    OperationTypeDetailComponent.prototype.ngOnDestroy = function () {
        this._store.dispatch(new app_main_ngxs_referential_operation_type_operation_type_detail_operation_type_detail_action__WEBPACK_IMPORTED_MODULE_10__["ClearOtDetail"]());
    };
    OperationTypeDetailComponent.prototype.createForms = function () {
        var _this = this;
        this.otDetailForm = this._formBuilder.group({
            label: [this.otDetail.label, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            operationTypeFamily: [this.otDetail.operationTypeFamily.selected, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
        });
        this.otDetailForm.valueChanges.subscribe(function (val) {
            _this.otDetail.label = val.label;
            _this.otDetail.operationTypeFamily.selected = val.operationTypeFamily;
            _this._store.dispatch(new app_main_ngxs_referential_operation_type_operation_type_detail_operation_type_detail_action__WEBPACK_IMPORTED_MODULE_10__["LoadOtDetailSuccess"](_this.otDetail));
        });
    };
    OperationTypeDetailComponent.prototype.saveOt = function () {
        var _this = this;
        this._otService.saveOtDetail(this.otDetail)
            .subscribe(function (resp) {
            if (resp) {
                _this._notificationService.success('Enregistrement effectué', "Le type d'op\u00E9ration est enregistr\u00E9");
                _this._store.dispatch(new app_main_ngxs_referential_operation_type_operation_type_list_operation_type_list_action__WEBPACK_IMPORTED_MODULE_11__["LoadOtTableDatas"](_this.filterOt.selected));
            }
            else {
                _this._notificationService.error('Echec de l\'enregistrement');
            }
        });
    };
    OperationTypeDetailComponent.prototype.compareObjects = function (o1, o2) {
        if (o1.label == o2.label && o1.id == o2.id)
            return true;
        else
            return false;
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(app_main_ngxs_referential_operation_type_operation_type_detail_operation_type_detail_state__WEBPACK_IMPORTED_MODULE_3__["OtDetailState"].get),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], OperationTypeDetailComponent.prototype, "otDetail$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(app_main_ngxs_referential_operation_type_operation_type_list_filter_operation_type_list_filter_state__WEBPACK_IMPORTED_MODULE_5__["OtTableFilterState"].get),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], OperationTypeDetailComponent.prototype, "otTableFilter$", void 0);
    OperationTypeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'operation-type-detail',
            template: __webpack_require__(/*! ./operation-type-detail.component.html */ "./src/app/main/apps/referential/operations/operation-type/operation-type-detail/operation-type-detail.component.html"),
            styles: [__webpack_require__(/*! ./operation-type-detail.component.scss */ "./src/app/main/apps/referential/operations/operation-type/operation-type-detail/operation-type-detail.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_8__["NotificationsService"],
            _operation_type_service__WEBPACK_IMPORTED_MODULE_9__["OtService"]])
    ], OperationTypeDetailComponent);
    return OperationTypeDetailComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation-type/operation-type-list/operation-type-list.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation-type/operation-type-list/operation-type-list.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n    \n    <mat-table class=\"mat-table\"\n        #table [dataSource]=\"dataSource\"\n        [@animateStagger]=\"{value:'50'}\"\n        matSort matSortActive=\"id\" matSortDirection=\"asc\" matSortDisableClear \n        (matSortChange)=\"onSortChangeEvent($event)\"\n    >\n\n        <!-- id -->\n        <ng-container matColumnDef=\"id\">\n            <mat-header-cell style=\"flex:0 0 70px;\" *matHeaderCellDef mat-sort-header>Id</mat-header-cell>\n            <mat-cell style=\"flex:0 0 70px;\" *matCellDef=\"let data\">\n                <p class=\"text-truncate\">{{data.id}}</p>\n            </mat-cell>\n        </ng-container>\n\n        <!-- OperationTypeFamily -->\n        <ng-container matColumnDef=\"operationTypeFamily\" >\n          <mat-header-cell style=\"flex: 0 0 30%;\" *matHeaderCellDef >\n              <div mat-sort-header >Catégorie opération</div>\n      \n              <div (click)=\"templateFor='col2'\" [matMenuTriggerFor]=\"menuOtf\"\n                  fxFlex fxLayoutAlign=\"end start\" style=\"cursor: pointer;\">\n                  <mat-icon color=\"warn\" *ngIf=\"hasFilterData('operationTypeFamily')\">filter_list</mat-icon>\n                  <mat-icon color=\"primary\" *ngIf=\"!hasFilterData('operationTypeFamily')\">filter_list</mat-icon>\n              </div>\n      \n              <mat-menu #menuOtf=\"matMenu\" [overlapTrigger]=\"false\">\n                <filter-movement *ngIf=\"templateFor==='col2' && filterOtf\"\n                    [movement]=\"filterOtf\"\n                    (applyFilterMovement)=\"applyFilterOtf($event)\"\n                >\n                </filter-movement>\n              </mat-menu>\n          </mat-header-cell>\n          <mat-cell style=\"flex: 0 0 30%;\" *matCellDef=\"let data\">\n              <p class=\"text-truncate\">{{data.operationTypeFamily.label}}</p>\n          </mat-cell>\n      </ng-container>\n\n        <!-- Label -->\n        <ng-container matColumnDef=\"label\" >\n            <mat-header-cell style=\"flex: 0 0 30%;\"  *matHeaderCellDef >\n                <div mat-sort-header >Libellé</div>\n                \n                <div (click)=\"templateFor='col3'\" [matMenuTriggerFor]=\"menuLabel\" \n                    style=\"cursor: pointer;\" fxFlex fxLayoutAlign=\"end start\"   >\n                    <mat-icon color=\"warn\" *ngIf=\"hasFilterData('label')\">filter_list</mat-icon>\n                    <mat-icon color=\"primary\" *ngIf=\"!hasFilterData('label')\">filter_list</mat-icon>\n                </div>\n                <mat-menu #menuLabel=\"matMenu\" [overlapTrigger]=\"false\">\n                  <filter-label *ngIf=\"templateFor==='col3' && filterOt\"\n                      [label]=\"filterOt.selected.label\" \n                      (applyLabelFilter)=\"applyFilterLabel($event)\"\n                    ></filter-label>\n                </mat-menu>\n            </mat-header-cell >\n            <mat-cell style=\"flex: 0 0 30%;\" *matCellDef=\"let data\">\n                <p class=\"text-truncate\">{{data.label}}</p>\n            </mat-cell>\n        </ng-container>\n\n        \n        \n        <!-- Delete--Detail -->\n        <!-- style=\"flex:0 0 25%;\" -->\n        <ng-container matColumnDef=\"buttonDelete\" >\n            <mat-header-cell style=\"flex:0 0 30%;\"  *matHeaderCellDef ></mat-header-cell>\n            <mat-cell style=\"flex:0 0 30%;justify-content: flex-end\"  *matCellDef=\"let data\">\n                <button *ngIf=\"!data.isMandatory\" matTooltip=\"Supprimer\" mat-icon-button (click)=\"delete(data)\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n                <button *ngIf=\"!data.isMandatory\" matTooltip=\"Détail\" mat-icon-button (click)=\"detail(data)\">\n                        <mat-icon>more_horiz</mat-icon>\n                    </button>\n            </mat-cell>\n        </ng-container> \n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky:true\"></mat-header-row>\n        \n        <mat-row \n            *cdkRowDef=\"let data; columns: displayedColumns;\"\n            matRipple\n            [@animate]=\"{value:'*',params:{y:'100%'}}\"\n            class=\"element-row\" \n        >\n        </mat-row>\n\n    </mat-table>\n\n    <div *ngIf=\"(otTable$ | async).loadingInfo.loading\"\n        class=\"h-96 w-100-p\"\n        fxLayout=\"column\"\n        fxLayoutAlign=\"center center\">\n        <mat-spinner diameter=\"40\" color=\"accent\" fxLayout=\"row\"></mat-spinner>\n        <div style=\"color:#4285F3\" fxLayout=\"row\">chargement...</div>\n    </div> \n\n    \n    <p class=\"empty-result\" \n        *ngIf=\"(otTable$ | async).loadingInfo.loaded \n            && (otTable$ | async).datas.length==0\"\n    >\n        Aucun résultat\n    </p>\n</div>\n\n<mat-paginator *ngIf=\"(otTableFilter$ | async).loadingInfo.loaded\"\n    (page)=\"onPageChangeEvent($event)\"\n    [length]=\"(otTableFilter$ | async).filters.selected.pagination.totalItems\" \n    [pageSize]=\"(otTableFilter$ | async).filters.selected.pagination.nbItemsPerPage\"\n    [pageSizeOptions]=\"[15, 100, 200]\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation-type/operation-type-list/operation-type-list.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation-type/operation-type-list/operation-type-list.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto !important;\n  max-height: calc(100% - 50px) !important; }\n\n.mat-paginator {\n  position: fixed !important;\n  background-color: transparent !important;\n  bottom: 0px;\n  right: 20px; }\n\n.mat-paginator .mat-paginator-container {\n    min-height: 50px !important;\n    max-height: 50px !important; }\n\n.mat-paginator .mat-paginator-page-size {\n    min-height: 50px !important;\n    max-height: 50px !important;\n    align-items: center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcHBzL3JlZmVyZW50aWFsL29wZXJhdGlvbnMvb3BlcmF0aW9uLXR5cGUvb3BlcmF0aW9uLXR5cGUtbGlzdC9DOlxcUHJvamVjdHNcXEFuZ3VsYXJcXHVkZW15LWFwcC1mdXNlXFxCdWRnZXQuU1BBL3NyY1xcYXBwXFxtYWluXFxhcHBzXFxyZWZlcmVudGlhbFxcb3BlcmF0aW9uc1xcb3BlcmF0aW9uLXR5cGVcXG9wZXJhdGlvbi10eXBlLWxpc3RcXG9wZXJhdGlvbi10eXBlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLDRCQUEyQjtFQUMzQix5Q0FBdUMsRUFDdEM7O0FBRUw7RUFDSSwyQkFBMEI7RUFDMUIseUNBQXdDO0VBQ3hDLFlBQVc7RUFDWCxZQUFXLEVBWWQ7O0FBaEJEO0lBT1EsNEJBQTJCO0lBQzNCLDRCQUEyQixFQUM5Qjs7QUFUTDtJQVlRLDRCQUEyQjtJQUMzQiw0QkFBMkI7SUFDM0IsK0JBQThCLEVBQ2pDIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hcHBzL3JlZmVyZW50aWFsL29wZXJhdGlvbnMvb3BlcmF0aW9uLXR5cGUvb3BlcmF0aW9uLXR5cGUtbGlzdC9vcGVyYXRpb24tdHlwZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDpjYWxjKDEwMCUgLSA1MHB4KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuLm1hdC1wYWdpbmF0b3Ige1xyXG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuXHJcbiAgICAubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation-type/operation-type-list/operation-type-list.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation-type/operation-type-list/operation-type-list.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: OperationTypeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationTypeListComponent", function() { return OperationTypeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_models_filters_operation_type_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/_models/filters/operation-type.filter */ "./src/app/main/_models/filters/operation-type.filter.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var app_main_ngxs_referential_operation_type_operation_type_list_filter_operation_type_list_filter_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type/operation-type-list-filter/operation-type-list-filter.state */ "./src/app/main/_ngxs/referential/operation-type/operation-type-list-filter/operation-type-list-filter.state.ts");
/* harmony import */ var app_main_ngxs_referential_operation_type_operation_type_list_operation_type_list_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type/operation-type-list/operation-type-list.state */ "./src/app/main/_ngxs/referential/operation-type/operation-type-list/operation-type-list.state.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _operation_type_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../operation-type.service */ "./src/app/main/apps/referential/operations/operation-type/operation-type.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var app_main_ngxs_referential_operation_type_operation_type_list_filter_operation_type_list_filter_action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type/operation-type-list-filter/operation-type-list-filter.action */ "./src/app/main/_ngxs/referential/operation-type/operation-type-list-filter/operation-type-list-filter.action.ts");
/* harmony import */ var app_main_ngxs_referential_operation_type_operation_type_list_operation_type_list_action__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type/operation-type-list/operation-type-list.action */ "./src/app/main/_ngxs/referential/operation-type/operation-type-list/operation-type-list.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var OperationTypeListComponent = /** @class */ (function () {
    function OperationTypeListComponent(_store, _dialog, _router, _otService, _notificationService) {
        var _this = this;
        this._store = _store;
        this._dialog = _dialog;
        this._router = _router;
        this._otService = _otService;
        this._notificationService = _notificationService;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"]();
        this.selectedIndex = 0;
        this.displayedColumns = ['id', 'operationTypeFamily', 'label', 'buttonDelete'];
        this.filterOtf = null;
        this.filterOt = new app_main_models_filters_operation_type_filter__WEBPACK_IMPORTED_MODULE_2__["FilterOtTable"]();
        this._store.dispatch(new app_main_ngxs_referential_operation_type_operation_type_list_filter_operation_type_list_filter_action__WEBPACK_IMPORTED_MODULE_12__["LoadOtTableFilter"](this.filterOt));
        this.otTable$.subscribe(function (otTable) {
            _this.dataSource.data = otTable.datas;
        });
    }
    OperationTypeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.otTableFilter$.subscribe(function (otTableFilter) {
            if (otTableFilter.loadingInfo.loaded) {
                _this.filterOt = otTableFilter.filters;
                _this.filterOtf = { list: otTableFilter.filters.otfs, selected: otTableFilter.filters.selected.otf };
            }
        });
    };
    // ngOnChanges(changes: SimpleChanges) {
    //   this.headerPanelIsVisible = changes.headerPanelIsVisible.currentValue;;
    // }
    OperationTypeListComponent.prototype.onPageChangeEvent = function (event) {
        this.filterOt.selected.pagination.currentPage = this.paginator.pageIndex;
        this.loadPage();
    };
    OperationTypeListComponent.prototype.onSortChangeEvent = function (event) {
        this.filterOt.selected.pagination.currentPage = 0;
        this.loadPage();
    };
    OperationTypeListComponent.prototype.loadPage = function () {
        this.filterOt.selected.pagination.nbItemsPerPage = this.paginator.pageSize;
        this.filterOt.selected.pagination.sortColumn = this.sort.active;
        this.filterOt.selected.pagination.sortDirection = this.sort.direction;
        this._store.dispatch(new app_main_ngxs_referential_operation_type_operation_type_list_filter_operation_type_list_filter_action__WEBPACK_IMPORTED_MODULE_12__["ChangeOtTableFilter"](this.filterOt.selected));
    };
    OperationTypeListComponent.prototype.hasFilterData = function (filter) {
        if (!this.filterOt)
            return false;
        if (filter == 'label')
            return this.filterOt.selected != null && this.filterOt.selected.label != null && this.filterOt.selected.label != '';
        if (filter == 'operationTypeFamily')
            return this.filterOt.selected != null && this.filterOt.selected.otf != null;
    };
    OperationTypeListComponent.prototype.delete = function (data) {
        var _this = this;
        this.confirmDialogRef = this._dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Etes vous sûr de supprimer ce type d\'opération? \nToutes les opérations associées seront supprimées';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._otService.deleteOtDetail(data.id)
                    .subscribe(function (resp) {
                    _this._store.dispatch(new app_main_ngxs_referential_operation_type_operation_type_list_operation_type_list_action__WEBPACK_IMPORTED_MODULE_13__["LoadOtTableDatas"](_this.filterOt.selected));
                    _this._notificationService.success('Suppression réussi', 'Le type d\'opération est supprimé');
                }, function (error) {
                    _this._notificationService.error('Echec suppression', error);
                });
            }
            _this.confirmDialogRef = null;
        });
    };
    OperationTypeListComponent.prototype.detail = function (data) {
        this._router.navigate(["/apps/referential/operations/operation-types/" + data.id]);
    };
    OperationTypeListComponent.prototype.applyFilterLabel = function (data) {
        this.filterOt.selected.label = data;
        this.applyFilter();
    };
    OperationTypeListComponent.prototype.applyFilterOtf = function (data) {
        this.filterOt.selected.otf = data;
        this.applyFilter();
    };
    OperationTypeListComponent.prototype.applyFilter = function () {
        this.filterOt.selected.pagination.currentPage = 0;
        this._store.dispatch(new app_main_ngxs_referential_operation_type_operation_type_list_filter_operation_type_list_filter_action__WEBPACK_IMPORTED_MODULE_12__["LoadOtTableFilter"](this.filterOt));
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(app_main_ngxs_referential_operation_type_operation_type_list_filter_operation_type_list_filter_state__WEBPACK_IMPORTED_MODULE_4__["OtTableFilterState"].get),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], OperationTypeListComponent.prototype, "otTableFilter$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(app_main_ngxs_referential_operation_type_operation_type_list_operation_type_list_state__WEBPACK_IMPORTED_MODULE_5__["OtTableState"].get),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], OperationTypeListComponent.prototype, "otTable$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
    ], OperationTypeListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
    ], OperationTypeListComponent.prototype, "sort", void 0);
    OperationTypeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'operation-type-list',
            template: __webpack_require__(/*! ./operation-type-list.component.html */ "./src/app/main/apps/referential/operations/operation-type/operation-type-list/operation-type-list.component.html"),
            styles: [__webpack_require__(/*! ./operation-type-list.component.scss */ "./src/app/main/apps/referential/operations/operation-type/operation-type-list/operation-type-list.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _operation_type_service__WEBPACK_IMPORTED_MODULE_10__["OtService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_11__["NotificationsService"]])
    ], OperationTypeListComponent);
    return OperationTypeListComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation-type/operation-type.service.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation-type/operation-type.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: OtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtService", function() { return OtService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OtService = /** @class */ (function () {
    function OtService(_http) {
        this._http = _http;
        this.baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.userForGroup = this.user != null ? { id: this.user.id, idUserGroup: this.user.idUserGroup } : null;
    }
    OtService.prototype.getOtTable = function (filter) {
        filter.user = this.userForGroup;
        return this._http
            .post(this.baseUrl + "referential/operation-types/filter", filter)
            .map(function (response) {
            return response;
        });
    };
    OtService.prototype.getOtTableFilter = function (filter) {
        filter.user = this.userForGroup;
        return this._http
            .post(this.baseUrl + "referential/operation-types/table-filter", filter)
            .map(function (response) {
            return response;
        });
    };
    OtService.prototype.getOtDetail = function (idOperationType) {
        return this._http
            .get(this.baseUrl + "referential/operation-types/" + idOperationType + "/user-groups/" + this.userForGroup.idUserGroup + "/detail")
            .map(function (response) { return response; });
    };
    OtService.prototype.saveOtDetail = function (otDetail) {
        otDetail.user = this.userForGroup;
        return this._http
            .post(this.baseUrl + "referential/operation-types/save", otDetail)
            .map(function (response) {
            return response;
        });
    };
    OtService.prototype.deleteOtDetail = function (idOt) {
        return this._http
            .delete(this.baseUrl + "referential/operation-types/" + idOt + "/delete")
            .map(function (response) {
            return response;
        });
    };
    OtService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OtService);
    return OtService;
}());



/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation/operation-detail/operation-detail.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation/operation-detail/operation-detail.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"product\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n  <!-- TOP BACKGROUND -->\n  <div class=\"top-bg accent\"></div>\n  <!-- / TOP BACKGROUND -->\n\n  <!-- CENTER -->\n  <div class=\"center\">\n\n      <!-- HEADER -->\n      <div class=\"header accent\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n          <!-- APP TITLE -->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n              <!-- (click)=\"movePrevious()\" -->\n              <button class=\"mr-0 mr-sm-16\" mat-icon-button \n                  [routerLink]=\"['/apps/referential/operations/operations']\">\n                  <mat-icon>arrow_back</mat-icon>\n              </button>\n\n              <div fxLayout=\"column\" fxLayoutAlign=\"start start\"\n                   *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\n                  <div class=\"h2\" *ngIf=\"formLoaded && operationDetail && idOperation!=-1\" >\n                      {{operationDetail.label}}\n                  </div>\n                  <div class=\"h2\" *ngIf=\"formLoaded && operationDetail && idOperation==-1\" >\n                          Nouvelle opération\n                  </div>\n                  <div class=\"subtitle secondary-text\">\n                      <span>Détail de l'opération</span>\n                  </div>\n              </div>\n          </div>\n          <!-- / APP TITLE -->\n          <button mat-raised-button *ngIf=\"formLoaded && operationDetail\"\n              class=\"save-product-button mat-white-bg mt-16 mt-sm-0\"\n              [disabled]= \"operationDetailForm.invalid || operationDetailForm.pristine\"\n              (click)=\"saveOt()\"\n          >\n              <span>ENREGISTRER</span>\n          </button>\n      </div>\n      <!-- / HEADER -->\n\n      <!-- CONTENT CARD -->\n      <div class=\"content-card white\">\n\n          <form *ngIf=\"formLoaded && operationDetail\" \n              name=\"operationDetailForm\" \n              [formGroup]=\"operationDetailForm\" \n              class=\"product w-100-p\" \n              fxLayout=\"column\" fxFlex\n          >\n              <div class=\"example-container tab-content p-24\" >\n\n                  <mat-form-field appearance=\"outline\" floatLabel=\"always\" class=\"w-100-p\">\n                      <mat-label>Libellé type opération</mat-label>\n                      <input matInput\n                          name=\"label\"\n                          formControlName=\"label\"\n                          placeholder=\"Libellé opération\">\n                  </mat-form-field>\n\n                  <mat-form-field appearance=\"outline\" floatLabel=\"always\" class=\"w-100-p\" >\n                      <mat-label>Méthode opérations</mat-label>\n                      <mat-select formControlName=\"operationMethod\" placeholder=\"Méthode opérations\" [compareWith]=\"compareObjects\" >\n                          <mat-option *ngFor=\"let item of operationDetail.operationMethod.list\" [value]=\"item\">\n                              {{ item.label }}\n                          </mat-option>\n                      </mat-select>\n                  </mat-form-field>\n\n                  <mat-form-field appearance=\"outline\" floatLabel=\"always\" class=\"w-100-p\" >\n                    <mat-label>Type opérations</mat-label>\n                    <mat-select class=\"mini-select\" \n                      formControlName=\"operationType\" \n                      [compareWith]=\"compareObjects\" \n                      placeholder=\"Type opérations\" >\n                    \n                    <mat-optgroup *ngFor=\"let group of operationDetail.operationType.list\" [label]=\"group.label\">\n                      <mat-option *ngFor=\"let item of group.selects\" [value]=\"item\">\n                        {{ item.label }}\n                      </mat-option>\n                    </mat-optgroup>\n                  </mat-select>\n\n                    <!-- <mat-select formControlName=\"operationType\" placeholder=\"Type opérations\" [compareWith]=\"compareObjects\" >\n                        <mat-option *ngFor=\"let item of operationDetail.operationType.list\" [value]=\"item\">\n                            {{ item.label }}\n                        </mat-option>\n                    </mat-select> -->\n                </mat-form-field>\n\n              </div>\n\n              </form> \n\n      </div>\n      <!-- / CONTENT CARD -->\n\n  </div>\n  <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation/operation-detail/operation-detail.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation/operation-detail/operation-detail.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto !important; }\n\n#product .header .product-image {\n  overflow: hidden;\n  width: 56px;\n  height: 56px;\n  border: 3px solid rgba(0, 0, 0, 0.12); }\n\n#product .header .product-image img {\n    height: 100%;\n    width: auto;\n    max-width: none; }\n\n#product .header .subtitle {\n  margin: 6px 0 0 0; }\n\n#product .content .mat-tab-group,\n#product .content .mat-tab-body-wrapper,\n#product .content .tab-content {\n  flex: 1 1 auto;\n  max-width: 100%; }\n\n#product .content .mat-tab-body-content {\n  display: flex; }\n\n#product .content .mat-tab-label {\n  height: 64px; }\n\n#product .content .product-image {\n  overflow: hidden;\n  width: 128px;\n  height: 128px;\n  margin-right: 16px;\n  margin-bottom: 16px;\n  border: 3px solid rgba(0, 0, 0, 0.12); }\n\n#product .content .product-image img {\n    height: 100%;\n    width: auto;\n    max-width: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcHBzL3JlZmVyZW50aWFsL29wZXJhdGlvbnMvb3BlcmF0aW9uL29wZXJhdGlvbi1kZXRhaWwvQzpcXFByb2plY3RzXFxBbmd1bGFyXFx1ZGVteS1hcHAtZnVzZVxcQnVkZ2V0LlNQQS9zcmNcXGFwcFxcbWFpblxcYXBwc1xccmVmZXJlbnRpYWxcXG9wZXJhdGlvbnNcXG9wZXJhdGlvblxcb3BlcmF0aW9uLWRldGFpbFxcb3BlcmF0aW9uLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsNEJBQTJCLEVBQzFCOztBQUdMO0VBS1ksaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxhQUFZO0VBQ1osc0NBQXFDLEVBT3hDOztBQWZUO0lBV2dCLGFBQVk7SUFDWixZQUFXO0lBQ1gsZ0JBQWUsRUFDbEI7O0FBZGI7RUFrQlksa0JBQWlCLEVBQ3BCOztBQW5CVDs7O0VBMkJZLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUE3QlQ7RUFnQ1ksY0FBYSxFQUNoQjs7QUFqQ1Q7RUFvQ1ksYUFBWSxFQUNmOztBQXJDVDtFQXdDWSxpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLHNDQUFxQyxFQU94Qzs7QUFwRFQ7SUFnRGdCLGFBQVk7SUFDWixZQUFXO0lBQ1gsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FwcHMvcmVmZXJlbnRpYWwvb3BlcmF0aW9ucy9vcGVyYXRpb24vb3BlcmF0aW9uLWRldGFpbC9vcGVyYXRpb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuXHJcbiNwcm9kdWN0IHtcclxuXHJcbiAgICAuaGVhZGVyIHtcclxuXHJcbiAgICAgICAgLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB3aWR0aDogNTZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3VidGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweCAwIDAgMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG5cclxuICAgICAgICAubWF0LXRhYi1ncm91cCxcclxuICAgICAgICAubWF0LXRhYi1ib2R5LXdyYXBwZXIsXHJcbiAgICAgICAgLnRhYi1jb250ZW50e1xyXG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hdC10YWItYm9keS1jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYXQtdGFiLWxhYmVsIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB3aWR0aDogMTI4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation/operation-detail/operation-detail.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation/operation-detail/operation-detail.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: OperationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationDetailComponent", function() { return OperationDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_ngxs_referential_operation_operation_detail_operation_detail_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/_ngxs/referential/operation/operation-detail/operation-detail.state */ "./src/app/main/_ngxs/referential/operation/operation-detail/operation-detail.state.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_main_ngxs_referential_operation_operation_list_filter_operation_list_filter_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.state */ "./src/app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.state.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var app_main_services_Referential_operation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/_services/Referential/operation.service */ "./src/app/main/_services/Referential/operation.service.ts");
/* harmony import */ var app_main_ngxs_referential_operation_operation_detail_operation_detail_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/_ngxs/referential/operation/operation-detail/operation-detail.action */ "./src/app/main/_ngxs/referential/operation/operation-detail/operation-detail.action.ts");
/* harmony import */ var app_main_ngxs_referential_operation_operation_list_operation_list_action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/_ngxs/referential/operation/operation-list/operation-list.action */ "./src/app/main/_ngxs/referential/operation/operation-list/operation-list.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var OperationDetailComponent = /** @class */ (function () {
    function OperationDetailComponent(_activatedRoute, _store, _formBuilder, _notificationService, _operationService) {
        var _this = this;
        this._activatedRoute = _activatedRoute;
        this._store = _store;
        this._formBuilder = _formBuilder;
        this._notificationService = _notificationService;
        this._operationService = _operationService;
        this.firstLoad = true;
        this.operationTableFilter$.subscribe(function (operationTableFilter) {
            _this.filterOperation = JSON.parse(JSON.stringify(operationTableFilter.filters));
        });
        this.operationDetail$.subscribe(function (operationDetail) {
            if (operationDetail.loadingInfo.loaded) {
                _this.operationDetail = JSON.parse(JSON.stringify(operationDetail.datas));
                if (_this.firstLoad) {
                    //creation du formulaire
                    _this.createForms();
                    _this.firstLoad = false;
                }
                _this.formLoaded = true;
            }
        });
    }
    OperationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (routeParams) {
            _this.idOperation = routeParams['idOperation'] == 'new' ? -1 : routeParams['idOperation'];
            _this._store.dispatch(new app_main_ngxs_referential_operation_operation_detail_operation_detail_action__WEBPACK_IMPORTED_MODULE_10__["LoadOperationForDetail"](_this.idOperation));
        });
    };
    OperationDetailComponent.prototype.ngOnDestroy = function () {
        this._store.dispatch(new app_main_ngxs_referential_operation_operation_detail_operation_detail_action__WEBPACK_IMPORTED_MODULE_10__["ClearOperationForDetail"]());
    };
    OperationDetailComponent.prototype.createForms = function () {
        var _this = this;
        this.operationDetailForm = this._formBuilder.group({
            label: [this.operationDetail.label, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            operationMethod: [this.operationDetail.operationMethod.selected, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            operationType: [this.operationDetail.operationType.selected, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
        this.operationDetailForm.valueChanges.subscribe(function (val) {
            _this.operationDetail.label = val.label;
            _this.operationDetail.operationMethod.selected = val.operationMethod;
            _this.operationDetail.operationType.selected = val.operationType;
            _this._store.dispatch(new app_main_ngxs_referential_operation_operation_detail_operation_detail_action__WEBPACK_IMPORTED_MODULE_10__["LoadOperationForDetailSuccess"](_this.operationDetail));
        });
    };
    OperationDetailComponent.prototype.saveOt = function () {
        var _this = this;
        this._operationService.saveDetail(this.operationDetail)
            .subscribe(function (resp) {
            if (resp) {
                _this._notificationService.success('Enregistrement effectué', "L'op\u00E9ration est enregistr\u00E9e");
                _this._store.dispatch(new app_main_ngxs_referential_operation_operation_list_operation_list_action__WEBPACK_IMPORTED_MODULE_11__["LoadOperationTableDatas"](_this.filterOperation.selected));
            }
            else {
                _this._notificationService.error('Echec de l\'enregistrement');
            }
        });
    };
    OperationDetailComponent.prototype.compareObjects = function (o1, o2) {
        if (o1.label == o2.label && o1.id == o2.id)
            return true;
        else
            return false;
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Select"])(app_main_ngxs_referential_operation_operation_detail_operation_detail_state__WEBPACK_IMPORTED_MODULE_2__["OperationForDetailState"].get),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], OperationDetailComponent.prototype, "operationDetail$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Select"])(app_main_ngxs_referential_operation_operation_list_filter_operation_list_filter_state__WEBPACK_IMPORTED_MODULE_4__["OperationTableFilterState"].get),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], OperationDetailComponent.prototype, "operationTableFilter$", void 0);
    OperationDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'operation-detail',
            template: __webpack_require__(/*! ./operation-detail.component.html */ "./src/app/main/apps/referential/operations/operation/operation-detail/operation-detail.component.html"),
            styles: [__webpack_require__(/*! ./operation-detail.component.scss */ "./src/app/main/apps/referential/operations/operation/operation-detail/operation-detail.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Store"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_8__["NotificationsService"],
            app_main_services_Referential_operation_service__WEBPACK_IMPORTED_MODULE_9__["OperationService"]])
    ], OperationDetailComponent);
    return OperationDetailComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation/operation-list/operation-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation/operation-list/operation-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n    \n  <mat-table class=\"mat-table\"\n      #table [dataSource]=\"dataSource\"\n      [@animateStagger]=\"{value:'50'}\"\n      matSort matSortActive=\"id\" matSortDirection=\"asc\" matSortDisableClear \n      (matSortChange)=\"onSortChangeEvent($event)\"\n  >\n\n      <!-- id -->\n      <ng-container matColumnDef=\"id\">\n          <mat-header-cell style=\"flex:0 0 70px;\" *matHeaderCellDef mat-sort-header>Id</mat-header-cell>\n          <mat-cell style=\"flex:0 0 70px;\" *matCellDef=\"let data\">\n              <p class=\"text-truncate\">{{data.id}}</p>\n          </mat-cell>\n      </ng-container>\n\n      <!-- OperationMethod -->\n      <ng-container matColumnDef=\"operationMethod\" >\n        <mat-header-cell style=\"flex: 0 0 20%;\" *matHeaderCellDef >\n            <div mat-sort-header >Méthode d'opération</div>\n    \n            <div (click)=\"templateFor='col2'\" [matMenuTriggerFor]=\"menuOperationMethod\"\n                fxFlex fxLayoutAlign=\"end start\" style=\"cursor: pointer;\">\n                <mat-icon color=\"warn\" *ngIf=\"hasFilterData('operationMethod')\">filter_list</mat-icon>\n                <mat-icon color=\"primary\" *ngIf=\"!hasFilterData('operationMethod')\">filter_list</mat-icon>\n            </div>\n    \n            <mat-menu #menuOperationMethod=\"matMenu\" [overlapTrigger]=\"false\">\n              <filter-combo-multiple *ngIf=\"templateFor==='col2' && filterOperationMethod\"\n                  [filterComboMultiple]=\"filterOperationMethod\"\n                  (applyFilterComboMultiple)=\"applyFilterOperationMethod($event)\"\n              >\n              </filter-combo-multiple>\n            </mat-menu>\n        </mat-header-cell>\n        <mat-cell style=\"flex: 0 0 20%;\" *matCellDef=\"let data\">\n            <p class=\"text-truncate\">{{data.operationMethod.label}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Operation Type -->\n    <ng-container matColumnDef=\"operationType\" >\n        <mat-header-cell style=\"flex: 0 0 20%;\" *matHeaderCellDef >\n            <div mat-sort-header >Type d'opération</div>\n    \n            <div (click)=\"templateFor='col2'\" [matMenuTriggerFor]=\"menuOperationType\"\n                fxFlex fxLayoutAlign=\"end start\" style=\"cursor: pointer;\">\n                <mat-icon color=\"warn\" *ngIf=\"hasFilterData('operationType')\">filter_list</mat-icon>\n                <mat-icon color=\"primary\" *ngIf=\"!hasFilterData('operationType')\">filter_list</mat-icon>\n            </div>\n    \n            <mat-menu #menuOperationType=\"matMenu\" [overlapTrigger]=\"false\">\n              <filter-combo-multiple-group *ngIf=\"templateFor==='col2' && filterOperationMethod\"\n                  [filterComboMultipleGroup]=\"filterOperationType\"\n                  (applyFilterComboMultipleGroup)=\"applyFilterOperationType($event)\"\n              >\n              </filter-combo-multiple-group>\n            </mat-menu>\n        </mat-header-cell>\n        <mat-cell style=\"flex: 0 0 20%;\" *matCellDef=\"let data\">\n            <p class=\"text-truncate\">{{data.operationType.label}}</p>\n        </mat-cell>\n    </ng-container>\n\n\n    <!-- Label -->\n    <ng-container matColumnDef=\"label\" >\n        <mat-header-cell style=\"flex: 0 0 20%;\"  *matHeaderCellDef >\n            <div mat-sort-header >Libellé</div>\n            \n            <div (click)=\"templateFor='col3'\" [matMenuTriggerFor]=\"menuLabel\" \n                style=\"cursor: pointer;\" fxFlex fxLayoutAlign=\"end start\"   >\n                <mat-icon color=\"warn\" *ngIf=\"hasFilterData('label')\">filter_list</mat-icon>\n                <mat-icon color=\"primary\" *ngIf=\"!hasFilterData('label')\">filter_list</mat-icon>\n            </div>\n            <mat-menu #menuLabel=\"matMenu\" [overlapTrigger]=\"false\">\n              <filter-label *ngIf=\"templateFor==='col3' && filterOperation\"\n                  [label]=\"filterOperation.selected.label\" \n                  (applyLabelFilter)=\"applyFilterLabel($event)\"\n                ></filter-label>\n            </mat-menu>\n        </mat-header-cell >\n        <mat-cell style=\"flex: 0 0 20%;\" *matCellDef=\"let data\">\n            <p class=\"text-truncate\">{{data.label}}</p>\n        </mat-cell>\n    </ng-container>\n\n      \n      \n    <!-- Delete--Detail -->\n    <!-- style=\"flex:0 0 25%;\" -->\n    <ng-container matColumnDef=\"buttonDelete\" >\n        <mat-header-cell style=\"flex:0 0 25%;\"  *matHeaderCellDef ></mat-header-cell>\n        <mat-cell style=\"flex:0 0 30%;justify-content: flex-end\"  *matCellDef=\"let data\">\n            <button *ngIf=\"!data.isMandatory\" matTooltip=\"Supprimer\" mat-icon-button (click)=\"delete(data)\">\n                <mat-icon>delete</mat-icon>\n            </button>\n            <button *ngIf=\"!data.isMandatory\" matTooltip=\"Détail\" mat-icon-button (click)=\"detail(data)\">\n                    <mat-icon>more_horiz</mat-icon>\n                </button>\n        </mat-cell>\n    </ng-container> \n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky:true\"></mat-header-row>\n    \n    <mat-row \n        *cdkRowDef=\"let data; columns: displayedColumns;\"\n        matRipple\n        [@animate]=\"{value:'*',params:{y:'100%'}}\"\n        class=\"element-row\" \n    >\n    </mat-row>\n\n  </mat-table>\n\n  <div *ngIf=\"(operationTable$ | async).loadingInfo.loading\"\n      class=\"h-96 w-100-p\"\n      fxLayout=\"column\"\n      fxLayoutAlign=\"center center\">\n      <mat-spinner diameter=\"40\" color=\"accent\" fxLayout=\"row\"></mat-spinner>\n      <div style=\"color:#4285F3\" fxLayout=\"row\">chargement...</div>\n  </div> \n\n  \n  <p class=\"empty-result\" \n      *ngIf=\"(operationTable$ | async).loadingInfo.loaded \n          && (operationTable$ | async).datas.length==0\"\n  >\n      Aucun résultat\n  </p>\n</div>\n\n<mat-paginator *ngIf=\"(operationTableFilter$ | async).loadingInfo.loaded\"\n  (page)=\"onPageChangeEvent($event)\"\n  [length]=\"(operationTableFilter$ | async).filters.selected.pagination.totalItems\" \n  [pageSize]=\"(operationTableFilter$ | async).filters.selected.pagination.nbItemsPerPage\"\n  [pageSizeOptions]=\"[15, 100, 200]\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation/operation-list/operation-list.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation/operation-list/operation-list.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto !important;\n  max-height: calc(100% - 50px) !important; }\n\n.mat-paginator {\n  position: fixed !important;\n  background-color: transparent !important;\n  bottom: 0px;\n  right: 20px; }\n\n.mat-paginator .mat-paginator-container {\n    min-height: 50px !important;\n    max-height: 50px !important; }\n\n.mat-paginator .mat-paginator-page-size {\n    min-height: 50px !important;\n    max-height: 50px !important;\n    align-items: center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcHBzL3JlZmVyZW50aWFsL29wZXJhdGlvbnMvb3BlcmF0aW9uL29wZXJhdGlvbi1saXN0L0M6XFxQcm9qZWN0c1xcQW5ndWxhclxcdWRlbXktYXBwLWZ1c2VcXEJ1ZGdldC5TUEEvc3JjXFxhcHBcXG1haW5cXGFwcHNcXHJlZmVyZW50aWFsXFxvcGVyYXRpb25zXFxvcGVyYXRpb25cXG9wZXJhdGlvbi1saXN0XFxvcGVyYXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsNEJBQTJCO0VBQzNCLHlDQUF1QyxFQUN0Qzs7QUFFSDtFQUNFLDJCQUEwQjtFQUMxQix5Q0FBd0M7RUFDeEMsWUFBVztFQUNYLFlBQVcsRUFZWjs7QUFoQkQ7SUFPTSw0QkFBMkI7SUFDM0IsNEJBQTJCLEVBQzlCOztBQVRIO0lBWU0sNEJBQTJCO0lBQzNCLDRCQUEyQjtJQUMzQiwrQkFBOEIsRUFDakMiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FwcHMvcmVmZXJlbnRpYWwvb3BlcmF0aW9ucy9vcGVyYXRpb24vb3BlcmF0aW9uLWxpc3Qvb3BlcmF0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgbWF4LWhlaWdodDpjYWxjKDEwMCUgLSA1MHB4KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi5tYXQtcGFnaW5hdG9yIHtcclxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG5cclxuICAubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xyXG4gICAgICBtaW4taGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIHtcclxuICAgICAgbWluLWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXgtaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main/apps/referential/operations/operation/operation-list/operation-list.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operation/operation-list/operation-list.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: OperationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationListComponent", function() { return OperationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_main_ngxs_referential_operation_operation_list_operation_list_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/main/_ngxs/referential/operation/operation-list/operation-list.action */ "./src/app/main/_ngxs/referential/operation/operation-list/operation-list.action.ts");
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var app_main_ngxs_referential_operation_operation_list_filter_operation_list_filter_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.action */ "./src/app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.action.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var app_main_ngxs_referential_operation_operation_list_filter_operation_list_filter_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.state */ "./src/app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.state.ts");
/* harmony import */ var app_main_ngxs_referential_operation_operation_list_operation_list_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/_ngxs/referential/operation/operation-list/operation-list.state */ "./src/app/main/_ngxs/referential/operation/operation-list/operation-list.state.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_main_models_filters_operation_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/_models/filters/operation.filter */ "./src/app/main/_models/filters/operation.filter.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_main_services_Referential_operation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/_services/Referential/operation.service */ "./src/app/main/_services/Referential/operation.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var OperationListComponent = /** @class */ (function () {
    function OperationListComponent(_store, _dialog, _router, _operationService, _notificationService) {
        var _this = this;
        this._store = _store;
        this._dialog = _dialog;
        this._router = _router;
        this._operationService = _operationService;
        this._notificationService = _notificationService;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"]();
        this.selectedIndex = 0;
        this.displayedColumns = ['id', 'operationMethod', 'operationType', 'label', 'buttonDelete'];
        this.filterOperationMethod = { placeholder: 'Méthode d\'opérations', combos: null };
        this.filterOperationType = { placeholder: 'Type d\'opérations', combos: null };
        this.filterOperation = new app_main_models_filters_operation_filter__WEBPACK_IMPORTED_MODULE_8__["FilterOperationTable"]();
        this._store.dispatch(new app_main_ngxs_referential_operation_operation_list_filter_operation_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["LoadOperationTableFilter"](this.filterOperation));
        this.operationTable$.subscribe(function (operationTable) {
            _this.dataSource.data = operationTable.datas;
        });
    }
    OperationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.operationTableFilter$.subscribe(function (operationTableFilter) {
            if (operationTableFilter.loadingInfo.loaded) {
                _this.filterOperation = operationTableFilter.filters;
                _this.filterOperationType.combos = { list: operationTableFilter.filters.operationTypes, listSelected: operationTableFilter.filters.selected.operationTypes };
                _this.filterOperationMethod.combos = { list: operationTableFilter.filters.operationMethods, listSelected: operationTableFilter.filters.selected.operationMethods };
            }
        });
    };
    // ngOnChanges(changes: SimpleChanges) {
    //   this.headerPanelIsVisible = changes.headerPanelIsVisible.currentValue;;
    // }
    OperationListComponent.prototype.onPageChangeEvent = function (event) {
        this.filterOperation.selected.pagination.currentPage = this.paginator.pageIndex;
        this.loadPage();
    };
    OperationListComponent.prototype.onSortChangeEvent = function (event) {
        this.filterOperation.selected.pagination.currentPage = 0;
        this.loadPage();
    };
    OperationListComponent.prototype.loadPage = function () {
        this.filterOperation.selected.pagination.nbItemsPerPage = this.paginator.pageSize;
        this.filterOperation.selected.pagination.sortColumn = this.sort.active;
        this.filterOperation.selected.pagination.sortDirection = this.sort.direction;
        this._store.dispatch(new app_main_ngxs_referential_operation_operation_list_filter_operation_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["ChangeOperationTableFilter"](this.filterOperation.selected));
    };
    OperationListComponent.prototype.hasFilterData = function (filter) {
        if (!this.filterOperation)
            return false;
        if (filter == 'label')
            return this.filterOperation.selected != null && this.filterOperation.selected.label != null && this.filterOperation.selected.label != '';
        if (filter == 'operationMethod')
            return this.filterOperationMethod.combos != null && this.filterOperationMethod.combos.listSelected && this.filterOperationMethod.combos.listSelected.length > 0;
        if (filter == 'operationType')
            return this.filterOperationType.combos != null && this.filterOperationType.combos.listSelected && this.filterOperationType.combos.listSelected.length > 0;
    };
    OperationListComponent.prototype.delete = function (data) {
        var _this = this;
        this.confirmDialogRef = this._dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Etes vous sûr de supprimer cette opération?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._operationService.deleteDetail(data.id)
                    .subscribe(function (resp) {
                    _this._store.dispatch(new app_main_ngxs_referential_operation_operation_list_operation_list_action__WEBPACK_IMPORTED_MODULE_1__["LoadOperationTableDatas"](_this.filterOperation.selected));
                    _this._notificationService.success('Suppression réussi', 'L\'opération est supprimée');
                }, function (error) {
                    _this._notificationService.error('Echec suppression', error);
                });
            }
            _this.confirmDialogRef = null;
        });
    };
    OperationListComponent.prototype.detail = function (data) {
        this._router.navigate(["/apps/referential/operations/operations/" + data.id]);
    };
    OperationListComponent.prototype.applyFilterLabel = function (data) {
        this.filterOperation.selected.label = data;
        this.applyFilter();
    };
    OperationListComponent.prototype.applyFilterOperationType = function (data) {
        this.filterOperation.selected.operationTypes = data;
        this.applyFilter();
    };
    OperationListComponent.prototype.applyFilterOperationMethod = function (data) {
        this.filterOperation.selected.operationMethods = data;
        this.applyFilter();
    };
    OperationListComponent.prototype.applyFilter = function () {
        this.filterOperation.selected.pagination.currentPage = 0;
        this._store.dispatch(new app_main_ngxs_referential_operation_operation_list_filter_operation_list_filter_action__WEBPACK_IMPORTED_MODULE_3__["LoadOperationTableFilter"](this.filterOperation));
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(app_main_ngxs_referential_operation_operation_list_filter_operation_list_filter_state__WEBPACK_IMPORTED_MODULE_5__["OperationTableFilterState"].get),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"])
    ], OperationListComponent.prototype, "operationTableFilter$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(app_main_ngxs_referential_operation_operation_list_operation_list_state__WEBPACK_IMPORTED_MODULE_6__["OperationTableState"].get),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"])
    ], OperationListComponent.prototype, "operationTable$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"])
    ], OperationListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSort"])
    ], OperationListComponent.prototype, "sort", void 0);
    OperationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'operation-list',
            template: __webpack_require__(/*! ./operation-list.component.html */ "./src/app/main/apps/referential/operations/operation/operation-list/operation-list.component.html"),
            styles: [__webpack_require__(/*! ./operation-list.component.scss */ "./src/app/main/apps/referential/operations/operation/operation-list/operation-list.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_13__["fuseAnimations"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            app_main_services_Referential_operation_service__WEBPACK_IMPORTED_MODULE_11__["OperationService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_12__["NotificationsService"]])
    ], OperationListComponent);
    return OperationListComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/referential/operations/operations-main-tab/operations-main-tab.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operations-main-tab/operations-main-tab.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group \n    \n    [selectedIndex]=\"selectedIndex\"\n    (selectedTabChange)=\"onTabChanged($event)\"\n>\n    <mat-tab *ngFor=\"let operationField of operationFields;index as i\" [label]=\"operationField.label\">\n      <ng-template mat-tab-label>\n          {{operationField.label}}\n      </ng-template>\n\n      <operation-type-family-list *ngIf=\"selectedIndex == 0 && selectedIndex == i\"></operation-type-family-list>\n      <operation-type-list  *ngIf=\"selectedIndex == 1 && selectedIndex == i\"></operation-type-list>\n      <operation-list  *ngIf=\"selectedIndex == 2 && selectedIndex == i\"></operation-list>\n    </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/main/apps/referential/operations/operations-main-tab/operations-main-tab.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operations-main-tab/operations-main-tab.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab-body-content {\n  overflow: hidden !important; }\n\n.mat-tab-group {\n  height: 100% !important; }\n\n.mat-tab-group .mat-tab-body-wrapper {\n    height: 100% !important; }\n\n.mat-tab-group .mat-tab-label {\n    background-color: #FFFFFF !important; }\n\n.mat-tab-group .mat-tab-label-container {\n    padding: 0 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcHBzL3JlZmVyZW50aWFsL29wZXJhdGlvbnMvb3BlcmF0aW9ucy1tYWluLXRhYi9DOlxcUHJvamVjdHNcXEFuZ3VsYXJcXHVkZW15LWFwcC1mdXNlXFxCdWRnZXQuU1BBL3NyY1xcYXBwXFxtYWluXFxhcHBzXFxyZWZlcmVudGlhbFxcb3BlcmF0aW9uc1xcb3BlcmF0aW9ucy1tYWluLXRhYlxcb3BlcmF0aW9ucy1tYWluLXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUEyQixFQUMxQjs7QUFFTDtFQUNJLHdCQUF1QixFQWExQjs7QUFkRDtJQUlRLHdCQUF1QixFQUUxQjs7QUFOTDtJQVFRLHFDQUFvQyxFQUN2Qzs7QUFUTDtJQVlRLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hcHBzL3JlZmVyZW50aWFsL29wZXJhdGlvbnMvb3BlcmF0aW9ucy1tYWluLXRhYi9vcGVyYXRpb25zLW1haW4tdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWItYm9keS1jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbi5tYXQtdGFiLWdyb3VwIHtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5tYXQtdGFiLWJvZHktd3JhcHBlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgfVxyXG4gICAgLm1hdC10YWItbGFiZWwge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LXRhYi1sYWJlbC1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main/apps/referential/operations/operations-main-tab/operations-main-tab.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operations-main-tab/operations-main-tab.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: OperationsMainTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsMainTabComponent", function() { return OperationsMainTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OperationsMainTabComponent = /** @class */ (function () {
    function OperationsMainTabComponent(_router) {
        this._router = _router;
        this.operationFields = [{ id: 1, label: 'Catégorie opération' }, { id: 2, label: 'Type opération' }, { id: 3, label: 'Opération' }];
    }
    OperationsMainTabComponent.prototype.ngOnInit = function () {
    };
    OperationsMainTabComponent.prototype.ngOnChanges = function (changes) {
        if (changes.subject) {
            this.subject = changes.subject.currentValue;
            switch (this.subject) {
                case 'operation-type-families':
                    this.selectedIndex = 0;
                    break;
                case 'operation-types':
                    this.selectedIndex = 1;
                    break;
                case 'operations':
                    this.selectedIndex = 2;
                    break;
            }
        }
        // if(changes.headerPanelIsVisible) {
        //   this.headerPanelIsVisible = changes.headerPanelIsVisible.currentValue;
        // }
    };
    OperationsMainTabComponent.prototype.onTabChanged = function ($event) {
        this.selectedIndex = $event.index;
        switch (this.selectedIndex) {
            case 0:
                this.subject = 'operation-type-families';
                break;
            case 1:
                this.subject = 'operation-types';
                break;
            case 2:
                this.subject = 'operations';
                break;
        }
        this._router.navigate(["apps/referential/operations/" + this.subject]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OperationsMainTabComponent.prototype, "subject", void 0);
    OperationsMainTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'operations-main-tab',
            template: __webpack_require__(/*! ./operations-main-tab.component.html */ "./src/app/main/apps/referential/operations/operations-main-tab/operations-main-tab.component.html"),
            styles: [__webpack_require__(/*! ./operations-main-tab.component.scss */ "./src/app/main/apps/referential/operations/operations-main-tab/operations-main-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OperationsMainTabComponent);
    return OperationsMainTabComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/referential/operations/operations-main/operations-main.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operations-main/operations-main.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"products\" class=\"page-layout carded fullwidth inner-scroll\">\n\n  <!-- TOP BACKGROUND -->\n  <div class=\"top-bg accent header-1-background\"></div>\n  <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n      <div class=\"center\">\n        <div style=\"height:15px;text-align:center;cursor:pointer;\" class=\"test accent\" (click)=\"onHeaderPanelClick()\">\n            <mat-icon style=\"font-size:20px;margin-top:-2px;\">{{headerPanelIcon}}</mat-icon>\n        </div>\n\n        <!-- HEADER -->\n        <div *ngIf=\"headerPanelIsVisible\" class=\"header-2-background accent p-12 pb-0 pt-6\"\n            fxLayout=\"column\" fxLayoutAlign=\"center center\"\n            fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n            \n            <div class=\"toolbar w-100-p\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n            \n              <div class=\"left-side\" fxLayout=\"row\">\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                      <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">history</mat-icon>\n                      <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Référentiel opération: {{subjectTitle}}</span>\n                  </div>\n              </div>\n\n              <button mat-raised-button\n                  class=\"save-product-button white mt-16 mt-sm-0\"\n                  (click)=\"Add()\"\n              >\n                  <span>NOUVEAU</span>\n              </button>\n\n            </div>\n\n        </div>\n          \n          <!-- / HEADER -->\n          <div class=\"content-card\">\n            <operations-main-tab style=\"height:100%;\" [subject]=\"subject\" ></operations-main-tab>\n          </div>\n      </div>\n      <!-- / CENTER -->\n  </div>\n"

/***/ }),

/***/ "./src/app/main/apps/referential/operations/operations-main/operations-main.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operations-main/operations-main.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.header-1-background {\n  background-color: #9B9B9B;\n  background: url(\"/assets/images/backgrounds/bck_1.png\") no-repeat; }\n.header-2-background {\n  background-color: #9B9B9B;\n  background: url(\"/assets/images/backgrounds/bck_22.png\") no-repeat;\n  min-height: 120px !important;\n  max-height: 120px !important;\n  height: 120px !important; }\n.test {\n  background: url(\"/assets/images/backgrounds/bck_21.png\") no-repeat; }\n#products .header {\n  position: relative; }\n#products .header .search-input-wrapper {\n    max-width: 480px; }\n#products .header .selected-project {\n    position: absolute;\n    bottom: 0px;\n    left: 42px;\n    background: rgba(0, 0, 0, 0.12);\n    color: #FFFFFF;\n    padding: 8px 16px;\n    height: 40px;\n    line-height: 24px;\n    font-size: 16px; }\n#products .header .project-selector {\n    position: absolute;\n    left: 0px;\n    bottom: 0px;\n    margin-left: 1px;\n    border-radius: 0;\n    background: rgba(0, 0, 0, 0.12); }\n#products .header .project-selector mat-icon {\n      color: #FFFFFF; }\n#products .content {\n  flex: 1; }\n#products .content mat-tab-group {\n    height: 100%; }\n#products .content mat-tab-group .mat-tab-body-wrapper {\n      flex-grow: 1; }\n#products .content .mat-tab-label {\n    background-color: #FFFFFF !important; }\n#products .content .mat-tab-label-container {\n    padding: 0 24px; }\n#products .products-table {\n  flex: 1 1 auto;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  overflow: auto; }\n#products .products-table .mat-header-row {\n    min-height: 64px; }\n#products .products-table .product {\n    position: relative;\n    cursor: pointer;\n    height: 70px; }\n#products .products-table .mat-cell {\n    min-width: 0;\n    display: flex;\n    align-items: center; }\n#products .products-table .mat-column-id {\n    flex: 0 1 84px; }\n#products .products-table .mat-column-image {\n    flex: 0 1 84px; }\n#products .products-table .mat-column-image .product-image {\n      width: 52px;\n      height: 52px;\n      border: 1px solid rgba(0, 0, 0, 0.12); }\n#products .products-table .mat-column-buttons {\n    flex: 0 1 80px; }\n#products .products-table .quantity-indicator {\n    display: inline-block;\n    vertical-align: middle;\n    width: 8px;\n    height: 8px;\n    border-radius: 4px;\n    margin-right: 8px; }\n#products .products-table .quantity-indicator + span {\n      display: inline-block;\n      vertical-align: middle; }\n#products .products-table .active-icon {\n    border-radius: 50%; }\n#products .spinner-container {\n  height: 100%;\n  vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcHBzL3JlZmVyZW50aWFsL29wZXJhdGlvbnMvb3BlcmF0aW9ucy1tYWluL0M6XFxQcm9qZWN0c1xcQW5ndWxhclxcdWRlbXktYXBwLWZ1c2VcXEJ1ZGdldC5TUEEvbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXF90aGVtaW5nLnNjc3MiLCJzcmMvYXBwL21haW4vYXBwcy9yZWZlcmVudGlhbC9vcGVyYXRpb25zL29wZXJhdGlvbnMtbWFpbi9DOlxcUHJvamVjdHNcXEFuZ3VsYXJcXHVkZW15LWFwcC1mdXNlXFxCdWRnZXQuU1BBL3NyY1xcYXBwXFxtYWluXFxhcHBzXFxyZWZlcmVudGlhbFxcb3BlcmF0aW9uc1xcb3BlcmF0aW9ucy1tYWluXFxvcGVyYXRpb25zLW1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUtBOzs7Ozs7R0FNRztBQW1xQ0gsbUNBQW1DO0FBNDlDbkMsNENBQTRDO0FBd0M1QyxzQkFBc0I7QUNoMUZ0QjtFQUNJLDBCQUF5QjtFQUN6QixrRUFBaUUsRUFDcEU7QUFDRDtFQUNJLDBCQUF5QjtFQUN6QixtRUFBa0U7RUFDbEUsNkJBQTJCO0VBQzNCLDZCQUEyQjtFQUMzQix5QkFBdUIsRUFDMUI7QUFDRDtFQUNJLG1FQUFrRSxFQUNyRTtBQUVEO0VBR1EsbUJBQWlCLEVBa0NwQjtBQXJDTDtJQUtZLGlCQUFnQixFQUNuQjtBQU5UO0lBZVksbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxXQUFTO0lBQ1QsZ0NBQStCO0lBQy9CLGVBQWM7SUFDZCxrQkFBaUI7SUFDakIsYUFBWTtJQUNaLGtCQUFpQjtJQUNqQixnQkFBZSxFQUNsQjtBQXhCVDtJQTBCWSxtQkFBa0I7SUFDbEIsVUFBUTtJQUNSLFlBQVc7SUFDWCxpQkFBZ0I7SUFDaEIsaUJBQWdCO0lBQ2hCLGdDQUErQixFQUtsQztBQXBDVDtNQWtDZ0IsZUFBYyxFQUNqQjtBQW5DYjtFQXdDUSxRQUFPLEVBZ0JWO0FBeERMO0lBMkNZLGFBQVksRUFLZjtBQWhEVDtNQThDZ0IsYUFBWSxFQUNmO0FBL0NiO0lBa0RZLHFDQUFvQyxFQUN2QztBQW5EVDtJQXNEWSxnQkFBZSxFQUNsQjtBQXZEVDtFQWtFUSxlQUFjO0VBQ2QsNkNBQTJDO0VBQzNDLGVBQWMsRUFxRGpCO0FBekhMO0lBdUVZLGlCQUFnQixFQUNuQjtBQXhFVDtJQTJFWSxtQkFBa0I7SUFDbEIsZ0JBQWU7SUFDZixhQUFZLEVBQ2Y7QUE5RVQ7SUFpRlksYUFBWTtJQUNaLGNBQWE7SUFDYixvQkFBbUIsRUFDdEI7QUFwRlQ7SUF1RlksZUFBYyxFQUNqQjtBQXhGVDtJQTJGWSxlQUFjLEVBT2pCO0FBbEdUO01BOEZnQixZQUFXO01BQ1gsYUFBWTtNQUNaLHNDQUFvQyxFQUN2QztBQWpHYjtJQXFHWSxlQUFjLEVBQ2pCO0FBdEdUO0lBeUdZLHNCQUFxQjtJQUNyQix1QkFBc0I7SUFDdEIsV0FBVTtJQUNWLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsa0JBQWlCLEVBTXBCO0FBcEhUO01BaUhnQixzQkFBcUI7TUFDckIsdUJBQXNCLEVBQ3pCO0FBbkhiO0lBdUhZLG1CQUFrQixFQUNyQjtBQXhIVDtFQTRIUSxhQUFXO0VBRVgsdUJBQXFCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hcHBzL3JlZmVyZW50aWFsL29wZXJhdGlvbnMvb3BlcmF0aW9ucy1tYWluL29wZXJhdGlvbnMtbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBhbGwgdGhlIHRoZW1pbmcgZnVuY3Rpb25hbGl0eS5cbi8vIFdlIGNhbiB1c2UgcmVsYXRpdmUgaW1wb3J0cyBmb3IgaW1wb3J0cyBmcm9tIHRoZSBjZGsgYmVjYXVzZSB3ZSBidW5kbGUgZXZlcnl0aGluZ1xuLy8gdXAgaW50byBhIHNpbmdsZSBmbGF0IHNjc3MgZmlsZSBmb3IgbWF0ZXJpYWwuXG4vLyBXZSB3YW50IG92ZXJsYXlzIHRvIGFsd2F5cyBhcHBlYXIgb3ZlciB1c2VyIGNvbnRlbnQsIHNvIHNldCBhIGJhc2VsaW5lXG4vLyB2ZXJ5IGhpZ2ggei1pbmRleCBmb3IgdGhlIG92ZXJsYXkgY29udGFpbmVyLCB3aGljaCBpcyB3aGVyZSB3ZSBjcmVhdGUgdGhlIG5ld1xuLy8gc3RhY2tpbmcgY29udGV4dCBmb3IgYWxsIG92ZXJsYXlzLlxuJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyOiAxMDAwO1xuJGNkay16LWluZGV4LW92ZXJsYXk6IDEwMDA7XG4kY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDogMTAwMDtcblxuLy8gQmFja2dyb3VuZCBjb2xvciBmb3IgYWxsIG9mIHRoZSBiYWNrZHJvcHNcbiRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMik7XG5cbi8vIERlZmF1bHQgYmFja2Ryb3AgYW5pbWF0aW9uIGlzIGJhc2VkIG9uIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3dpZnQtZWFzZS1vdXQuXG4kYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuXG5AbWl4aW4gY2RrLW92ZXJsYXkoKSB7XG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgLy8gRGlzYWJsZSBldmVudHMgZnJvbSBiZWluZyBjYXB0dXJlZCBvbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAvLyBUaGUgY29udGFpbmVyIHNob3VsZCBiZSB0aGUgc2l6ZSBvZiB0aGUgdmlld3BvcnQuXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gVGhlIG92ZXJsYXktY29udGFpbmVyIGlzIGFuIGludmlzaWJsZSBlbGVtZW50IHdoaWNoIGNvbnRhaW5zIGFsbCBpbmRpdmlkdWFsIG92ZXJsYXlzLlxuICAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyO1xuXG4gICAgJjplbXB0eSB7XG4gICAgICAvLyBIaWRlIHRoZSBlbGVtZW50IHdoZW4gaXQgZG9lc24ndCBoYXZlIGFueSBjaGlsZCBub2Rlcy4gVGhpcyBkb2Vzbid0XG4gICAgICAvLyBpbmNsdWRlIG92ZXJsYXlzIHRoYXQgaGF2ZSBiZWVuIGRldGFjaGVkLCByYXRoZXIgdGhhbiBkaXNwb3NlZC5cbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gV2UgdXNlIGFuIGV4dHJhIHdyYXBwZXIgZWxlbWVudCBpbiBvcmRlciB0byB1c2UgbWFrZSB0aGUgb3ZlcmxheSBpdHNlbGYgYSBmbGV4IGl0ZW0uXG4gIC8vIFRoaXMgbWFrZXMgY2VudGVyaW5nIHRoZSBvdmVybGF5IGVhc3kgd2l0aG91dCBydW5uaW5nIGludG8gdGhlIHN1YnBpeGVsIHJlbmRlcmluZ1xuICAvLyBwcm9ibGVtcyB0aWVkIHRvIHVzaW5nIGB0cmFuc2Zvcm1gIGFuZCB3aXRob3V0IGludGVyZmVyaW5nIHdpdGggdGhlIG90aGVyIHBvc2l0aW9uXG4gIC8vIHN0cmF0ZWdpZXMuXG4gIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG4gIH1cblxuICAvLyBBIHNpbmdsZSBvdmVybGF5IHBhbmUuXG4gIC5jZGstb3ZlcmxheS1wYW5lIHtcbiAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCBmb3IgdGhpcyBvbmUgdG8gc3RhcnQgb2ZmIGBhYnNvbHV0ZWAsXG4gICAgLy8gaW4gb3JkZXIgZm9yIHVzIHRvIGJlIGFibGUgdG8gbWVhc3VyZSBpdCBjb3JyZWN0bHkuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG5cbiAgICAvLyBGb3IgY29ubmVjdGVkLXBvc2l0aW9uIG92ZXJsYXlzLCB3ZSBzZXQgYGRpc3BsYXk6IGZsZXhgIGluXG4gICAgLy8gb3JkZXIgdG8gZm9yY2UgYG1heC13aWR0aGAgYW5kIGBtYXgtaGVpZ2h0YCB0byB0YWtlIGVmZmVjdC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgICAvLyBUT0RPKGplbGJvdXJuKTogcmV1c2Ugc2lkZW5hdiBmdWxsc2NyZWVuIG1peGluLlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbiAkYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmdiYSBiYWNrZ3JvdW5kIHdpbGwgYmVjb21lIHNvbGlkIHNvIHdlIG5lZWQgdG8gZmFsbCBiYWNrXG4gICAgICAvLyB0byBtYWtpbmcgaXQgb3BhcXVlIHVzaW5nIGBvcGFjaXR5YC4gTm90ZSB0aGF0IHdlIGNhbid0IHVzZSB0aGUgYGNkay1oaWdoLWNvbnRyYXN0YFxuICAgICAgLy8gbWl4aW4sIGJlY2F1c2Ugd2UgY2FuJ3Qgbm9ybWFsaXplIHRoZSBpbXBvcnQgcGF0aCB0byB0aGUgX2ExMXkuc2NzcyBib3RoIGZvciB0aGVcbiAgICAgIC8vIHNvdXJjZSBhbmQgd2hlbiB0aGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWQuIFNlZSAjMTA5MDguXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQ6ICRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3Age1xuICAgIC8vIE5vdGU6IGFzIG9mIEZpcmVmb3ggNTcsIGhhdmluZyB0aGUgYmFja2Ryb3AgYmUgYGJhY2tncm91bmQ6IG5vbmVgIHdpbGwgcHJldmVudCBpdCBmcm9tXG4gICAgLy8gY2FwdHVyaW5nIHRoZSB1c2VyJ3MgbW91c2Ugc2Nyb2xsIGV2ZW50cy4gU2luY2Ugd2UgYWxzbyBjYW4ndCB1c2Ugc29tZXRoaW5nIGxpa2VcbiAgICAvLyBgcmdiYSgwLCAwLCAwLCAwKWAsIHdlIHdvcmsgYXJvdW5kIHRoZSBpbmNvbnNpc3RlbmN5IGJ5IG5vdCBzZXR0aW5nIHRoZSBiYWNrZ3JvdW5kIGF0XG4gICAgLy8gYWxsIGFuZCB1c2luZyBgb3BhY2l0eWAgdG8gbWFrZSB0aGUgZWxlbWVudCB0cmFuc3BhcmVudC5cbiAgICAmLCAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICAvLyBPdmVybGF5IHBhcmVudCBlbGVtZW50IHVzZWQgd2l0aCB0aGUgY29ubmVjdGVkIHBvc2l0aW9uIHN0cmF0ZWd5LiBVc2VkIHRvIGNvbnN0cmFpbiB0aGVcbiAgLy8gb3ZlcmxheSBlbGVtZW50J3Mgc2l6ZSB0byBmaXQgd2l0aGluIHRoZSB2aWV3cG9ydC5cbiAgLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcblxuICAgIC8vIFdlIHVzZSBgZGlzcGxheTogZmxleGAgb24gdGhpcyBlbGVtZW50IGV4Y2x1c2l2ZWx5IGZvciBjZW50ZXJpbmcgY29ubmVjdGVkIG92ZXJsYXlzLlxuICAgIC8vIFdoZW4gKm5vdCogY2VudGVyaW5nLCBhIHRvcC9sZWZ0L2JvdHRvbS9yaWdodCB3aWxsIGJlIHNldCB3aGljaCBvdmVycmlkZXMgdGhlIG5vcm1hbFxuICAgIC8vIGZsZXggbGF5b3V0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAvLyBXZSB1c2UgdGhlIGBjb2x1bW5gIGRpcmVjdGlvbiBoZXJlIHRvIGF2b2lkIHNvbWUgZmxleGJveCBpc3N1ZXMgaW4gRWRnZVxuICAgIC8vIHdoZW4gdXNpbmcgdGhlIFwiZ3JvdyBhZnRlciBvcGVuXCIgb3B0aW9ucy5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLy8gQWRkIHNvbWUgZGltZW5zaW9ucyBzbyB0aGUgZWxlbWVudCBoYXMgYW4gYGlubmVyVGV4dGAgd2hpY2ggc29tZSBwZW9wbGUgZGVwZW5kIG9uIGluIHRlc3RzLlxuICAgIG1pbi13aWR0aDogMXB4O1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgfVxuXG4gIC8vIFVzZWQgd2hlbiBkaXNhYmxpbmcgZ2xvYmFsIHNjcm9sbGluZy5cbiAgLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgIC8vIE5lY2Vzc2FyeSBmb3IgdGhlIGNvbnRlbnQgbm90IHRvIGxvc2UgaXRzIHdpZHRoLiBOb3RlIHRoYXQgd2UncmUgdXNpbmcgMTAwJSwgaW5zdGVhZCBvZlxuICAgIC8vIDEwMHZ3LCBiZWNhdXNlIDEwMHZ3IGluY2x1ZGVzIHRoZSB3aWR0aCBwbHVzIHRoZSBzY3JvbGxiYXIsIHdoZXJlYXMgMTAwJSBpcyB0aGUgd2lkdGhcbiAgICAvLyB0aGF0IHRoZSBlbGVtZW50IGhhZCBiZWZvcmUgd2UgbWFkZSBpdCBgZml4ZWRgLlxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLy8gTm90ZTogdGhpcyB3aWxsIGFsd2F5cyBhZGQgYSBzY3JvbGxiYXIgdG8gd2hhdGV2ZXIgZWxlbWVudCBpdCBpcyBvbiwgd2hpY2ggY2FuXG4gICAgLy8gcG90ZW50aWFsbHkgcmVzdWx0IGluIGRvdWJsZSBzY3JvbGxiYXJzLiBJdCBzaG91bGRuJ3QgYmUgYW4gaXNzdWUsIGJlY2F1c2Ugd2Ugd29uJ3RcbiAgICAvLyBibG9jayBzY3JvbGxpbmcgb24gYSBwYWdlIHRoYXQgZG9lc24ndCBoYXZlIGEgc2Nyb2xsYmFyIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbn1cblxuQG1peGluIGNkay1hMTF5IHtcbiAgLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICAgIGJvcmRlcjogMDtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxcHg7XG5cbiAgICAvLyBBdm9pZCBicm93c2VycyByZW5kZXJpbmcgdGhlIGZvY3VzIHJpbmcgaW4gc29tZSBjYXNlcy5cbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgLy8gQXZvaWQgc29tZSBjYXNlcyB3aGVyZSB0aGUgYnJvd3NlciB3aWxsIHN0aWxsIHJlbmRlciB0aGUgbmF0aXZlIGNvbnRyb2xzIChzZWUgIzkwNDkpLlxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cbn1cblxuLyoqXG4gKiBBcHBsaWVzIHN0eWxlcyBmb3IgdXNlcnMgaW4gaGlnaCBjb250cmFzdCBtb2RlLiBOb3RlIHRoYXQgdGhpcyBvbmx5IGFwcGxpZXNcbiAqIHRvIE1pY3Jvc29mdCBicm93c2Vycy4gQ2hyb21lIGNhbiBiZSBpbmNsdWRlZCBieSBjaGVja2luZyBmb3IgdGhlIGBodG1sW2hjXWBcbiAqIGF0dHJpYnV0ZSwgaG93ZXZlciBDaHJvbWUgaGFuZGxlcyBoaWdoIGNvbnRyYXN0IGRpZmZlcmVudGx5LlxuICogQHBhcmFtIHRhcmdldCBXaGljaCBraW5kIG9mIGhpZ2ggY29udHJhc3Qgc2V0dGluZyB0byB0YXJnZXQuIERlZmF1bHRzIHRvIGBhY3RpdmVgLCBjYW4gYmVcbiAqICAgIGB3aGl0ZS1vbi1ibGFja2Agb3IgYGJsYWNrLW9uLXdoaXRlYC5cbiAqL1xuQG1peGluIGNkay1oaWdoLWNvbnRyYXN0KCR0YXJnZXQ6IGFjdGl2ZSkge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6ICR0YXJnZXQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBDb3JlIHN0eWxlcyB0aGF0IGVuYWJsZSBtb25pdG9yaW5nIGF1dG9maWxsIHN0YXRlIG9mIHRleHQgZmllbGRzLlxuQG1peGluIGNkay10ZXh0LWZpZWxkIHtcbiAgLy8gS2V5ZnJhbWVzIHRoYXQgYXBwbHkgbm8gc3R5bGVzLCBidXQgYWxsb3cgdXMgdG8gbW9uaXRvciB3aGVuIGFuIHRleHQgZmllbGQgYmVjb21lcyBhdXRvZmlsbGVkXG4gIC8vIGJ5IHdhdGNoaW5nIGZvciB0aGUgYW5pbWF0aW9uIGV2ZW50cyB0aGF0IGFyZSBmaXJlZCB3aGVuIHRoZXkgc3RhcnQuIE5vdGU6IHRoZSAvKiEqLyBjb21tZW50IGlzXG4gIC8vIG5lZWRlZCB0byBwcmV2ZW50IExpYlNhc3MgZnJvbSBzdHJpcHBpbmcgdGhlIGtleWZyYW1lcyBvdXQuXG4gIC8vIEJhc2VkIG9uOiBodHRwczovL21lZGl1bS5jb20vQGJydW5uL2RldGVjdGluZy1hdXRvZmlsbGVkLWZpZWxkcy1pbi1qYXZhc2NyaXB0LWFlZDU5OGQyNWRhN1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IHsvKiEqL31cbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgey8qISovfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0O1xuICB9XG5cbiAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kO1xuICB9XG5cbiAgLy8gUmVtb3ZlIHRoZSByZXNpemUgaGFuZGxlIG9uIGF1dG9zaXppbmcgdGV4dGFyZWFzLCBiZWNhdXNlIHdoYXRldmVyIGhlaWdodFxuICAvLyB0aGUgdXNlciByZXNpemVkIHRvIHdpbGwgYmUgb3ZlcndyaXR0ZW4gb25jZSB0aGV5IHN0YXJ0IHR5cGluZyBhZ2Fpbi5cbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplIHtcbiAgICByZXNpemU6IG5vbmU7XG4gIH1cblxuICAvLyBUaGlzIGNsYXNzIGlzIHRlbXBvcmFyaWx5IGFwcGxpZWQgdG8gdGhlIHRleHRhcmVhIHdoZW4gaXQgaXMgYmVpbmcgbWVhc3VyZWQuIEl0IGlzIGltbWVkaWF0ZWx5XG4gIC8vIHJlbW92ZWQgd2hlbiBtZWFzdXJpbmcgaXMgY29tcGxldGUuIFdlIHVzZSBgIWltcG9ydGFudGAgcnVsZXMgaGVyZSB0byBtYWtlIHN1cmUgdXNlci1zcGVjaWZpZWRcbiAgLy8gcnVsZXMgZG8gbm90IGludGVyZmVyZSB3aXRoIHRoZSBtZWFzdXJlbWVudC5cbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZyB7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIC8vIEhhdmluZyAycHggdG9wIGFuZCBib3R0b20gcGFkZGluZyBzZWVtcyB0byBmaXggYSBidWcgd2hlcmUgQ2hyb21lIGdldHMgYW4gaW5jb3JyZWN0XG4gICAgLy8gbWVhc3VyZW1lbnQuIFdlIGp1c3QgaGF2ZSB0byBhY2NvdW50IGZvciBpdCBsYXRlciBhbmQgc3VidHJhY3QgaXQgb2ZmIHRoZSBmaW5hbCByZXN1bHQuXG4gICAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIFVzZWQgdG8gZ2VuZXJhdGUgVUlEcyBmb3Iga2V5ZnJhbWVzIHVzZWQgdG8gY2hhbmdlIHRoZSB0ZXh0IGZpZWxkIGF1dG9maWxsIHN0eWxlcy5cbiRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDogMDtcblxuLy8gTWl4aW4gdXNlZCB0byBhcHBseSBjdXN0b20gYmFja2dyb3VuZCBhbmQgZm9yZWdyb3VuZCBjb2xvcnMgdG8gYW4gYXV0b2ZpbGxlZCB0ZXh0IGZpZWxkLlxuLy8gQmFzZWQgb246IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3ODE1NDkvXG4vLyByZW1vdmluZy1pbnB1dC1iYWNrZ3JvdW5kLWNvbG91ci1mb3ItY2hyb21lLWF1dG9jb21wbGV0ZSNhbnN3ZXItMzc0MzIyNjBcbkBtaXhpbiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvcigkYmFja2dyb3VuZCwgJGZvcmVncm91bmQ6JycpIHtcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH0ge1xuICAgIHRvIHtcbiAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgICAgQGlmICRmb3JlZ3JvdW5kICE9ICcnIHsgY29sb3I6ICRmb3JlZ3JvdW5kOyB9XG4gICAgfVxuICB9XG5cbiAgJjotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9O1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIH1cblxuICAmLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fTtcbiAgfVxuXG4gICRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDpcbiAgICAgICRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudCArIDEgIWdsb2JhbDtcbn1cblxuXG4vLyBDb3JlIHN0eWxlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IG1hdGVyaWFsIGRlc2lnbiB0cmVhdG1lbnRzIHRvIGFueSBlbGVtZW50LlxuLy8gTWVkaWEgcXVlcmllc1xuLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogQ2hhbmdlICRtYXQteHNtYWxsIGFuZCAkbWF0LXNtYWxsIHVzYWdlcyB0byByZWx5IG9uIEJyZWFrcG9pbnRPYnNlcnZlcixcbiRtYXQteHNtYWxsOiAnbWF4LXdpZHRoOiA1OTlweCc7XG4kbWF0LXNtYWxsOiAnbWF4LXdpZHRoOiA5NTlweCc7XG5cbi8vIFRPRE86IFJldmlzaXQgYWxsIHotaW5kaWNlcyBiZWZvcmUgYmV0YVxuLy8gei1pbmRleCBtYXN0ZXIgbGlzdFxuXG4kei1pbmRleC1mYWI6IDIwICFkZWZhdWx0O1xuJHotaW5kZXgtZHJhd2VyOiAxMDAgIWRlZmF1bHQ7XG5cbi8vIEdsb2JhbCBjb25zdGFudHNcbiRwaTogMy4xNDE1OTI2NTtcblxuLy8gUGFkZGluZyBiZXR3ZWVuIGlucHV0IHRvZ2dsZXMgYW5kIHRoZWlyIGxhYmVsc1xuJG1hdC10b2dnbGUtcGFkZGluZzogOHB4ICFkZWZhdWx0O1xuLy8gV2lkdGggYW5kIGhlaWdodCBvZiBpbnB1dCB0b2dnbGVzXG4kbWF0LXRvZ2dsZS1zaXplOiAyMHB4ICFkZWZhdWx0O1xuXG4vLyBFYXNpbmcgQ3VydmVzXG4vLyBUT0RPKGplbGJvdXJuKTogYWxsIG9mIHRoZXNlIG5lZWQgdG8gYmUgcmV2aXNpdGVkXG5cbi8vIFRoZSBkZWZhdWx0IGFuaW1hdGlvbiBjdXJ2ZXMgdXNlZCBieSBtYXRlcmlhbCBkZXNpZ24uXG4kbWF0LWxpbmVhci1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDAuMSkgIWRlZmF1bHQ7XG4kbWF0LWZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpICFkZWZhdWx0O1xuJG1hdC1mYXN0LW91dC1saW5lYXItaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKSAhZGVmYXVsdDtcblxuJGVhc2UtaW4tb3V0LWN1cnZlLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbjogNDAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLW91dDogYWxsICRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbiAkc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1pbi1kdXJhdGlvbjogMzAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW46IGFsbCAkc3dpZnQtZWFzZS1pbi1kdXJhdGlvbiAkc3dpZnQtZWFzZS1pbi10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLWluLW91dC1kdXJhdGlvbjogNTAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi1vdXQtdGltaW5nLWZ1bmN0aW9uOiAkZWFzZS1pbi1vdXQtY3VydmUtZnVuY3Rpb24gIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi1vdXQ6IGFsbCAkc3dpZnQtZWFzZS1pbi1vdXQtZHVyYXRpb24gJHN3aWZ0LWVhc2UtaW4tb3V0LXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWxpbmVhci1kdXJhdGlvbjogODBtcyAhZGVmYXVsdDtcbiRzd2lmdC1saW5lYXItdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIgIWRlZmF1bHQ7XG4kc3dpZnQtbGluZWFyOiBhbGwgJHN3aWZ0LWxpbmVhci1kdXJhdGlvbiAkc3dpZnQtbGluZWFyLXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuXG5cbi8vIEEgY29sbGVjdGlvbiBvZiBtaXhpbnMgYW5kIENTUyBjbGFzc2VzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgZWxldmF0aW9uIHRvIGEgbWF0ZXJpYWxcbi8vIGVsZW1lbnQuXG4vLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2Vudmlyb25tZW50L2VsZXZhdGlvbi5odG1sXG4vLyBFeGFtcGxlczpcbi8vXG4vL1xuLy8gLm1hdC1mb28ge1xuLy8gICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbigyKTtcbi8vXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbig4KTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIDxkaXYgaWQ9XCJleHRlcm5hbC1jYXJkXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXoyXCI+PHA+U29tZSBjb250ZW50PC9wPjwvZGl2PlxuLy9cbi8vIEZvciBhbiBleHBsYW5hdGlvbiBvZiB0aGUgZGVzaWduIGJlaGluZCBob3cgZWxldmF0aW9uIGlzIGltcGxlbWVudGVkLCBzZWUgdGhlIGRlc2lnbiBkb2MgYXRcbi8vIGh0dHBzOi8vZ29vLmdsL0txMGs5Wi5cblxuLy8gQ29sb3JzIGZvciB1bWJyYSwgcGVudW1icmEsIGFuZCBhbWJpZW50IHNoYWRvd3MuIEFzIGRlc2NyaWJlZCBpbiB0aGUgZGVzaWduIGRvYywgZWFjaCBlbGV2YXRpb25cbi8vIGxldmVsIGlzIGNyZWF0ZWQgdXNpbmcgYSBzZXQgb2YgMyBzaGFkb3cgdmFsdWVzLCBvbmUgZm9yIHVtYnJhICh0aGUgc2hhZG93IHJlcHJlc2VudGluZyB0aGVcbi8vIHNwYWNlIGNvbXBsZXRlbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0IHJlbGF0aXZlIHRvIGl0cyBsaWdodCBzb3VyY2UpLCBvbmUgZm9yIHBlbnVtYnJhICh0aGVcbi8vIHNwYWNlIHBhcnRpYWxseSBvYnNjdXJlZCBieSBhbiBvYmplY3QpLCBhbmQgb25lIGZvciBhbWJpZW50ICh0aGUgc3BhY2Ugd2hpY2ggY29udGFpbnMgdGhlIG9iamVjdFxuLy8gaXRzZWxmKS4gRm9yIGEgZnVydGhlciBleHBsYW5hdGlvbiBvZiB0aGVzZSB0ZXJtcyBhbmQgdGhlaXIgbWVhbmluZ3MsIHNlZVxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW1icmEsX3BlbnVtYnJhX2FuZF9hbnR1bWJyYS5cblxuLy8gTWFwcyBmb3IgdGhlIGRpZmZlcmVudCBzaGFkb3cgc2V0cyBhbmQgdGhlaXIgdmFsdWVzIHdpdGhpbiBlYWNoIHotc3BhY2UuIFRoZXNlIHZhbHVlcyB3ZXJlXG4vLyBjcmVhdGVkIGJ5IHRha2luZyBhIGZldyByZWZlcmVuY2Ugc2hhZG93IHNldHMgY3JlYXRlZCBieSBHb29nbGUncyBEZXNpZ25lcnMgYW5kIGludGVycG9sYXRpbmdcbi8vIGFsbCBvZiB0aGUgdmFsdWVzIGJldHdlZW4gdGhlbS5cblxuQGZ1bmN0aW9uIF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAxOiAnMHB4IDJweCAxcHggLTFweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAyOiAnMHB4IDNweCAxcHggLTJweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAzOiAnMHB4IDNweCAzcHggLTJweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICA0OiAnMHB4IDJweCA0cHggLTFweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICA1OiAnMHB4IDNweCA1cHggLTFweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICA2OiAnMHB4IDNweCA1cHggLTFweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICA3OiAnMHB4IDRweCA1cHggLTJweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICA4OiAnMHB4IDVweCA1cHggLTNweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICA5OiAnMHB4IDVweCA2cHggLTNweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAxMDogJzBweCA2cHggNnB4IC0zcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMTE6ICcwcHggNnB4IDdweCAtNHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDEyOiAnMHB4IDdweCA4cHggLTRweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAxMzogJzBweCA3cHggOHB4IC00cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMTQ6ICcwcHggN3B4IDlweCAtNHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDE1OiAnMHB4IDhweCA5cHggLTVweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAxNjogJzBweCA4cHggMTBweCAtNXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDE3OiAnMHB4IDhweCAxMXB4IC01cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMTg6ICcwcHggOXB4IDExcHggLTVweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAxOTogJzBweCA5cHggMTJweCAtNnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDIwOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDIxOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDIyOiAnMHB4IDEwcHggMTRweCAtNnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDIzOiAnMHB4IDExcHggMTRweCAtN3B4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDI0OiAnMHB4IDExcHggMTVweCAtN3B4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDE6ICcwcHggMXB4IDFweCAwcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDI6ICcwcHggMnB4IDJweCAwcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDM6ICcwcHggM3B4IDRweCAwcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDQ6ICcwcHggNHB4IDVweCAwcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDU6ICcwcHggNXB4IDhweCAwcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDY6ICcwcHggNnB4IDEwcHggMHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICA3OiAnMHB4IDdweCAxMHB4IDFweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgODogJzBweCA4cHggMTBweCAxcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDk6ICcwcHggOXB4IDEycHggMXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICAxMDogJzBweCAxMHB4IDE0cHggMXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICAxMTogJzBweCAxMXB4IDE1cHggMXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICAxMjogJzBweCAxMnB4IDE3cHggMnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICAxMzogJzBweCAxM3B4IDE5cHggMnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICAxNDogJzBweCAxNHB4IDIxcHggMnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICAxNTogJzBweCAxNXB4IDIycHggMnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICAxNjogJzBweCAxNnB4IDI0cHggMnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICAxNzogJzBweCAxN3B4IDI2cHggMnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICAxODogJzBweCAxOHB4IDI4cHggMnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICAxOTogJzBweCAxOXB4IDI5cHggMnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICAyMDogJzBweCAyMHB4IDMxcHggM3B4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICAyMTogJzBweCAyMXB4IDMzcHggM3B4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICAyMjogJzBweCAyMnB4IDM1cHggM3B4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICAyMzogJzBweCAyM3B4IDM2cHggM3B4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICAyNDogJzBweCAyNHB4IDM4cHggM3B4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDE6ICcwcHggMXB4IDNweCAwcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDI6ICcwcHggMXB4IDVweCAwcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDM6ICcwcHggMXB4IDhweCAwcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDQ6ICcwcHggMXB4IDEwcHggMHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICA1OiAnMHB4IDFweCAxNHB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgNjogJzBweCAxcHggMThweCAwcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDc6ICcwcHggMnB4IDE2cHggMXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICA4OiAnMHB4IDNweCAxNHB4IDJweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgOTogJzBweCAzcHggMTZweCAycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDEwOiAnMHB4IDRweCAxOHB4IDNweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMTE6ICcwcHggNHB4IDIwcHggM3B4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAxMjogJzBweCA1cHggMjJweCA0cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDEzOiAnMHB4IDVweCAyNHB4IDRweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMTQ6ICcwcHggNXB4IDI2cHggNHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAxNTogJzBweCA2cHggMjhweCA1cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDE2OiAnMHB4IDZweCAzMHB4IDVweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMTc6ICcwcHggNnB4IDMycHggNXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAxODogJzBweCA3cHggMzRweCA2cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDE5OiAnMHB4IDdweCAzNnB4IDZweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMjA6ICcwcHggOHB4IDM4cHggN3B4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAyMTogJzBweCA4cHggNDBweCA3cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDIyOiAnMHB4IDhweCA0MnB4IDdweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMjM6ICcwcHggOXB4IDQ0cHggOHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAyNDogJzBweCA5cHggNDZweCA4cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nXG4gICk7XG59XG5cbi8vIFRoZSBkZWZhdWx0IGR1cmF0aW9uIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uOiAyODBtcyAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgZWFzaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJG1hdC1mYXN0LW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjtcblxuLy8gVGhlIGRlZmF1bHQgY29sb3IgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG1hdC1lbGV2YXRpb24tY29sb3I6IGJsYWNrICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBvcGFjaXR5IHNjYWxpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG1hdC1lbGV2YXRpb24tb3BhY2l0eTogMSAhZGVmYXVsdDtcblxuLy8gUHJlZml4IGZvciBlbGV2YXRpb24tcmVsYXRlZCBzZWxlY3RvcnMuXG4kX21hdC1lbGV2YXRpb24tcHJlZml4OiAnbWF0LWVsZXZhdGlvbi16JztcblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgdG8gYW4gZWxlbWVudCB0byBnaXZlIGl0IHRoZSBlbGV2YXRpb24gc3BlY2lmaWVkIGJ5ICR6VmFsdWUuXG4vLyBUaGUgJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQuXG5AbWl4aW4gbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkY29sb3I6ICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICBAaWYgdHlwZS1vZigkelZhbHVlKSAhPSBudW1iZXIgb3Igbm90IHVuaXRsZXNzKCR6VmFsdWUpIHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBhIHVuaXRsZXNzIG51bWJlcic7XG4gIH1cbiAgQGlmICR6VmFsdWUgPCAwIG9yICR6VmFsdWUgPiAyNCB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNCc7XG4gIH1cblxuICBib3gtc2hhZG93OiAje21hcC1nZXQoX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAtZ2V0KF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLWdldChfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX07XG59XG5cbkBtaXhpbiBfbWF0LXRoZW1lLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRlbGV2YXRpb24tY29sb3I6IG1hcC1nZXQoJGZvcmVncm91bmQsIGVsZXZhdGlvbik7XG4gICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdDogaWYoJGVsZXZhdGlvbi1jb2xvciA9PSBudWxsLCAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJGVsZXZhdGlvbi1jb2xvcik7XG5cbiAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQsICRvcGFjaXR5KTtcbn1cblxuLy8gQXBwbGllcyB0aGUgZWxldmF0aW9uIHRvIGFuIGVsZW1lbnQgaW4gYSBtYW5uZXIgdGhhdCBhbGxvd3Ncbi8vIGNvbnN1bWVycyB0byBvdmVycmlkZSBpdCB2aWEgdGhlIE1hdGVyaWFsIGVsZXZhdGlvbiBjbGFzc2VzLlxuQG1peGluIG1hdC1vdmVycmlkYWJsZS1lbGV2YXRpb24oXG4gICAgJHpWYWx1ZSxcbiAgICAkY29sb3I6ICRtYXQtZWxldmF0aW9uLWNvbG9yLFxuICAgICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICY6bm90KFtjbGFzcyo9JyN7JF9tYXQtZWxldmF0aW9uLXByZWZpeH0nXSkge1xuICAgIEBpbmNsdWRlIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGVsZXZhdGlvbi1jb2xvcjogbWFwLWdldCgkZm9yZWdyb3VuZCwgZWxldmF0aW9uKTtcbiAgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0OiBpZigkZWxldmF0aW9uLWNvbG9yID09IG51bGwsICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkZWxldmF0aW9uLWNvbG9yKTtcblxuICBAaW5jbHVkZSBtYXQtb3ZlcnJpZGFibGUtZWxldmF0aW9uKCR6VmFsdWUsICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdCwgJG9wYWNpdHkpO1xufVxuXG4vLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIGZvciBhIHRyYW5zaXRpb24gcHJvcGVydHkgZm9yIGVsZXZhdGlvbi5cbi8vIENhbGxpbmcgdGhpcyBmdW5jdGlvbiBkaXJlY3RseSBpcyB1c2VmdWwgaW4gc2l0dWF0aW9ucyB3aGVyZSBhIGNvbXBvbmVudCBuZWVkcyB0byB0cmFuc2l0aW9uXG4vLyBtb3JlIHRoYW4gb25lIHByb3BlcnR5LlxuLy9cbi8vIC5mb28ge1xuLy8gICB0cmFuc2l0aW9uOiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoKSwgb3BhY2l0eSAxMDBtcyBlYXNlO1xuLy8gfVxuQGZ1bmN0aW9uIG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZShcbiAgICAkZHVyYXRpb246ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgQHJldHVybiBib3gtc2hhZG93ICN7JGR1cmF0aW9ufSAjeyRlYXNpbmd9O1xufVxuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyBuZWVkZWQgdG8gaGF2ZSBhbiBlbGVtZW50IHRyYW5zaXRpb24gYmV0d2VlbiBlbGV2YXRpb25zLlxuLy8gVGhpcyBtaXhpbiBzaG91bGQgYmUgYXBwbGllZCB0byBlbGVtZW50cyB3aG9zZSBlbGV2YXRpb24gdmFsdWVzIHdpbGwgY2hhbmdlIGRlcGVuZGluZyBvbiB0aGVpclxuLy8gY29udGV4dCAoZS5nLiB3aGVuIGFjdGl2ZSBvciBkaXNhYmxlZCkuXG4vL1xuLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogQm90aCB0aGlzIG1peGluIGFuZCB0aGUgYWJvdmUgZnVuY3Rpb24gdXNlIGRlZmF1bHQgcGFyYW1ldGVycyBzbyB0aGV5IGNhblxuLy8gYmUgdXNlZCBpbiB0aGUgc2FtZSB3YXkgYnkgY2xpZW50cy5cbkBtaXhpbiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24oXG4gICAgJGR1cmF0aW9uOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgkZHVyYXRpb24sICRlYXNpbmcpO1xufVxuXG4vLyBDb2xvciBwYWxldHRlcyBmcm9tIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3BlYy5cbi8vIFNlZSBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb2xvci9cbi8vXG4vLyBDb250cmFzdCBjb2xvcnMgYXJlIGhhcmQtY29kZWQgYmVjYXVzZSBpdCBpcyB0b28gZGlmZmljdWx0IChwcm9iYWJseSBpbXBvc3NpYmxlKSB0b1xuLy8gY2FsY3VsYXRlIHRoZW0uIFRoZXNlIGNvbnRyYXN0IGNvbG9ycyBhcmUgcHVsbGVkIGZyb20gdGhlIHB1YmxpYyBNYXRlcmlhbCBEZXNpZ24gc3BlYyBzd2F0Y2hlcy5cbi8vIFdoaWxlIHRoZSBjb250cmFzdCBjb2xvcnMgaW4gdGhlIHNwZWMgYXJlIG5vdCBwcmVzY3JpcHRpdmUsIHdlIHVzZSB0aGVtIGZvciBjb252ZW5pZW5jZS5cblxuXG4vLyBAZGVwcmVjYXRlZCByZW5hbWVkIHRvICRkYXJrLXByaW1hcnktdGV4dC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay04Ny1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjg3KTtcbi8vIEBkZXByZWNhdGVkIHJlbmFtZWQgdG8gJGxpZ2h0LXByaW1hcnktdGV4dC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS04Ny1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjg3KTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkZGFyay1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTEyLW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuMTIpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRsaWdodC1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTEyLW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuMTIpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRkYXJrLVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stNi1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjA2KTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkbGlnaHQtW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS02LW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuMDYpO1xuXG4kZGFyay1wcmltYXJ5LXRleHQ6IHJnYmEoYmxhY2ssIDAuODcpO1xuJGRhcmstc2Vjb25kYXJ5LXRleHQ6IHJnYmEoYmxhY2ssIDAuNTQpO1xuJGRhcmstZGlzYWJsZWQtdGV4dDogcmdiYShibGFjaywgMC4zOCk7XG4kZGFyay1kaXZpZGVyczogcmdiYShibGFjaywgMC4xMik7XG4kZGFyay1mb2N1c2VkOiByZ2JhKGJsYWNrLCAwLjEyKTtcbiRsaWdodC1wcmltYXJ5LXRleHQ6IHdoaXRlO1xuJGxpZ2h0LXNlY29uZGFyeS10ZXh0OiByZ2JhKHdoaXRlLCAwLjcpO1xuJGxpZ2h0LWRpc2FibGVkLXRleHQ6IHJnYmEod2hpdGUsIDAuNSk7XG4kbGlnaHQtZGl2aWRlcnM6IHJnYmEod2hpdGUsIDAuMTIpO1xuJGxpZ2h0LWZvY3VzZWQ6IHJnYmEod2hpdGUsIDAuMTIpO1xuXG4kbWF0LXJlZDogKFxuICA1MDogI2ZmZWJlZSxcbiAgMTAwOiAjZmZjZGQyLFxuICAyMDA6ICNlZjlhOWEsXG4gIDMwMDogI2U1NzM3MyxcbiAgNDAwOiAjZWY1MzUwLFxuICA1MDA6ICNmNDQzMzYsXG4gIDYwMDogI2U1MzkzNSxcbiAgNzAwOiAjZDMyZjJmLFxuICA4MDA6ICNjNjI4MjgsXG4gIDkwMDogI2I3MWMxYyxcbiAgQTEwMDogI2ZmOGE4MCxcbiAgQTIwMDogI2ZmNTI1MixcbiAgQTQwMDogI2ZmMTc0NCxcbiAgQTcwMDogI2Q1MDAwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXBpbms6IChcbiAgNTA6ICNmY2U0ZWMsXG4gIDEwMDogI2Y4YmJkMCxcbiAgMjAwOiAjZjQ4ZmIxLFxuICAzMDA6ICNmMDYyOTIsXG4gIDQwMDogI2VjNDA3YSxcbiAgNTAwOiAjZTkxZTYzLFxuICA2MDA6ICNkODFiNjAsXG4gIDcwMDogI2MyMTg1YixcbiAgODAwOiAjYWQxNDU3LFxuICA5MDA6ICM4ODBlNGYsXG4gIEExMDA6ICNmZjgwYWIsXG4gIEEyMDA6ICNmZjQwODEsXG4gIEE0MDA6ICNmNTAwNTcsXG4gIEE3MDA6ICNjNTExNjIsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1wdXJwbGU6IChcbiAgNTA6ICNmM2U1ZjUsXG4gIDEwMDogI2UxYmVlNyxcbiAgMjAwOiAjY2U5M2Q4LFxuICAzMDA6ICNiYTY4YzgsXG4gIDQwMDogI2FiNDdiYyxcbiAgNTAwOiAjOWMyN2IwLFxuICA2MDA6ICM4ZTI0YWEsXG4gIDcwMDogIzdiMWZhMixcbiAgODAwOiAjNmExYjlhLFxuICA5MDA6ICM0YTE0OGMsXG4gIEExMDA6ICNlYTgwZmMsXG4gIEEyMDA6ICNlMDQwZmIsXG4gIEE0MDA6ICNkNTAwZjksXG4gIEE3MDA6ICNhYTAwZmYsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWRlZXAtcHVycGxlOiAoXG4gIDUwOiAjZWRlN2Y2LFxuICAxMDA6ICNkMWM0ZTksXG4gIDIwMDogI2IzOWRkYixcbiAgMzAwOiAjOTU3NWNkLFxuICA0MDA6ICM3ZTU3YzIsXG4gIDUwMDogIzY3M2FiNyxcbiAgNjAwOiAjNWUzNWIxLFxuICA3MDA6ICM1MTJkYTgsXG4gIDgwMDogIzQ1MjdhMCxcbiAgOTAwOiAjMzExYjkyLFxuICBBMTAwOiAjYjM4OGZmLFxuICBBMjAwOiAjN2M0ZGZmLFxuICBBNDAwOiAjNjUxZmZmLFxuICBBNzAwOiAjNjIwMGVhLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1pbmRpZ286IChcbiAgNTA6ICNlOGVhZjYsXG4gIDEwMDogI2M1Y2FlOSxcbiAgMjAwOiAjOWZhOGRhLFxuICAzMDA6ICM3OTg2Y2IsXG4gIDQwMDogIzVjNmJjMCxcbiAgNTAwOiAjM2Y1MWI1LFxuICA2MDA6ICMzOTQ5YWIsXG4gIDcwMDogIzMwM2Y5ZixcbiAgODAwOiAjMjgzNTkzLFxuICA5MDA6ICMxYTIzN2UsXG4gIEExMDA6ICM4YzllZmYsXG4gIEEyMDA6ICM1MzZkZmUsXG4gIEE0MDA6ICMzZDVhZmUsXG4gIEE3MDA6ICMzMDRmZmUsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWJsdWU6IChcbiAgNTA6ICNlM2YyZmQsXG4gIDEwMDogI2JiZGVmYixcbiAgMjAwOiAjOTBjYWY5LFxuICAzMDA6ICM2NGI1ZjYsXG4gIDQwMDogIzQyYTVmNSxcbiAgNTAwOiAjMjE5NmYzLFxuICA2MDA6ICMxZTg4ZTUsXG4gIDcwMDogIzE5NzZkMixcbiAgODAwOiAjMTU2NWMwLFxuICA5MDA6ICMwZDQ3YTEsXG4gIEExMDA6ICM4MmIxZmYsXG4gIEEyMDA6ICM0NDhhZmYsXG4gIEE0MDA6ICMyOTc5ZmYsXG4gIEE3MDA6ICMyOTYyZmYsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saWdodC1ibHVlOiAoXG4gIDUwOiAjZTFmNWZlLFxuICAxMDA6ICNiM2U1ZmMsXG4gIDIwMDogIzgxZDRmYSxcbiAgMzAwOiAjNGZjM2Y3LFxuICA0MDA6ICMyOWI2ZjYsXG4gIDUwMDogIzAzYTlmNCxcbiAgNjAwOiAjMDM5YmU1LFxuICA3MDA6ICMwMjg4ZDEsXG4gIDgwMDogIzAyNzdiZCxcbiAgOTAwOiAjMDE1NzliLFxuICBBMTAwOiAjODBkOGZmLFxuICBBMjAwOiAjNDBjNGZmLFxuICBBNDAwOiAjMDBiMGZmLFxuICBBNzAwOiAjMDA5MWVhLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWN5YW46IChcbiAgNTA6ICNlMGY3ZmEsXG4gIDEwMDogI2IyZWJmMixcbiAgMjAwOiAjODBkZWVhLFxuICAzMDA6ICM0ZGQwZTEsXG4gIDQwMDogIzI2YzZkYSxcbiAgNTAwOiAjMDBiY2Q0LFxuICA2MDA6ICMwMGFjYzEsXG4gIDcwMDogIzAwOTdhNyxcbiAgODAwOiAjMDA4MzhmLFxuICA5MDA6ICMwMDYwNjQsXG4gIEExMDA6ICM4NGZmZmYsXG4gIEEyMDA6ICMxOGZmZmYsXG4gIEE0MDA6ICMwMGU1ZmYsXG4gIEE3MDA6ICMwMGI4ZDQsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC10ZWFsOiAoXG4gIDUwOiAjZTBmMmYxLFxuICAxMDA6ICNiMmRmZGIsXG4gIDIwMDogIzgwY2JjNCxcbiAgMzAwOiAjNGRiNmFjLFxuICA0MDA6ICMyNmE2OWEsXG4gIDUwMDogIzAwOTY4OCxcbiAgNjAwOiAjMDA4OTdiLFxuICA3MDA6ICMwMDc5NmIsXG4gIDgwMDogIzAwNjk1YyxcbiAgOTAwOiAjMDA0ZDQwLFxuICBBMTAwOiAjYTdmZmViLFxuICBBMjAwOiAjNjRmZmRhLFxuICBBNDAwOiAjMWRlOWI2LFxuICBBNzAwOiAjMDBiZmE1LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZ3JlZW46IChcbiAgNTA6ICNlOGY1ZTksXG4gIDEwMDogI2M4ZTZjOSxcbiAgMjAwOiAjYTVkNmE3LFxuICAzMDA6ICM4MWM3ODQsXG4gIDQwMDogIzY2YmI2YSxcbiAgNTAwOiAjNGNhZjUwLFxuICA2MDA6ICM0M2EwNDcsXG4gIDcwMDogIzM4OGUzYyxcbiAgODAwOiAjMmU3ZDMyLFxuICA5MDA6ICMxYjVlMjAsXG4gIEExMDA6ICNiOWY2Y2EsXG4gIEEyMDA6ICM2OWYwYWUsXG4gIEE0MDA6ICMwMGU2NzYsXG4gIEE3MDA6ICMwMGM4NTMsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWxpZ2h0LWdyZWVuOiAoXG4gIDUwOiAjZjFmOGU5LFxuICAxMDA6ICNkY2VkYzgsXG4gIDIwMDogI2M1ZTFhNSxcbiAgMzAwOiAjYWVkNTgxLFxuICA0MDA6ICM5Y2NjNjUsXG4gIDUwMDogIzhiYzM0YSxcbiAgNjAwOiAjN2NiMzQyLFxuICA3MDA6ICM2ODlmMzgsXG4gIDgwMDogIzU1OGIyZixcbiAgOTAwOiAjMzM2OTFlLFxuICBBMTAwOiAjY2NmZjkwLFxuICBBMjAwOiAjYjJmZjU5LFxuICBBNDAwOiAjNzZmZjAzLFxuICBBNzAwOiAjNjRkZDE3LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWxpbWU6IChcbiAgNTA6ICNmOWZiZTcsXG4gIDEwMDogI2YwZjRjMyxcbiAgMjAwOiAjZTZlZTljLFxuICAzMDA6ICNkY2U3NzUsXG4gIDQwMDogI2Q0ZTE1NyxcbiAgNTAwOiAjY2RkYzM5LFxuICA2MDA6ICNjMGNhMzMsXG4gIDcwMDogI2FmYjQyYixcbiAgODAwOiAjOWU5ZDI0LFxuICA5MDA6ICM4Mjc3MTcsXG4gIEExMDA6ICNmNGZmODEsXG4gIEEyMDA6ICNlZWZmNDEsXG4gIEE0MDA6ICNjNmZmMDAsXG4gIEE3MDA6ICNhZWVhMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXllbGxvdzogKFxuICA1MDogI2ZmZmRlNyxcbiAgMTAwOiAjZmZmOWM0LFxuICAyMDA6ICNmZmY1OWQsXG4gIDMwMDogI2ZmZjE3NixcbiAgNDAwOiAjZmZlZTU4LFxuICA1MDA6ICNmZmViM2IsXG4gIDYwMDogI2ZkZDgzNSxcbiAgNzAwOiAjZmJjMDJkLFxuICA4MDA6ICNmOWE4MjUsXG4gIDkwMDogI2Y1N2YxNyxcbiAgQTEwMDogI2ZmZmY4ZCxcbiAgQTIwMDogI2ZmZmYwMCxcbiAgQTQwMDogI2ZmZWEwMCxcbiAgQTcwMDogI2ZmZDYwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1hbWJlcjogKFxuICA1MDogI2ZmZjhlMSxcbiAgMTAwOiAjZmZlY2IzLFxuICAyMDA6ICNmZmUwODIsXG4gIDMwMDogI2ZmZDU0ZixcbiAgNDAwOiAjZmZjYTI4LFxuICA1MDA6ICNmZmMxMDcsXG4gIDYwMDogI2ZmYjMwMCxcbiAgNzAwOiAjZmZhMDAwLFxuICA4MDA6ICNmZjhmMDAsXG4gIDkwMDogI2ZmNmYwMCxcbiAgQTEwMDogI2ZmZTU3ZixcbiAgQTIwMDogI2ZmZDc0MCxcbiAgQTQwMDogI2ZmYzQwMCxcbiAgQTcwMDogI2ZmYWIwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1vcmFuZ2U6IChcbiAgNTA6ICNmZmYzZTAsXG4gIDEwMDogI2ZmZTBiMixcbiAgMjAwOiAjZmZjYzgwLFxuICAzMDA6ICNmZmI3NGQsXG4gIDQwMDogI2ZmYTcyNixcbiAgNTAwOiAjZmY5ODAwLFxuICA2MDA6ICNmYjhjMDAsXG4gIDcwMDogI2Y1N2MwMCxcbiAgODAwOiAjZWY2YzAwLFxuICA5MDA6ICNlNjUxMDAsXG4gIEExMDA6ICNmZmQxODAsXG4gIEEyMDA6ICNmZmFiNDAsXG4gIEE0MDA6ICNmZjkxMDAsXG4gIEE3MDA6ICNmZjZkMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6IGJsYWNrLFxuICApXG4pO1xuXG4kbWF0LWRlZXAtb3JhbmdlOiAoXG4gIDUwOiAjZmJlOWU3LFxuICAxMDA6ICNmZmNjYmMsXG4gIDIwMDogI2ZmYWI5MSxcbiAgMzAwOiAjZmY4YTY1LFxuICA0MDA6ICNmZjcwNDMsXG4gIDUwMDogI2ZmNTcyMixcbiAgNjAwOiAjZjQ1MTFlLFxuICA3MDA6ICNlNjRhMTksXG4gIDgwMDogI2Q4NDMxNSxcbiAgOTAwOiAjYmYzNjBjLFxuICBBMTAwOiAjZmY5ZTgwLFxuICBBMjAwOiAjZmY2ZTQwLFxuICBBNDAwOiAjZmYzZDAwLFxuICBBNzAwOiAjZGQyYzAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1icm93bjogKFxuICA1MDogI2VmZWJlOSxcbiAgMTAwOiAjZDdjY2M4LFxuICAyMDA6ICNiY2FhYTQsXG4gIDMwMDogI2ExODg3ZixcbiAgNDAwOiAjOGQ2ZTYzLFxuICA1MDA6ICM3OTU1NDgsXG4gIDYwMDogIzZkNGM0MSxcbiAgNzAwOiAjNWQ0MDM3LFxuICA4MDA6ICM0ZTM0MmUsXG4gIDkwMDogIzNlMjcyMyxcbiAgQTEwMDogI2Q3Y2NjOCxcbiAgQTIwMDogI2JjYWFhNCxcbiAgQTQwMDogIzhkNmU2MyxcbiAgQTcwMDogIzVkNDAzNyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ncmV5OiAoXG4gIDUwOiAjZmFmYWZhLFxuICAxMDA6ICNmNWY1ZjUsXG4gIDIwMDogI2VlZWVlZSxcbiAgMzAwOiAjZTBlMGUwLFxuICA0MDA6ICNiZGJkYmQsXG4gIDUwMDogIzllOWU5ZSxcbiAgNjAwOiAjNzU3NTc1LFxuICA3MDA6ICM2MTYxNjEsXG4gIDgwMDogIzQyNDI0MixcbiAgOTAwOiAjMjEyMTIxLFxuICBBMTAwOiAjZmZmZmZmLFxuICBBMjAwOiAjZWVlZWVlLFxuICBBNDAwOiAjYmRiZGJkLFxuICBBNzAwOiAjNjE2MTYxLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbi8vIEFsaWFzIGZvciBhbHRlcm5hdGUgc3BlbGxpbmcuXG4kbWF0LWdyYXk6ICRtYXQtZ3JleTtcblxuJG1hdC1ibHVlLWdyZXk6IChcbiAgNTA6ICNlY2VmZjEsXG4gIDEwMDogI2NmZDhkYyxcbiAgMjAwOiAjYjBiZWM1LFxuICAzMDA6ICM5MGE0YWUsXG4gIDQwMDogIzc4OTA5YyxcbiAgNTAwOiAjNjA3ZDhiLFxuICA2MDA6ICM1NDZlN2EsXG4gIDcwMDogIzQ1NWE2NCxcbiAgODAwOiAjMzc0NzRmLFxuICA5MDA6ICMyNjMyMzgsXG4gIEExMDA6ICNjZmQ4ZGMsXG4gIEEyMDA6ICNiMGJlYzUsXG4gIEE0MDA6ICM3ODkwOWMsXG4gIEE3MDA6ICM0NTVhNjQsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuLy8gQWxpYXMgZm9yIGFsdGVybmF0ZSBzcGVsbGluZy5cbiRtYXQtYmx1ZS1ncmF5OiAkbWF0LWJsdWUtZ3JleTtcblxuXG4vLyBCYWNrZ3JvdW5kIHBhbGV0dGUgZm9yIGxpZ2h0IHRoZW1lcy5cbiRtYXQtbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogKFxuICBzdGF0dXMtYmFyOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMzAwKSxcbiAgYXBwLWJhcjogICAgbWFwX2dldCgkbWF0LWdyZXksIDEwMCksXG4gIGJhY2tncm91bmQ6IG1hcF9nZXQoJG1hdC1ncmV5LCA1MCksXG4gIGhvdmVyOiAgICAgIHJnYmEoYmxhY2ssIDAuMDQpLCAvLyBUT0RPKGthcmEpOiBjaGVjayBzdHlsZSB3aXRoIE1hdGVyaWFsIERlc2lnbiBVWFxuICBjYXJkOiAgICAgICB3aGl0ZSxcbiAgZGlhbG9nOiAgICAgd2hpdGUsXG4gIGRpc2FibGVkLWJ1dHRvbjogcmdiYShibGFjaywgMC4xMiksXG4gIHJhaXNlZC1idXR0b246IHdoaXRlLFxuICBmb2N1c2VkLWJ1dHRvbjogJGRhcmstZm9jdXNlZCxcbiAgc2VsZWN0ZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMzAwKSxcbiAgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNDAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZTogbWFwX2dldCgkbWF0LWdyZXksIDIwMCksXG4gIHVuc2VsZWN0ZWQtY2hpcDogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIGRpc2FibGVkLWxpc3Qtb3B0aW9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMjAwKSxcbik7XG5cbi8vIEJhY2tncm91bmQgcGFsZXR0ZSBmb3IgZGFyayB0aGVtZXMuXG4kbWF0LWRhcmstdGhlbWUtYmFja2dyb3VuZDogKFxuICBzdGF0dXMtYmFyOiBibGFjayxcbiAgYXBwLWJhcjogICAgbWFwX2dldCgkbWF0LWdyZXksIDkwMCksXG4gIGJhY2tncm91bmQ6ICMzMDMwMzAsXG4gIGhvdmVyOiAgICAgIHJnYmEod2hpdGUsIDAuMDQpLCAvLyBUT0RPKGthcmEpOiBjaGVjayBzdHlsZSB3aXRoIE1hdGVyaWFsIERlc2lnbiBVWFxuICBjYXJkOiAgICAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlhbG9nOiAgICAgbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpc2FibGVkLWJ1dHRvbjogcmdiYSh3aGl0ZSwgMC4xMiksXG4gIHJhaXNlZC1idXR0b246IG1hcC1nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBmb2N1c2VkLWJ1dHRvbjogJGxpZ2h0LWZvY3VzZWQsXG4gIHNlbGVjdGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDkwMCksXG4gIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpc2FibGVkLWJ1dHRvbi10b2dnbGU6IGJsYWNrLFxuICB1bnNlbGVjdGVkLWNoaXA6IG1hcF9nZXQoJG1hdC1ncmV5LCA3MDApLFxuICBkaXNhYmxlZC1saXN0LW9wdGlvbjogYmxhY2ssXG4pO1xuXG4vLyBGb3JlZ3JvdW5kIHBhbGV0dGUgZm9yIGxpZ2h0IHRoZW1lcy5cbiRtYXQtbGlnaHQtdGhlbWUtZm9yZWdyb3VuZDogKFxuICBiYXNlOiAgICAgICAgICAgICAgYmxhY2ssXG4gIGRpdmlkZXI6ICAgICAgICAgICAkZGFyay1kaXZpZGVycyxcbiAgZGl2aWRlcnM6ICAgICAgICAgICRkYXJrLWRpdmlkZXJzLFxuICBkaXNhYmxlZDogICAgICAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgZGlzYWJsZWQtYnV0dG9uOiAgIHJnYmEoYmxhY2ssIDAuMjYpLFxuICBkaXNhYmxlZC10ZXh0OiAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgZWxldmF0aW9uOiAgICAgICAgIGJsYWNrLFxuICBoaW50LXRleHQ6ICAgICAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgc2Vjb25kYXJ5LXRleHQ6ICAgICRkYXJrLXNlY29uZGFyeS10ZXh0LFxuICBpY29uOiAgICAgICAgICAgICAgcmdiYShibGFjaywgMC41NCksXG4gIGljb25zOiAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjU0KSxcbiAgdGV4dDogICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuODcpLFxuICBzbGlkZXItbWluOiAgICAgICAgcmdiYShibGFjaywgMC44NyksXG4gIHNsaWRlci1vZmY6ICAgICAgICByZ2JhKGJsYWNrLCAwLjI2KSxcbiAgc2xpZGVyLW9mZi1hY3RpdmU6IHJnYmEoYmxhY2ssIDAuMzgpLFxuKTtcblxuLy8gRm9yZWdyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRtYXQtZGFyay10aGVtZS1mb3JlZ3JvdW5kOiAoXG4gIGJhc2U6ICAgICAgICAgICAgICB3aGl0ZSxcbiAgZGl2aWRlcjogICAgICAgICAgICRsaWdodC1kaXZpZGVycyxcbiAgZGl2aWRlcnM6ICAgICAgICAgICRsaWdodC1kaXZpZGVycyxcbiAgZGlzYWJsZWQ6ICAgICAgICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBkaXNhYmxlZC1idXR0b246ICAgcmdiYSh3aGl0ZSwgMC4zKSxcbiAgZGlzYWJsZWQtdGV4dDogICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBlbGV2YXRpb246ICAgICAgICAgYmxhY2ssXG4gIGhpbnQtdGV4dDogICAgICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgc2Vjb25kYXJ5LXRleHQ6ICAgICRsaWdodC1zZWNvbmRhcnktdGV4dCxcbiAgaWNvbjogICAgICAgICAgICAgIHdoaXRlLFxuICBpY29uczogICAgICAgICAgICAgd2hpdGUsXG4gIHRleHQ6ICAgICAgICAgICAgICB3aGl0ZSxcbiAgc2xpZGVyLW1pbjogICAgICAgIHdoaXRlLFxuICBzbGlkZXItb2ZmOiAgICAgICAgcmdiYSh3aGl0ZSwgMC4zKSxcbiAgc2xpZGVyLW9mZi1hY3RpdmU6IHJnYmEod2hpdGUsIDAuMyksXG4pO1xuXG5cblxuLy8gRm9yIGEgZ2l2ZW4gaHVlIGluIGEgcGFsZXR0ZSwgcmV0dXJuIHRoZSBjb250cmFzdCBjb2xvciBmcm9tIHRoZSBtYXAgb2YgY29udHJhc3QgcGFsZXR0ZXMuXG4vLyBAcGFyYW0gJGNvbG9yLW1hcFxuLy8gQHBhcmFtICRodWVcbkBmdW5jdGlvbiBtYXQtY29udHJhc3QoJHBhbGV0dGUsICRodWUpIHtcbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJHBhbGV0dGUsIGNvbnRyYXN0KSwgJGh1ZSk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIG1hcCBvZiBodWVzIHRvIGNvbG9ycyBmb3IgYSB0aGVtZS4gVGhpcyBpcyB1c2VkIHRvIGRlZmluZSBhIHRoZW1lIHBhbGV0dGUgaW4gdGVybXNcbi8vIG9mIHRoZSBNYXRlcmlhbCBEZXNpZ24gaHVlcy5cbi8vIEBwYXJhbSAkY29sb3ItbWFwXG4vLyBAcGFyYW0gJHByaW1hcnlcbi8vIEBwYXJhbSAkbGlnaHRlclxuQGZ1bmN0aW9uIG1hdC1wYWxldHRlKCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0OiA1MDAsICRsaWdodGVyOiAxMDAsICRkYXJrZXI6IDcwMCkge1xuICAkcmVzdWx0OiBtYXBfbWVyZ2UoJGJhc2UtcGFsZXR0ZSwgKFxuICAgIGRlZmF1bHQ6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQpLFxuICAgIGxpZ2h0ZXI6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGxpZ2h0ZXIpLFxuICAgIGRhcmtlcjogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkZGFya2VyKSxcblxuICAgIGRlZmF1bHQtY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdCksXG4gICAgbGlnaHRlci1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRsaWdodGVyKSxcbiAgICBkYXJrZXItY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkZGFya2VyKVxuICApKTtcblxuICAvLyBGb3IgZWFjaCBodWUgaW4gdGhlIHBhbGV0dGUsIGFkZCBhIFwiLWNvbnRyYXN0XCIgY29sb3IgdG8gdGhlIG1hcC5cbiAgQGVhY2ggJGh1ZSwgJGNvbG9yIGluICRiYXNlLXBhbGV0dGUge1xuICAgICRyZXN1bHQ6IG1hcF9tZXJnZSgkcmVzdWx0LCAoXG4gICAgICAnI3skaHVlfS1jb250cmFzdCc6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkaHVlKVxuICAgICkpO1xuICB9XG5cbiAgQHJldHVybiAkcmVzdWx0O1xufVxuXG5cbi8vIEdldHMgYSBjb2xvciBmcm9tIGEgdGhlbWUgcGFsZXR0ZSAodGhlIG91dHB1dCBvZiBtYXQtcGFsZXR0ZSkuXG4vLyBUaGUgaHVlIGNhbiBiZSBvbmUgb2YgdGhlIHN0YW5kYXJkIHZhbHVlcyAoNTAwLCBBNDAwLCBldGMuKSwgb25lIG9mIHRoZSB0aHJlZSBwcmVjb25maWd1cmVkXG4vLyBodWVzIChkZWZhdWx0LCBsaWdodGVyLCBkYXJrZXIpLCBvciBhbnkgb2YgdGhlIGFmb3JlbWVudGlvbmVkIHByZWZpeGVkIHdpdGggXCItY29udHJhc3RcIi5cbi8vXG4vLyBAcGFyYW0gJGNvbG9yLW1hcCBUaGUgdGhlbWUgcGFsZXR0ZSAob3V0cHV0IG9mIG1hdC1wYWxldHRlKS5cbi8vIEBwYXJhbSAkaHVlIFRoZSBodWUgZnJvbSB0aGUgcGFsZXR0ZSB0byB1c2UuIElmIHRoaXMgaXMgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEsIGl0IHdpbGxcbi8vICAgICBiZSB0cmVhdGVkIGFzIG9wYWNpdHkuXG4vLyBAcGFyYW0gJG9wYWNpdHkgVGhlIGFscGhhIGNoYW5uZWwgdmFsdWUgZm9yIHRoZSBjb2xvci5cbkBmdW5jdGlvbiBtYXQtY29sb3IoJHBhbGV0dGUsICRodWU6IGRlZmF1bHQsICRvcGFjaXR5OiBudWxsKSB7XG4gIC8vIElmIGh1ZUtleSBpcyBhIG51bWJlciBiZXR3ZWVuIHplcm8gYW5kIG9uZSwgdGhlbiBpdCBhY3R1YWxseSBjb250YWlucyBhblxuICAvLyBvcGFjaXR5IHZhbHVlLCBzbyByZWNhbGwgdGhpcyBmdW5jdGlvbiB3aXRoIHRoZSBkZWZhdWx0IGh1ZSBhbmQgdGhhdCBnaXZlbiBvcGFjaXR5LlxuICBAaWYgdHlwZS1vZigkaHVlKSA9PSBudW1iZXIgYW5kICRodWUgPj0gMCBhbmQgJGh1ZSA8PSAxIHtcbiAgICBAcmV0dXJuIG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdCwgJGh1ZSk7XG4gIH1cblxuICAkY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsICRodWUpO1xuICAkb3BhY2l0eTogaWYoJG9wYWNpdHkgPT0gbnVsbCwgb3BhY2l0eSgkY29sb3IpLCAkb3BhY2l0eSk7XG5cbiAgQHJldHVybiByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBjb250YWluZXIgb2JqZWN0IGZvciBhIGxpZ2h0IHRoZW1lIHRvIGJlIGdpdmVuIHRvIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy5cbkBmdW5jdGlvbiBtYXQtbGlnaHQtdGhlbWUoJHByaW1hcnksICRhY2NlbnQsICR3YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpIHtcbiAgQHJldHVybiAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgYWNjZW50OiAkYWNjZW50LFxuICAgIHdhcm46ICR3YXJuLFxuICAgIGlzLWRhcms6IGZhbHNlLFxuICAgIGZvcmVncm91bmQ6ICRtYXQtbGlnaHQtdGhlbWUtZm9yZWdyb3VuZCxcbiAgICBiYWNrZ3JvdW5kOiAkbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsXG4gICk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIGEgZGFyayB0aGVtZSB0byBiZSBnaXZlbiB0byBpbmRpdmlkdWFsIGNvbXBvbmVudCB0aGVtZSBtaXhpbnMuXG5AZnVuY3Rpb24gbWF0LWRhcmstdGhlbWUoJHByaW1hcnksICRhY2NlbnQsICR3YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpIHtcbiAgQHJldHVybiAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgYWNjZW50OiAkYWNjZW50LFxuICAgIHdhcm46ICR3YXJuLFxuICAgIGlzLWRhcms6IHRydWUsXG4gICAgZm9yZWdyb3VuZDogJG1hdC1kYXJrLXRoZW1lLWZvcmVncm91bmQsXG4gICAgYmFja2dyb3VuZDogJG1hdC1kYXJrLXRoZW1lLWJhY2tncm91bmQsXG4gICk7XG59XG5cblxuXG4kbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5OiAwLjE7XG5cbkBtaXhpbiBtYXQtcmlwcGxlKCkge1xuXG4gIC8vIFRoZSBob3N0IGVsZW1lbnQgb2YgYW4gbWF0LXJpcHBsZSBkaXJlY3RpdmUgc2hvdWxkIGFsd2F5cyBoYXZlIGEgcG9zaXRpb24gb2YgXCJhYnNvbHV0ZVwiIG9yXG4gIC8vIFwicmVsYXRpdmVcIiBzbyB0aGF0IHRoZSByaXBwbGVzIGluc2lkZSBhcmUgY29ycmVjdGx5IHBvc2l0aW9uZWQgcmVsYXRpdmVseSB0byB0aGUgY29udGFpbmVyLlxuICAubWF0LXJpcHBsZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC8vIEJ5IGRlZmF1bHQsIGV2ZXJ5IHJpcHBsZSBjb250YWluZXIgc2hvdWxkIGhhdmUgcG9zaXRpb246IHJlbGF0aXZlIGluIGZhdm9yIG9mIGNyZWF0aW5nIGFuXG4gICAgLy8gZWFzeSBBUEkgZm9yIGRldmVsb3BlcnMgdXNpbmcgdGhlIE1hdFJpcHBsZSBkaXJlY3RpdmUuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLm1hdC1yaXBwbGUubWF0LXJpcHBsZS11bmJvdW5kZWQge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgIHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybSAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcblxuICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmlwcGxlIGlzIG9wYXF1ZSwgY2F1c2luZyBpdCB0byBvYnN0cnVjdCB0aGUgY29udGVudC5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vKiBUaGVtZSBmb3IgdGhlIHJpcHBsZSBlbGVtZW50cy4qL1xuQG1peGluIG1hdC1yaXBwbGUtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXBfZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRmb3JlZ3JvdW5kLWJhc2U6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGZvcmVncm91bmQtYmFzZSwgJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eSk7XG4gIH1cbn1cblxuXG5cbi8vIFV0aWxpdHkgZm9yIGZldGNoaW5nIGEgbmVzdGVkIHZhbHVlIGZyb20gYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgJG5hbWUpIHtcbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJGNvbmZpZywgJGxldmVsKSwgJG5hbWUpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250IHNpemUgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC1zaXplKTtcbn1cblxuLy8gR2V0cyB0aGUgbGluZSBoZWlnaHQgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBsaW5lLWhlaWdodCk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQgd2VpZ2h0IGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC13ZWlnaHQpO1xufVxuXG4vLyBHZXRzIHRoZSBsZXR0ZXIgc3BhY2luZyBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtbGV0dGVyLXNwYWNpbmcoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGxldHRlci1zcGFjaW5nKTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udC1mYW1pbHkgZnJvbSBhIHR5cG9ncmFwaHkgY29uZmlnIGFuZCByZW1vdmVzIHRoZSBxdW90ZXMgYXJvdW5kIGl0LlxuQGZ1bmN0aW9uIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCAkbGV2ZWw6IG51bGwpIHtcbiAgJGZvbnQtZmFtaWx5OiBtYXAtZ2V0KCRjb25maWcsIGZvbnQtZmFtaWx5KTtcblxuICBAaWYgJGxldmVsICE9IG51bGwge1xuICAgICRmb250LWZhbWlseTogX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtZmFtaWx5KTtcbiAgfVxuXG4gIEByZXR1cm4gaWYoJGZvbnQtZmFtaWx5ID09IG51bGwsICRmb250LWZhbWlseSwgdW5xdW90ZSgkZm9udC1mYW1pbHkpKTtcbn1cblxuLy8gT3V0cHV0cyB0aGUgc2hvcnRoYW5kIGBmb250YCBDU1MgcHJvcGVydHksIGJhc2VkIG9uIGEgc2V0IG9mIHR5cG9ncmFwaHkgdmFsdWVzLiBGYWxscyBiYWNrIHRvXG4vLyB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzIGlmIGEgdmFsdWUgdGhhdCBpc24ndCBhbGxvd2VkIGluIHRoZSBzaG9ydGhhbmQgaXMgcGFzc2VkIGluLlxuQG1peGluIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKCRmb250LXNpemUsICRmb250LXdlaWdodCwgJGxpbmUtaGVpZ2h0LCAkZm9udC1mYW1pbHkpIHtcbiAgLy8gSWYgYW55IG9mIHRoZSB2YWx1ZXMgYXJlIHNldCB0byBgaW5oZXJpdGAsIHdlIGNhbid0IHVzZSB0aGUgc2hvcnRoYW5kXG4gIC8vIHNvIHdlIGZhbGwgYmFjayB0byBwYXNzaW5nIGluIHRoZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMuXG4gIEBpZiAoJGZvbnQtc2l6ZSA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtd2VpZ2h0ID09IGluaGVyaXQgb3JcbiAgICAgICAkbGluZS1oZWlnaHQgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LWZhbWlseSA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtc2l6ZSA9PSBudWxsIG9yXG4gICAgICAgJGZvbnQtd2VpZ2h0ID09IG51bGwgb3JcbiAgICAgICAkbGluZS1oZWlnaHQgPT0gbnVsbCBvclxuICAgICAgICRmb250LWZhbWlseSA9PSBudWxsKSB7XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSB1c2UgdGhlIHNob3J0aGFuZCBgZm9udGAsIGJlY2F1c2UgaXQncyB0aGUgbGVhc3QgYW1vdW50IG9mIGJ5dGVzLiBOb3RlXG4gICAgLy8gdGhhdCB3ZSBuZWVkIHRvIHVzZSBpbnRlcnBvbGF0aW9uIGZvciBgZm9udC1zaXplL2xpbmUtaGVpZ2h0YCBpbiBvcmRlciB0byBwcmV2ZW50XG4gICAgLy8gU2FzcyBmcm9tIGRpdmlkaW5nIHRoZSB0d28gdmFsdWVzLlxuICAgIGZvbnQ6ICRmb250LXdlaWdodCAjeyRmb250LXNpemV9LyN7JGxpbmUtaGVpZ2h0fSAkZm9udC1mYW1pbHk7XG4gIH1cbn1cblxuLy8gQ29udmVydHMgYSB0eXBvZ3JhcGh5IGxldmVsIGludG8gQ1NTIHN0eWxlcy5cbkBtaXhpbiBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgJGxldmVsKSB7XG4gICRmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgJGxldmVsKTtcbiAgJGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgJGxldmVsKTtcbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgJGxldmVsKTtcbiAgJGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgJGxldmVsKTtcblxuICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZCgkZm9udC1zaXplLCAkZm9udC13ZWlnaHQsICRsaW5lLWhlaWdodCwgJGZvbnQtZmFtaWx5KTtcbiAgbGV0dGVyLXNwYWNpbmc6IG1hdC1sZXR0ZXItc3BhY2luZygkY29uZmlnLCAkbGV2ZWwpO1xufVxuXG5cbkBtaXhpbiBtYXQtb3B0aW9uLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LW9wdGlvbiB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksXG4gICAgJjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIEluIG11bHRpcGxlIG1vZGUgdGhlcmUgaXMgYSBjaGVja2JveCB0byBzaG93IHRoYXQgdGhlIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAmLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtb3B0aW9uLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1vcHRpb24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1vcHRncm91cC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1vcHRncm91cC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMik7XG4gIH1cbn1cblxuXG5cbkBtaXhpbiBtYXQtcHNldWRvLWNoZWNrYm94LXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG4gICRjb2xvcmVkLWJveC1zZWxlY3RvcjogJy5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUnO1xuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKSwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gRGVmYXVsdCB0byB0aGUgYWNjZW50IGNvbG9yLiBOb3RlIHRoYXQgdGhlIHBzZXVkbyBjaGVja2JveGVzIGFyZSBtZWFudCB0byBpbmhlcml0IHRoZVxuICAvLyB0aGVtZSBmcm9tIHRoZWlyIHBhcmVudCwgcmF0aGVyIHRoYW4gaW1wbGVtZW50aW5nIHRoZWlyIG93biB0aGVtaW5nLCB3aGljaCBpcyB3aHkgd2VcbiAgLy8gZG9uJ3QgYXR0YWNoIHRvIHRoZSBgbWF0LSpgIGNsYXNzZXMuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsXG4gIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSk7XG4gIH1cblxuICAubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSkpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pKTtcbiAgfVxuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQge1xuICAgICYubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBSZXByZXNlbnRzIGEgdHlwb2dyYXBoeSBsZXZlbCBmcm9tIHRoZSBNYXRlcmlhbCBkZXNpZ24gc3BlYy5cbkBmdW5jdGlvbiBtYXQtdHlwb2dyYXBoeS1sZXZlbChcbiAgJGZvbnQtc2l6ZSxcbiAgJGxpbmUtaGVpZ2h0OiAkZm9udC1zaXplLFxuICAkZm9udC13ZWlnaHQ6IDQwMCxcbiAgJGZvbnQtZmFtaWx5OiBudWxsLFxuICAkbGV0dGVyLXNwYWNpbmc6IG51bGwpIHtcblxuICBAcmV0dXJuIChcbiAgICBmb250LXNpemU6ICRmb250LXNpemUsXG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodCxcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHksXG4gICAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXItc3BhY2luZ1xuICApO1xufVxuXG4vLyBSZXByZXNlbnRzIGEgY29sbGVjdGlvbiBvZiB0eXBvZ3JhcGh5IGxldmVscy5cbi8vIERlZmF1bHRzIGNvbWUgZnJvbSBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvc3R5bGUvdHlwb2dyYXBoeS5odG1sXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktY29uZmlnKFxuICAkZm9udC1mYW1pbHk6ICAgJ1JvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmJyxcbiAgJGRpc3BsYXktNDogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDExMnB4LCAxMTJweCwgMzAwKSxcbiAgJGRpc3BsYXktMzogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDU2cHgsIDU2cHgsIDQwMCksXG4gICRkaXNwbGF5LTI6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCg0NXB4LCA0OHB4LCA0MDApLFxuICAkZGlzcGxheS0xOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMzRweCwgNDBweCwgNDAwKSxcbiAgJGhlYWRsaW5lOiAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDI0cHgsIDMycHgsIDQwMCksXG4gICR0aXRsZTogICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgyMHB4LCAzMnB4LCA1MDApLFxuICAkc3ViaGVhZGluZy0yOiAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTZweCwgMjhweCwgNDAwKSxcbiAgJHN1YmhlYWRpbmctMTogIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE1cHgsIDI0cHgsIDQwMCksXG4gICRib2R5LTI6ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAyNHB4LCA1MDApLFxuICAkYm9keS0xOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjBweCwgNDAwKSxcbiAgJGNhcHRpb246ICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDEycHgsIDIwcHgsIDQwMCksXG4gICRidXR0b246ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAxNHB4LCA1MDApLFxuICAvLyBMaW5lLWhlaWdodCBtdXN0IGJlIHVuaXQtbGVzcyBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplLlxuICAkaW5wdXQ6ICAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoaW5oZXJpdCwgMS4xMjUsIDQwMClcbikge1xuXG4gIC8vIERlY2xhcmUgYW4gaW5pdGlhbCBtYXAgd2l0aCBhbGwgb2YgdGhlIGxldmVscy5cbiAgJGNvbmZpZzogKFxuICAgIGRpc3BsYXktNDogICAgICAkZGlzcGxheS00LFxuICAgIGRpc3BsYXktMzogICAgICAkZGlzcGxheS0zLFxuICAgIGRpc3BsYXktMjogICAgICAkZGlzcGxheS0yLFxuICAgIGRpc3BsYXktMTogICAgICAkZGlzcGxheS0xLFxuICAgIGhlYWRsaW5lOiAgICAgICAkaGVhZGxpbmUsXG4gICAgdGl0bGU6ICAgICAgICAgICR0aXRsZSxcbiAgICBzdWJoZWFkaW5nLTI6ICAgJHN1YmhlYWRpbmctMixcbiAgICBzdWJoZWFkaW5nLTE6ICAgJHN1YmhlYWRpbmctMSxcbiAgICBib2R5LTI6ICAgICAgICAgJGJvZHktMixcbiAgICBib2R5LTE6ICAgICAgICAgJGJvZHktMSxcbiAgICBjYXB0aW9uOiAgICAgICAgJGNhcHRpb24sXG4gICAgYnV0dG9uOiAgICAgICAgICRidXR0b24sXG4gICAgaW5wdXQ6ICAgICAgICAgICRpbnB1dCxcbiAgKTtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIGxldmVscyBhbmQgc2V0IHRoZSBgZm9udC1mYW1pbHlgIG9mIHRoZSBvbmVzIHRoYXQgZG9uJ3QgaGF2ZSBvbmUgdG8gdGhlIGJhc2UuXG4gIC8vIE5vdGUgdGhhdCBTYXNzIGNhbid0IG1vZGlmeSBtYXBzIGluIHBsYWNlLCB3aGljaCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gbWVyZ2UgYW5kIHJlLWFzc2lnbi5cbiAgQGVhY2ggJGtleSwgJGxldmVsIGluICRjb25maWcge1xuICAgIEBpZiBtYXAtZ2V0KCRsZXZlbCwgZm9udC1mYW1pbHkpID09IG51bGwge1xuICAgICAgJG5ldy1sZXZlbDogbWFwLW1lcmdlKCRsZXZlbCwgKGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHkpKTtcbiAgICAgICRjb25maWc6IG1hcC1tZXJnZSgkY29uZmlnLCAoJGtleTogJG5ldy1sZXZlbCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB0aGUgYmFzZSBmb250IGZhbWlseSB0byB0aGUgY29uZmlnLlxuICBAcmV0dXJuIG1hcC1tZXJnZSgkY29uZmlnLCAoZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSkpO1xufVxuXG4vLyBBZGRzIHRoZSBiYXNlIHR5cG9ncmFwaHkgc3R5bGVzLCBiYXNlZCBvbiBhIGNvbmZpZy5cbkBtaXhpbiBtYXQtYmFzZS10eXBvZ3JhcGh5KCRjb25maWcsICRzZWxlY3RvcjogJy5tYXQtdHlwb2dyYXBoeScpIHtcbiAgLm1hdC1oMSwgLm1hdC1oZWFkbGluZSwgI3skc2VsZWN0b3J9IGgxIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWgyLCAubWF0LXRpdGxlLCAjeyRzZWxlY3Rvcn0gaDIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDMsIC5tYXQtc3ViaGVhZGluZy0yLCAjeyRzZWxlY3Rvcn0gaDMge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWg0LCAubWF0LXN1YmhlYWRpbmctMSwgI3skc2VsZWN0b3J9IGg0IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLy8gTm90ZTogdGhlIHNwZWMgZG9lc24ndCBoYXZlIGFueXRoaW5nIHRoYXQgd291bGQgY29ycmVzcG9uZCB0byBoNSBhbmQgaDYsIGJ1dCB3ZSBhZGQgdGhlc2UgZm9yXG4gIC8vIGNvbnNpc3RlbmN5LiBUaGUgZm9udCBzaXplcyBjb21lIGZyb20gdGhlIENocm9tZSB1c2VyIGFnZW50IHN0eWxlcyB3aGljaCBoYXZlIGg1IGF0IDAuODNlbVxuICAvLyBhbmQgaDYgYXQgMC42N2VtLlxuICAubWF0LWg1LCAjeyRzZWxlY3Rvcn0gaDUge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKFxuICAgICAgbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpICogMC44MyxcbiAgICAgIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKVxuICAgICk7XG5cbiAgICBtYXJnaW46IDAgMCAxMnB4O1xuICB9XG5cbiAgLm1hdC1oNiwgI3skc2VsZWN0b3J9IGg2IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZChcbiAgICAgIG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSAqIDAuNjcsXG4gICAgICBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSlcbiAgICApO1xuXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5tYXQtYm9keS1zdHJvbmcsIC5tYXQtYm9keS0yIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtYm9keSwgLm1hdC1ib2R5LTEsICN7JHNlbGVjdG9yfSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMCAwIDEycHg7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbWFsbCwgLm1hdC1jYXB0aW9uIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgY2FwdGlvbik7XG4gIH1cblxuICAvLyBOb3RlOiBUaGUgc3BlYyBkb2Vzbid0IG1lbnRpb24gbGV0dGVyIHNwYWNpbmcuIFRoZSB2YWx1ZSBjb21lcyBmcm9tXG4gIC8vIGV5ZWJhbGxpbmcgaXQgdW50aWwgaXQgbG9va2VkIGV4YWN0bHkgbGlrZSB0aGUgc3BlYyBleGFtcGxlcy5cbiAgLm1hdC1kaXNwbGF5LTQsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktNCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktNCk7XG4gICAgbWFyZ2luOiAwIDAgNTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDVlbTtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0zLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTMge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTMpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIH1cblxuICAubWF0LWRpc3BsYXktMiwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0yIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0yKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMDVlbTtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0xLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTEge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTEpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gIH1cbn1cblxuXG5cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIFNlbGVjdGVkIG9wdGlvbnMgaW4gYXV0b2NvbXBsZXRlcyBzaG91bGQgbm90IGJlIGdyYXksIGJ1dCB3ZVxuICAgIC8vIG9ubHkgd2FudCB0byBvdmVycmlkZSB0aGUgYmFja2dyb3VuZCBmb3Igc2VsZWN0ZWQgb3B0aW9ucyBpZlxuICAgIC8vIHRoZXkgYXJlICpub3QqIGluIGhvdmVyIG9yIGZvY3VzIHN0YXRlLiBUaGlzIGNoYW5nZSBoYXMgdG8gYmVcbiAgICAvLyBtYWRlIGhlcmUgYmVjYXVzZSBiYXNlIG9wdGlvbiBzdHlsZXMgYXJlIHNoYXJlZCBiZXR3ZWVuIHRoZVxuICAgIC8vIGF1dG9jb21wbGV0ZSBhbmQgdGhlIHNlbGVjdC5cbiAgICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuXG4gICAgICAmOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5AbWl4aW4gbWF0LWF1dG9jb21wbGV0ZS10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG4vLyBUaGlzIGNvbnRhaW5zIGFsbCBvZiB0aGUgc3R5bGVzIGZvciB0aGUgYmFkZ2Vcbi8vIHJhdGhlciB0aGFuIGp1c3QgdGhlIGNvbG9yL3RoZW1lIGJlY2F1c2Ugb2Zcbi8vIG5vIHN0eWxlIHNoZWV0IHN1cHBvcnQgZm9yIGRpcmVjdGl2ZXMuXG5cblxuXG5cblxuJG1hdC1iYWRnZS1mb250LXNpemU6IDEycHg7XG4kbWF0LWJhZGdlLWZvbnQtd2VpZ2h0OiA2MDA7XG4kbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZTogMjJweCAhZGVmYXVsdDtcbiRtYXQtYmFkZ2Utc21hbGwtc2l6ZTogJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUgLSA2O1xuJG1hdC1iYWRnZS1sYXJnZS1zaXplOiAkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSArIDY7XG5cbi8vIE1peGluIGZvciBidWlsZGluZyBvZmZzZXQgZ2l2ZW4gZGlmZmVyZW50IHNpemVzXG5AbWl4aW4gX21hdC1iYWRnZS1zaXplKCRzaXplKSB7XG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gICAgbGluZS1oZWlnaHQ6ICRzaXplO1xuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgICAgb3V0bGluZTogc29saWQgMXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hYm92ZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHRvcDogLSRzaXplIC8gMjtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1iZWxvdyB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGJvdHRvbTogLSRzaXplIC8gMjtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICBsZWZ0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2Utb3ZlcmxhcCB7XG4gICAgJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJhZGdlLXRoZW1lKCR0aGVtZSkge1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LWJhZGdlLWFjY2VudCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS13YXJuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtaGlkZGVuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWRpc2FibGVkIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgLy8gVGhlIGRpc2FibGVkIGNvbG9yIHVzdWFsbHkgaGFzIHNvbWUga2luZCBvZiBvcGFjaXR5LCBidXQgYmVjYXVzZSB0aGUgYmFkZ2UgaXMgb3ZlcmxheWVkXG4gICAgICAvLyBvbiB0b3Agb2Ygc29tZXRoaW5nIGVsc2UsIGl0IHdvbid0IGxvb2sgZ29vZCBpZiBpdCdzIG9wYXF1ZS4gV2UgY29udmVydCBpdCBpbnRvIGEgc29saWRcbiAgICAgIC8vIGNvbG9yIGJ5IHRha2luZyB0aGUgb3BhY2l0eSBmcm9tIHRoZSByZ2JhIHZhbHVlIGFuZCB1c2luZyB0aGUgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZVxuICAgICAgLy8gcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kIHdoZW4gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuXG4gICAgICAkYXBwLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2JhY2tncm91bmQnKTtcbiAgICAgICRiYWRnZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuICAgICAgJGJhZGdlLW9wYWNpdHk6IG9wYWNpdHkoJGJhZGdlLWNvbG9yKTtcbiAgICAgIGJhY2tncm91bmQ6IG1peCgkYXBwLWJhY2tncm91bmQsIHJnYmEoJGJhZGdlLWNvbG9yLCAxKSwgKDEgLSAkYmFkZ2Utb3BhY2l0eSkgKiAxMDAlKTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLy8gVGhlIGFjdGl2ZSBjbGFzcyBpcyBhZGRlZCBhZnRlciB0aGUgZWxlbWVudCBpcyBhZGRlZFxuICAvLyBzbyBpdCBjYW4gYW5pbWF0ZSBzY2FsZSB0byBkZWZhdWx0XG4gIC5tYXQtYmFkZ2UtY29udGVudC5tYXQtYmFkZ2UtYWN0aXZlIHtcbiAgICAvLyBTY2FsZSB0byBgbm9uZWAgaW5zdGVhZCBvZiBgMWAgdG8gYXZvaWQgYmx1cnJ5IHRleHQgaW4gc29tZSBicm93c2Vycy5cbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1zbWFsbC1zaXplKTtcbiAgfVxuICAubWF0LWJhZGdlLW1lZGl1bSB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplKTtcbiAgfVxuICAubWF0LWJhZGdlLWxhcmdlIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1sYXJnZS1zaXplKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJhZGdlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGZvbnQtd2VpZ2h0OiAkbWF0LWJhZGdlLWZvbnQtd2VpZ2h0O1xuICAgIGZvbnQtc2l6ZTogJG1hdC1iYWRnZS1mb250LXNpemU7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplIC8gMjtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplICogMjtcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMTYsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cblxuLy8gQXBwbGllcyBhIGZvY3VzIHN0eWxlIHRvIGFuIG1hdC1idXR0b24gZWxlbWVudCBmb3IgZWFjaCBvZiB0aGUgc3VwcG9ydGVkIHBhbGV0dGVzLlxuQG1peGluIF9tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXktY29sb3IoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gICYubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gICYubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gIH1cblxuICAmLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gIH1cblxuICAmW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1idXR0b24tcmlwcGxlLWNvbG9yKCR0aGVtZSwgJGh1ZSwgJG9wYWNpdHk6IDAuMSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAmLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG5cbiAgJi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cblxuICAmLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2FybiwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG59XG5cbi8vIEFwcGxpZXMgYSBwcm9wZXJ0eSB0byBhbiBtYXQtYnV0dG9uIGVsZW1lbnQgZm9yIGVhY2ggb2YgdGhlIHN1cHBvcnRlZCBwYWxldHRlcy5cbkBtaXhpbiBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICRwcm9wZXJ0eSwgJGh1ZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAmLm1hdC1wcmltYXJ5IHtcbiAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkcHJpbWFyeSwgJGh1ZSk7XG4gIH1cbiAgJi5tYXQtYWNjZW50IHtcbiAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkYWNjZW50LCAkaHVlKTtcbiAgfVxuICAmLm1hdC13YXJuIHtcbiAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkd2FybiwgJGh1ZSk7XG4gIH1cblxuICAmLm1hdC1wcmltYXJ5LCAmLm1hdC1hY2NlbnQsICYubWF0LXdhcm4sICZbZGlzYWJsZWRdIHtcbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAkcGFsZXR0ZTogaWYoJHByb3BlcnR5ID09ICdjb2xvcicsICRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCk7XG4gICAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGlzYWJsZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYnV0dG9uLCAubWF0LWljb24tYnV0dG9uLCAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgICAvLyBCdXR0b25zIHdpdGhvdXQgYSBiYWNrZ3JvdW5kIGNvbG9yIHNob3VsZCBpbmhlcml0IHRoZSBmb250IGNvbG9yLiBUaGlzIGlzIG5lY2Vzc2FyeSB0b1xuICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBidXR0b24gaXMgcmVhZGFibGUgb24gY3VzdG9tIGJhY2tncm91bmQgY29sb3JzLiBJdCdzIHdyb25nIHRvIGFsd2F5cyBhc3N1bWVcbiAgICAvLyB0aGF0IHRob3NlIGJ1dHRvbnMgYXJlIGFsd2F5cyBwbGFjZWQgaW5zaWRlIG9mIGNvbnRhaW5lcnMgd2l0aCB0aGUgZGVmYXVsdCBiYWNrZ3JvdW5kXG4gICAgLy8gY29sb3Igb2YgdGhlIHRoZW1lIChlLmcuIHRoZW1lZCB0b29sYmFycykuXG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICdjb2xvcicsIGRlZmF1bHQpO1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXktY29sb3IoJHRoZW1lKTtcblxuICAgIC8vIFNldHVwIHRoZSByaXBwbGUgY29sb3IgdG8gYmUgYmFzZWQgb24gdGhlIGNvbG9yIHBhbGV0dGUuIFRoZSBvcGFjaXR5IGNhbiBiZSBhIGJpdCB3ZWFrZXJcbiAgICAvLyB0aGFuIGZvciBpY29uLWJ1dHRvbnMsIGJlY2F1c2Ugbm9ybWFsIGFuZCBzdHJva2VkIGJ1dHRvbnMgaGF2ZSBhIGZvY3VzIG92ZXJsYXkuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWNvbG9yKCR0aGVtZSwgZGVmYXVsdCk7XG4gIH1cblxuICAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoaXMgbmVlZHMgYSBiaXQgZXh0cmEgc3BlY2lmaWNpdHksIGJlY2F1c2Ugd2UncmUgbm90IGd1YXJhbnRlZWQgdGhlIGluY2x1c2lvblxuICAvLyBvcmRlciBvZiB0aGUgdGhlbWUgc3R5bGVzIGFuZCB0aGUgYnV0dG9uIHJlc2V0IG1heSBlbmQgdXAgcmVzZXR0aW5nIHRoaXMgYXMgd2VsbC5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIC8vIERlZmF1bHQgZm9udCBhbmQgYmFja2dyb3VuZCBjb2xvciB3aGVuIG5vdCB1c2luZyBhbnkgY29sb3IgcGFsZXR0ZS5cbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHJhaXNlZC1idXR0b24pO1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnY29sb3InLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICdiYWNrZ3JvdW5kLWNvbG9yJywgZGVmYXVsdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWNvbG9yKCR0aGVtZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAvLyBTaW5jZSBpY29uIGJ1dHRvbnMgZG9uJ3QgaGF2ZSBhIGZvY3VzIG92ZXJsYXksIHRoZSByaXBwbGUgb3BhY2l0eSBzaG91bGQgYmUgdGhlIGhpZ2hlclxuICAvLyB0aGFuIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAubWF0LWljb24tYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1yaXBwbGUtY29sb3IoJHRoZW1lLCBkZWZhdWx0LCAwLjIpO1xuICB9XG5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbiwgLm1hdC1mbGF0LWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcblxuICAgICY6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig4LCAkdGhlbWUpO1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDYsICR0aGVtZSk7XG5cbiAgICAmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMTIsICR0aGVtZSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24sXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGRpdmlkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuXG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBmb2N1c2VkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uLCAxKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwge1xuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBzZWxlY3RlZC1idXR0b24pO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24tdG9nZ2xlKTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIH1cblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2FyZC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWNhcmQge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDEsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIE5lZWRzIGV4dHJhIHNwZWNpZmljaXR5IHRvIGJlIGFibGUgdG8gb3ZlcnJpZGUgdGhlIGVsZXZhdGlvbiBzZWxlY3RvcnMuXG4gICAgJi5tYXQtY2FyZC1mbGF0IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jYXJkLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNhcmQge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgdGl0bGUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgdGl0bGUpO1xuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlLFxuICAubWF0LWNhcmQtY29udGVudCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG5cbiAgLy8gVGhlIGNvbG9yIG9mIHRoZSBjaGVja2JveCdzIGNoZWNrbWFyayAvIG1peGVkbWFyay5cbiAgJGNoZWNrYm94LW1hcmstY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuXG4gIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKSwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1jaGVja21hcmsge1xuICAgIGZpbGw6ICRjaGVja2JveC1tYXJrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aCB7XG4gICAgLy8gIWltcG9ydGFudCBpcyBuZWVkZWQgaGVyZSBiZWNhdXNlIGEgc3Ryb2tlIG11c3QgYmUgc2V0IGFzIGFuXG4gICAgLy8gYXR0cmlidXRlIG9uIHRoZSBTVkcgaW4gb3JkZXIgZm9yIGxpbmUgYW5pbWF0aW9uIHRvIHdvcmsgcHJvcGVybHkuXG4gICAgc3Ryb2tlOiAkY2hlY2tib3gtbWFyay1jb2xvciAhaW1wb3J0YW50O1xuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3QoYmxhY2stb24td2hpdGUpIHtcbiAgICAgIC8vIEhhdmluZyB0aGUgb25lIGFib3ZlIGJlICFpbXBvcnRhbnQgZW5kcyB1cCBvdmVycmlkaW5nIHRoZSBicm93c2VyJ3MgYXV0b21hdGljXG4gICAgICAvLyBjb2xvciBpbnZlcnNpb24gc28gd2UgbmVlZCB0byByZS1pbnZlcnQgaXQgb3Vyc2VsdmVzIGZvciBibGFjay1vbi13aGl0ZS5cbiAgICAgIHN0cm9rZTogIzAwMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtbWl4ZWRtYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hlY2tib3gtbWFyay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSwgLm1hdC1jaGVja2JveC1jaGVja2VkIHtcbiAgICAmLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgJi5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlKSB7XG4gICAgICAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSB7XG4gICAgICAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgICBjb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0IHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cblxuICAvLyBUaGlzIG9uZSBpcyBtb3ZlZCBkb3duIGhlcmUgc28gaXQgY2FuIHRhcmdldCBib3RoXG4gIC8vIHRoZSB0aGVtZSBjb2xvcnMgYW5kIHRoZSBkaXNhYmxlZCBzdGF0ZS5cbiAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICAvLyBOZWVkcyB0byBiZSByZW1vdmVkIGJlY2F1c2UgaXQgaGlkZXMgdGhlIGNoZWNrYm94IG91dGxpbmUuXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hlY2tib3g6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpIHtcbiAgICAmLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2hlY2tib3gge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAvLyBUT0RPKGthcmEpOiBSZW1vdmUgdGhpcyBzdHlsZSB3aGVuIGZpeGluZyB2ZXJ0aWNhbCBiYXNlbGluZVxuICAubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gIH1cbn1cblxuXG5cblxuXG5cbiRtYXQtY2hpcC1yZW1vdmUtZm9udC1zaXplOiAxOHB4O1xuXG5AbWl4aW4gbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRjb2xvcikge1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtY29sb3IobWF0LWNvbG9yKCRjb2xvciwgZGVmYXVsdC1jb250cmFzdCksIG1hdC1jb2xvcigkY29sb3IpKTtcbn1cblxuQG1peGluIG1hdC1jaGlwcy1jb2xvcigkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGNvbG9yOiAkZm9yZWdyb3VuZDtcblxuICAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgICBjb2xvcjogJGZvcmVncm91bmQ7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG5cbiAgLm1hdC1jaGlwLXJlbW92ZTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC41NDtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHVuc2VsZWN0ZWQtY2hpcCk7XG4gICR1bnNlbGVjdGVkLWZvcmVncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cblxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAge1xuICAgIEBpbmNsdWRlIG1hdC1jaGlwcy1jb2xvcigkdW5zZWxlY3RlZC1mb3JlZ3JvdW5kLCAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kKTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMywgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQge1xuXG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNoaXAge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcblxuICAgIC5tYXQtY2hpcC10cmFpbGluZy1pY29uLm1hdC1pY29uLFxuICAgIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAkbWF0LWNoaXAtcmVtb3ZlLWZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRhYmxlLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdGFibGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtdGFibGUgdGhlYWQsIC5tYXQtdGFibGUgdGJvZHksIC5tYXQtdGFibGUgdGZvb3QsXG4gIG1hdC1oZWFkZXItcm93LCBtYXQtcm93LCBtYXQtZm9vdGVyLXJvdyxcbiAgW21hdC1oZWFkZXItcm93XSwgW21hdC1yb3ddLCBbbWF0LWZvb3Rlci1yb3ddLFxuICAubWF0LXRhYmxlLXN0aWNreSB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgfVxuXG4gIG1hdC1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtZm9vdGVyLXJvdyxcbiAgdGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRhYmxlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRhYmxlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLXRvZGF5LWJveC1zaGFkb3ctd2lkdGg6IDFweDtcbiRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC1mYWRlLWFtb3VudDogMC42O1xuJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50OiAwLjI7XG4kbWF0LWNhbGVuZGFyLWJvZHktZm9udC1zaXplOiAxM3B4ICFkZWZhdWx0O1xuJG1hdC1jYWxlbmRhci13ZWVrZGF5LXRhYmxlLWZvbnQtc2l6ZTogMTFweCAhZGVmYXVsdDtcblxuQG1peGluIF9tYXQtZGF0ZXBpY2tlci1jb2xvcigkcGFsZXR0ZSkge1xuICAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGZhZGUtb3V0KG1hdC1jb2xvcigkcGFsZXR0ZSksICRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC1mYWRlLWFtb3VudCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwICRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC10b2RheS1ib3gtc2hhZG93LXdpZHRoXG4gICAgICAgICAgICAgICAgbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRhdGVwaWNrZXItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1jYWxlbmRhci1hcnJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC8vIFRoZSBwcmV2L25leHQgYnV0dG9ucyBuZWVkIGEgYml0IG1vcmUgc3BlY2lmaWNpdHkgdG9cbiAgLy8gYXZvaWQgYmVpbmcgb3ZlcndyaXR0ZW4gYnkgdGhlIC5tYXQtaWNvbi1idXR0b24uXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUsXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItcHJldmlvdXMtYnV0dG9uIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyLFxuICAuY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSxcbiAgLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSB7XG4gICAgJiA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAvLyBOb3RlOiB0aG91Z2ggaXQncyBub3QgdGV4dCwgdGhlIGJvcmRlciBpcyBhIGhpbnQgYWJvdXQgdGhlIGZhY3QgdGhhdCB0aGlzIGlzIHRvZGF5J3MgZGF0ZSxcbiAgICAvLyBzbyB3ZSB1c2UgdGhlIGhpbnQgY29sb3IuXG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgIGJvcmRlci1jb2xvcjogZmFkZS1vdXQobWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpLCAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQpO1xuICB9XG5cbiAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KSk7XG5cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQtdG91Y2gge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSkpO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgd2FybikpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRhdGVwaWNrZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2FsZW5kYXIge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHkge1xuICAgIGZvbnQtc2l6ZTogJG1hdC1jYWxlbmRhci1ib2R5LWZvbnQtc2l6ZTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCxcbiAgLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9uIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiAkbWF0LWNhbGVuZGFyLXdlZWtkYXktdGFibGUtZm9udC1zaXplO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1kaWFsb2ctdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigyNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1kaWFsb2ctdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWV4cGFuc2lvbi1wYW5lbC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1hY3Rpb24tcm93IHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgJjpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSkge1xuICAgICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEaXNhYmxlIHRoZSBob3ZlciBvbiB0b3VjaCBkZXZpY2VzIHNpbmNlIGl0IGNhbiBhcHBlYXIgbGlrZSBpdCBpcyBzdHVjay4gV2UgY2FuJ3QgdXNlXG4gIC8vIGBAbWVkaWEgKGhvdmVyKWAgYWJvdmUsIGJlY2F1c2UgdGhlIGRlc2t0b3Agc3VwcG9ydCBicm93c2VyIHN1cHBvcnQgaXNuJ3QgZ3JlYXQuXG4gIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pXG4gICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLFxuICAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuLy8gVGhpcyBtaXhpbiB3aWxsIGVuc3VyZSB0aGF0IGxpbmVzIHRoYXQgb3ZlcmZsb3cgdGhlIGNvbnRhaW5lciB3aWxsIGhpZGUgdGhlIG92ZXJmbG93IGFuZFxuLy8gdHJ1bmNhdGUgbmVhdGx5IHdpdGggYW4gZWxsaXBzaXMuXG5AbWl4aW4gbWF0LXRydW5jYXRlLWxpbmUoKSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vLyBNaXhpbiB0byBwcm92aWRlIGFsbCBtYXQtbGluZSBzdHlsZXMsIGNoYW5naW5nIHNlY29uZGFyeSBmb250IHNpemUgYmFzZWQgb24gd2hldGhlciB0aGUgbGlzdFxuLy8gaXMgaW4gZGVuc2UgbW9kZS5cbkBtaXhpbiBtYXQtbGluZS1iYXNlKCRzZWNvbmRhcnktZm9udC1zaXplKSB7XG4gIC5tYXQtbGluZSB7XG4gICAgQGluY2x1ZGUgbWF0LXRydW5jYXRlLWxpbmUoKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgLy8gYWxsIGxpbmVzIGJ1dCB0aGUgdG9wIGxpbmUgc2hvdWxkIGhhdmUgc21hbGxlciB0ZXh0XG4gICAgJjpudGgtY2hpbGQobisyKSB7XG4gICAgICBmb250LXNpemU6ICRzZWNvbmRhcnktZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUaGlzIG1peGluIG5vcm1hbGl6ZXMgZGVmYXVsdCBlbGVtZW50IHN0eWxlcywgZS5nLiBmb250IHdlaWdodCBmb3IgaGVhZGluZyB0ZXh0LlxuQG1peGluIG1hdC1ub3JtYWxpemUtdGV4dCgpIHtcbiAgJiA+ICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICB9XG59XG5cbi8vIFRoaXMgbWl4aW4gcHJvdmlkZXMgYmFzZSBzdHlsZXMgZm9yIHRoZSB3cmFwcGVyIGFyb3VuZCBtYXQtbGluZSBlbGVtZW50cyBpbiBhIGxpc3QuXG5AbWl4aW4gbWF0LWxpbmUtd3JhcHBlci1iYXNlKCkge1xuICBAaW5jbHVkZSBtYXQtbm9ybWFsaXplLXRleHQoKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAvLyBNdXN0IHJlbW92ZSB3cmFwcGVyIHdoZW4gbGluZXMgYXJlIGVtcHR5IG9yIGl0IHRha2VzIHVwIGhvcml6b250YWxcbiAgLy8gc3BhY2UgYW5kIHB1c2hlcyBvdGhlciBlbGVtZW50cyB0byB0aGUgcmlnaHQuXG4gICY6ZW1wdHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG5cbi8vIEluY2x1ZGUgdGhpcyBlbXB0eSBtaXhpbiBmb3IgY29uc2lzdGVuY3kgd2l0aCB0aGUgb3RoZXIgY29tcG9uZW50cy5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXRoZW1lKCR0aGVtZSkgeyB9XG5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWdyaWQtdGlsZS1oZWFkZXIsXG4gIC5tYXQtZ3JpZC10aWxlLWZvb3RlciB7XG4gICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG4vLyBJbmNsdWRlIHRoaXMgZW1wdHkgbWl4aW4gZm9yIGNvbnNpc3RlbmN5IHdpdGggdGhlIG90aGVyIGNvbXBvbmVudHMuXG5AbWl4aW4gbWF0LWljb24tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtaWNvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWljb24tdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG4vLyBSZW5kZXJzIGEgZ3JhZGllbnQgZm9yIHNob3dpbmcgdGhlIGRhc2hlZCBsaW5lIHdoZW4gdGhlIGlucHV0IGlzIGRpc2FibGVkLlxuLy8gVW5saWtlIHVzaW5nIGEgYm9yZGVyLCBhIGdyYWRpZW50IGFsbG93cyB1cyB0byBhZGp1c3QgdGhlIHNwYWNpbmcgb2YgdGhlIGRvdHRlZCBsaW5lXG4vLyB0byBtYXRjaCB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG5AbWl4aW4gbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvciAwJSwgJGNvbG9yIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIEZpZ3VyZXMgb3V0IHRoZSBjb2xvciBvZiB0aGUgcGxhY2Vob2xkZXIgZm9yIGEgZm9ybSBjb250cm9sLlxuLy8gVXNlZCBwcmltYXJpbHkgdG8gcHJldmVudCB0aGUgdmFyaW91cyBmb3JtIGNvbnRyb2xzIGZyb21cbi8vIGJlY29taW5nIG91dCBvZiBzeW5jIHNpbmNlIHRoZXNlIGNvbG9ycyBhcmVuJ3QgaW4gYSBwYWxldHRlLlxuQGZ1bmN0aW9uIF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgQHJldHVybiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC41LCAwLjQyKSk7XG59XG5cblxuLyogc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tcHJlZml4ZXMgKi9cbkBtaXhpbiB1c2VyLXNlbGVjdCgkdmFsdWUpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbW96LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1tcy11c2VyLXNlbGVjdDogJHZhbHVlO1xuICB1c2VyLXNlbGVjdDogJHZhbHVlO1xufVxuXG5AbWl4aW4gaW5wdXQtcGxhY2Vob2xkZXIge1xuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYiB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYmJpbmcge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG59XG5cbkBtaXhpbiBiYWNrZmFjZS12aXNpYmlsaXR5KCR2YWx1ZSkge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xufVxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xuXG5cblxuQG1peGluIG1hdC1pbnB1dC10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkLFxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG5cbiAgICBAaW5jbHVkZSBpbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1hY2NlbnQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCxcbiAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gIH1cbn1cblxuQG1peGluIG1hdC1pbnB1dC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBsaW5lIGFuZCB0aGUgdG9wIG9mIHRoZSBhY3R1YWwgdGV4dFxuICAvLyAoYXMgYSBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplKS5cbiAgJGxpbmUtc3BhY2luZzogKCRsaW5lLWhlaWdodCAtIDEpIC8gMjtcblxuICAvLyA8aW5wdXQ+IGVsZW1lbnRzIHNlZW0gdG8gaGF2ZSB0aGVpciBoZWlnaHQgc2V0IHNsaWdodGx5IHRvbyBsYXJnZSBvbiBTYWZhcmkgY2F1c2luZyB0aGUgdGV4dCB0b1xuICAvLyBiZSBtaXNhbGlnbmVkIHcuci50LiB0aGUgcGxhY2Vob2xkZXIuIEFkZGluZyB0aGlzIG1hcmdpbiBjb3JyZWN0cyBpdC5cbiAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIG1hcmdpbi10b3A6IC0kbGluZS1zcGFjaW5nICogMWVtO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtbGlzdC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWxpc3QsIC5tYXQtbmF2LWxpc3QsIC5tYXQtc2VsZWN0aW9uLWxpc3Qge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtbGlzdC1pdGVtLWRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpc2FibGVkLWxpc3Qtb3B0aW9uKTtcbiAgfVxuXG4gIC5tYXQtbGlzdC1vcHRpb24sXG4gIC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW0ge1xuICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnaG92ZXInKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAkZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcblxuICAubWF0LWxpc3QtaXRlbSB7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuXG4gIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cblxuICAvLyBEZWZhdWx0IGxpc3RcbiAgLm1hdC1saXN0LCAubWF0LW5hdi1saXN0LCAubWF0LXNlbGVjdGlvbi1saXN0IHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERlbnNlIGxpc3RcbiAgLm1hdC1saXN0W2RlbnNlXSwgLm1hdC1uYXYtbGlzdFtkZW5zZV0sIC5tYXQtc2VsZWN0aW9uLWxpc3RbZGVuc2VdIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LW1lbnUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1tZW51LXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAndGV4dCcpO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgJiwgJjo6YWZ0ZXIge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSAubWF0LWljb246bm90KFtjb2xvcl0pLFxuICAubWF0LW1lbnUtaXRlbS1zdWJtZW51LXRyaWdnZXI6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW06aG92ZXIsXG4gIC5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZCB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnaG92ZXInKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1tZW51LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW1lbnUtaXRlbSB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXBhZ2luYXRvci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LXBhZ2luYXRvciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1maXJzdCxcbiAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LFxuICAgIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAgIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICAgICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXBhZ2luYXRvci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1wcm9ncmVzcy1iYXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgIGZpbGw6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogbWF0LWNvbG9yKCRhY2NlbnQsIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIHtcbiAgICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGZpbGw6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wcm9ncmVzcy1iYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1zcGlubmVyLCAubWF0LXNwaW5uZXIge1xuICAgIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXJhZGlvLWNvbG9yKCRwYWxldHRlKSB7XG4gICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSxcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLFxuICAmOmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtcmFkaW8tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIG5lZWRzIGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHRoZSBjbGFzc2VzIGFib3ZlIGFyZSBjb21iaW5lZFxuICAgIC8vIChlLmcuIGAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50YCkgd2hpY2ggaW5jcmVhc2VzIHRoZWlyIHNwZWNpZmljaXR5IGEgbG90LlxuICAgIC8vIFRPRE86IGNvbnNpZGVyIG1ha2luZyB0aGUgc2VsZWN0b3JzIGludG8gZGVzY2VuZGFudHMgKGAubWF0LXByaW1hcnkgLm1hdC1yYWRpby1idXR0b25gKS5cbiAgICAmLm1hdC1yYWRpby1kaXNhYmxlZCB7XG4gICAgICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLFxuICAgICAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LFxuICAgICAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN3aXRjaCB0aGlzIHRvIGEgc29saWQgY29sb3Igc2luY2Ugd2UncmUgdXNpbmcgYG9wYWNpdHlgXG4gICAgLy8gdG8gY29udHJvbCBob3cgb3BhcXVlIHRoZSByaXBwbGUgc2hvdWxkIGJlLlxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcmFkaW8tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1zZWxlY3QtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcblxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIsIDAuMTIpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgJi5tYXQtZm9jdXNlZCB7XG4gICAgICAmLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWludmFsaWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zZWxlY3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAubWF0LXNlbGVjdCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGhlaWdodDogJGxpbmUtaGVpZ2h0ICogMWVtO1xuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNpZGVuYXYtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC8vIFdlIHVzZSBpbnZlcnQoKSBoZXJlIHRvIGhhdmUgdGhlIGRhcmtlbiB0aGUgYmFja2dyb3VuZCBjb2xvciBleHBlY3RlZCB0byBiZSB1c2VkLiBJZiB0aGVcbiAgLy8gYmFja2dyb3VuZCBpcyBsaWdodCwgd2UgdXNlIGEgZGFyayBiYWNrZHJvcC4gSWYgdGhlIGJhY2tncm91bmQgaXMgZGFyayxcbiAgLy8gd2UgdXNlIGEgbGlnaHQgYmFja2Ryb3AuXG4gICRkcmF3ZXItYmFja2Ryb3AtY29sb3I6IGludmVydChtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQsIDAuNikpO1xuICAkZHJhd2VyLWJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgJGRyYXdlci1jb250YWluZXItYmFja2dyb3VuZC1jb2xvcjogIG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICRkcmF3ZXItcHVzaC1iYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICRkcmF3ZXItc2lkZS1ib3JkZXI6IHNvbGlkIDFweCBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1jb250YWluZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZHJhd2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1kcmF3ZXItcHVzaCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLXB1c2gtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWRyYXdlci1zaWRlKSB7XG4gICAgICAvLyBUaGUgZWxldmF0aW9uIG9mIHotMTYgaXMgbm90ZWQgaW4gdGhlIGRlc2lnbiBzcGVjaWZpY2F0aW9ucy5cbiAgICAgIC8vIFNlZSBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL25hdmlnYXRpb24tZHJhd2VyLmh0bWxcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDE2LCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZHJhd2VyLXNpZGUge1xuICAgIGJvcmRlci1yaWdodDogJGRyYXdlci1zaWRlLWJvcmRlcjtcblxuICAgICYubWF0LWRyYXdlci1lbmQge1xuICAgICAgYm9yZGVyLWxlZnQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gLm1hdC1kcmF3ZXItc2lkZSB7XG4gICAgYm9yZGVyLWxlZnQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuXG4gICAgJi5tYXQtZHJhd2VyLWVuZCB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3duIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWJhY2tkcm9wLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2lkZW5hdi10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cblxuQG1peGluIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSkge1xuICAvLyBEbyBub3QgYXBwbHkgdGhlIGNoZWNrZWQgY29sb3JzIGlmIHRoZSB0b2dnbGUgaXMgZGlzYWJsZWQsIGJlY2F1c2UgdGhlXG4gIC8vIHNwZWNpZmljaXR5IHdvdWxkIGJlIHRvIGhpZ2ggZm9yIHRoZSBkaXNhYmxlZCBzdHlsZXMuXG4gICYubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIHtcbiAgICAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgICAgIC8vIE9wYWNpdHkgaXMgZGV0ZXJtaW5lZCBmcm9tIHRoZSBzcGVjcyBmb3IgdGhlIHNlbGVjdGlvbiBjb250cm9scy5cbiAgICAgIC8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9zZWxlY3Rpb24tY29udHJvbHMuaHRtbCNzcGVjc1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUsIDAuNTQpO1xuICAgIH1cblxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgLy8gU2V0IG5vIG9wYWNpdHkgZm9yIHRoZSByaXBwbGVzIGJlY2F1c2UgdGhlIHJpcHBsZSBvcGFjaXR5IHdpbGwgYmUgYWRqdXN0ZWQgZHluYW1pY2FsbHlcbiAgICAgIC8vIGJhc2VkIG9uIHRoZSB0eXBlIG9mIGludGVyYWN0aW9uIHdpdGggdGhlIHNsaWRlLXRvZ2dsZSAoZS5nLiBmb3IgaG92ZXIsIGZvY3VzKVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcms6IG1hcF9nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLy8gQ29sb3IgaHVlcyBhcmUgYmFzZWQgb24gdGhlIHNwZWNzIHdoaWNoIGJyaWVmbHkgc2hvdyB0aGUgaHVlcyB0aGF0IGFyZSBhcHBsaWVkIHRvIGEgc3dpdGNoLlxuICAvLyBUaGUgMjAxOCBzcGVjcyBubyBsb25nZXIgZGVzY3JpYmUgaG93IGRhcmsgc3dpdGNoZXMgc2hvdWxkIGxvb2sgbGlrZS4gRHVlIHRvIHRoZSBsYWNrIG9mXG4gIC8vIGluZm9ybWF0aW9uIGZvciBkYXJrIHRoZW1lZCBzd2l0Y2hlcywgd2Uga2VlcCB0aGUgb2xkIGJlaGF2aW9yIHRoYXQgaXMgYmFzZWQgb24gdGhlIHByZXZpb3VzXG4gIC8vIHNwZWNpZmljYXRpb25zLiBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvc2VsZWN0aW9uLWNvbnRyb2xzLmh0bWwjc3BlY3NcbiAgJHRodW1iLXVuY2hlY2tlZC1odWU6IGlmKCRpcy1kYXJrLCA0MDAsIDUwKTtcbiAgJHRodW1iLWNoZWNrZWQtaHVlOiBpZigkaXMtZGFyaywgMjAwLCBkZWZhdWx0KTtcbiAgJHRodW1iLWRpc2FibGVkLWh1ZTogaWYoJGlzLWRhcmssIDgwMCwgNDAwKTtcblxuICAkYmFyLXVuY2hlY2tlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICRiYXItZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLCByZ2JhKHdoaXRlLCAwLjEyKSwgcmdiYShibGFjaywgMC4xKSk7XG5cbiAgJHJpcHBsZS11bmNoZWNrZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJGFjY2VudCwgJHRodW1iLWNoZWNrZWQtaHVlKTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkcHJpbWFyeSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHdhcm4sICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZGlzYWJsZWQge1xuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICAgIC8vIFRoZSB0aHVtYiBvZiB0aGUgc2xpZGUtdG9nZ2xlIGFsd2F5cyB1c2VzIHRoZSBodWUgNDAwIG9mIHRoZSBncmV5IHBhbGV0dGUgaW4gZGFya1xuICAgICAgLy8gb3IgbGlnaHQgdGhlbWVzLiBTaW5jZSB0aGlzIGlzIHZlcnkgc3BlY2lmaWMgdG8gdGhlIHNsaWRlLXRvZ2dsZSBjb21wb25lbnQsIHdlJ3JlIG5vdFxuICAgICAgLy8gcHJvdmlkaW5nIGl0IGluIHRoZSBiYWNrZ3JvdW5kIHBhbGV0dGUuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJG1hdC1ncmV5LCAkdGh1bWItZGlzYWJsZWQtaHVlKTtcbiAgICB9XG4gICAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXItZGlzYWJsZWQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDEsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRtYXQtZ3JleSwgJHRodW1iLXVuY2hlY2tlZC1odWUpO1xuICB9XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFyLXVuY2hlY2tlZC1jb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRwYWxldHRlKSB7XG4gIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4gIC5tYXQtc2xpZGVyLXRodW1iLFxuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGVyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAkbWF0LXNsaWRlci1vZmYtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYtYWN0aXZlKTtcbiAgJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1taW4pO1xuICAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItZm9jdXMtcmluZy1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGRlZmF1bHQsIDAuMik7XG4gICRtYXQtc2xpZGVyLWZvY3VzLXJpbmctbWluLXZhbHVlLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIDAuMTIpO1xuICAkbWF0LXNsaWRlci10aWNrLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIDAuNyk7XG4gICRtYXQtc2xpZGVyLXRpY2stc2l6ZTogMnB4O1xuXG4gIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LWFjY2VudCB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkYWNjZW50KTtcbiAgfVxuXG4gIC5tYXQtd2FybiB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkd2Fybik7XG4gIH1cblxuICAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1mb2N1cy1yaW5nLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1zbGlkZXI6aG92ZXIsXG4gIC5jZGstZm9jdXNlZCB7XG4gICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1kaXNhYmxlZCB7XG4gICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCxcbiAgICAubWF0LXNsaWRlci10cmFjay1maWxsLFxuICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLW1pbi12YWx1ZSB7XG4gICAgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1mb2N1cy1yaW5nLW1pbi12YWx1ZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyB7XG4gICAgICAubWF0LXNsaWRlci10aHVtYixcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItY29sb3I7XG4gICAgICB9XG5cbiAgICAgICYuY2RrLWZvY3VzZWQge1xuICAgICAgICAubWF0LXNsaWRlci10aHVtYixcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWxhYmVsLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykge1xuICAgICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmLmNkay1mb2N1c2VkIHtcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXIge1xuICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItdGljay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gICAgLy8gRmlyZWZveCBkb2Vzbid0IGRyYXcgdGhlIGdyYWRpZW50IGNvcnJlY3RseSB3aXRoICd0byByaWdodCdcbiAgICAvLyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEzMTQzMTkpLlxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gIH1cblxuICAubWF0LXNsaWRlci12ZXJ0aWNhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1zdGVwcGVyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtc3RlcC1oZWFkZXIge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLFxuICAgIC5tYXQtc3RlcC1vcHRpb25hbCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1hY3RpdmUge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLCAubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gIH1cblxuICAubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3JlIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zdGVwcGVyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXN0ZXBwZXItdmVydGljYWwsIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH07XG4gIH1cblxuICAubWF0LXN0ZXAtc3ViLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbC1zZWxlY3RlZCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9O1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc29ydC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcbiAgICAvLyBCZWNhdXNlIHRoZSBhcnJvdyBpcyBtYWRlIHVwIG9mIG11bHRpcGxlIGVsZW1lbnRzIHRoYXQgYXJlIHN0YWNrZWQgb24gdG9wIG9mIGVhY2ggb3RoZXIsXG4gICAgLy8gd2UgY2FuJ3QgdXNlIHRoZSBzZW1pLXRyYXNwYXJlbnQgY29sb3IgZnJvbSB0aGUgdGhlbWUgZGlyZWN0bHkuIFdlIGNvbnZlcnQgaXQgaW50byBhIHNvbGlkXG4gICAgLy8gY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kIHVzaW5nIHRoZSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlXG4gICAgLy8gcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kIHdoZW4gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuXG4gICAgJHRhYmxlLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgICAkdGV4dC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgJHRleHQtb3BhY2l0eTogb3BhY2l0eSgkdGV4dC1jb2xvcik7XG4gICAgY29sb3I6IG1peCgkdGFibGUtYmFja2dyb3VuZCwgcmdiYSgkdGV4dC1jb2xvciwgMSksICgxIC0gJHRleHQtb3BhY2l0eSkgKiAxMDAlKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNvcnQtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRhYnMtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaGVhZGVyLWJvcmRlcjogMXB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC10YWItbmF2LWJhcixcbiAgLm1hdC10YWItaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAkaGVhZGVyLWJvcmRlcjtcbiAgfVxuXG4gIC5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciB7XG4gICAgLm1hdC10YWItbmF2LWJhcixcbiAgICAubWF0LXRhYi1oZWFkZXIge1xuICAgICAgYm9yZGVyLXRvcDogJGhlYWRlci1ib3JkZXI7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAvLyBSZW1vdmUgaGVhZGVyIGJvcmRlciB3aGVuIHRoZXJlIGlzIGEgYmFja2dyb3VuZCBjb2xvclxuICAubWF0LXRhYi1ncm91cFtjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIC5tYXQtdGFiLWhlYWRlcixcbiAgLm1hdC10YWItbmF2LWJhcltjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cCwgLm1hdC10YWItbmF2LWJhciB7XG4gICAgJHRoZW1lLWNvbG9yczogKFxuICAgICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgICB3YXJuOiAkd2FyblxuICAgICk7XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IHRoZSBmb3JlZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzXG4gICAgICAmLm1hdC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IpO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIGluayBiYXIgd2hlbiBiYWNrZ3JvdW5kIGNvbG9yIGlzIHRoZSBzYW1lXG4gICAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkdGhlbWUtY29sb3JzIHtcbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzIGFuZCBvdmVycmlkZSBmb2N1cyBjb2xvclxuICAgICAgJi5tYXQtYmFja2dyb3VuZC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFicy1iYWNrZ3JvdW5kKCRjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LWluay1iYXIoJGNvbG9yLCAkaHVlOiBkZWZhdWx0KSB7XG4gIC5tYXQtaW5rLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRjb2xvciwgJGh1ZSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCR0YWItZm9jdXMtY29sb3IpIHtcbiAgLm1hdC10YWItbGFiZWwsXG4gIC5tYXQtdGFiLWxpbmsge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcbiAgICAgICY6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkdGFiLWZvY3VzLWNvbG9yLCBsaWdodGVyLCAwLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWJzLWJhY2tncm91bmQoJGJhY2tncm91bmQtY29sb3IpIHtcbiAgLy8gU2V0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSB0YWIgZ3JvdXBcbiAgLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1saW5rcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yKTtcbiAgfVxuXG4gIC8vIFNldCBsYWJlbHMgdG8gY29udHJhc3QgYWdhaW5zdCBiYWNrZ3JvdW5kXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldCBwYWdpbmF0aW9uIGNoZXZyb25zIHRvIGNvbnRyYXN0IGJhY2tncm91bmRcbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuNCk7XG4gIH1cblxuICAvLyBTZXQgcmlwcGxlcyBjb2xvciB0byBiZSB0aGUgY29udHJhc3QgY29sb3Igb2YgdGhlIG5ldyBiYWNrZ3JvdW5kLiBPdGhlcndpc2UgdGhlIHJpcHBsZVxuICAvLyBjb2xvciB3aWxsIGJlIGJhc2VkIG9uIHRoZSBhcHAgYmFja2dyb3VuZCBjb2xvci5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEyKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRhYnMtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdGFiLWdyb3VwIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIF9tYXQtdG9vbGJhci1jb2xvcigkcGFsZXR0ZSkge1xuICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbn1cblxuQG1peGluIF9tYXQtdG9vbGJhci1mb3JtLWZpZWxkLW92ZXJyaWRlcyB7XG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gIC5tYXQtc2VsZWN0LXZhbHVlLFxuICAubWF0LXNlbGVjdC1hcnJvdyxcbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2xiYXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBhcHAtYmFyKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItZm9ybS1maWVsZC1vdmVycmlkZXM7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRvb2xiYXIsXG4gIC5tYXQtdG9vbGJhciBoMSxcbiAgLm1hdC10b29sYmFyIGgyLFxuICAubWF0LXRvb2xiYXIgaDMsXG4gIC5tYXQtdG9vbGJhciBoNCxcbiAgLm1hdC10b29sYmFyIGg1LFxuICAubWF0LXRvb2xiYXIgaDYge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cblxuXG5cblxuJG1hdC10b29sdGlwLXRhcmdldC1oZWlnaHQ6IDIycHg7XG4kbWF0LXRvb2x0aXAtZm9udC1zaXplOiAxMHB4O1xuJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc6ICgkbWF0LXRvb2x0aXAtdGFyZ2V0LWhlaWdodCAtICRtYXQtdG9vbHRpcC1mb250LXNpemUpIC8gMjtcblxuJG1hdC10b29sdGlwLWhhbmRzZXQtdGFyZ2V0LWhlaWdodDogMzBweDtcbiRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZTogMTRweDtcbiRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc6XG4gICAgKCRtYXQtdG9vbHRpcC1oYW5kc2V0LXRhcmdldC1oZWlnaHQgLSAkbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemUpIC8gMjtcblxuQG1peGluIG1hdC10b29sdGlwLXRoZW1lKCR0aGVtZSkge1xuICAubWF0LXRvb2x0aXAge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkbWF0LWdyZXksIDcwMCwgMC45KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2x0aXAtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICBmb250LXNpemU6ICRtYXQtdG9vbHRpcC1mb250LXNpemU7XG4gICAgcGFkZGluZy10b3A6ICRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIHBhZGRpbmctYm90dG9tOiAkbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZztcbiAgfVxuXG4gIC5tYXQtdG9vbHRpcC1oYW5kc2V0IHtcbiAgICBmb250LXNpemU6ICRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZTtcbiAgICBwYWRkaW5nLXRvcDogJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZztcbiAgICBwYWRkaW5nLWJvdHRvbTogJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZztcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcblxuICAubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xuICAgIC8vIFVzZSB0aGUgcHJpbWFyeSB0ZXh0IG9uIHRoZSBkYXJrIHRoZW1lLCBldmVuIHRob3VnaCB0aGUgbGlnaHRlciBvbmUgdXNlc1xuICAgIC8vIGEgc2Vjb25kYXJ5LCBiZWNhdXNlIHRoZSBjb250cmFzdCBvbiB0aGUgbGlnaHQgcHJpbWFyeSB0ZXh0IGlzIHBvb3IuXG4gICAgY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkZGFyay1wcmltYXJ5LXRleHQsICRsaWdodC1zZWNvbmRhcnktdGV4dCk7XG4gICAgYmFja2dyb3VuZDogaWYoJGlzLWRhcmstdGhlbWUsIG1hcC1nZXQoJG1hdC1ncmV5LCA1MCksICMzMjMyMzIpO1xuXG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oNiwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gICAgY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCBpbmhlcml0LCBtYXQtY29sb3IoJGFjY2VudCkpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNpbXBsZS1zbmFja2JhciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogaW5oZXJpdDtcbiAgICAgIHNpemU6IGluaGVyaXQ7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBmaWxsIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1maWxsLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRmaWxsLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMSwgMC4wNCkpO1xuICAkZmlsbC1kaXNhYmxlZC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjA1LCAwLjAyKSk7XG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNSwgMC40MikpO1xuICAkbGFiZWwtZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpbGwtYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaWxsLWRpc2FibGVkLWJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBjb2xvcjogJGxhYmVsLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZSlcbiAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1maWxsLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRvcCBvZiB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nLXRvcDogMC4yNWVtO1xuICAvLyBUaGUgcGFkZGluZyBiZWxvdyB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nLWJvdHRvbTogMC43NWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgYW1vdW50IHdlIG9mZnNldCB0aGUgbGFiZWwgZnJvbSB0aGUgaW5wdXQgdGV4dCBpbiB0aGUgZmlsbCBhcHBlYXJhbmNlLlxuICAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDogLTAuNWVtO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZy10b3AgMCAkaW5maXgtcGFkZGluZy1ib3R0b20gMDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nLXRvcDtcbiAgICAgIG1hcmdpbi10b3A6ICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0O1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZy10b3AgKyAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLXRvcCArICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgbGVnYWN5IGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJGxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjQyKSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWhpbnQge1xuICAgICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICAvLyBXZSB1c2UgcGVyc3BlY3RpdmUgdG8gZml4IHRoZSB0ZXh0IGJsdXJyaW5lc3MgYXMgZGVzY3JpYmVkIGhlcmU6XG4gIC8vIGh0dHA6Ly93d3cudXNlcmFnZW50bWFuLmNvbS9ibG9nLzIwMTQvMDUvMDQvZml4aW5nLXR5cG9ncmFwaHktaW5zaWRlLW9mLTItZC1jc3MtdHJhbnNmb3Jtcy9cbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZykgc2NhbGUoJGZvbnQtc2NhbGUpIHBlcnNwZWN0aXZlKDEwMHB4KVxuICB0cmFuc2xhdGVaKDAuMDAxcHggKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSk7XG4gIC8vIFRoZSB0cmlja3MgYWJvdmUgdXNlZCB0byBzbW9vdGggb3V0IHRoZSBhbmltYXRpb24gb24gY2hyb21lIGFuZCBmaXJlZm94IGFjdHVhbGx5IG1ha2UgdGhpbmdzXG4gIC8vIHdvcnNlIG9uIElFLCBzbyB3ZSBkb24ndCBpbmNsdWRlIHRoZW0gaW4gdGhlIElFIHZlcnNpb24uXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSlcbiAgICAgICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcblxuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG4vLyBTYW1lIGFzIG1peGluIGFib3ZlLCBidXQgb21pdHMgdGhlIHRyYW5zbGF0ZVogZm9yIHByaW50aW5nIHB1cnBvc2VzLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICAvLyBUaGlzIHJlc3VsdHMgaW4gYSBzbWFsbCBqaXR0ZXIgYWZ0ZXIgdGhlIGxhYmVsIGZsb2F0cyBvbiBGaXJlZm94LCB3aGljaCB0aGVcbiAgLy8gdHJhbnNsYXRlWiBmaXhlcy5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpXG4gICAgICAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIC8vIFRoZSB0cmlja3MgYWJvdmUgdXNlZCB0byBzbW9vdGggb3V0IHRoZSBhbmltYXRpb24gb24gY2hyb21lIGFuZCBmaXJlZm94IGFjdHVhbGx5IG1ha2UgdGhpbmdzXG4gIC8vIHdvcnNlIG9uIElFLCBzbyB3ZSBkb24ndCBpbmNsdWRlIHRoZW0gaW4gdGhlIElFIHZlcnNpb24uXG4gICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIHRvcCBvZiB0aGUgbGluZSBhbmQgdGhlIHRvcCBvZiB0aGUgYWN0dWFsIHRleHRcbiAgLy8gKGFzIGEgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZSkuXG4gICRsaW5lLXNwYWNpbmc6ICgkbGluZS1oZWlnaHQgLSAxKSAvIDI7XG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRoZSBpbmZpeC4gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCBzZWVtIHRvIG1lYXN1cmUgZnJvbSB0aGUgZWRnZVxuICAvLyBvZiB0aGUgdGV4dCBpdHNlbGYsIG5vdCB0aGUgZWRnZSBvZiB0aGUgbGluZTsgdGhlcmVmb3JlIHdlIHN1YnRyYWN0IG9mZiB0aGUgbGluZSBzcGFjaW5nLlxuICAkaW5maXgtcGFkZGluZzogMC41ZW0gLSAkbGluZS1zcGFjaW5nO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS4gV2UgYWdhaW4gbmVlZCB0byBzdWJ0cmFjdCBvZmYgdGhlIGxpbmUgc3BhY2luZyBzaW5jZSB0aGUgbW9ja3MgbWVhc3VyZSB0byB0aGUgZWRnZSBvZiB0aGVcbiAgLy8gdGV4dCwgbm90IHRoZSAgZWRnZSBvZiB0aGUgbGluZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZSAtICgkbGluZS1zcGFjaW5nICogMik7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIHdpbGwgcmVseSBvbiBBdXRvZmlsbE1vbml0b3IgaW5zdGVhZC5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgLy8gV2Ugd2FudCB0aGUgdW5kZXJsaW5lIHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQuXG4gICAgICBib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgICBtYXJnaW4tdG9wOiAkc3Vic2NyaXB0LW1hcmdpbi10b3A7XG5cbiAgICAgIC8vIFdlIHdhbnQgdGhlIHN1YnNjcmlwdCB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50IChhZGp1c3RlZCBmb3IgdGhlIHNtYWxsZXIgZm9udCBzaXplKTtcbiAgICAgIHRvcDogY2FsYygxMDAlIC0gI3skd3JhcHBlci1wYWRkaW5nLWJvdHRvbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZX0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRyYW5zbGF0ZVogY2F1c2VzIHRoZSBsYWJlbCB0byBub3QgYXBwZWFyIHdoaWxlIHByaW50aW5nLCBzbyB3ZSBvdmVycmlkZSBpdCB0byBub3RcbiAgLy8gYXBwbHkgdHJhbnNsYXRlWiB3aGlsZSBwcmludGluZ1xuICBAbWVkaWEgcHJpbnQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIHdpbGwgcmVseSBvbiBBdXRvZmlsbE1vbml0b3IgaW5zdGVhZC5cbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgb3V0bGluZSBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJGxhYmVsLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAkb3V0bGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC4zLCAwLjEyKSk7XG4gICRvdXRsaW5lLWNvbG9yLWhvdmVyOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAxLCAwLjg3KSk7XG4gICRvdXRsaW5lLWNvbG9yLXByaW1hcnk6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICRvdXRsaW5lLWNvbG9yLWFjY2VudDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAkb3V0bGluZS1jb2xvci13YXJuOiBtYXQtY29sb3IoJHdhcm4pO1xuICAkb3V0bGluZS1jb2xvci1kaXNhYmxlZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC4xNSwgMC4wNikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItaG92ZXI7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9jdXNlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1wcmltYXJ5O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItYWNjZW50O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xhc3MgcmVwZWF0ZWQgc28gdGhhdCBydWxlIGlzIHNwZWNpZmljIGVub3VnaCB0byBvdmVycmlkZSBmb2N1c2VkIGFjY2VudCBjb2xvciBjYXNlLlxuICAgICYubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBjb2xvcjogJGxhYmVsLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1kaXNhYmxlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZSlcbiAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtb3V0bGluZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgcGFkZGluZyBhYm92ZSBhbmQgYmVsb3cgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZzogMWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgYW1vdW50IHdlIG9mZnNldCB0aGUgbGFiZWwgZnJvbSB0aGUgaW5wdXQgdGV4dCBpbiB0aGUgb3V0bGluZSBhcHBlYXJhbmNlLlxuICAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDogLTAuMjVlbTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMCAkaW5maXgtcGFkZGluZyAwO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gICAgICBtYXJnaW4tdG9wOiAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nICsgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBzdGFuZGFyZCBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjQyKSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgQGluY2x1ZGUgbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCR1bmRlcmxpbmUtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdHlwb2dyYXBoeSgkY29uZmlnKSB7fVxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgYXBwbHkgdG8gYWxsIGFwcGVhcmFuY2VzIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gIC8vIExhYmVsIGNvbG9ycy4gUmVxdWlyZWQgaXMgdXNlZCBmb3IgdGhlIGAqYCBzdGFyIHNob3duIGluIHRoZSBsYWJlbC5cbiAgJGxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjYpKTtcbiAgJGZvY3VzZWQtbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICRyZXF1aXJlZC1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuXG4gIC8vIFVuZGVybGluZSBjb2xvcnMuXG4gICR1bmRlcmxpbmUtY29sb3ItYmFzZTogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMSwgMC44NykpO1xuICAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAkdW5kZXJsaW5lLWNvbG9yLXdhcm46IG1hdC1jb2xvcigkd2Fybik7XG4gICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWhpbnQge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGZvY3VzZWQtbGFiZWwtY29sb3I7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgY29sb3I6ICRyZXF1aXJlZC1sYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYmFzZTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG5cbiAgICAgICYubWF0LWFjY2VudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0eWxpbmcgZm9yIHRoZSBlcnJvciBzdGF0ZSBvZiB0aGUgZm9ybSBmaWVsZC4gTm90ZSB0aGF0IHdoaWxlIHRoZSBzYW1lIGNhbiBiZVxuICAvLyBhY2hpZXZlZCB3aXRoIHRoZSBuZy0qIGNsYXNzZXMsIHdlIHVzZSB0aGlzIGFwcHJvYWNoIGluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IHRoZSBzYW1lXG4gIC8vIGxvZ2ljIGlzIHVzZWQgdG8gc3R5bGUgdGhlIGVycm9yIHN0YXRlIGFuZCB0byBzaG93IHRoZSBlcnJvciBtZXNzYWdlcy5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuXG4gICAgICAmLm1hdC1hY2NlbnQsXG4gICAgICAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1lcnJvciB7XG4gICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1maWxsLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUoJHRoZW1lKTtcbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZSlcbiAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlOiAxLjU7XG5cbiAgLy8gVGhlIHBhZGRpbmcgb24gdGhlIGluZml4LiBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZS5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBGb250IHNpemUgdG8gdXNlIGZvciB0aGUgbGFiZWwgYW5kIHN1YnNjcmlwdCB0ZXh0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2l6ZTogJHN1YnNjcmlwdC1mb250LXNjYWxlICogMTAwJTtcbiAgLy8gRm9udCBzaXplIHRvIHVzZSBmb3IgdGhlIGZvciB0aGUgcHJlZml4IGFuZCBzdWZmaXggaWNvbnMuXG4gICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zaXplOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxMDAlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGlucHV0KTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcHJlZml4LFxuICAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICAvLyBBbGxvdyBpY29ucyBpbiBhIHByZWZpeCBvciBzdWZmaXggdG8gYWRhcHQgdG8gdGhlIGNvcnJlY3Qgc2l6ZS5cbiAgICAubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2l6ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgaWNvbiBidXR0b25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbi1idXR0b24ge1xuICAgICAgaGVpZ2h0OiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG4gICAgICB3aWR0aDogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMWVtO1xuXG4gICAgICAubWF0LWljb24ge1xuICAgICAgICBoZWlnaHQ6ICRsaW5lLWhlaWdodCAqIDFlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgLy8gVGhyb3dzIG9mZiB0aGUgYmFzZWxpbmUgaWYgd2UgZG8gaXQgYXMgYSByZWFsIG1hcmdpbiwgc28gd2UgZG8gaXQgYXMgYSBib3JkZXIgaW5zdGVhZC5cbiAgICBib3JkZXItdG9wOiAkaW5maXgtbWFyZ2luLXRvcCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG5cbiAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gICAgdG9wOiAtJGluZml4LW1hcmdpbi10b3A7XG4gICAgcGFkZGluZy10b3A6ICRpbmZpeC1tYXJnaW4tdG9wO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAvLyBXZSB3YW50IHRoZSB1bmRlcmxpbmUgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQuXG4gICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2l6ZTtcbiAgICBtYXJnaW4tdG9wOiAkc3Vic2NyaXB0LW1hcmdpbi10b3A7XG5cbiAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQgKGFkanVzdGVkIGZvciB0aGUgc21hbGxlciBmb250IHNpemUpO1xuICAgIHRvcDogY2FsYygxMDAlIC0gI3skd3JhcHBlci1wYWRkaW5nLWJvdHRvbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZX0pO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS10eXBvZ3JhcGh5KCRjb25maWcpO1xufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdHJlZS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRyZWUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtdHJlZS1ub2RlLFxuICAubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdHJlZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10cmVlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG4vLyBJbmNsdWRlcyBhbGwgb2YgdGhlIHR5cG9ncmFwaGljIHN0eWxlcy5cbkBtaXhpbiBhbmd1bGFyLW1hdGVyaWFsLXR5cG9ncmFwaHkoJGNvbmZpZzogbnVsbCkge1xuICBAaWYgJGNvbmZpZyA9PSBudWxsIHtcbiAgICAkY29uZmlnOiBtYXQtdHlwb2dyYXBoeS1jb25maWcoKTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYmFzZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1ib3R0b20tc2hlZXQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2FyZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10YWJsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGF0ZXBpY2tlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGlhbG9nLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWdyaWQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtaWNvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtaW5wdXQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW1lbnUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXBhZ2luYXRvci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3MtYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1yYWRpby10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2VsZWN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zaWRlbmF2LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZS10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc3RlcHBlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc29ydC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdGFicy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdG9vbGJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdG9vbHRpcC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtb3B0aW9uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1vcHRncm91cC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc25hY2stYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10cmVlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG59XG5cblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBhcmUgbm90IHRoZW1lLWRlcGVuZGVudC5cbkBtaXhpbiBtYXQtY29yZSgkdHlwb2dyYXBoeS1jb25maWc6IG51bGwpIHtcbiAgQGluY2x1ZGUgYW5ndWxhci1tYXRlcmlhbC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5LWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1yaXBwbGUoKTtcbiAgQGluY2x1ZGUgY2RrLWExMXkoKTtcbiAgQGluY2x1ZGUgY2RrLW92ZXJsYXkoKTtcbiAgQGluY2x1ZGUgY2RrLXRleHQtZmllbGQoKTtcbn1cblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBkZXBlbmQgb24gdGhlIHRoZW1lLlxuQG1peGluIG1hdC1jb3JlLXRoZW1lKCR0aGVtZSkge1xuICBAaW5jbHVkZSBtYXQtcmlwcGxlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1vcHRpb24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGdyb3VwLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wc2V1ZG8tY2hlY2tib3gtdGhlbWUoJHRoZW1lKTtcblxuICAvLyBQcm92aWRlcyBleHRlcm5hbCBDU1MgY2xhc3NlcyBmb3IgZWFjaCBlbGV2YXRpb24gdmFsdWUuIEVhY2ggQ1NTIGNsYXNzIGlzIGZvcm1hdHRlZCBhc1xuICAvLyBgbWF0LWVsZXZhdGlvbi16JHpWYWx1ZWAgd2hlcmUgYCR6VmFsdWVgIGNvcnJlc3BvbmRzIHRvIHRoZSB6LXNwYWNlIHRvIHdoaWNoIHRoZSBlbGVtZW50IGlzXG4gIC8vIGVsZXZhdGVkLlxuICBAZm9yICR6VmFsdWUgZnJvbSAwIHRocm91Z2ggMjQge1xuICAgIC4jeyRfbWF0LWVsZXZhdGlvbi1wcmVmaXh9I3skelZhbHVlfSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdyYXBwZXIgZWxlbWVudCB0aGF0IHByb3ZpZGVzIHRoZSB0aGVtZSBiYWNrZ3JvdW5kIHdoZW4gdGhlIHVzZXIncyBjb250ZW50IGlzbid0XG4gIC8vIGluc2lkZSBvZiBhIGBtYXQtc2lkZW5hdi1jb250YWluZXJgLiBOb3RlIHRoYXQgd2UgbmVlZCB0byBleGNsdWRlIHRoZSBhbXBlcnNhbmRcbiAgLy8gc2VsZWN0b3IgaW4gY2FzZSB0aGUgbWl4aW4gaXMgaW5jbHVkZWQgYXQgdGhlIHRvcCBsZXZlbC5cbiAgLm1hdC1hcHAtYmFja2dyb3VuZCN7aWYoJiwgJywgJi5tYXQtYXBwLWJhY2tncm91bmQnLCAnJyl9IHtcbiAgICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAgICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLy8gTWFya2VyIHRoYXQgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgdXNlciBoYXMgYWRkZWQgYSB0aGVtZSB0byB0aGVpciBwYWdlLlxuICBAYXQtcm9vdCB7XG4gICAgLm1hdC10aGVtZS1sb2FkZWQtbWFya2VyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZGl2aWRlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWRpdmlkZXIge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWRpdmlkZXItdmVydGljYWwge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBDcmVhdGUgYSB0aGVtZS5cbkBtaXhpbiBhbmd1bGFyLW1hdGVyaWFsLXRoZW1lKCR0aGVtZSkge1xuICBAaW5jbHVkZSBtYXQtY29yZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1iYWRnZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYm90dG9tLXNoZWV0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10b2dnbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNhcmQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNoZWNrYm94LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdGFibGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRhdGVwaWNrZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRpYWxvZy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGl2aWRlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZXhwYW5zaW9uLXBhbmVsLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1ncmlkLWxpc3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWljb24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWlucHV0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1saXN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1tZW51LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wYWdpbmF0b3ItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLWJhci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcmFkaW8tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNlbGVjdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2lkZW5hdi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGUtdG9nZ2xlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXN0ZXBwZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNvcnQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRhYnMtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2xiYXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2x0aXAtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRyZWUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci10aGVtZSgkdGhlbWUpO1xufVxuIiwiQGltcG9ydCAnc3JjL0BmdXNlL3Njc3MvZnVzZSc7XHJcblxyXG4uaGVhZGVyLTEtYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUI5QjlCO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9iY2tfMS5wbmcnKSBuby1yZXBlYXQ7XHJcbn1cclxuLmhlYWRlci0yLWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlCOUI5QjtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvYmNrXzIyLnBuZycpIG5vLXJlcGVhdDtcclxuICAgIG1pbi1oZWlnaHQ6MTIwcHggIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6MTIwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDoxMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXN0IHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvYmNrXzIxLnBuZycpIG5vLXJlcGVhdDtcclxufVxyXG5cclxuI3Byb2R1Y3RzIHtcclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAuc2VhcmNoLWlucHV0LXdyYXBwZXIge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHhzKSB7XHJcbiAgICAgICAgLy8gICAgIGhlaWdodDogMTc2cHggIWltcG9ydGFudDtcclxuICAgICAgICAvLyAgICAgbWluLWhlaWdodDogMTc2cHggIWltcG9ydGFudDtcclxuICAgICAgICAvLyAgICAgbWF4LWhlaWdodDogMTc2cHggIWltcG9ydGFudDtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC5zZWxlY3RlZC1wcm9qZWN0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgbGVmdDo0MnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2plY3Qtc2VsZWN0b3Ige1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbiAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1hdC10YWItZ3JvdXAge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtdGFiLWxhYmVsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hdC10YWItbGFiZWwtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gLnRvcC1iZyB7XHJcbiAgICAvLyAgICAgLy8gQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHhzKSB7XHJcbiAgICAvLyAgICAgLy8gICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICAvLyAgICAgLy8gfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC5wcm9kdWN0cy10YWJsZSB7XHJcbiAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgICAgLm1hdC1oZWFkZXItcm93IHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNjRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9kdWN0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYXQtY2VsbCB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYXQtY29sdW1uLWlkIHtcclxuICAgICAgICAgICAgZmxleDogMCAxIDg0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWF0LWNvbHVtbi1pbWFnZSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDAgMSA4NHB4O1xyXG5cclxuICAgICAgICAgICAgLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUycHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYXQtY29sdW1uLWJ1dHRvbnMge1xyXG4gICAgICAgICAgICBmbGV4OiAwIDEgODBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5xdWFudGl0eS1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG5cclxuICAgICAgICAgICAgJiArIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGl2ZS1pY29uIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3Bpbm5lci1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDoxMDAlO1xyXG5cclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/apps/referential/operations/operations-main/operations-main.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operations-main/operations-main.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: OperationsMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsMainComponent", function() { return OperationsMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OperationsMainComponent = /** @class */ (function () {
    function OperationsMainComponent(_activatedRoute, _router, _fuseConfigService) {
        var _this = this;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._fuseConfigService = _fuseConfigService;
        this.subject = 'operation-type-families';
        this.subjectTitle = 'Catégorie d\'opérations';
        this.headerPanelIsVisible = false;
        this._activatedRoute.url.subscribe(function (url) {
            _this.subject = url[0].path;
            switch (_this.subject) {
                case 'operation-type-families':
                    _this.subjectTitle = 'Catégorie d\'opérations';
                    break;
                case 'operation-types':
                    _this.subjectTitle = 'Type d\'opérations';
                    break;
                case 'operations':
                    _this.subjectTitle = 'Opérations';
                    break;
            }
        });
        //prendre en compte le fuseConfig
        this._fuseConfigService.config
            .subscribe(function (config) {
            // Update the stored config
            _this.fuseConfig = config;
        });
    }
    OperationsMainComponent.prototype.ngOnInit = function () {
        this.onHeaderPanelClick();
    };
    OperationsMainComponent.prototype.Add = function () {
        this._router.navigate(["apps/referential/operations/" + this.subject + "/new"]);
    };
    OperationsMainComponent.prototype.onHeaderPanelClick = function () {
        this.headerPanelIsVisible = this.headerPanelIsVisible ? false : true;
        this.headerPanelIcon = this.headerPanelIsVisible ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
        this.fuseConfig.layout.toolbar.hidden = !this.headerPanelIsVisible;
        this._fuseConfigService.setConfig(this.fuseConfig);
    };
    OperationsMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'operations-main',
            template: __webpack_require__(/*! ./operations-main.component.html */ "./src/app/main/apps/referential/operations/operations-main/operations-main.component.html"),
            styles: [__webpack_require__(/*! ./operations-main.component.scss */ "./src/app/main/apps/referential/operations/operations-main/operations-main.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_3__["FuseConfigService"]])
    ], OperationsMainComponent);
    return OperationsMainComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/referential/operations/operations.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/apps/referential/operations/operations.module.ts ***!
  \***********************************************************************/
/*! exports provided: OperationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsModule", function() { return OperationsModule; });
/* harmony import */ var app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _operation_operation_list_operation_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operation/operation-list/operation-list.component */ "./src/app/main/apps/referential/operations/operation/operation-list/operation-list.component.ts");
/* harmony import */ var _operation_type_family_operation_type_family_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operation-type-family/operation-type-family.service */ "./src/app/main/apps/referential/operations/operation-type-family/operation-type-family.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var app_main_ngxs_referential_operation_type_family_operation_type_family_list_filter_operation_type_family_list_filter_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type-family/operation-type-family-list-filter/operation-type-family-list-filter.state */ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list-filter/operation-type-family-list-filter.state.ts");
/* harmony import */ var app_main_ngxs_referential_operation_type_family_operation_type_family_list_operation_type_family_list_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type-family/operation-type-family-list/operation-type-family-list.state */ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-list/operation-type-family-list.state.ts");
/* harmony import */ var _operation_type_family_operation_type_family_list_operation_type_family_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./operation-type-family/operation-type-family-list/operation-type-family-list.component */ "./src/app/main/apps/referential/operations/operation-type-family/operation-type-family-list/operation-type-family-list.component.ts");
/* harmony import */ var _operation_type_operation_type_list_operation_type_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./operation-type/operation-type-list/operation-type-list.component */ "./src/app/main/apps/referential/operations/operation-type/operation-type-list/operation-type-list.component.ts");
/* harmony import */ var _operation_type_family_operation_type_family_detail_operation_type_family_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./operation-type-family/operation-type-family-detail/operation-type-family-detail.component */ "./src/app/main/apps/referential/operations/operation-type-family/operation-type-family-detail/operation-type-family-detail.component.ts");
/* harmony import */ var app_main_ngxs_referential_operation_type_family_operation_type_family_detail_operation_type_family_detail_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type-family/operation-type-family-detail/operation-type-family-detail.state */ "./src/app/main/_ngxs/referential/operation-type-family/operation-type-family-detail/operation-type-family-detail.state.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_main_ngxs_referential_operation_type_operation_type_list_filter_operation_type_list_filter_state__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type/operation-type-list-filter/operation-type-list-filter.state */ "./src/app/main/_ngxs/referential/operation-type/operation-type-list-filter/operation-type-list-filter.state.ts");
/* harmony import */ var app_main_ngxs_referential_operation_type_operation_type_list_operation_type_list_state__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type/operation-type-list/operation-type-list.state */ "./src/app/main/_ngxs/referential/operation-type/operation-type-list/operation-type-list.state.ts");
/* harmony import */ var _operation_type_operation_type_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./operation-type/operation-type.service */ "./src/app/main/apps/referential/operations/operation-type/operation-type.service.ts");
/* harmony import */ var _operation_type_operation_type_detail_operation_type_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./operation-type/operation-type-detail/operation-type-detail.component */ "./src/app/main/apps/referential/operations/operation-type/operation-type-detail/operation-type-detail.component.ts");
/* harmony import */ var app_main_ngxs_referential_operation_type_operation_type_detail_operation_type_detail_state__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/main/_ngxs/referential/operation-type/operation-type-detail/operation-type-detail.state */ "./src/app/main/_ngxs/referential/operation-type/operation-type-detail/operation-type-detail.state.ts");
/* harmony import */ var _operations_main_operations_main_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./operations-main/operations-main.component */ "./src/app/main/apps/referential/operations/operations-main/operations-main.component.ts");
/* harmony import */ var _operations_main_tab_operations_main_tab_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./operations-main-tab/operations-main-tab.component */ "./src/app/main/apps/referential/operations/operations-main-tab/operations-main-tab.component.ts");
/* harmony import */ var app_main_services_Referential_operation_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/main/_services/Referential/operation.service */ "./src/app/main/_services/Referential/operation.service.ts");
/* harmony import */ var app_main_ngxs_referential_operation_operation_list_filter_operation_list_filter_state__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.state */ "./src/app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.state.ts");
/* harmony import */ var app_main_ngxs_referential_operation_operation_list_operation_list_state__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/main/_ngxs/referential/operation/operation-list/operation-list.state */ "./src/app/main/_ngxs/referential/operation/operation-list/operation-list.state.ts");
/* harmony import */ var app_main_ngxs_referential_operation_operation_detail_operation_detail_state__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! app/main/_ngxs/referential/operation/operation-detail/operation-detail.state */ "./src/app/main/_ngxs/referential/operation/operation-detail/operation-detail.state.ts");
/* harmony import */ var _operation_operation_detail_operation_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./operation/operation-detail/operation-detail.component */ "./src/app/main/apps/referential/operations/operation/operation-detail/operation-detail.component.ts");
/* harmony import */ var _web_component_mini_filter_mini_filter_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../web-component/mini-filter/mini-filter.module */ "./src/app/main/apps/web-component/mini-filter/mini-filter.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var routes = [
    // {
    //   path     : '',
    //   redirectTo: 'operation-type-families',
    //   // component: OperationMainComponent,
    //   canActivate: [AuthGuard]
    // },
    {
        path: 'operation-type-families',
        component: _operations_main_operations_main_component__WEBPACK_IMPORTED_MODULE_20__["OperationsMainComponent"],
        canActivate: [app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'operation-type-families/:idOperationTypeFamily',
        component: _operation_type_family_operation_type_family_detail_operation_type_family_detail_component__WEBPACK_IMPORTED_MODULE_12__["OperationTypeFamilyDetailComponent"],
        canActivate: [app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'operation-types',
        component: _operations_main_operations_main_component__WEBPACK_IMPORTED_MODULE_20__["OperationsMainComponent"],
        canActivate: [app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'operation-types/:idOperationType',
        component: _operation_type_operation_type_detail_operation_type_detail_component__WEBPACK_IMPORTED_MODULE_18__["OperationTypeDetailComponent"],
        canActivate: [app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'operations',
        component: _operations_main_operations_main_component__WEBPACK_IMPORTED_MODULE_20__["OperationsMainComponent"],
        canActivate: [app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'operations/:idOperation',
        component: _operation_operation_detail_operation_detail_component__WEBPACK_IMPORTED_MODULE_26__["OperationDetailComponent"],
        canActivate: [app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    }
];
var OperationsModule = /** @class */ (function () {
    function OperationsModule() {
    }
    OperationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_14__["FuseConfirmDialogModule"],
                _web_component_mini_filter_mini_filter_module__WEBPACK_IMPORTED_MODULE_27__["MiniFilterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["NgxsModule"].forFeature([
                    app_main_ngxs_referential_operation_type_family_operation_type_family_list_filter_operation_type_family_list_filter_state__WEBPACK_IMPORTED_MODULE_8__["OtfTableFilterState"],
                    app_main_ngxs_referential_operation_type_family_operation_type_family_list_operation_type_family_list_state__WEBPACK_IMPORTED_MODULE_9__["OtfTableState"],
                    app_main_ngxs_referential_operation_type_family_operation_type_family_detail_operation_type_family_detail_state__WEBPACK_IMPORTED_MODULE_13__["OtfDetailState"],
                    app_main_ngxs_referential_operation_type_operation_type_list_filter_operation_type_list_filter_state__WEBPACK_IMPORTED_MODULE_15__["OtTableFilterState"],
                    app_main_ngxs_referential_operation_type_operation_type_list_operation_type_list_state__WEBPACK_IMPORTED_MODULE_16__["OtTableState"],
                    app_main_ngxs_referential_operation_type_operation_type_detail_operation_type_detail_state__WEBPACK_IMPORTED_MODULE_19__["OtDetailState"],
                    app_main_ngxs_referential_operation_operation_list_filter_operation_list_filter_state__WEBPACK_IMPORTED_MODULE_23__["OperationTableFilterState"],
                    app_main_ngxs_referential_operation_operation_list_operation_list_state__WEBPACK_IMPORTED_MODULE_24__["OperationTableState"],
                    app_main_ngxs_referential_operation_operation_detail_operation_detail_state__WEBPACK_IMPORTED_MODULE_25__["OperationForDetailState"]
                ])
            ],
            declarations: [
                _operations_main_operations_main_component__WEBPACK_IMPORTED_MODULE_20__["OperationsMainComponent"],
                _operations_main_tab_operations_main_tab_component__WEBPACK_IMPORTED_MODULE_21__["OperationsMainTabComponent"],
                _operation_type_family_operation_type_family_list_operation_type_family_list_component__WEBPACK_IMPORTED_MODULE_10__["OperationTypeFamilyComponent"],
                _operation_type_family_operation_type_family_detail_operation_type_family_detail_component__WEBPACK_IMPORTED_MODULE_12__["OperationTypeFamilyDetailComponent"],
                _operation_type_operation_type_list_operation_type_list_component__WEBPACK_IMPORTED_MODULE_11__["OperationTypeListComponent"],
                _operation_type_operation_type_detail_operation_type_detail_component__WEBPACK_IMPORTED_MODULE_18__["OperationTypeDetailComponent"],
                _operation_operation_list_operation_list_component__WEBPACK_IMPORTED_MODULE_5__["OperationListComponent"],
                _operation_operation_detail_operation_detail_component__WEBPACK_IMPORTED_MODULE_26__["OperationDetailComponent"]
                // FilterLabelComponent,
                // FilterMovementComponent,
                // FilterComboMultipleComponent,
                // FilterComboMultipleGroupComponent
            ],
            providers: [
                _operation_type_family_operation_type_family_service__WEBPACK_IMPORTED_MODULE_6__["OtfService"],
                _operation_type_operation_type_service__WEBPACK_IMPORTED_MODULE_17__["OtService"],
                app_main_services_Referential_operation_service__WEBPACK_IMPORTED_MODULE_22__["OperationService"]
            ],
            entryComponents: [
            // FuseConfirmDialogModule
            ]
        })
    ], OperationsModule);
    return OperationsModule;
}());



/***/ })

}]);
//# sourceMappingURL=referential-operations-operations-module.js.map