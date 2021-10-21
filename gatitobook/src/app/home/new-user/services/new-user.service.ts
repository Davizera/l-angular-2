import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from '../interfaces/new-user';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  private _baseUrl = 'http://localhost:3000';

  constructor(private _httpClient: HttpClient) {}

  singUp(newUser: NewUser) {
    return this._httpClient.post(`${this._baseUrl}/singup`, newUser);
  }
}
