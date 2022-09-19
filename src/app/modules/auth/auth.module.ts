import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { LoginComponent } from './pages/login/login.component';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';
import { RouterLink } from '@angular/router';

@NgModule( {
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LogoModule,
    ButtonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SpinnerModule,
    RouterLink
  ]
} )
export class AuthModule { }
