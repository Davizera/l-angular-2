import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { NewUserService } from '../services/new-user.service';

export function ValidateEmail(newUserService: NewUserService) {
  return (control: AbstractControl) => {
    return control.valueChanges.pipe(
      switchMap((email) => newUserService.isEmailUnique(email)),
      map((emailExists) => (!!emailExists ? { emailExists: true } : null)),
      first()
    );
  };
}
