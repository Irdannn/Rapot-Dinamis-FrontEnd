import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupsComponent } from './components/signups/signups.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgToastModule  } from 'ng-angular-popup';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SidebarComponents } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PembayaranComponent } from './components/pembayaran/pembayaran.component';
import { RapotComponent } from './components/rapot/rapot.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupsComponent,
    DashboardComponent,
    SidebarComponents,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    PembayaranComponent,
    RapotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
