import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupsComponent } from './components/signups/signups.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgToastModule  } from 'ng-angular-popup';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PembayaranComponent } from './components/pembayaran/pembayaran.component';
import { RapotComponent } from './components/rapot/rapot.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatMenuModule} from '@angular/material/menu';
import { DaftarSiswaComponent } from './components/daftar-siswa/daftar-siswa.component';
import { DaftarWaliComponent } from './components/daftar-wali/daftar-wali.component';
import { InputNilaiComponent } from './components/input-nilai/input-nilai.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupsComponent,
    DashboardComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    PembayaranComponent,
    RapotComponent,
    SidenavComponent,
    DaftarSiswaComponent,
    DaftarWaliComponent,
    InputNilaiComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    JwtModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
