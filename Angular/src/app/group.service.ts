import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GroupService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  getGroup(id: number): Observable<Object> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('root:root') });
    return this.http.get(`${this.baseUrl}/group/${id}`, {headers});
  }

  getGroupList(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('root:root') });
    return this.http.get(`${this.baseUrl}` + 'group-list', {headers});
  }
}
