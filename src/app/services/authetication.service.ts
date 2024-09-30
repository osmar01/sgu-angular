import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserDto } from '../shared/DTO/userDTO';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {

  constructor(
    private http: HttpClient
  ) { }

  private BASE_ENDPOINT = 'http://localhost:5297/api';
  private ENDPOINT_PATH = "/login";

  login(user: UserDto): Observable<any> {
    const url = `${this.BASE_ENDPOINT}${this.ENDPOINT_PATH}`
    return this.http.post<UserDto>(url, user);
  }
}
