import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _baseUrl = 'http://localhost:3000';

  constructor(
    private _httpClient: HttpClient,
    private _route: Router,
    private _userService: UserService
  ) {}

  public authorize(user: string, password: string) {
    let result!: Observable<HttpResponse<any>> | Error;

    return this._httpClient
      .post(
        `${this._baseUrl}/user/login`,
        {
          userName: user,
          password: password,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((response) => {
          const authToken = response.headers.get('x-access-token') ?? '';
          this._userService.login(authToken);
        })
      );
  }
}
