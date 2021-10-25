import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NewUser } from './interfaces/new-user';
import { NewUserService } from './services/new-user.service';
import { ValidateEmail } from './validators/email.validator';
import { ValidateGroup } from './validators/form.validator';
import { ValidateUserName } from './validators/username.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;
  newUser!: NewUser;

  constructor(
    private _formBuilder: FormBuilder,
    private _newUserService: NewUserService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.newUserForm = this._formBuilder.group(
      {
        fullName: ['', [Validators.required]],
        email: [
          '',
          [Validators.required, Validators.email],
          [ValidateEmail(this._newUserService)],
        ],
        userName: [
          '',
          [Validators.required],
          [ValidateUserName(this._newUserService)],
        ],
        password: ['', [Validators.required]],
      },
      { validators: [ValidateGroup] }
    );
  }

  signUp() {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser;
      this._newUserService.singUp(newUser).subscribe(
        (success) => this._router.navigate(['animais']),
        (error) => console.log(error)
      );
    } else {
      this.newUserForm.setErrors({
        someValidationsFailed: true,
      });
    }
  }
}
