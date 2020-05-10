import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { GMapSearchComponent } from './g-map-search/g-map-search.component';
import { GMapService } from './g-map.service';
import { FuseSharedModule } from '@fuse/shared.module';
import { AngularMaterialModule } from 'app/angular-material.module';
import { GMAP_KEY } from 'app/main/_constants/gmap-api-key.model';

@NgModule({
  imports: [
    CommonModule,
    FuseSharedModule,
    AngularMaterialModule,
    AgmCoreModule.forRoot({
      apiKey: GMAP_KEY
  })
  ],
  declarations: [GMapSearchComponent],
  exports:      [GMapSearchComponent],
  providers :   [GMapService]
})
export class GMapModule { }
