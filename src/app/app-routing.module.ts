import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/administrative-units/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: '403',
    loadChildren: () =>
      import('./components/no-permission/no-permission.module').then((m) => m.NoPermissionModule),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./components/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: '**',
    redirectTo: '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
