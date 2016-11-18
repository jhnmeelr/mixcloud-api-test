import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()

export class SearchService {

    constructor(private http:Http) {

    }

    getMixes(str:string) {
        return this.http.get('https://api.mixcloud.com/search/?q='+str+'&type=cloudcast')
            .map(res => res.json());
    }
}