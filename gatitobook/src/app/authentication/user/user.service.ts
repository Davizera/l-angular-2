import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import jwt_decode from 'jwt-decode';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({});

  constructor(private _tokenService: TokenService) {}

  private decodeJWT() {
    const token = this._tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }

  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  login(token: string) {
    this._tokenService.setToken(token);
    this.decodeJWT();
  }

  logout() {
    this._tokenService.deleteToken();
    this.userSubject.next({});
  }

  isLogged(): boolean {
    return this._tokenService.hasToken();
  }
}
