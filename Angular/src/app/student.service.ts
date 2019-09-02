import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  getStudentList(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('root:root') });
    return this.http.get(`${this.baseUrl}` + 'students-list', {headers});
  }

  createStudent(student: object): Observable<object> {
    return this.http.post(`${this.baseUrl}` + 'save-student', student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-student/${id}`, {responseType: 'text'});
  }

  getStudent(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/student/${id}`);
  }

  updateStudent(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-student/${id}`, value);
  }
}
