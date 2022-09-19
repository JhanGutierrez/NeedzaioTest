import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSliderComponent } from './card-slider.component';
import { ArrowButtonModule } from '../arrow-button/arrow-button.module';

@NgModule( {
  declarations: [ CardSliderComponent ],
  imports: [
    CommonModule,
    ArrowButtonModule
  ],
  exports: [ CardSliderComponent ],
} )
export class CardSliderModule { }
