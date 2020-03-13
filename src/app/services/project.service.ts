import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { Global } from './global';
import { About } from '../models/about';

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

  saveProject(project: Project): Observable<any> {
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    return this._htttp.post(this.url + 'save-project', params, { headers: headers });
  }

  getProjects(): Observable<any> {
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._htttp.get(this.url + 'projects', { headers: headers });
  }

  getProject(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._htttp.get(this.url + 'project/' + id, { headers: headers });
  }

  deleteProject(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._htttp.delete(this.url + 'project/' + id, { headers: headers });
  }

  updateProject(project): Observable<any> {
    const params = JSON.stringify(project);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._htttp.put(this.url + 'project/' + project._id, params, { headers });
  }

  getAbout(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._htttp.get(this.url + 'about/', { headers });
  }

  saveAbout(about: About): Observable<any> {
    const params = JSON.stringify(about);
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    if (about._id) {
      return this._htttp.put(this.url + 'about/' + about._id, params, { headers });
    } else {
      return this._htttp.post(this.url + 'save-about', params, { headers });
    }
  }
}



