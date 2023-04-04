import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponents } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupsComponent } from './components/signups/signups.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signups', component: SignupsComponent},
  // {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  // {path: 'header', component: SidebarComponents, canActivate:[AuthGuard]},
  // {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]}
  {path: 'dashboard', component: DashboardComponent},
  //{path: 'header', component: SidebarComponents},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
