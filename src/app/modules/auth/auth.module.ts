import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthTabsComponent } from 'src/app/components/auth-tabs/auth-tabs.component';
import { LoginComponent } from '../../components/login/login.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';
import { AuthService } from 'src/app/services/authService/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthTabsComponent, LoginComponent, SignUpComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [AuthTabsComponent, LoginComponent, SignUpComponent],
  providers: [AuthService]
})
export class AuthModule {}
