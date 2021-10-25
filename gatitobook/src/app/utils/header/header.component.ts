import { Component, OnInit } from '@angular/core';
import { UserService } from '../../authentication/user/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/authentication/user/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user$!: Observable<User>;

  constructor(private _userService: UserService, private _route: Router) {
    this.user$ = this._userService.getUser();
  }

  logout() {
    this._userService.logout();
    this._route.navigate(['/home']);
  }
}
