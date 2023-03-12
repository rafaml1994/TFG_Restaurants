import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/home/cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetallesComponent } from './components/detalles/detalles.component';
import { SearchComponent } from './components/search/search.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* Estilos Ngprime */
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import {  InputTextModule} from 'primeng/inputtext'



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CardsComponent,
    DetallesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    RippleModule,
    InputTextModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
