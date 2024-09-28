import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  private BASE_ENDPOINT = 'https://localhost:7086/api';
  private ENDPOINT_PATH = "/User";

  getAll(): Observable<any> {
    const url = `${this.BASE_ENDPOINT}${this.ENDPOINT_PATH}`
    return this.http.get(url);
  }

  getById(idUser: number): Observable<User> {
    const url = `${this.BASE_ENDPOINT}${this.ENDPOINT_PATH}/${idUser}`;
    return this.http.get<User>(url);
  }

  insert(model: User): Observable<User> {
    const url = `${this.BASE_ENDPOINT}${this.ENDPOINT_PATH}`;
    return this.http.post<User>(url, model);
  }

  update(model: User): Observable<User> {
    const url = `${this.BASE_ENDPOINT}${this.ENDPOINT_PATH}/${model.id}`;
    return this.http.put<User>(url, model);
  }

  delete(idUser: any): Observable<User> {
    const url = `${this.BASE_ENDPOINT}${this.ENDPOINT_PATH}/${idUser}`;
    return this.http.delete<User>(url);
  }
}
