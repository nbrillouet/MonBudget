import { Injectable } from '@angular/core';
// import { AuthHttp } from 'angular2-jwt';
import { ErrorService } from './error.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IGeocode } from '../_models/g-map.model.';


@Injectable()
export class GoogleMapService {

    constructor(
        private http: HttpClient
    ) {}

    GetGeoById(cityName: string) : Observable<any> {
        
        return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=AIzaSyD6F176dnusdXdDH35db9iOGGlCiZYNDvw`)
            .map(response => <IGeocode>response);

    }

}


