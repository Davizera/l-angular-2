import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './interfaces/new-user';
import { NewUserService } from './services/new-user.service';
import { ValidateEmail } from './validators/email.validator';

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
    private _newUserService: NewUserService
  ) {}

  ngOnInit(): void {
    this.newUserForm = this._formBuilder.group({
      fullName: [''],
      email: [
        '',
        [Validators.required, Validators.email],
        [ValidateEmail(this._newUserService)],
      ],
      userName: [''],
      password: [''],
    });
  }

  signUp() {
    const rawValues = this.newUserForm.getRawValue() as NewUser;
    console.log(rawValues);
  }
}
