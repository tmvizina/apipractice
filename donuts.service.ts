
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class DonutsService{
    constructor(private http: HttpClient) {
       
    }

    baseURL:string=`https://grandcircusco.github.io/demo-apis/donuts.json`
    getDonut():any{

        return this.http.get(this.baseURL);
    }
}
