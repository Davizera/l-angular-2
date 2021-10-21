import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _baseUrl = 'http://localhost:3000';

  constructor(private _httpClient: HttpClient, private _route: Router) {}

  public authorize(user: string, password: string) {
    let result!: Observable<Object> | Error;

    this._httpClient
      .post(`${this._baseUrl}/user/login`, {
        userName: user,
        password: password,
      })
      .subscribe((success) => this._route.navigate(['animais']));
  }
}
