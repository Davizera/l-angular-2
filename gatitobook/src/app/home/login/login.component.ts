import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user!: string;
  public password!: string;

  constructor(private _authenticationService: AuthenticationService) {}

  ngOnInit(): void {}
  public login() {
    this._authenticationService.authorize(this.user, this.password);
  }
}
