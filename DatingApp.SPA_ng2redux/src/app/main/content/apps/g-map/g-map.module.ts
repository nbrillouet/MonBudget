import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { GMapSearchComponent } from './g-map-search/g-map-search.component';
import { GMapService } from './g-map.service';
import { SharedModule } from '../../../../core/modules/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD6F176dnusdXdDH35db9iOGGlCiZYNDvw'
  })
  ],
  declarations: [GMapSearchComponent],
  exports:      [GMapSearchComponent],
  providers :   [GMapService]
})
export class GMapModule { }
