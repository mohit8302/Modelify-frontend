import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/default',
        pathMatch: 'full'
      },
      {
        path: 'default',
        loadComponent: () => import('./demo/default/default.component').then((c) => c.DefaultComponent)
      },
      {
        path: 'typography',
        loadComponent: () => import('./demo/elements/typography/typography.component')
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/elements/element-color/element-color.component')
      },
      {
        path: 'upload-garments',
        loadComponent: () => import('./demo/elements/upload-garments/upload-garments.component')
      },
      {
        path: 'stored-garments',
        loadComponent: () => import('./demo/elements/stored-garments/stored-garments.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/sample-page/sample-page.component')
      },
      {
        path: 'sample-page/models',
        loadComponent: () => import('./demo/elements/models/models.component')
      },
      {
        path: 'result-label',
        loadComponent: () => import('./demo/elements/result-label/result-label.component')
      },
      {
        path: 'generate',
        loadComponent: () => import('./demo/elements/generate/generate.component')
      },
      {
        path: 'stored-images',
        loadComponent: () => import('./demo/elements/stored-images/stored-images.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'guest',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
