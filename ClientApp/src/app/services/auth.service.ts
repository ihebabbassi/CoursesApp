import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost:3000/';

  constructor(private router: Router, private http: HttpClient) {}

  createUser(data: any): Observable<any> {
    return this.http.post(this.url + 'register', data);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.url + 'login', {
      email,
      password,
    });
  }
}
