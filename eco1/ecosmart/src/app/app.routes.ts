import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Calculator } from './calculator/calculator';
import { Dashboard } from './dashboard/dashboard';
import { Pollution } from './pollution/pollution';
import { Map } from './map/map';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'calculator', component: Calculator },
  { path: 'dashboard', component: Dashboard },
  { path: 'pollution', component: Pollution },
  { path: 'map', component: Map }
];