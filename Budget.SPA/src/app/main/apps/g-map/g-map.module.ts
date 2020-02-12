import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { GMapSearchComponent } from './g-map-search/g-map-search.component';
import { GMapService } from './g-map.service';
import { FuseSharedModule } from '@fuse/shared.module';
import { AngularMaterialModule } from 'app/angular-material.module';
// import { SharedModule } from '../../../../core/modules/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FuseSharedModule,
    AngularMaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDu6ltyq_mapV2qhPHzZnjcJQo_MbLX8M'
  })
  ],
  declarations: [GMapSearchComponent],
  exports:      [GMapSearchComponent],
  providers :   [GMapService]
})
export class GMapModule { }
