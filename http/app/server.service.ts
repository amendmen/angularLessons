import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx'; 
import { Observable } from "rxjs";


@Injectable()
export class ServerService {
    constructor(private http: Http) { }

    storeServers(servers: any) {
        const headers = new Headers({ 'Content-Type': 'application/json' })
        // return this.http.post('https://ng-project-test.firebaseio.com/data.json',
        //     servers,
        //     {headers});
        return this.http.put('https://ng-project-test.firebaseio.com/data.json',
            servers,
            { headers });
    }

    getServers() {
        return this.http.get('https://ng-project-test.firebaseio.com/data.json')
            .map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            )            
            .catch(
                (error: Response)=>{
                    return Observable.throw('Somthing went wrong')
                }
            )
    }
    getAppName() {
        return this.http.get('https://ng-project-test.firebaseio.com/appName.json')
        .map(
            (response: Response) => {
                return response.json();
            }
        ) ;
    }
}