import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GMapService } from '../g-map.service';
import { MatChipInputEvent } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { NotificationsService } from 'angular2-notifications';
import { fuseAnimations } from '@fuse/animations';
import { IGMapSearchInfo, IGMapAddress, IGeocode } from 'app/main/_models/g-map.model.';
import { ISelect } from 'app/main/_models/generics/select.model';

@Component({
  selector: 'g-map-search',
  templateUrl: './g-map-search.component.html',
  styleUrls: ['./g-map-search.component.scss'],
  animations : fuseAnimations
})
export class GMapSearchComponent implements OnInit,OnChanges {
  @Input() gMapSearchInfo: IGMapSearchInfo;
  @Output() changeGMapAddress = new EventEmitter<IGMapAddress>();

  gMapSearchForm: FormGroup;
  gMapAddress: IGMapAddress;
  geoLocalisation : IGeocode;

  isFormLoaded: boolean;
  addressVisible: boolean;
  addressDetailVisible: boolean;
  searchVisible:boolean;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    private gMapService: GMapService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationsService
  ) { }

  ngOnInit() {
    
    
  }

  ngOnChanges(changes: SimpleChanges) {

    let gMapSearchInfo = <IGMapSearchInfo>changes.gMapSearchInfo.currentValue;
    this.gMapSearchInfo = gMapSearchInfo;

    //charger le gmapAddress
    this.gMapService
      .getById(this.gMapSearchInfo.idGMapAddress)
      .subscribe(resp=> {
        this.gMapAddress = resp;
        this.createForm();
        this.addressVisible = this.gMapAddress.id!=1 && this.gMapAddress.id!=3;
        this.searchVisible = this.gMapAddress.id == 1;
        this.isFormLoaded = true;

        
       });

  }

  createForm() {
    this.gMapSearchForm = this.formBuilder.group({
      //operationPlace: [dataOperationPlace,[Validators.required, ValidateIsUnknown]],
      
      operationPositionSearch: [this.gMapSearchInfo.operationPositionSearch,[Validators.required]],
      operationPlaceSearch: [this.gMapSearchInfo.operationPlaceSearch,[Validators.required]],
      
      formattedAddress : [this.gMapAddress.formattedAddress,[Validators.required]],
      country: [this.gMapAddress.gMapCountry.label,[Validators.required]],
      locality: [this.gMapAddress.gMapLocality.label],
      neighborhood: [this.gMapAddress.gMapNeighborhood.label],
      administrativeAreaLevel1: [this.gMapAddress.gMapAdministrativeAreaLevel1.label],
      administrativeAreaLevel2: [this.gMapAddress.gMapAdministrativeAreaLevel2.label],
      streetNumber: [this.gMapAddress.gMapStreetNumber.label],
      route: [this.gMapAddress.gMapRoute.label],
      postalCode: [this.gMapAddress.gMapPostalCode.label],
      subLocalityLevel1: [this.gMapAddress.gMapSublocalityLevel1.label],
      subLocalityLevel2: [this.gMapAddress.gMapSublocalityLevel2.label]
    });
  }

  searchGoogleMap() {
    let operationPositionSearch: string = this.gMapSearchForm.value.operationPositionSearch;
    let operationPlaceSearch: string = this.gMapSearchForm.value.operationPlaceSearch;

    var keyword=`${operationPositionSearch} ${operationPlaceSearch}`;

    this.changeLocation(keyword);
  }

  changeLocation(keyword: string)
  {
    this.gMapService.GetGeoById(keyword)
      .subscribe(data=> {
        this.geoLocalisation = <IGeocode>data;

        this.gMapAddress = this.parseGeolocalisation();
        if(this.gMapAddress!=null) {
          

          this.gMapSearchForm.controls['formattedAddress'].setValue(this.gMapAddress.formattedAddress);
          this.gMapSearchForm.controls['country'].setValue(this.gMapAddress.gMapCountry.label);
          this.gMapSearchForm.controls['locality'].setValue(this.gMapAddress.gMapLocality.label);
          this.gMapSearchForm.controls['neighborhood'].setValue(this.gMapAddress.gMapNeighborhood.label);
          this.gMapSearchForm.controls['administrativeAreaLevel1'].setValue(this.gMapAddress.gMapAdministrativeAreaLevel1.label);
          this.gMapSearchForm.controls['administrativeAreaLevel2'].setValue(this.gMapAddress.gMapAdministrativeAreaLevel2.label);
          this.gMapSearchForm.controls['streetNumber'].setValue(this.gMapAddress.gMapStreetNumber.label);
          this.gMapSearchForm.controls['route'].setValue(this.gMapAddress.gMapRoute.label);
          this.gMapSearchForm.controls['postalCode'].setValue(this.gMapAddress.gMapPostalCode.label);
          this.gMapSearchForm.controls['subLocalityLevel1'].setValue(this.gMapAddress.gMapSublocalityLevel1.label);
          this.gMapSearchForm.controls['subLocalityLevel2'].setValue(this.gMapAddress.gMapSublocalityLevel2.label);


          this.gMapService
            .saveGMapAddress(this.gMapAddress)
            .subscribe(resp=>{
              this.gMapAddress= resp;
 
              this.showSearch(false);
              this.changeGMapAddress.emit(this.gMapAddress);
            })

          
        }
        else
          this.notificationService.error('Echec de la localisation', 'veuillez préciser votre recherche');
      });
  }

  parseGeolocalisation() {
    if(this.geoLocalisation.status=='OK')
    {
      let result= this.geoLocalisation.results[0];

      var index = result.types.indexOf('point_of_interest', 0);
      if (index > -1) {
        result.types.splice(index, 1);
      }
      let types = new Array<ISelect>();
      let idx: number =0;
      for(let toto of result.types)
      {
        types.push({id: idx,label: toto})
        idx++;
      }

      let gMapAddress = <IGMapAddress> {
        id : 0,
        formattedAddress: result.formatted_address,
        lat: result.geometry.location.lat,
        lng: result.geometry.location.lng,
        gMapAdministrativeAreaLevel1: <ISelect> { id:0, label: this.getInAddressComponents(result,'administrative_area_level_1') },
        gMapAdministrativeAreaLevel2: <ISelect> { id:0, label: this.getInAddressComponents(result,'administrative_area_level_2') },
        gMapCountry: <ISelect> { id:0, label: this.getInAddressComponents(result,'country') },
        gMapLocality: <ISelect> { id:0, label: this.getInAddressComponents(result,'locality') },
        gMapNeighborhood: <ISelect> { id:0, label: this.getInAddressComponents(result,'neighborhood') },
        gMapPostalCode: <ISelect> { id:0, label: this.getInAddressComponents(result,'postal_code')},
        gMapRoute: <ISelect> { id:0, label: this.getInAddressComponents(result,'route') } ,
        gMapStreetNumber: <ISelect> { id:0, label: this.getInAddressComponents(result,'street_number') },
        gMapSublocalityLevel1: <ISelect> { id:0, label: this.getInAddressComponents(result,'sublocality_level_1') },
        gMapSublocalityLevel2: <ISelect> { id:0, label: this.getInAddressComponents(result,'sublocality_level_2') },
        gMapTypes: <ISelect[]> types
      }

      return gMapAddress;
    }
  }

  getInAddressComponents(result: any, keyword: string) {
    let str: string = 'INCONNU';
    for (let address_component of result.address_components)
    {
      for(let type of address_component.types)
      {
        if(type===keyword)
        {
          str = address_component.short_name;
          return str;
        }
      }
    }
    return str;
  }

  unknownData(formControlName:string) {
    return this.gMapSearchForm.get(formControlName).value=='INCONNU';
  }

  remove(type)
    {
        const index = this.gMapAddress.gMapTypes.indexOf(type);

        if ( index >= 0 )
        {
          this.gMapAddress.gMapTypes.splice(index, 1);
        }
    }

    add(event: MatChipInputEvent): void {
      const input = event.input;
      const value = event.value;
  
      // Add our fruit
      if ((value || '').trim()) {
        this.gMapAddress.gMapTypes.push({id:0,label:value.trim()});
      }
  
      // Reset the input value
      if (input) {
        input.value = '';
      }
    }

    showSearch(value: boolean) {
      this.searchVisible=value;
      this.addressVisible=!value;
    }

}
