import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about';
import { PageNotFoundComponent } from './components/page-not-found';
import { Ad160x600Component } from './components/ad160x600';
import { RegionComponent } from './components/region/region.component';
import { CityComponent } from './components/city/city.component';
import { PlaceShortCardComponent } from './components/place-short-card/place-short-card.component';
import { PlaceComponent } from './components/place/place.component';
import { PlaceFormComponent } from './components/place-form/place-form.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    Ad160x600Component,
    RegionComponent,
    CityComponent,
    PlaceShortCardComponent,
    PlaceComponent,
    PlaceFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
