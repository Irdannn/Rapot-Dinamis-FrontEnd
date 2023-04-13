import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupsComponent } from './components/signups/signups.component';
import { AuthGuard } from './guards/auth.guard';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DaftarSiswaComponent } from './components/daftar-siswa/daftar-siswa.component';
import { DaftarWaliComponent } from './components/daftar-wali/daftar-wali.component';
import { InputNilaiComponent } from './components/input-nilai/input-nilai.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signups', component: SignupsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'daftarsiswa', component:  DaftarSiswaComponent},
  {path: 'daftarwali', component: DaftarWaliComponent},
  {path: 'inputnilai', component: InputNilaiComponent},
  {path: 'tutorial', component:  TutorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
