import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginI } from '../models/auth';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  constructor ( private http: HttpClient ) { }

  /**
   * Sends a post request to the api with the data of the user to log in.
   * @param data 
   * @returns 
   */
  login( data: LoginI ): Observable<LoginI> {
    return this.http.post<LoginI>( `${ environment.api }/api/login`, data );
  }
}
