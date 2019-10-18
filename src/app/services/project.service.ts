import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService {
    public url: string;

    constructor(
        private _htttp: HttpClient
    ) {
        this.url = Global.url;
    }

    testService() {
        return 'Probando el servicio de Angular';
    }

    saveProject(project: Project): Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-type','application/json');
        return this._htttp.post(this.url + 'save-project',params,{headers:headers});
    }
}



