import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/authService/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/tokenService/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public errorMsg;
  public spinner: boolean = false;
  loginForm: FormGroup;
  constructor(
    private authservice: AuthService,
    private fb: FormBuilder,
    private tokenservice: TokenService,
    private route: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  submitLogin() {
    this.spinner = true;
    this.authservice.loginUser(this.loginForm.value).subscribe(
      val => {
        this.tokenservice.setToken(val['token']);
        setTimeout(() => {
          this.spinner = false;
          this.route.navigate(['streams']);
        }, 2000);
      },
      (err: HttpErrorResponse) => {
        this.errorMsg = err.error.message;
        this.spinner = false;
        setTimeout(() => {
          this.errorMsg = '';
        }, 2000);
      }
    );
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  emailRequired(): boolean {
    return this.email.hasError('required') && this.email.touched;
  }

  passwordRequired(): boolean {
    return this.password.hasError('required') && this.password.touched;
  }
}
