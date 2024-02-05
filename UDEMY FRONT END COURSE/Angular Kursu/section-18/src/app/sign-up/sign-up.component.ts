import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  Form,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  createUserForm!: FormGroup;

  // createUserForm = new FormGroup({
  //   firstName: new FormControl(null, [Validators.required]),
  //   lastName: new FormControl(null, [Validators.required]),
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, [
  //     Validators.required,
  //     Validators.minLength(8),
  //   ]),
  //   repassword: new FormControl(null, [
  //     Validators.required,
  //     Validators.minLength(8),
  //   ]),
  //   address: new FormControl(null, [Validators.required]),
  // });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        repassword: ['', [Validators.required, Validators.minLength(8)]],
        address: ['', [Validators.required]],
      },
      {
        validator: this.matchinPasswords('password', 'repassword'),
      }
    );
  }

  matchinPasswords(Password: string, ConfirmPassword: string) {
    return (controls: AbstractControl) => {
      if (controls) {
        const Password = controls.get('password')!.value;
        const ConfirmPassword = controls.get('repassword')!.value;
        if (Password !== ConfirmPassword) {
          controls.get('repassword')?.setErrors({ not_set_same: true });
          return { mismatchedPassword: true };
        }
      }
      return null;
    };
  }
}
