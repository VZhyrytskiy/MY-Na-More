import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about';
import { PageNotFoundComponent } from './components/page-not-found';
import { RegionComponent } from './components/region';
import { CityComponent } from './components/city';
import { PlaceComponent } from './components/place';
import { PlaceFormComponent } from './components/place-form';

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
    path: 'add',
    component: PlaceFormComponent
  },
  {
    path: ':region',
    component: RegionComponent
  },
   {
    path: ':region/:city',
    component: CityComponent
  },
  {
    path: ':region/:city/:place',
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

