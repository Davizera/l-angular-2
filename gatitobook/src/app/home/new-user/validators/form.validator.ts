import { FormGroup } from '@angular/forms';

export function ValidateGroup(form: FormGroup) {
  const userName = form.get('userName')?.value;
  const password = form.get('password')?.value;

  if (userName.trim() + password.trim())
    return userName == password ? { userNameAndPasswordAreEqual: true } : null;
  else return null;
}
