import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: '**',
        redirectTo: '/404'
      }
    ]
  }
]

@NgModule( {
  imports: [
    RouterModule.forChild( routes )
  ]
} )
export class AuthRoutingModule { }
