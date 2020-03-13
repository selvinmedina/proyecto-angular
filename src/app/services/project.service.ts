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

  getProjects(): Observable<any> {
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._htttp.get(this.url + 'projects', { headers: headers });
  }

  getProject(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._htttp.get(this.url + 'project/' + id, { headers: headers });
  }

  getAbout(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._htttp.get(this.url + 'about/', { headers });
  }
}



