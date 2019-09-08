import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authService/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/tokenService/token.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  errorMsg: string;
  spinner: boolean = false;
  constructor(
    private authService: AuthService,
    private tokenservice: TokenService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  signUp() {
    // console.log(this.signupForm);
    this.authService.registerUser(this.signupForm.value).subscribe(
      val => {
        this.spinner = true;
        this.signupForm.reset();
        this.tokenservice.setToken(val.token);
        setTimeout(() => {
          this.spinner = false;
          this.router.navigate(['streams']);
        }, 2000);
      },
      (err: HttpErrorResponse) => {
        this.spinner = false;
        if (Array.isArray(err.error.message)) {
          this.errorMsg = err.error.message[0].message;
        } else {
          this.errorMsg = err.error.message;
        }
      }
    );
  }

  get email() {
    return this.signupForm.get('email');
  }

  get username() {
    return this.signupForm.get('username');
  }

  get password() {
    return this.signupForm.get('password');
  }

  requiredUsername(): boolean {
    return this.username.hasError('required') && this.username.touched;
  }

  emailNotValid(): boolean {
    return this.email.hasError('email') && this.email.touched;
  }

  requiredEmail(): boolean {
    return this.email.hasError('required') && this.email.touched;
  }

  requiredPassword(): boolean {
    return this.password.hasError('required') && this.password.touched;
  }
}
