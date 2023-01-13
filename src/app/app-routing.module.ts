import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ManifestComponent } from './pages/manifest/manifest.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { SalesComponent } from './pages/sales/sales.component';

const routes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'login', component:  LoginComponent },
  { path: 'register', component:  RegisterComponent },
  { path: 'sales', component:  SalesComponent },
  { path: 'messages', component:  MessagesComponent },
  { path: 'orders', component:  OrdersComponent },
  { path: 'contact', component:  ContactComponent },
  { path: 'manifest', component:  ManifestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
