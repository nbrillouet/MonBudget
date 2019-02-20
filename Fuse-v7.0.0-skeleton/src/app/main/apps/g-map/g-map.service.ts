import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ErrorService } from '../../../_services/error.service';
// import { Observable } from '../../../../../../node_modules/rxjs/Observable';
// import { environment } from '../../../../../environments/environment';
// import { AuthHttp } from 'angular2-jwt';
import { environment } from 'environments/environment';
import { ErrorService } from 'app/main/_services/error.service';
import { Observable } from 'rxjs';
import { IGeocode, IGMapAddress } from 'app/main/_models/g-map.model.';
// import { IGMapAddress, IGeocode } from '../../../_models/g-map.model.';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GMapService {
baseUrl = environment.apiUrl;

    constructor(
        private http: HttpClient,
        private errorService: ErrorService
        // private authHttp: AuthHttp
    ) { }

    GetGeoById(cityName: string) : Observable<any> {
        
        return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=AIzaSyD6F176dnusdXdDH35db9iOGGlCiZYNDvw`)
            .map(response => <IGeocode>response);
            // .catch(this.errorService.handleError);
    }

    getById(id: number) {
        return this.http
            .get(this.baseUrl + `GMapAddresses/${id}/GMapAddress`)
            .map(response => <IGMapAddress>response)
            .catch(this.errorService.handleError);
    }

    saveGMapAddress(gMapAddress: IGMapAddress) {
        return this.http
            .post(this.baseUrl + `GMapAddresses/save`,gMapAddress)
            .map(response => <IGMapAddress>response)
            .catch(this.errorService.handleError);
    }

}
