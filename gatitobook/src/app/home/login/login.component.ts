import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user!: string;
  public password!: string;
  public loginForm!: FormGroup;

  constructor(
    private _authenticationService: AuthenticationService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormBuilder().group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public login() {
    this._authenticationService.authorize(this.user, this.password).subscribe(
      (success) => {
        this._route.navigate(['animais']);
      },
      (error) => this.loginForm.setErrors({ unauthorized: true })
    );
  }
}
