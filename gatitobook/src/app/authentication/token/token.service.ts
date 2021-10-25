import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  getToken(): string {
    return localStorage.getItem(KEY) ?? '';
  }

  setToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  deleteToken() {
    localStorage.removeItem(KEY);
  }

  hasToken(): boolean {
    return !!this.getToken();
  }
}
