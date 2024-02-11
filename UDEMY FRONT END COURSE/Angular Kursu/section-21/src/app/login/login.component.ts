import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public userService: UserService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      if (email) {
        this.userService.getUser(email).subscribe((res) => {
          // console.log(res);
          if (res.length == 0) {
            this.snackbar.open(
              'Your email address is incorrect. Please check your email address',
              'Ok'
            );
          } else {
            if (res[0].password == this.loginForm.value.password) {
              this.userService.user = res[0];
              localStorage.setItem('user', JSON.stringify(res[0]));
              this.router.navigateByUrl('/home');
            } else {
              this.snackbar.open(
                'Your email password is incorrect. Please check your email password',
                'Ok'
              );
            }
          }
        });
      } else {
        console.error('Email is null or undefined');
      }
    } else {
      console.error('Form is invalid');
    }
  }
}
