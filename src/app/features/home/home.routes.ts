import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page').then((m) => m.HomePageComponent),
  },
];

export default routes;
