import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from '../../../_services/error.service';
import { Observable } from '../../../../../../node_modules/rxjs/Observable';
import { environment } from '../../../../../environments/environment';
import { AuthHttp } from 'angular2-jwt';
import { IGMapAddress, IGeocode } from '../../../_models/g-map.model.';

@Injectable()
export class GMapService {
baseUrl = environment.apiUrl;

    constructor(
        private http: HttpClient,
        private errorService: ErrorService,
        private authHttp: AuthHttp
    ) { }

    GetGeoById(cityName: string) : Observable<any> {
        console.log('inURL', cityName);
        
        return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=AIzaSyD6F176dnusdXdDH35db9iOGGlCiZYNDvw`)
            .map(response => <IGeocode>response);
            // .catch(this.errorService.handleError);
    }

    getById(id: number) {
        return this.authHttp
            .get(this.baseUrl + `GMapAddresses/${id}/GMapAddress`)
            .map(response => <IGMapAddress>response.json())
            .catch(this.errorService.handleError);
    }

    saveGMapAddress(gMapAddress: IGMapAddress) {
        return this.authHttp
            .post(this.baseUrl + `GMapAddresses/save`,gMapAddress)
            .map(response => <IGMapAddress>response.json())
            .catch(this.errorService.handleError);
    }

}
