import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { ErrorService } from './error.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IGeocode } from '../_models/GoogleMap';

@Injectable()
export class GoogleMapService {

    constructor(
        private http: HttpClient,
        private errorService: ErrorService) {}

    GetGeoById(cityName: string) : Observable<any> {
        console.log('inURL', cityName);
        
        return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=AIzaSyD6F176dnusdXdDH35db9iOGGlCiZYNDvw`)
            .map(response => <IGeocode>response);
            // .catch(this.errorService.handleError);
  }



        // return this.http
        //     .get(`https://httpbin.org/get`)
            
            //)
            //.map(response => <any>response)
            // .catch(this.errorService.handleError);
    }

// }
