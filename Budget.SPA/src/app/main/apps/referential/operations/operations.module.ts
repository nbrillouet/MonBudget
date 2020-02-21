import { AuthGuard } from "app/_guards/auth.guard";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FuseSharedModule } from "@fuse/shared.module";
import { RouterModule } from "@angular/router";
import { OperationListComponent } from "./operation/operation-list/operation-list.component";
import { OtfService } from "./operation-type-family/operation-type-family.service";
import { NgxsModule } from "@ngxs/store";
import { OperationTypeFamilyDetailComponent } from "./operation-type-family/operation-type-family-detail/operation-type-family-detail.component";
import { FuseConfirmDialogModule } from "@fuse/components";
import { OtService } from "./operation-type/operation-type.service";
import { OperationTypeDetailComponent } from "./operation-type/operation-type-detail/operation-type-detail.component";
import { OperationsMainComponent } from "./operations-main/operations-main.component";
import { OperationsMainTabComponent } from "./operations-main-tab/operations-main-tab.component";
import { OperationService } from "app/main/_services/Referential/operation.service";
import { OperationTableFilterState } from "app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.state";
import { OperationTableState } from "app/main/_ngxs/referential/operation/operation-list/operation-list.state";
import { OperationForDetailState } from "app/main/_ngxs/referential/operation/operation-detail/operation-detail.state";
import { OperationDetailComponent } from "./operation/operation-detail/operation-detail.component";
import { MiniFilterModule } from "../../web-component/mini-filter/mini-filter.module";
import { AngularMaterialModule } from "app/angular-material.module";
import { OtfTableFilterSelectedState } from "app/main/_ngxs/referential/operation-type-family/otf-table/otf-table-filter-selected/otf-table-filter-selected.state";
import { OtfTableFilterSelectionState } from "app/main/_ngxs/referential/operation-type-family/otf-table/otf-table-filter-selection/otf-table-filter-selection.state";
import { OtfTableState } from "app/main/_ngxs/referential/operation-type-family/otf-table/otf-table.state";
import { OperationTypeFamilyTableComponent } from "./operation-type-family/operation-type-family-table/operation-type-family-table.component";
import { MatTableFilterModule } from "../../web-component/mat-table-filter/mat-table-filter.module";
import { OtfDetailState } from "app/main/_ngxs/referential/operation-type-family/otf-detail/otf-detail.state";
import { OperationTypeTableComponent } from "./operation-type/operation-type-table/operation-type-table.component";
import { OtTableFilterSelectedState } from "app/main/_ngxs/referential/operation-type/ot-table/ot-table-filter-selected/ot-table-filter-selected.state";
import { OtTableFilterSelectionState } from "app/main/_ngxs/referential/operation-type/ot-table/ot-table-filter-selection/ot-table-filter-selection.state";
import { OtTableState } from "app/main/_ngxs/referential/operation-type/ot-table/ot-table.state";
import { OtDetailState } from "app/main/_ngxs/referential/operation-type/ot-detail/ot-detail.state";

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
      MatTableFilterModule,
      NgxsModule.forFeature([
        OtfTableFilterSelectedState,
        OtfTableFilterSelectionState,
        OtfTableState,
        OtfDetailState,
        
        OtTableFilterSelectedState,
        OtTableFilterSelectionState,
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
        OperationTypeFamilyTableComponent,
        OperationTypeFamilyDetailComponent,
        OperationTypeTableComponent,
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