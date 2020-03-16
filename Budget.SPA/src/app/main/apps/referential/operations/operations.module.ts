import { AuthGuard } from "app/_guards/auth.guard";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FuseSharedModule } from "@fuse/shared.module";
import { RouterModule } from "@angular/router";
import { NgxsModule } from "@ngxs/store";
import { OperationTypeFamilyDetailComponent } from "./operation-type-family/operation-type-family-detail/operation-type-family-detail.component";
import { FuseConfirmDialogModule } from "@fuse/components";
import { OperationTypeDetailComponent } from "./operation-type/operation-type-detail/operation-type-detail.component";
import { OperationsMainComponent } from "./operations-main/operations-main.component";
import { OperationsMainTabComponent } from "./operations-main-tab/operations-main-tab.component";
import { OperationService } from "app/main/_services/Referential/operation.service";
import { OperationDetailComponent } from "./operation/operation-detail/operation-detail.component";
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
import { OperationTableComponent } from "./operation/operation-table/operation-table.component";
import { OperationTableFilterSelectedState } from "app/main/_ngxs/referential/operation/operation-table/operation-table-filter-selected/operation-table-filter-selected.state";
import { OperationTableFilterSelectionState } from "app/main/_ngxs/referential/operation/operation-table/operation-table-filter-selection/operation-table-filter-slection.action";
import { OperationTableState } from "app/main/_ngxs/referential/operation/operation-table/operation-table.state";
import { OperationDetailState } from "app/main/_ngxs/referential/operation/operation-detail/operation-detail.state";
import { OperationDetailFilterState } from "app/main/_ngxs/referential/operation/operation-detail/operation-detail-filter/operation-detail-filter.state";
import { ReferentialService } from "app/main/_services/Referential/referential.service";
import { OtService } from "app/main/_services/Referential/operation-type.service";
import { OtDetailFilterState } from "app/main/_ngxs/referential/operation-type/ot-detail/ot-detail-filter/ot-detail-filter.state";
import { OtfService } from "app/main/_services/Referential/operation-type-family.service";
import { OtfDetailFilterState } from "app/main/_ngxs/referential/operation-type-family/otf-detail/otf-detail-filter/otf-detail-filter.state";

const routes = [
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
      RouterModule.forChild(routes),
      MatTableFilterModule,
      NgxsModule.forFeature([
        OtfTableFilterSelectedState,
        OtfTableFilterSelectionState,
        OtfTableState,
        OtfDetailState,
        OtfDetailFilterState,
        
        OtTableFilterSelectedState,
        OtTableFilterSelectionState,
        OtTableState,
        OtDetailState,
        OtDetailFilterState,

        OperationTableFilterSelectedState,
        OperationTableFilterSelectionState,
        OperationTableState,
        OperationDetailState,
        OperationDetailFilterState
    ])
    ],
    declarations: [
        OperationsMainComponent,
        OperationsMainTabComponent,
        OperationTypeFamilyTableComponent,
        OperationTypeFamilyDetailComponent,
        OperationTypeTableComponent,
        OperationTypeDetailComponent,
        OperationTableComponent,
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