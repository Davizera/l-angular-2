import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user!: string;
  public password!: string;
  public unauthorized = false;

  constructor(
    private _authenticationService: AuthenticationService,
    private _route: Router
  ) {}

  ngOnInit(): void {}
  public login() {
    this._authenticationService.authorize(this.user, this.password).subscribe(
      (success) => {
        this._route.navigate(['animais']);
      },
      (error) => console.log(error)
    );
  }
}
