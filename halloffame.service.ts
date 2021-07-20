
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class hallofFameService{
    constructor(private http: HttpClient) {

    }

    baseURL:string=`https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json`
    getHallofFame():any{

        return this.http.get(this.baseURL);
    }
}
