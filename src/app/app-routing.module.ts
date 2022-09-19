import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './core/guards/home.guard';
import { LoginGuard } from './core/guards/login.guard';

import { NotFoundComponent } from './modules/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import( './modules/auth/auth.module' ).then( m => m.AuthModule ),
    canActivate: [ LoginGuard ]
  },
  {
    path: 'home',
    loadChildren: () => import( './modules/home/home.module' ).then( m => m.HomeModule ),
    canActivate: [ HomeGuard ]
  },
  {
    path: '404',
    component: NotFoundComponent
  }, {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
