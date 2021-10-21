import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewUser } from './interfaces/new-user';
import { NewUserService } from './services/new-user.service';

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
      userName: [''],
      fullName: [''],
      email: [''],
      password: [''],
    });
  }

  signUp() {
    const rawValues = this.newUserForm.getRawValue();
    console.log(rawValues);
  }
}
