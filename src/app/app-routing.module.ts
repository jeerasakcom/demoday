import { AddCustomersComponent } from './components/add-customers/add-customers.component';
import { ListsProductsComponent } from './components/lists-products/lists-products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { StockComponent } from './pages/backend/stock/stock.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { HomeComponent } from './pages/frontend/home/home.component';
import { AboutComponent } from './pages/frontend/about/about.component';
import { PaymentComponent } from './pages/frontend/payment/payment.component';
import { ContactComponent } from './pages/frontend/contact/contact.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { ProductComponent } from './pages/frontend/product/product.component';
import { InformationComponent } from './pages/frontend/information/information.component';
import { ReportComponent } from './pages/backend/report/report.component';

const routes: Routes = [
  // Route สำหรับเรียกหน้า Frontend Layout
  {
    path: '',
    component: FrontendLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'info',
        component: InformationComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'payment',
        component: PaymentComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'register',
        component: AddCustomersComponent,
      }
    ]
  },
  // Route สำหรับเรียกหน้า Backend Layout
  {
    path: 'backend',
    component: BackendLayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "stock",
        component: StockComponent,
        children: [
          {
            path: "", redirectTo: 'stock', pathMatch: 'full'
          },
          {
            path: "add",
            component: AddProductsComponent,
          },
          {
            path: "list",
            component: ListProductsComponent,
          },
          {
            path: "lists",
            component: ListsProductsComponent,
          },

        ],
      },
      {
        path: "report",
        component: ReportComponent,
      },
    ]
  },
  // Route สำหรับเรียกหน้า Login/Register Layout
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      {
        path: "",
        component: LoginComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
