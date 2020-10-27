import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IGeocode } from '../_models/g-map.model.';
import { GMAP_KEY } from '../_constants/gmap-api-key.model';


@Injectable()
export class GoogleMapService {

    constructor(
        private http: HttpClient
    ) {}

    GetGeoById(cityName: string) : Observable<any> {
        
        return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=${GMAP_KEY}`)
            .map(response => <IGeocode>response);

    }

}


