import { OperationMainComponent } from "./operation-main/operation-main.component";
import { AuthGuard } from "app/_guards/auth.guard";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FuseSharedModule } from "@fuse/shared.module";
import { RouterModule } from "@angular/router";
import { OperationMainTabComponent } from "./operation-main-tab/operation-main-tab.component";
import { OperationComponent } from "./operation/operation.component";
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

const routes = [
  // {
  //   path     : '',
  //   redirectTo: 'operation-type-families',
  //   // component: OperationMainComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path     : 'operation-type-families',
    component: OperationMainComponent,
    canActivate: [AuthGuard]
  },
  {
    path     : 'operation-type-families/:idOperationTypeFamily',
    component: OperationTypeFamilyDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path     : 'operation-types',
    component: OperationMainComponent,
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
    component: OperationMainComponent,
    canActivate: [AuthGuard]
  }

    
  ];
  
  @NgModule({
    imports: [
      CommonModule,
      FuseSharedModule,
      FuseConfirmDialogModule,
      RouterModule.forChild(routes),
      NgxsModule.forFeature([
        OtfTableFilterState,
        OtfTableState,
        OtfDetailState,
        OtTableFilterState,
        OtTableState,
        OtDetailState

    ])
    ],
    declarations: [
        OperationMainComponent,
        OperationMainTabComponent,
        OperationTypeFamilyComponent,
        OperationTypeFamilyDetailComponent,
        OperationTypeListComponent,
        OperationTypeDetailComponent,
        OperationComponent,
        FilterLabelComponent,
        FilterMovementComponent

    ],
    providers : [
      OtfService,
      OtService
    ],
    entryComponents: [
      // FuseConfirmDialogModule
  ]
  })
  export class OperationModule { }