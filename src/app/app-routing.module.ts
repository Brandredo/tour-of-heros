import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heros/heros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthServiceService } from './auth-service.service';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent,
    canActivate: [AuthServiceService],
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
