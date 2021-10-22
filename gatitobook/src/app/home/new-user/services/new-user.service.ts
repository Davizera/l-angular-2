import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from '../interfaces/new-user';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  private _baseUrl = 'http://localhost:3000/user';

  constructor(private _httpClient: HttpClient) {}

  singUp(newUser: NewUser) {
    return this._httpClient.post(`${this._baseUrl}/singup`, newUser);
  }

  isUsernameUnique(userName: string) {
    return this._httpClient.get(`${this._baseUrl}/exists/${userName}`);
  }

  isEmailUnique(email: string) {
    const emailEncoded = encodeURI(email);
    return this._httpClient.get(
      `${this._baseUrl}/email/exists/${emailEncoded}`
    );
  }
}
