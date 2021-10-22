import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { NewUserService } from '../services/new-user.service';

export function ValidateUserName(newUserService: NewUserService) {
  return (control: AbstractControl) => {
    return control.valueChanges.pipe(
      switchMap((userName) => newUserService.isUsernameUnique(userName)),
      map((userExists) => (!!userExists ? { userExists: true } : null)),
      first()
    );
  };
}
