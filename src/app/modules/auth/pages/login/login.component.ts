import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
} )
export class LoginComponent implements OnInit, OnDestroy {

  constructor ( private fb: FormBuilder, private authService: AuthService, private router: Router, public spinnerService: SpinnerService ) { }

  subscription: Subscription = new Subscription();

  loginForm: FormGroup = new FormGroup( {} );

  errorMessage: string = '';

  ngOnInit(): void {
    this.loginForm = this.fb.group( {
      email: [ '', [ Validators.required, Validators.pattern( "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" ) ] ],
      password: [ '', Validators.required ]
    } )
  }

  /**
   * Sends to the api the user data entered in the form.
   */
  onSubmit() {
    this.subscription.add(
      this.authService.login( this.loginForm.value ).subscribe( {
        next: ( resp ) => {
          sessionStorage.setItem( '_token', resp.token );
          this.router.navigate( [ '/home' ] );
        },
        error: ( msg ) => {
          this.errorMessage = msg.error.error;
        }
      } )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
