import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/frontend/home/home.component';
import { AboutComponent } from './pages/frontend/about/about.component';
import { ContactComponent } from './pages/frontend/contact/contact.component';
import { PaymentComponent } from './pages/frontend/payment/payment.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { ReportComponent } from './pages/backend/report/report.component';
import { StockComponent } from './pages/backend/stock/stock.component';
import { UsersComponent } from './pages/backend/users/users.component';
import { SettingComponent } from './pages/backend/setting/setting.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterFrontendComponent } from './shared/frontend/footer-frontend/footer-frontend.component';
import { HeaderFrontendComponent } from './shared/frontend/header-frontend/header-frontend.component';
import { HeaderBackendComponent } from './shared/backend/header-backend/header-backend.component';
import { FooterBackendComponent } from './shared/backend/footer-backend/footer-backend.component';
import { SidebarComponent } from './shared/backend/sidebar/sidebar.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PaymentComponent,
    DashboardComponent,
    ReportComponent,
    StockComponent,
    UsersComponent,
    SettingComponent,
    LoginComponent,
    FooterFrontendComponent,
    HeaderFrontendComponent,
    HeaderBackendComponent,
    FooterBackendComponent,
    SidebarComponent,
    BackendLayoutComponent,
    FrontendLayoutComponent,
    LoginLayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
