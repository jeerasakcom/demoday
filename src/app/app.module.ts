import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

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
import { ProductComponent } from './pages/frontend/product/product.component';
import { InformationComponent } from './pages/frontend/information/information.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { DetailsProductsComponent } from './components/details-products/details-products.component';
import { ListsProductsComponent } from './components/lists-products/lists-products.component';
import { AddCustomersComponent } from './components/add-customers/add-customers.component';

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
    ProductComponent,
    InformationComponent,
    AddProductsComponent,
    ListProductsComponent,
    DetailsProductsComponent,
    ListsProductsComponent,
    AddCustomersComponent,

  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // for firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
