import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SalesComponent } from './pages/sales/sales.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AsideComponent } from './aside/aside.component';
import { ArianeComponent } from './ariane/ariane.component';
import { ConnectedComponent } from './auth/connected/connected.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ManifestComponent } from './pages/manifest/manifest.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SalesComponent,
    MessagesComponent,
    LoginComponent,
    RegisterComponent,
    AsideComponent,
    ArianeComponent,
    ConnectedComponent,
    ContactComponent,
    OrdersComponent,
    ManifestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
