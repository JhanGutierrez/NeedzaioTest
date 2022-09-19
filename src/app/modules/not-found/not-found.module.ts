import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { RouterModule } from '@angular/router';

@NgModule( {
  declarations: [ NotFoundComponent ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule
  ],
  exports: [ NotFoundComponent ]
} )
export class NotFoundModule { }
