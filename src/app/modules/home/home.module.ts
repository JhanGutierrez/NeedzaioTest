import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { ArrowInputModule } from 'src/app/shared/components/arrow-input/arrow-input.module';
import { SmallCardModule } from 'src/app/shared/components/small-card/small-card.module';
import { CardSliderModule } from 'src/app/shared/components/card-slider/card-slider.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

@NgModule( {
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    ArrowInputModule,
    SmallCardModule,
    CardSliderModule,
    NavbarModule
  ]
} )
export class HomeModule { }
