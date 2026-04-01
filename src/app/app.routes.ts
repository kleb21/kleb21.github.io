import { Routes } from '@angular/router';
import { ShellComponent } from './core/layout/shell';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/home/home.routes'),
      },
      {
        path: 'projects',
        loadChildren: () => import('./features/projects/projects.routes'),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
