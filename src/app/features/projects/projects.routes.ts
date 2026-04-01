import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/project-list-page').then((m) => m.ProjectListPageComponent),
  },
];

export default routes;
