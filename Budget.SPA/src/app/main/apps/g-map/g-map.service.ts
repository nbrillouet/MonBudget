import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ErrorService } from '../../../_services/error.service';
// import { Observable } from '../../../../../../node_modules/rxjs/Observable';
// import { environment } from '../../../../../environments/environment';
// import { AuthHttp } from 'angular2-jwt';
import { environment } from 'environments/environment';
import { ErrorService } from 'app/main/_services/error.service';
import { Observable } from 'rxjs';
import { IGeocode, GMapAddress } from 'app/main/_models/g-map.model.';
// import { IGMapAddress, IGeocode } from '../../../_models/g-map.model.';
import { HttpClient } from '@angular/common/http';
import { GMAP_KEY } from 'app/main/_constants/gmap-api-key.model';

@Injectable()
export class GMapService {
baseUrl = environment.apiUrl;

    constructor(
        private http: HttpClient,
        private errorService: ErrorService
        // private authHttp: AuthHttp
    ) { }

    GetGeoById(cityName: string) : Observable<any> {
        
        return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=${GMAP_KEY}`)
            .map(response => <IGeocode>response);
            // .catch(this.errorService.handleError);
    }

    getById(id: number) {
        return this.http
            .get(this.baseUrl + `GMapAddresses/${id}/GMapAddress`)
            .map(response => <GMapAddress>response)
            .catch(this.errorService.handleError);
    }

    saveGMapAddress(gMapAddress: GMapAddress) {
        return this.http
            .post(this.baseUrl + `GMapAddresses/save`,gMapAddress)
            .map(response => <GMapAddress>response)
            .catch(this.errorService.handleError);
    }

}
