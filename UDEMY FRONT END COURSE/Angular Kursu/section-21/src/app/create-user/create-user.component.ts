import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  constructor(
    private createFormBuilder: FormBuilder,
    public userService: UserService
  ) {}

  ngOnInit(): void {}

  createUserForm = this.createFormBuilder.group({
    username: ['', [Validators.required, Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  get f(): { [key: string]: AbstractControl } {
    return this.createUserForm.controls;
  }

  createAccunt() {
    this.userService
      .createAccount(this.createUserForm.value)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
