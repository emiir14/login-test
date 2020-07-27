import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { config } from 'process';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  localUrl = 'http://churrasco.uk.to:3005/api/sites';

  getObject() {
    return this.httpClient.get(this.localUrl);
  }

  public get loggedIn() {
    return localStorage.getItem('access_token') !== null;
  }

  login(email: string, password: string) {
    return this.httpClient
      .post<{ access_token: string }>('http://churrasco.uk.to:3005/api/auth', {
        email,
        password,
      })
      .pipe(
        tap((res) => {
          localStorage.setItem('access_token', res.access_token);
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  getData() {
    return this.httpClient
      .get(this.localUrl, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `JSON.parse(localStorage.getItem('access_token'));`,
        }),
      })
      .subscribe();
  }

  constructor(private httpClient: HttpClient) {}
}
