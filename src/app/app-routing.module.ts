import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'page1',
    loadChildren: () =>
      import('./page1/page1.module').then((m) => m.Page1Module),
  },
  {
    path: 'page2/:id',
    component: Page2Component,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [{ path: ':id', component: Page3Component }],
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: { message: 'Some text' },
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
