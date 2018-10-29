import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/Rx';

@Injectable()
export class HttpService{
   
    constructor(private _http: Http){}

    getFile(): Observable<Array<any>> {
        return this._http.get('http://api.tvmaze.com/search/shows?q=girls')
            .pipe(map(res => res.json()));
    }
}