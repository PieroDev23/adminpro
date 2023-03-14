import { PagesComponent } from './pages/pages.component';
import { ChartComponent } from './pages/chart/chart.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgressComponent } from './pages/progress/progress.component';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'progress',
        component: ProgressComponent,
      },
      {
        path: 'charts',
        component: ChartComponent,
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    component: NotpagefoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
