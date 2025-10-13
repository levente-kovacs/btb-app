import { Routes } from '@angular/router';
import { AgeOfEarthComponent } from './page/age-of-earth/age-of-earth.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'age-of-earth' },
  {
    path: 'age-of-earth',
    component: AgeOfEarthComponent
  },
  {
    path: '**',
    component: AgeOfEarthComponent
  },
];
