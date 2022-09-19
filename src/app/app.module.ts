import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataInterceptor } from './core/interceptors/data.interceptor';
import { NotFoundModule } from './modules/not-found/not-found.module';

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NotFoundModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: DataInterceptor,
    multi: true
  } ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
