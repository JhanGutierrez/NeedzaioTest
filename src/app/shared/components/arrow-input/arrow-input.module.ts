import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowInputComponent } from './arrow-input.component';
import { ArrowButtonModule } from '../arrow-button/arrow-button.module';



@NgModule( {
  declarations: [ ArrowInputComponent ],
  imports: [
    CommonModule,
    ArrowButtonModule
  ], exports: [ ArrowInputComponent ]
} )
export class ArrowInputModule { }
