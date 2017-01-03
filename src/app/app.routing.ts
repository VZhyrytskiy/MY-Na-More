import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about';
import { PageNotFoundComponent } from './components/page-not-found';
import { OblastComponent } from './components/oblast';
import { CityComponent } from './components/city';
import { PlaceComponent } from './components/place';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: ':oblast/oblast',
    component: OblastComponent
  },
   {
    path: ':oblast/oblast/:city',
    component: CityComponent
  },
  {
    path: ':oblast/oblast/:city/:place',
    component: PlaceComponent
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PageNotFoundComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

