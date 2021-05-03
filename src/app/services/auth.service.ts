import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

const url = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${url}/login`, { email, password });
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.router.navigate(['login']);
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
