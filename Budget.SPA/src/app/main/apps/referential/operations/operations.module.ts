import { AuthGuard } from "app/_guards/auth.guard";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FuseSharedModule } from "@fuse/shared.module";
import { RouterModule } from "@angular/router";
import { OperationListComponent } from "./operation/operation-list/operation-list.component";
import { OtfService } from "./operation-type-family/operation-type-family.service";
import { NgxsModule } from "@ngxs/store";
import { OtfTableFilterState } from "app/main/_ngxs/referential/operation-type-family/operation-type-family-list-filter/operation-type-family-list-filter.state";
import { OtfTableState } from "app/main/_ngxs/referential/operation-type-family/operation-type-family-list/operation-type-family-list.state";
import { OperationTypeFamilyComponent } from "./operation-type-family/operation-type-family-list/operation-type-family-list.component";
import { OperationTypeListComponent } from "./operation-type/operation-type-list/operation-type-list.component";
import { OperationTypeFamilyDetailComponent } from "./operation-type-family/operation-type-family-detail/operation-type-family-detail.component";
import { OtfDetailState } from "app/main/_ngxs/referential/operation-type-family/operation-type-family-detail/operation-type-family-detail.state";
import { FuseConfirmDialogModule } from "@fuse/components";
import { FilterLabelComponent } from "../../web-component/mini-filter/filter-label/filter-label.component";
import { FilterMovementComponent } from "../../web-component/mini-filter/filter-movement/filter-movement.component";
import { OtTableFilterState } from "app/main/_ngxs/referential/operation-type/operation-type-list-filter/operation-type-list-filter.state";
import { OtTableState } from "app/main/_ngxs/referential/operation-type/operation-type-list/operation-type-list.state";
import { OtService } from "./operation-type/operation-type.service";
import { OperationTypeDetailComponent } from "./operation-type/operation-type-detail/operation-type-detail.component";
import { OtDetailState } from "app/main/_ngxs/referential/operation-type/operation-type-detail/operation-type-detail.state";
import { OperationsMainComponent } from "./operations-main/operations-main.component";
import { OperationsMainTabComponent } from "./operations-main-tab/operations-main-tab.component";
import { OperationService } from "app/main/_services/Referential/operation.service";
import { FilterComboMultiple } from "app/main/_models/filters/mini-filter/combo-multiple.filters";
import { FilterComboMultipleComponent } from "../../web-component/mini-filter/filter-combo-multiple/filter-combo-multiple.component";
import { OperationTableFilterState } from "app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.state";
import { OperationTableState } from "app/main/_ngxs/referential/operation/operation-list/operation-list.state";
import { OperationForDetailState } from "app/main/_ngxs/referential/operation/operation-detail/operation-detail.state";
import { FilterComboMultipleGroupComponent } from "../../web-component/mini-filter/filter-combo-multiple-group/filter-combo-multiple-group.component";
import { OperationDetailComponent } from "./operation/operation-detail/operation-detail.component";
import { MiniFilterModule } from "../../web-component/mini-filter/mini-filter.module";
import { AngularMaterialModule } from "app/angular-material.module";

const routes = [
  // {
  //   path     : '',
  //   redirectTo: 'operation-type-families',
  //   // component: OperationMainComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path     : 'operation-type-families',
    component: OperationsMainComponent,
    canActivate: [AuthGuard]
  },
  {
    path     : 'operation-type-families/:idOperationTypeFamily',
    component: OperationTypeFamilyDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path     : 'operation-types',
    component: OperationsMainComponent,
    canActivate: [AuthGuard]
  },
  {
    path     : 'operation-types/:idOperationType',
    component: OperationTypeDetailComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path     : 'operations',
    component: OperationsMainComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path     : 'operations/:idOperation',
    component: OperationDetailComponent,
    canActivate: [AuthGuard]
  }

    
  ];
  
  @NgModule({
    imports: [
      CommonModule,
      FuseSharedModule,
      AngularMaterialModule,
      FuseConfirmDialogModule,
      MiniFilterModule,
      RouterModule.forChild(routes),
      NgxsModule.forFeature([
        OtfTableFilterState,
        OtfTableState,
        OtfDetailState,
        OtTableFilterState,
        OtTableState,
        OtDetailState,
        OperationTableFilterState,
        OperationTableState,
        OperationForDetailState

    ])
    ],
    declarations: [
        OperationsMainComponent,
        OperationsMainTabComponent,
        OperationTypeFamilyComponent,
        OperationTypeFamilyDetailComponent,
        OperationTypeListComponent,
        OperationTypeDetailComponent,
        OperationListComponent,
        OperationDetailComponent
        // FilterLabelComponent,
        // FilterMovementComponent,
        // FilterComboMultipleComponent,
        // FilterComboMultipleGroupComponent

    ],
    providers : [
      OtfService,
      OtService,
      OperationService
    ],
    entryComponents: [
      // FuseConfirmDialogModule
  ]
  })
  export class OperationsModule { }