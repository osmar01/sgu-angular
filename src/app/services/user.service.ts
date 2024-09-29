import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private storage: LocalStorageService
  ) { }

  private BASE_ENDPOINT = 'https://localhost:7086/api';
  private ENDPOINT_PATH = "/User";

  getAll(): Observable<any> {
    const url = `${this.BASE_ENDPOINT}${this.ENDPOINT_PATH}`
    return this.http.get(url, {
      headers: new HttpHeaders()
        .set("Authorization", "Bearer " + this.storage.get('token'))
        .set("Content-Type", "application/json"),
    });
  }

  getById(idUser: number): Observable<User> {
    const url = `${this.BASE_ENDPOINT}${this.ENDPOINT_PATH}/${idUser}`;
    return this.http.get<User>(url, {
      headers: new HttpHeaders()
        .set("Authorization", "Bearer " + this.storage.get('token'))
        .set("Content-Type", "application/json"),
    });
  }

  insert(model: User): Observable<User> {
    const url = `${this.BASE_ENDPOINT}${this.ENDPOINT_PATH}`;
    return this.http.post<User>(url, model, {
      headers: new HttpHeaders()
        .set("Authorization", "Bearer " + this.storage.get('token'))
        .set("Content-Type", "application/json"),
    });
  }

  update(model: User): Observable<User> {
    const url = `${this.BASE_ENDPOINT}${this.ENDPOINT_PATH}/${model.id}`;
    return this.http.put<User>(url, model, {
      headers: new HttpHeaders()
        .set("Authorization", "Bearer " + this.storage.get('token'))
        .set("Content-Type", "application/json"),
    });
  }

  delete(idUser: any): Observable<User> {
    const url = `${this.BASE_ENDPOINT}${this.ENDPOINT_PATH}/${idUser}`;
    return this.http.delete<User>(url, {
      headers: new HttpHeaders()
        .set("Authorization", "Bearer " + this.storage.get('token'))
        .set("Content-Type", "application/json"),
    });
  }
}
