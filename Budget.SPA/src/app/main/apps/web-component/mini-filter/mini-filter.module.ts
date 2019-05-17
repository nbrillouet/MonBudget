import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterAmountComponent } from './filter-amount/filter-amount.component';
import { FilterComboMultipleComponent } from './filter-combo-multiple/filter-combo-multiple.component';
import { FilterComboMultipleGroupComponent } from './filter-combo-multiple-group/filter-combo-multiple-group.component';
import { FilterLabelComponent } from './filter-label/filter-label.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { FilterMovementComponent } from './filter-movement/filter-movement.component';
import { FilterDateRangeComponent } from './filter-date-range/filter-date-range.component';


@NgModule({
  imports: [
    CommonModule,
    FuseSharedModule
  ],
  declarations: [
    FilterAmountComponent,
    FilterComboMultipleComponent,
    FilterComboMultipleGroupComponent,
    FilterLabelComponent,
    FilterMovementComponent,
    FilterDateRangeComponent
  ],
  exports:      [
    FilterAmountComponent,
    FilterComboMultipleComponent,
    FilterComboMultipleGroupComponent,
    FilterLabelComponent,
    FilterMovementComponent,
    FilterDateRangeComponent
  ],
})
export class MiniFilterModule { }
